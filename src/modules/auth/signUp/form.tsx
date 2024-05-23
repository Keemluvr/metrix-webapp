"use client";

import { Link } from "@/navigation";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { UseSignUp } from "@/hooks/useSignUp";
import { className } from "./style";
import Email from "@/components/form/email";
import Password from "@/components/form/password";
import Text from "@/components/form/text";

const Form = () => {
  const t = useTranslations("Form");
  const { control, onSubmit, isLoading } = UseSignUp();

  return (
    <form onSubmit={onSubmit} className={className.formWrapper}>
      <Text label="your-full-name" field="name" control={control} isDisabled={isLoading} />
      <Email label="your-email-address" control={control} isDisabled={isLoading} />
      <Password label="create-a-strong-password" control={control} isDisabled={isLoading} />

      <p className={className.alreadyHaveAnAccount}>
        {t("already-have-an-account")}{" "}
        <Link href="/" className={className.loginButton}>
          {t("login")}
        </Link>
      </p>

      <Button
        type="submit"
        className={className.signUpButton}
        variant="solid"
        color="primary"
        size="lg"
        isLoading={isLoading}
      >
        {t("sign-up")}
      </Button>
    </form>
  );
};

export default Form;
