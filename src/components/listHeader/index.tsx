"use client";

import { useTranslations } from "next-intl";
import { className } from "./styles";

type PageHeaderProps = {
  title: string;
};

const PageHeader = ({ title }: PageHeaderProps) => {
  const t = useTranslations("PageHeader");

  return (
    <div className={className.wrapper}>
      <h2 className={className.title}>{t(title)}</h2>
    </div>
  );
};

export default PageHeader;
