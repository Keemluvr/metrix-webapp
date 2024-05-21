import React, { useEffect, useMemo } from "react";
import { ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Avatar } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { User } from "@/types/User";
import { Role } from "@/components/form/gender";
import { UseEditUser } from "@/hooks/useEditUser";
import { editClassName } from "./styles";
import Email from "@/components/form/email";
import FullName from "@/components/form/fullname";

interface ModalEditProps {
  user: User.List;
  onClose: () => void;
  onSuccess: () => void;
}

const ModalEdit = ({ user, onClose, onSuccess }: ModalEditProps) => {
  const t = useTranslations("Form");
  const { control, onSubmit, isLoading, isSuccess } = UseEditUser({
    defaultValues: {
      id: user?.id,
      name: user?.name,
      email: user?.email,
      role: user?.role
    }
  });

  useEffect(() => {
    if (isSuccess) {
      onSuccess();
      onClose();
    }
  }, [isSuccess, onSuccess, onClose]);

  const className = useMemo(() => editClassName, []);

  return (
    <>
      <ModalContent>
        <form onSubmit={onSubmit}>
          <ModalHeader className={className.header}>
            <p>{t("edit-user")}</p>
          </ModalHeader>
          <ModalBody>
            <Avatar size="lg" src={user?.image || ""} className="mx-auto" />
            <FullName control={control} isDisabled={isLoading} />
            <Email control={control} isDisabled={isLoading} />
            <Role control={control} isDisabled={isLoading} />
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
