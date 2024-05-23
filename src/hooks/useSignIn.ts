"use client";

import { Auth } from "@/types/User";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "@/navigation";
import { toast } from "react-toastify";
import { kebabCase } from "@/helpers/formatString";
import { useTranslations } from "next-intl";

const useSignIn = () => {
  const { handleSubmit, control, setError } = useForm<Auth.SignIn>();

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const t = useTranslations("Errors");

  const onFinish = (data: Auth.SignIn) => {
    setIsLoading(true);
    const { email, password } = data;

    signIn("credentials", { email, password, redirect: false })
      .then((result) => {
        if (result?.error) {
          setError("email", { message: "" });
          setError("password", { message: "" });
          return toast.error(t(kebabCase(result.error)));
        }

        router.replace("/admin");
      })
      .finally(() => setIsLoading(false));
  };

  const onSubmit = handleSubmit(onFinish);

  return { control, isLoading, onSubmit };
};

export default useSignIn;
