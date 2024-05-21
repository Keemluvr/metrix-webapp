import React from "react";
import { ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { deleteClassName as className } from "./styles";
import { UseDeleteUser } from "@/hooks/useDeleteUser";

interface ModalDeleteProps {
  id: number;
  onClose: () => void;
  onSuccess: () => void;
}

const ModalDelete = ({ id, onClose, onSuccess }: ModalDeleteProps) => {
  const t = useTranslations("Actions");

  const onSuccessDelete = () => {
    onSuccess();
    onClose();
  };

  const { onConfirm, isLoading } = UseDeleteUser(onSuccessDelete);

  // useEffect(() => {
  //   console.log(isSuccess);
  //   if (isSuccess) {
  //   }
  // }, [isSuccess, onSuccess, onClose]);

  return (
    <>
      <ModalContent>
        <ModalHeader className={className.header}>
          <p>{t("delete-field", { field: t("user") })}</p>
        </ModalHeader>
        <ModalBody>
          <p>{t("delete-confirmation", { field: t("user") })}</p>
        </ModalBody>
        <ModalFooter>
          <div className={className.footer}>
            <Button
              variant="solid"
              color="danger"
              size="lg"
              onPress={() => onConfirm(id)}
              isLoading={isLoading}
              className={className.saveButton}
            >
              {t("confirm")}
            </Button>
            <Button color="primary" variant="faded" size="lg" onPress={onClose}>
              {t("cancel")}
            </Button>
          </div>
        </ModalFooter>
      </ModalContent>
    </>
  );
};

export default ModalDelete;
