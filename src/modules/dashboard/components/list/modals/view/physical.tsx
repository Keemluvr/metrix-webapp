import React from "react";
import { Skeleton } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { viewClassName as className } from "../styles";
import { Physical } from "@/types/Physical";
import NotSetField from "./notSetField";

interface PhysicalViewProps {
  physical: Physical | undefined;
  isLoaded: boolean;
}

const PhysicalView = ({ physical, isLoaded }: PhysicalViewProps) => {
  const t = useTranslations("Form");

  return (
    <div className={className.sectionWrapper}>
      <Skeleton className={className.skeleton} isLoaded={isLoaded}>
        <div className={className.row}>
          <p className={className.label}>{t("height")}:</p>
          {physical?.height || <NotSetField />}
        </div>
      </Skeleton>
      <Skeleton className={className.skeleton} isLoaded={isLoaded}>
        <div className={className.row}>
          <p className={className.label}>{t("weight")}:</p>
          {physical?.weight || <NotSetField />}
        </div>
      </Skeleton>
      <Skeleton className={className.skeleton} isLoaded={isLoaded}>
        <div className={className.row}>
          <p className={className.label}>{t("blood-type")}:</p>
          {physical?.bloodType || <NotSetField />}
        </div>
      </Skeleton>
    </div>
  );
};

export default PhysicalView;
