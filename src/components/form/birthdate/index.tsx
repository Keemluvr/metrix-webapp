"use client";

import { DatePicker } from "@nextui-org/react";
import { classNames } from "./styles";
import { useTranslations } from "next-intl";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { identifyColorForTheState } from "../util";
import CalendarIcon from "@/components/svg/calendar";
import { getLocalTimeZone, today } from "@internationalized/date";

type BirthdateProps<T extends FieldValues> = {
  control: Control<T>;
  label?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
};

const Birthdate = <T extends FieldValues>({
  control,
  label = "birthdate",
  isRequired = true,
  isDisabled = false
}: BirthdateProps<T>) => {
  const t = useTranslations("Form");

  const rules = {
    required: {
      value: isRequired,
      message: t("field-is-required", { field: t("birthdate") })
    }
  };

  return (
    <Controller
      name={"birthdate" as Path<T>}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <DatePicker
          classNames={classNames}
          label={t(label)}
          isInvalid={!!error}
          isDisabled={isDisabled}
          errorMessage={error?.message || ""}
          showMonthAndYearPickers
          selectorIcon={<CalendarIcon color={identifyColorForTheState(error)} />}
          maxValue={today(getLocalTimeZone())}
          {...field}
        />
      )}
    />
  );
};

export default Birthdate;
