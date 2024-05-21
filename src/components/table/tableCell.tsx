"use client";

import Avatar from "../avatar";
import Copyable from "../copyable";
import { useTranslations } from "next-intl";
import { Chip, Link } from "@nextui-org/react";
import { copyableClassName } from "./styles";
import { GenderEnum } from "@/types/Gender";
import { Actions } from "./types";
import TableActions from "./tableActions";
import GenderChip from "../genderChip";

type TableCellProps<T extends Record<string, unknown>> = {
  item: T;
  columnKey: keyof T;
  actions?: Actions;
};

const TableCell = <T extends Record<string, unknown>>({ item, columnKey, actions }: TableCellProps<T>): JSX.Element => {
  const t = useTranslations("Table");

  const cellValue = item[columnKey];

  switch (columnKey) {
    case "name":
      return <Avatar name={cellValue as string} />;
    case "gender":
      return <GenderChip gender={(cellValue as GenderEnum) || "not-set"} />;
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
