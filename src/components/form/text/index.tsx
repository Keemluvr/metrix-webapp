"use client";

import { Input } from "@nextui-org/react";
import { classNames } from "./styles";
import { useTranslations } from "next-intl";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

type TextProps<T extends FieldValues> = {
  control: Control<T>;
  label: string;
  field: string;
  isRequired?: boolean;
  isDisabled?: boolean;
};

const Text = <T extends FieldValues>({
  control,
  label,
  field,
  isRequired = true,
  isDisabled = false
}: TextProps<T>) => {
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
        <Input
          classNames={classNames}
          placeholder={t(label)}
          isInvalid={!!error}
          isDisabled={isDisabled}
          errorMessage={error?.message || ""}
          {...field}
        />
      )}
    />
  );
};

export default Text;
