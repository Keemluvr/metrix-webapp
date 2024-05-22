import React from "react";
import { Control } from "react-hook-form";
import { useTranslations } from "next-intl";
import { User } from "@/types/User";
import { BLOOD_TYPES } from "@/constants/bloodType";
import { STATES } from "@/constants/state";
import Email from "@/components/form/email";
import FullName from "@/components/form/fullname";
import Birthdate from "@/components/form/birthdate";
import Number from "@/components/form/number";
import Gender from "@/components/form/gender";
import Select from "@/components/form/select";
import Text from "@/components/form/text";
import Password from "@/components/form/password";
import { USER_ZODIAC_SIGNS } from "@/constants/zodiacSign";
import { formatCPF, formatPhone } from "@/helpers/formatString";

interface FormProps {
  control: Control<User.Profile>;
  isLoading: boolean;
}

const Form = ({ control, isLoading }: FormProps) => {
  const t = useTranslations("Form");

  return (
    <>
      <FullName control={control} isDisabled={isLoading} />
      <Number
        control={control}
        isDisabled={isLoading}
        label="cpf"
        field="cpf"
        maxLength={14}
        format={(cpf) => formatCPF(cpf)}
      />
      <Number control={control} isDisabled={isLoading} label="rg" field="rg" />
      <Birthdate control={control} isDisabled={isLoading} />
      <Gender control={control} isDisabled={isLoading} />
      <Select
        withIntl
        control={control}
        isDisabled={isLoading}
        label="zodiac-sign"
        field="zodiacSign"
        items={USER_ZODIAC_SIGNS}
      />
      <Password control={control} isDisabled={isLoading} />

      <h3>{t("contact")}</h3>
      <Email control={control} isDisabled={isLoading} />
      <Number
        control={control}
        isDisabled={isLoading}
        label="phone"
        field="phone"
        maxLength={14}
        format={(phone) => formatPhone(phone)}
      />
      <Number
        control={control}
        isDisabled={isLoading}
        label="cellphone"
        field="cellphone"
        maxLength={14}
        format={(cellphone) => formatPhone(cellphone)}
      />

      <h3>{t("physical")}</h3>
      <Number control={control} isDisabled={isLoading} label="height" field="physical.height" />
      <Number control={control} isDisabled={isLoading} label="weight" field="physical.weight" />
      <Select
        control={control}
        isDisabled={isLoading}
        label="blood-type"
        field="physical.bloodType"
        items={BLOOD_TYPES}
      />

      <h3>{t("address")}</h3>
      <Number
        control={control}
        isDisabled={isLoading}
        label="cep"
        field="address.cep"
        maxLength={9}
        format={(cep) => sanitizeCEP(cep)}
      />
      <Text control={control} isDisabled={isLoading} label="street" field="address.street" />
      <Number control={control} isDisabled={isLoading} label="number" field="address.number" />
      <Text control={control} isDisabled={isLoading} label="neighborhood" field="address.neighborhood" />
      <Text control={control} isDisabled={isLoading} label="city" field="address.city" />
      <Select control={control} isDisabled={isLoading} label="state" field="address.state" items={STATES} />

      <h3>{t("family")}</h3>
      <Text control={control} isDisabled={isLoading} label="mother-name" field="motherName" />
      <Text control={control} isDisabled={isLoading} label="father-name" field="fatherName" />
    </>
  );
};

export default Form;
