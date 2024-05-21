import React from "react";
import { Skeleton } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { viewClassName as className } from "../styles";
import { Address } from "@/types/Address";
import NotSetField from "./notSetField";
import { sanitizeCEP } from "@/helpers/sanitize";

interface AddressViewProps {
  address: Address | undefined;
  isLoaded: boolean;
}

const AddressView = ({ address, isLoaded }: AddressViewProps) => {
  const t = useTranslations("Form");

  return (
    <div className={className.sectionWrapper}>
      <Skeleton className={className.skeleton} isLoaded={isLoaded}>
        <div className={className.row}>
          <p className={className.label}>{t("cep")}:</p>
          {address?.cep ? sanitizeCEP(address.cep) : <NotSetField />}
        </div>
      </Skeleton>
      <Skeleton className={className.skeleton} isLoaded={isLoaded}>
        <div className={className.row}>
          <p className={className.label}>{t("street")}:</p>
          {address?.street || <NotSetField />}
        </div>
      </Skeleton>
      <Skeleton className={className.skeleton} isLoaded={isLoaded}>
        <div className={className.row}>
          <p className={className.label}>{t("number")}:</p>
          {address?.number || <NotSetField />}
        </div>
      </Skeleton>
      <Skeleton className={className.skeleton} isLoaded={isLoaded}>
        <div className={className.row}>
          <p className={className.label}>{t("neighborhood")}:</p>
          {address?.neighborhood || <NotSetField />}
        </div>
      </Skeleton>
      <Skeleton className={className.skeleton} isLoaded={isLoaded}>
        <div className={className.row}>
          <p className={className.label}>{t("city")}:</p>
          {address?.city || <NotSetField />}
        </div>
      </Skeleton>
      <Skeleton className={className.skeleton} isLoaded={isLoaded}>
        <div className={className.row}>
          <p className={className.label}>{t("state")}:</p>
          {address?.state || <NotSetField />}
        </div>
      </Skeleton>
    </div>
  );
};

export default AddressView;
