"use client";

import { Input } from "@nextui-org/react";
import { classNames } from "./styles";
import { useTranslations } from "next-intl";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { useState } from "react";

type NumberProps<T extends FieldValues> = {
  control: Control<T>;
  field: string;
  label: string;
  format?: (value: string) => string;
  maxLength?: number;
  isRequired?: boolean;
  isDisabled?: boolean;
  startContent?: React.ReactNode;
};

const Number = <T extends FieldValues>({
  control,
  field,
  label,
  format,
  maxLength,
  isRequired = true,
  isDisabled = false,
  startContent
}: NumberProps<T>) => {
  const t = useTranslations("Form");
  const [newValue, setNewValue] = useState("");

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
          startContent={startContent}
          isInvalid={!!error}
          isDisabled={isDisabled}
          errorMessage={error?.message || ""}
          maxLength={maxLength}
          type={format ? "text" : "number"}
          {...(format && {
            onValueChange: (value) => {
              setNewValue(format(value));
            },
            value: String(newValue)
          })}
          {...field}
        />
      )}
    />
  );
};

export default Number;
