import { Search } from "@/components/table/types";
import { orderByKey } from "@/helpers/order";
import { SortDescriptor } from "@nextui-org/react";
import { Dispatch, SetStateAction, useMemo, useState } from "react";

interface useTableProps<T> {
  data: T[];
  search?: Search<T>;
  sort?: SortDescriptor;
}

type useTableActions = {
  setSortDescriptor: Dispatch<SetStateAction<SortDescriptor>>;
  setFilterValue: Dispatch<SetStateAction<string>>;
  setPage: Dispatch<SetStateAction<number>>;
};

type useTableValues = {
  filterValue: string;
  sortDescriptor: SortDescriptor;
  page: number;
  rowsPerPage: number;
  pageLength: number;
};

type useTableReturn<T> = [T[], useTableActions, useTableValues];

function useTable<T>({ data, search, sort }: useTableProps<T>): useTableReturn<T> {
  const [rowsPerPage] = useState<number>(5);
  const [page, setPage] = useState<number>(1);
  const [pageLength, setPageLength] = useState<number>(0);
  const [filterValue, setFilterValue] = useState<string>("");
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>(
    sort || { column: "name", direction: "ascending" }
  );

  const hasSearchFilter = Boolean(filterValue);

  const filteredItems: T[] = useMemo(() => {
    let filteredItems: T[] = [...data];

    if (hasSearchFilter)
      filteredItems = filteredItems.filter((item) => {
        const key = item[(search?.mainField as keyof T) ?? "name"];
        const field = String(key).toLowerCase();
        return field.includes(filterValue.toLowerCase());
      });

    return filteredItems;
  }, [data, filterValue, hasSearchFilter, search?.mainField]);

  const items: T[] = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    if (filteredItems.length) {
      setPageLength(Math.ceil(filteredItems.length / rowsPerPage));
    }
    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems: T[] = useMemo(
    () => orderByKey<T>(items, sortDescriptor.column as keyof T, sortDescriptor.direction),
    [items, sortDescriptor]
  );

  const actions: useTableActions = {
    setSortDescriptor,
    setFilterValue,
    setPage
  };

  const values: useTableValues = {
    filterValue,
    sortDescriptor,
    page,
    rowsPerPage,
    pageLength
  };

  return [sortedItems, actions, values];
}

export default useTable;
