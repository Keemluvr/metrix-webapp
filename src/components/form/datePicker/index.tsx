"use client";

import { DatePicker as DatePickerUI } from "@nextui-org/react";
import { classNames } from "./styles";
import { useTranslations } from "next-intl";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { identifyColorForTheState } from "../util";
import CalendarIcon from "@/components/svg/calendar";
import { getLocalTimeZone, today } from "@internationalized/date";

type DatePickerProps<T extends FieldValues> = {
  control: Control<T>;
  label: string;
  field: string;
  isRequired?: boolean;
  isDisabled?: boolean;
};

const DatePicker = <T extends FieldValues>({
  control,
  label,
  field,
  isRequired = true,
  isDisabled = false
}: DatePickerProps<T>) => {
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
        <DatePickerUI
          classNames={classNames}
          label={t(label)}
          isInvalid={!!error}
          isDisabled={isDisabled}
          errorMessage={error?.message || ""}
          showMonthAndYearPickers
          hideTimeZone
          granularity="day"
          selectorIcon={<CalendarIcon color={identifyColorForTheState(error)} />}
          maxValue={today(getLocalTimeZone())}
          {...field}
        />
      )}
    />
  );
};

export default DatePicker;
