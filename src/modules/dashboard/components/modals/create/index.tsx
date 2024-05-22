import React from "react";
import { ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { className } from "./styles";
import { UseCreateUser } from "@/hooks/useCreate";
import Form from "../form";

interface ModalCreateProps {
  onClose: () => void;
  onSuccess: () => void;
}

const ModalCreate = ({ onClose, onSuccess }: ModalCreateProps) => {
  const t = useTranslations("Form");

  const onSuccessCreate = () => {
    onSuccess();
    onClose();
  };

  const { control, isLoading, onSubmit } = UseCreateUser(onSuccessCreate);

  return (
    <>
      <ModalContent>
        <form onSubmit={onSubmit}>
          <ModalHeader className={className.header}>
            <p>{t("edit-user")}</p>
          </ModalHeader>
          <ModalBody>
            <Form control={control} isLoading={isLoading} />
          </ModalBody>
          <ModalFooter>
            <div className={className.footer}>
              <Button
                type="submit"
                className={className.saveButton}
                variant="solid"
                color="primary"
                size="lg"
                isLoading={isLoading}
              >
                {t("save")}
              </Button>
              <Button color="primary" variant="faded" size="lg" onPress={onClose}>
                {t("close")}
              </Button>
            </div>
          </ModalFooter>
        </form>
      </ModalContent>
    </>
  );
};

export default ModalCreate;
