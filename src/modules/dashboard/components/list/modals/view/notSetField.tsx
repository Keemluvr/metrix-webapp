import React from "react";
import { useTranslations } from "next-intl";
import { viewClassName as className } from "../styles";

const NotSetField = () => {
  const t = useTranslations("Form");
  return <p className={className.notSet}>{t("not-set")}</p>;
};

export default NotSetField;
