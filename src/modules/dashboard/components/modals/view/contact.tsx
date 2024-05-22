import React from "react";
import { Link, Skeleton } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { className } from "./styles";
import { User } from "@/types/User";
import { formatPhone } from "@/helpers/formatString";
import Copyable from "@/components/copyable";
import NotSetField from "./notSetField";

interface ContactViewProps {
  contact: User.Profile | undefined;
  isLoaded: boolean;
}

const ContactView = ({ contact, isLoaded }: ContactViewProps) => {
  const t = useTranslations("Form");

  return (
    <div className={className.sectionWrapper}>
      <Skeleton className={className.skeleton} isLoaded={isLoaded}>
        <div className={className.row}>
          <p className={className.label}>{t("email")}:</p>
          <Copyable
            classNames={className.copyable}
            label={
              <Link href={`mailto:${contact?.email}`} underline="hover" className={className.value}>
                {contact?.email || <NotSetField />}
              </Link>
            }
          />
        </div>
      </Skeleton>
      <Skeleton className={className.skeleton} isLoaded={isLoaded}>
        <div className={className.row}>
          <p className={className.label}>{t("phone")}:</p>
          <Copyable
            classNames={className.copyable}
            label={
              <Link href={`tel:${contact?.phone}`} underline="hover" className={className.value}>
                {contact?.phone ? formatPhone(contact.phone) : <NotSetField />}
              </Link>
            }
          />
        </div>
      </Skeleton>
      <Skeleton className={className.skeleton} isLoaded={isLoaded}>
        <div className={className.row}>
          <p className={className.label}>{t("cellphone")}:</p>
          <Copyable
            classNames={className.copyable}
            label={
              <Link href={`tel:${contact?.cellphone}`} underline="hover" className={className.value}>
                {contact?.cellphone ? formatPhone(contact.cellphone) : <NotSetField />}
              </Link>
            }
          />
        </div>
      </Skeleton>
    </div>
  );
};

export default ContactView;
