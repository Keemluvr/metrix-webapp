"use client";

import EmailIcon from "@/components/svg/email";
import { Input } from "@nextui-org/react";
import { classNames } from "./styles";
import { useTranslations } from "next-intl";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { identifyColorForTheState } from "../util";

type EmailProps<T extends FieldValues> = {
  control: Control<T>;
  label?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
};

const Email = <T extends FieldValues>({
  control,
  label = "email-address",
  isRequired = true,
  isDisabled = false
}: EmailProps<T>) => {
  const t = useTranslations("Form");

  const rules = {
    required: {
      value: isRequired,
      message: t("field-is-required", { field: t("email") })
    }
  };

  return (
    <Controller
      name={"email" as Path<T>}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <Input
          classNames={classNames}
          placeholder={t(label)}
          startContent={<EmailIcon color={identifyColorForTheState(error)} />}
          isInvalid={!!error}
          isDisabled={isDisabled}
          errorMessage={error?.message || ""}
          {...field}
        />
      )}
    />
  );
};

export default Email;
