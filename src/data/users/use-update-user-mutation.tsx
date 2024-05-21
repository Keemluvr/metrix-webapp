import { useMutation } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { getSession } from "next-auth/react";
import { redirect } from "@/navigation";
import { User as UserType } from "@/types/User";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";
import UserApi from "@/services/api/user";

const mutationFn = async (data: UserType.Edit): Promise<Response> => {
  const session = await getSession();

  const { accessToken } = session!.user;
  if (!accessToken) redirect("/");

  return UserApi.Update(accessToken, data);
};

const useUpdateUserMutation = () => {
  const t = useTranslations("Errors");
  const [isOk, setIsOk] = useState(false);

  const { mutate, ...mutation } = useMutation({
    mutationKey: ["users", "update-user"],
    mutationFn,
    onSuccess: async (result) => {
      const message = await result.json().then((data) => {
        return data?.errors?.[0].message ?? result.statusText ?? data.message;
      });

      if (!result.ok) return toast.error(t(message));
      toast.success(t(message));
      setIsOk(true);
    }
  });

  const updateUser = useCallback((data: UserType.Edit) => mutate(data), [mutate]);

  return { updateUser, isOk, ...mutation };
};

export default useUpdateUserMutation;
