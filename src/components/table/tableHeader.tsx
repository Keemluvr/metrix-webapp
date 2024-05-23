"use client";

import { Button, Input } from "@nextui-org/react";
import { Dispatch, SetStateAction, useCallback } from "react";
import { useTranslations } from "next-intl";
import { tableHeaderClassName as className } from "./styles";
import Search from "../svg/search";
import Plus from "../svg/plus";

type TableHeaderProps = {
  setPage: Dispatch<SetStateAction<number>>;
  // Filter
  filterValue: string;
  setFilterValue: Dispatch<SetStateAction<string>>;
  // Add
  onAddNew: () => void;
};

const TableHeader = ({ filterValue, setFilterValue, setPage, onAddNew }: TableHeaderProps) => {
  const t = useTranslations("Actions");

  const onSearchChange = useCallback(
    (value?: string) => {
      if (value) {
        setFilterValue(value);
        setPage(1);
      } else setFilterValue("");
    },
    [setFilterValue, setPage]
  );

  const onClear = useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, [setFilterValue, setPage]);

  return (
    <div className={className.wrapper}>
      <Input
        isClearable
        className={className.search}
        placeholder={t("search")}
        color="primary"
        variant="bordered"
        startContent={<Search />}
        value={filterValue}
        onClear={() => onClear()}
        onValueChange={onSearchChange}
      />

      <Button color="primary" startContent={<Plus />} onPress={onAddNew}>
        {t("add-a-new-user")}
      </Button>
    </div>
  );
};

export default TableHeader;
