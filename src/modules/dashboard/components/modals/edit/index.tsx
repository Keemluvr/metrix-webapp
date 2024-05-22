import React, { useEffect } from "react";
import { ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { User } from "@/types/User";
import { UseEditUser } from "@/hooks/useEditUser";
import { className } from "../styles";
import Form from "../form";

interface ModalEditProps {
  user: User.Profile;
  onClose: () => void;
  onSuccess: () => void;
}

const ModalEdit = ({ user, onClose, onSuccess }: ModalEditProps) => {
  const t = useTranslations("Form");
  const { control, onSubmit, isLoading, isSuccess } = UseEditUser();

  useEffect(() => {
    if (isSuccess) {
      onSuccess();
      onClose();
    }
  }, [isSuccess, onSuccess, onClose]);

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

export default ModalEdit;
