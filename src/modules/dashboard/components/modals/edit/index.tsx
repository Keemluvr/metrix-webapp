import React from "react";
import { ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { UseEditUser } from "@/hooks/useEditUser";
import { className } from "../styles";
import Form from "../form";
import useViewUserQuery from "@/data/users/use-view-user.query";

interface ModalEditProps {
  id: number;
  onClose: () => void;
  onSuccess: () => void;
}

const ModalEdit = ({ id, onClose, onSuccess }: ModalEditProps) => {
  const t = useTranslations("Form");

  const { data: user, isLoading: isUserLoading, refetch } = useViewUserQuery(id);

  const onSuccessUpdate = () => {
    onSuccess();
    refetch();
    onClose();
  };

  const { control, onSubmit, isLoading: isSubmitLoading } = UseEditUser({ user, onSuccess: onSuccessUpdate });

  const isLoading = isUserLoading || isSubmitLoading;

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
