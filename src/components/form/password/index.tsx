"use client";

import Lock from "@/components/svg/lock";
import { Input } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { classNames } from "./styles";
import { Visibility } from "./visibility";
import { identifyColorForTheState } from "../util";
import useToggle from "@/hooks/useToggle";

type PasswordProps<T extends FieldValues> = {
  control: Control<T>;
  label?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
};

const Password = <T extends FieldValues>({
  control,
  label = "password",
  isRequired = true,
  isDisabled = false
}: PasswordProps<T>) => {
  const t = useTranslations("Form");
  const [isVisible, actions] = useToggle();

  const rules = {
    required: {
      value: isRequired,
      message: t("field-is-required", { field: t("password") })
    }
  };

  return (
    <Controller
      name={"password" as Path<T>}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <Input
          classNames={classNames}
          placeholder={t(label)}
          startContent={<Lock color={identifyColorForTheState(error)} />}
          endContent={<Visibility isVisible={isVisible} toggleVisibility={actions.toggleVisibility} error={error} />}
          type={isVisible ? "text" : "password"}
          isInvalid={!!error}
          isDisabled={isDisabled}
          errorMessage={error?.message || ""}
          {...field}
        />
      )}
    />
  );
};

export default Password;
