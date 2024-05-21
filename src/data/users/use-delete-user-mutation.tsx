import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";
import { redirect } from "@/navigation";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";
import { getSession } from "next-auth/react";
import UserApi from "@/services/api/user";

const mutationFn = async (id: number): Promise<Response> => {
  const session = await getSession();

  const { accessToken } = session!.user;
  if (!accessToken) redirect("/");

  return UserApi.Delete(accessToken, id);
};

const useDeleteUserMutation = () => {
  const t = useTranslations("Errors");
  const tForm = useTranslations("Form");
  const tEntity = useTranslations("Entity");

  const { mutateAsync, isSuccess, ...mutation } = useMutation({
    mutationKey: ["users", "delete-user"],
    mutationFn,
    onSuccess: async (result) => {
      if (result.ok) return toast.success(tForm("account-successfully-deleted"));

      await result.json().then((data) => {
        const errors = data?.message;
        const entity = data?.entity;

        if (entity) toast.error(t(errors, { entity: tEntity(entity) }));
      });
    }
  });

  const deleteUser = useCallback(
    (id: number) => {
      return mutateAsync(id);
    },
    [mutateAsync]
  );

  return { deleteUser, isSuccess, ...mutation };
};

export default useDeleteUserMutation;
