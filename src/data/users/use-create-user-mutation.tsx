import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";
import { User } from "@/types/User";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";
import { UseFormSetError } from "react-hook-form";
import { Error } from "@/types/Error";
import UserApi from "@/services/api/user";

const mutationFn = async (data: User.Create): Promise<Response> => UserApi.Create(data);

const useCreateUserMutation = (setError: UseFormSetError<User.Create>) => {
  const t = useTranslations("Errors");
  const tForm = useTranslations("Form");
  const tEntity = useTranslations("Entity");

  const { mutateAsync, ...mutation } = useMutation({
    mutationKey: ["users", "create-user"],
    mutationFn,
    onSuccess: async (result) => {
      if (result.ok) return toast.success(tForm("account-successfully-created"));

      await result.json().then((data) => {
        const errors = data?.message;
        const entity = data?.entity;

        // Set errors on form
        if (typeof errors === "object")
          errors?.map((error: Error) => {
            const errorKey = Object.keys(error.constraints)[0];
            const errorField = error.property as keyof User.Create;
            setError(errorField, { message: t(errorKey, { field: tForm(errorField) }) });
          });

        if (entity) toast.error(t(errors, { entity: tEntity(entity) }));
      });
    }
  });

  const createUser = useCallback((data: User.Create) => mutateAsync(data), [mutateAsync]);

  return { createUser, ...mutation };
};

export default useCreateUserMutation;
