"use client";

import Copyable from "../copyable";
import { Link } from "@nextui-org/react";
import { copyableClassName } from "./styles";
import { GenderEnum } from "@/types/Gender";
import { Actions } from "./types";
import TableActions from "./tableActions";
import GenderChip from "../genderChip";
import { formatCPF } from "@/helpers/formatString";

type TableCellProps<T extends Record<string, unknown>> = {
  item: T;
  columnKey: keyof T;
  actions?: Actions;
};

const TableCell = <T extends Record<string, unknown>>({ item, columnKey, actions }: TableCellProps<T>): JSX.Element => {
  const cellValue = item[columnKey];

  switch (columnKey) {
    case "gender":
      return <GenderChip gender={(cellValue as GenderEnum) || "not-set"} />;
    case "cpf":
      return <Copyable label={formatCPF(cellValue as string)} />;
    case "email":
      return (
        <Copyable
          label={
            <Link href={`mailto:${cellValue}`} underline="hover" className={copyableClassName}>
              {cellValue as string}
            </Link>
          }
        />
      );
    case "actions":
      return <TableActions actions={actions} item={item} />;
    default:
      return <>{cellValue}</>;
  }
};

export default TableCell;
