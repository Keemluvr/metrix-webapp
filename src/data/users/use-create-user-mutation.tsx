import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";
import { User } from "@/types/User";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";
import { UseFormSetError } from "react-hook-form";
import { Error } from "@/types/Error";
import { format } from "@/constants/format";
import { lengthRange } from "@/constants/length";
import { kebabCase } from "@/helpers/formatString";
import UserApi from "@/services/api/user";
import { getSession } from "next-auth/react";
import { redirect } from "@/navigation";

const mutationFn = async (data: User.Create): Promise<Response> => {
  const session = await getSession();

  const { accessToken } = session!.user;
  if (!accessToken) redirect("/");

  return UserApi.Create(accessToken, data);
};
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
            const hasChidren = !!error.children.length;
            const children = error.children[0];
            const errorConstraints = error.constraints ?? children.constraints;
            const errorKey = kebabCase(Object.keys(errorConstraints)[0]);
            const errorField = `${error.property}${hasChidren ? `.${children.property}` : ""}` as keyof User.Create;
            const errorIntlField = hasChidren ? children.property : error.property;

            setError(errorField, {
              message: t(errorKey, {
                field: tForm(errorIntlField),
                format: format[errorIntlField as unknown as keyof typeof format] || "",
                min: lengthRange[errorField as unknown as keyof typeof lengthRange]?.[0] || "",
                max: lengthRange[errorField as unknown as keyof typeof lengthRange]?.[1] || ""
              })
            });
          });

        if (entity) toast.error(t(errors, { entity: tEntity(entity) }));
      });
    }
  });

  const createUser = useCallback((data: User.Create) => mutateAsync(data), [mutateAsync]);

  return { createUser, ...mutation };
};

export default useCreateUserMutation;
