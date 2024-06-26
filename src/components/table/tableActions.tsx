"use client";

import VerticalDots from "../svg/vertical-dots";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { Actions } from "./types";
import { useTranslations } from "next-intl";
import { tableActionsClassName } from "./styles";
import { useMemo } from "react";

type Action = {
  name: string;
  action: () => void;
};

type TableActionsProps<T extends Record<string, unknown>> = {
  actions?: Actions;
  item: T;
};

const TableActions = <T extends Record<string, unknown>>({ actions, item }: TableActionsProps<T>): JSX.Element => {
  const { onView, onEdit, onDelete } = actions ?? {};
  const t = useTranslations("Actions");

  const availableActions: Action[] = useMemo(() => {
    const actionsArray: Action[] = [];

    if (onView) actionsArray.push({ name: "view", action: () => onView(item?.id as number) });
    if (onEdit) actionsArray.push({ name: "edit", action: () => onEdit(item?.id as number) });
    if (onDelete) actionsArray.push({ name: "delete", action: () => onDelete(item?.id as number) });

    return actionsArray;
  }, [onView, onEdit, onDelete, item?.id]);

  return (
    <div className={tableActionsClassName}>
      <Dropdown>
        <DropdownTrigger>
          <Button isIconOnly size="sm" variant="light">
            <VerticalDots />
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label={t("actions")}>
          {availableActions.map(({ name, action }, index) => (
            <DropdownItem key={index} aria-label={t(name)} onPress={action}>
              {t(name)}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default TableActions;
