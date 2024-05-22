import React from "react";
import { Skeleton } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { className } from "./styles";
import { GenderEnum } from "@/types/Gender";
import { User } from "@/types/User";
import { sanitizeCPF } from "@/helpers/sanitize";
import Copyable from "@/components/copyable";
import GenderChip from "@/components/genderChip";
import NotSetField from "./notSetField";

interface UserViewProps {
  user: User.Profile | undefined;
  isLoaded: boolean;
}

const UserView = ({ user, isLoaded }: UserViewProps) => {
  const t = useTranslations("Form");

  return (
    <>
      <Skeleton className={className.skeleton} isLoaded={isLoaded}>
        <div className={className.row}>
          <p className={className.label}>{t("full-name")}:</p>
          {user?.name || <NotSetField />}
        </div>
      </Skeleton>
      <Skeleton className={className.skeleton} isLoaded={isLoaded}>
        <div className={className.row}>
          <p className={className.label}>{t("age")}:</p>
          {user?.age || <NotSetField />}
        </div>
      </Skeleton>
      <Skeleton className={className.skeleton} isLoaded={isLoaded}>
        <div className={className.row}>
          <p className={className.label}>{t("cpf")}:</p>
          <Copyable classNames={className.copyable} label={user?.cpf ? sanitizeCPF(user.cpf) : <NotSetField />} />
        </div>
      </Skeleton>
      <Skeleton className={className.skeleton} isLoaded={isLoaded}>
        <div className={className.row}>
          <p className={className.label}>{t("rg")}:</p>
          <Copyable classNames={className.copyable} label={user?.rg || <NotSetField />} />
        </div>
      </Skeleton>
      <Skeleton className={className.skeleton} isLoaded={isLoaded}>
        <div className={className.row}>
          <p className={className.label}>{t("birthdate")}:</p>
          {user?.birthdate || <NotSetField />}
        </div>
      </Skeleton>
      <Skeleton className={className.skeleton} isLoaded={isLoaded}>
        <div className={className.row}>
          <p className={className.label}>{t("gender")}:</p>
          {user?.gender ? <GenderChip gender={user.gender as GenderEnum} /> : <NotSetField />}
        </div>
      </Skeleton>
    </>
  );
};

export default UserView;
