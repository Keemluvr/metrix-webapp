"use client";

import { Select, SelectItem } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { classNames } from "./styles";
import { GENDERS } from "@/constants/gender";

type GenderProps<T extends FieldValues> = {
  control: Control<T>;
  label?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
};

export function Gender<T extends FieldValues>({
  control,
  label = "gender",
  isRequired = true,
  isDisabled = false
}: GenderProps<T>) {
  const t = useTranslations("Form");
  const tGender = useTranslations("Gender");

  const rules = {
    required: {
      value: isRequired,
      message: t("field-is-required", { field: t("gender") })
    }
  };

  return (
    <Controller
      name={"gender" as Path<T>}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <Select
          classNames={classNames}
          size="sm"
          label={t(label)}
          isInvalid={!!error}
          isDisabled={isDisabled}
          errorMessage={error?.message || ""}
          defaultSelectedKeys={[field.value]}
          {...field}
        >
          {GENDERS.map((gender) => (
            <SelectItem key={gender} value={gender}>
              {tGender(gender)}
            </SelectItem>
          ))}
        </Select>
      )}
    />
  );
}
