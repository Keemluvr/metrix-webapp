import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";
import { getSession } from "next-auth/react";
import { redirect } from "@/navigation";
import { User, User as UserType } from "@/types/User";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";
import { UseFormSetError } from "react-hook-form";
import { Error } from "@/types/Error";
import { format } from "@/constants/format";
import { lengthRange } from "@/constants/length";
import UserApi from "@/services/api/user";
import { kebabCase } from "@/helpers/formatString";

const mutationFn = async (data: UserType.Edit): Promise<Response> => {
  const session = await getSession();

  const { accessToken } = session!.user;
  if (!accessToken) redirect("/");

  const { id, ...rest } = data;

  return UserApi.Update(accessToken, id, rest as UserType.Edit);
};

const useUpdateUserMutation = (setError: UseFormSetError<User.Edit>) => {
  const t = useTranslations("Errors");
  const tForm = useTranslations("Form");
  const tEntity = useTranslations("Entity");

  const { mutateAsync, ...mutation } = useMutation({
    mutationKey: ["users", "update-user"],
    mutationFn,
    onSuccess: async (result) => {
      if (result.ok) return toast.success(tForm("account-successfully-updated"));

      await result.json().then((data) => {
        const errors = data?.message;
        const entity = data?.entity;

        // Set errors on form
        if (typeof errors === "object")
          errors?.map((error: Error) => {
            const hasChidren = !!error?.children?.length;
            const children = error?.children[0];
            const errorConstraints = error.constraints ?? children.constraints;
            const errorKey = kebabCase(Object.keys(errorConstraints)[0]);
            const errorField = `${error.property}${hasChidren ? `.${children.property}` : ""}` as keyof User.Edit;
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
        if (!entity) toast.error(t(kebabCase(errors)));
      });
    }
  });

  const updateUser = useCallback((data: UserType.Edit) => mutateAsync(data), [mutateAsync]);

  return { updateUser, ...mutation };
};

export default useUpdateUserMutation;
