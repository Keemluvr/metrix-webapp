"use client";

import { Link } from "@/navigation";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { className } from "./style";
import Email from "@/components/form/email";
import Password from "@/components/form/password";
import useSignIn from "@/hooks/useSignIn";

const Form = () => {
  const { control, onSubmit, isLoading } = useSignIn();
  const t = useTranslations("Form");

  return (
    <form onSubmit={onSubmit} className={className.formWrapper}>
      <Email control={control} isDisabled={isLoading} />

      <div className={className.itemWithDescription}>
        <Password control={control} isDisabled={isLoading} />
        <Link href="#" className={className.recoverPassword}>
          {t("recover-password")}
        </Link>
      </div>

      <p className={className.dontHaveAnAccount} data-testid="dont-have-an-account-text">
        {t("dont-have-an-account")}{" "}
        <Link href="/sign-up" className={className.signUpButton} data-testid="sign-up-button">
          {t("sign-up")}
        </Link>
      </p>

      <Button
        type="submit"
        className={className.loginButton}
        variant="solid"
        color="primary"
        size="lg"
        isLoading={isLoading}
        data-testid="login-button"
      >
        {t("login")}
      </Button>
    </form>
  );
};

export default Form;
