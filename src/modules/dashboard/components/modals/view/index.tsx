import React from "react";
import { ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Accordion, AccordionItem } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { className } from "./styles";
import useViewUserQuery from "@/data/users/use-view-user.query";
import UserView from "./user";
import ContactView from "./contact";
import AddressView from "./address";
import PhysicalView from "./physical";
import OtherInformationsView from "./otherInformations";

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
              <UserView user={user} isLoaded={isLoaded} />

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
