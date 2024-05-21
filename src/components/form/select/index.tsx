"use client";

import { Select as SelectUI, SelectItem } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { classNames } from "./styles";

type SelectProps<T extends FieldValues> = {
  control: Control<T>;
  label: string;
  field: string;
  items: string[];
  withIntl?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
};

const Select = <T extends FieldValues>({
  control,
  label,
  field,
  items,
  withIntl,
  isRequired = true,
  isDisabled = false
}: SelectProps<T>) => {
  const t = useTranslations("Form");

  const rules = {
    required: {
      value: isRequired,
      message: t("field-is-required", { field: t(label) })
    }
  };

  return (
    <Controller
      name={field as Path<T>}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <SelectUI
          classNames={classNames}
          size="sm"
          label={t(label)}
          isInvalid={!!error}
          isDisabled={isDisabled}
          errorMessage={error?.message || ""}
          defaultSelectedKeys={[field.value]}
          {...field}
        >
          {items.map((value) => (
            <SelectItem key={value} value={value}>
              {withIntl ? t(value) : value}
            </SelectItem>
          ))}
        </SelectUI>
      )}
    />
  );
};

export default Select;
