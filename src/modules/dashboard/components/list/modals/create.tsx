import React, { useEffect } from "react";
import { ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { createClassName as className } from "./styles";
import { UseCreateUser } from "@/hooks/useCreate";
import { Gender } from "@/components/form/gender";
import { sanitizeCEP, sanitizeCPF, sanitizePhone } from "@/helpers/sanitize";
import Copyable from "@/components/copyable";
import Email from "@/components/form/email";
import FullName from "@/components/form/fullname";
import Birthdate from "@/components/form/birthdate";
import Number from "@/components/form/number";
import Select from "@/components/form/select";
import Text from "@/components/form/text";
import { BLOOD_TYPES } from "@/constants/bloodType";
import { STATES } from "@/constants/state";

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
  const { control, onSubmit, isLoading, watch, generateRandomPassword } = UseCreateUser(onSuccessCreate);

  useEffect(() => {
    generateRandomPassword();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ModalContent>
        <form onSubmit={onSubmit}>
          <ModalHeader className={className.header}>
            <p>{t("edit-user")}</p>
          </ModalHeader>
          <ModalBody>
            <FullName control={control} isDisabled={isLoading} />
            <Number
              control={control}
              isDisabled={isLoading}
              label="cpf"
              field="cpf"
              maxLength={14}
              format={(cpf) => sanitizeCPF(cpf)}
            />
            <Number control={control} isDisabled={isLoading} label="rg" field="rg" />
            <Birthdate control={control} isDisabled={isLoading} />
            <Gender control={control} isDisabled={isLoading} />

            <h3>{t("contact")}</h3>
            <Email control={control} isDisabled={isLoading} />
            <Number
              control={control}
              isDisabled={isLoading}
              label="phone"
              field="phone"
              maxLength={14}
              format={(phone) => sanitizePhone(phone)}
            />
            <Number
              control={control}
              isDisabled={isLoading}
              label="cellphone"
              field="cellphone"
              maxLength={14}
              format={(cellphone) => sanitizePhone(cellphone)}
            />

            <h3>{t("physical")}</h3>
            <Number control={control} isDisabled={isLoading} label="height" field="height" />
            <Number control={control} isDisabled={isLoading} label="weight" field="weight" />
            <Select control={control} isDisabled={isLoading} label="blood-type" field="bloodType" items={BLOOD_TYPES} />

            <h3>{t("address")}</h3>
            <Number
              control={control}
              isDisabled={isLoading}
              label="cep"
              field="cep"
              maxLength={9}
              format={(cep) => sanitizeCEP(cep)}
            />
            <Text control={control} isDisabled={isLoading} label="street" field="street" />
            <Number control={control} isDisabled={isLoading} label="number" field="number" />
            <Text control={control} isDisabled={isLoading} label="neighborhood" field="neighborhood" />
            <Text control={control} isDisabled={isLoading} label="city" field="city" />
            <Select control={control} isDisabled={isLoading} label="state" field="state" items={STATES} />

            <p className={className.password}>
              <span className={className.passwordLabel}>{t("password")}:</span> <Copyable label={watch("password")} />
            </p>
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
