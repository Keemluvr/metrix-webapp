"use client";

import { useTranslations } from "next-intl";
import { className } from "./style";
import Form from "./form";

const SignIn = () => {
  const tLogin = useTranslations("SignIn");

  return (
    <div className={className.wrapper}>
      <div className={className.content}>
        <div className={className.titleWrapper}>
          <h1 className={className.title} data-testid="title">
            {tLogin("welcome-back")}
          </h1>
          <p className={className.description} data-testid="description">
            {tLogin("login-to-your-account")}
          </p>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default SignIn;
