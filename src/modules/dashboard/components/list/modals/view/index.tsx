import React from "react";
import {
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Skeleton,
  Accordion,
  AccordionItem
} from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { viewClassName as className } from "../styles";
import { GenderEnum } from "@/types/Gender";
import Copyable from "@/components/copyable";
import GenderChip from "@/components/genderChip";
import useViewUserQuery from "@/data/users/use-view-user.query";
import ContactView from "./contact";
import AddressView from "./address";
import PhysicalView from "./physical";
import OtherInformationsView from "./otherInformations";
import NotSetField from "./notSetField";
import { sanitizeCPF } from "@/helpers/sanitize";

interface ModalViewProps {
  id: number;
}

const ModalView = ({ id }: ModalViewProps) => {
  const t = useTranslations("Form");

  const { data: user, isLoading } = useViewUserQuery(id);

  const isLoaded = !isLoading && Boolean(user);

  return (
    <>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className={className.header}>
              <p>{t("user-information")}</p>
            </ModalHeader>
            <ModalBody>
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
                  <Copyable
                    classNames={className.copyable}
                    label={user?.cpf ? sanitizeCPF(user.cpf) : <NotSetField />}
                  />
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

              <Accordion selectionMode="multiple" variant="light" isCompact itemClasses={className.accordion}>
                <AccordionItem key="physical" aria-label={t("physical")} title={t("physical")}>
                  <PhysicalView physical={user?.physical} isLoaded={isLoaded} />
                </AccordionItem>
                <AccordionItem key="address" aria-label={t("address")} title={t("address")}>
                  <AddressView address={user?.address} isLoaded={isLoaded} />
                </AccordionItem>
                <AccordionItem key="contact" aria-label={t("contact")} title={t("contact")}>
                  <ContactView contact={user} isLoaded={isLoaded} />
                </AccordionItem>
                <AccordionItem
                  key="other-informations"
                  aria-label={t("other-informations")}
                  title={t("other-informations")}
                >
                  <OtherInformationsView user={user} isLoaded={isLoaded} />
                </AccordionItem>
              </Accordion>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" variant="faded" onPress={onClose}>
                {t("close")}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </>
  );
};

export default ModalView;
