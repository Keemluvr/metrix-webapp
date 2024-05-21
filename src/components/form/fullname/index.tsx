"use client";

import { Input } from "@nextui-org/react";
import { classNames } from "./styles";
import { useTranslations } from "next-intl";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { identifyColorForTheState } from "../util";
import User from "@/components/svg/user";

type FullNameProps<T extends FieldValues> = {
  control: Control<T>;
  label?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
};

const FullName = <T extends FieldValues>({
  control,
  label = "full-name",
  isRequired = true,
  isDisabled = false
}: FullNameProps<T>) => {
  const t = useTranslations("Form");

  const rules = {
    required: {
      value: isRequired,
      message: t("field-is-required", { field: t("full-name") })
    }
  };

  return (
    <Controller
      name={"name" as Path<T>}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <Input
          classNames={classNames}
          placeholder={t(label)}
          startContent={<User color={identifyColorForTheState(error)} />}
          isInvalid={!!error}
          isDisabled={isDisabled}
          errorMessage={error?.message || ""}
          {...field}
        />
      )}
    />
  );
};

export default FullName;
