"use client";

import { ComponentPropsWithoutRef, useCallback, useMemo } from "react";
import { useTranslations } from "next-intl";
import { Actions, Columns } from "./types";
import { checkboxClassNames, classNames } from "./styles";
import {
  Table as TableUI,
  TableBody,
  TableCell as TableCellUI,
  TableColumn,
  TableHeader as TableHeaderUI,
  TableRow,
  Spinner
} from "@nextui-org/react";
import TableCell from "./tableCell";

interface TableProps<T> extends Omit<ComponentPropsWithoutRef<typeof TableUI>, "children"> {
  data: T[];
  columns: Columns;
  actions?: Actions;
  isLoading?: boolean;
}

const Table = <T extends Record<string, unknown>>({
  data = [],
  columns,
  actions,
  isLoading = false,
  ...rest
}: TableProps<T>): JSX.Element => {
  const t = useTranslations("Table");

  const classNamesTable = useMemo(() => classNames, []);
  const classNamesCheckbox = useMemo(() => checkboxClassNames, []);

  const renderCell = useCallback(
    (data: T, columnKey: keyof T, actions?: Actions): JSX.Element => (
      <TableCell item={data} columnKey={columnKey} actions={actions} />
    ),
    []
  );

  return (
    <TableUI
      classNames={classNamesTable}
      aria-label={t("table")}
      topContentPlacement="inside"
      checkboxesProps={{
        color: "primary",
        size: "lg",
        classNames: classNamesCheckbox
      }}
      {...rest}
    >
      <TableHeaderUI columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align="start" allowsSorting={column.sortable}>
            {t(column.name)}
          </TableColumn>
        )}
      </TableHeaderUI>
      <TableBody items={data} isLoading={isLoading} loadingContent={<Spinner />}>
        {(item) => (
          <TableRow key={item?.id as string}>
            {(columnKey) => (
              <TableCellUI key={columnKey}>{renderCell(item, columnKey as keyof T, actions)}</TableCellUI>
            )}
          </TableRow>
        )}
      </TableBody>
    </TableUI>
  );
};

export default Table;
