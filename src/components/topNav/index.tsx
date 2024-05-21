import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { style } from "./styles";
import { Link } from "@/navigation";
import Home from "../svg/home";
import LocaleSwitcher from "../localeSwitcher";

type Path = {
  label: string;
  link: string;
};

interface TopNavProps {
  title: string;
  path: Path[];
}

const TopNav = ({ title, path }: TopNavProps) => {
  const t = useTranslations("TopNav");

  return (
    <header>
      <div className={style.wrapperTitle}>
        <h1 className={style.title} data-testid="title">
          {t(title)}
        </h1>
        <LocaleSwitcher />
      </div>

      <Breadcrumbs separator="/" className={style.breadcrumb.wrapper} itemClasses={style.breadcrumb.item}>
        <BreadcrumbItem>
          <Link href="/">
            <Home />
          </Link>
        </BreadcrumbItem>
        {path.map(({ label, link }) => (
          <BreadcrumbItem key={label}>
            <Link href={link} className={style.breadcrumb.link}>
              {t(label)}
            </Link>
          </BreadcrumbItem>
        ))}
      </Breadcrumbs>
    </header>
  );
};

export default TopNav;
