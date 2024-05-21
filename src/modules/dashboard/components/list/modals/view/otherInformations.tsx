import React from "react";
import { Skeleton } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { viewClassName as className } from "../styles";
import { User } from "@/types/User";
import NotSetField from "./notSetField";

interface OtherInformationsViewProps {
  user: User.Profile | undefined;
  isLoaded: boolean;
}

const OtherInformationsView = ({ user, isLoaded }: OtherInformationsViewProps) => {
  const t = useTranslations("Form");

  return (
    <div className={className.sectionWrapper}>
      <Skeleton className={className.skeleton} isLoaded={isLoaded}>
        <div className={className.row}>
          <p className={className.label}>{t("mother-name")}:</p>
          {user?.motherName || <NotSetField />}
        </div>
      </Skeleton>
      <Skeleton className={className.skeleton} isLoaded={isLoaded}>
        <div className={className.row}>
          <p className={className.label}>{t("father-name")}:</p>
          {user?.fatherName || <NotSetField />}
        </div>
      </Skeleton>
    </div>
  );
};

export default OtherInformationsView;
