"use client";

import { useTranslations } from "next-intl";
import { className } from "./style";
import Form from "./form";

const SignUp = () => {
  const tLogin = useTranslations("SignUp");

  return (
    <div className={className.wrapper}>
      <div className={className.content}>
        <div className={className.titleWrapper}>
          <h1 className={className.title}>{tLogin("get-started")}</h1>
          <p className={className.description}>{tLogin("create-your-free-account")}</p>
        </div>

        <Form />
      </div>
    </div>
  );
};

export default SignUp;
