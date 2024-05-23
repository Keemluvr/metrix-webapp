import { Auth, User as UserType } from "@/types/User";
import { useCallback } from "react";
import { useTranslations } from "next-intl";
import { UseFormSetError } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Error } from "@/types/Error";
import { toast } from "react-toastify";
import { kebabCase } from "@/helpers/formatString";
import SessionApi from "@/services/api/session";

const mutationFn = async (data: UserType.Create): Promise<Response> => SessionApi.signUp(data);

const useSignUpMutation = (setError: UseFormSetError<Auth.SignUp>) => {
  const t = useTranslations("Errors");
  const tForm = useTranslations("Form");
  const tEntity = useTranslations("Entity");

  const { mutateAsync, ...mutation } = useMutation({
    mutationKey: ["session", "sign-up"],
    mutationFn,
    onSuccess: async (result) => {
      if (result.ok) toast.success(tForm("account-successfully-created"));

      await result.json().then((data) => {
        const errors = data?.message;
        const entity = data?.entity;

        // Set errors on form
        if (typeof errors === "object")
          errors?.map((error: Error) => {
            const errorKey = kebabCase(Object.keys(error.constraints)[0]);
            const errorField = error.property as keyof Auth.SignUp;
            setError(errorField, { message: t(errorKey, { field: tForm(errorField) }) });
          });

        if (entity) toast.error(t(errors, { entity: tEntity(entity) }));
      });
    }
  });

  const createUser = useCallback(
    (data: UserType.Create) => {
      return mutateAsync(data);
    },
    [mutateAsync]
  );

  return { createUser, ...mutation };
};

export default useSignUpMutation;
