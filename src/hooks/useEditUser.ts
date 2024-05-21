"use client";

import { User } from "@/types/User";
import { useForm } from "react-hook-form";
import useUpdateUserMutation from "@/data/users/use-update-user-mutation";
import { useEffect } from "react";
// import { useSession } from "next-auth/react";

interface UseEditUserProps {
  defaultValues: User.Edit;
}

export function UseEditUser({ defaultValues }: UseEditUserProps) {
  const { updateUser, isPending: isLoading, isOk: isSuccess } = useUpdateUserMutation();
  const { handleSubmit, control, getValues } = useForm<User.Edit>({ defaultValues, values: defaultValues });
  // const { data: session, update } = useSession();
  // const currentUser = session?.user;

  useEffect(() => {
    if (currentUser?.id === getValues().id && isSuccess) {
      // update({
      //   ...session,
      //   user: {
      //     ...session?.user,
      //     ...getValues()
      //   }
      // });
    }
  }, [isSuccess]);

  const onFinish = async (data: User.Edit) => await updateUser(data as User.Edit);

  const onSubmit = handleSubmit(onFinish);

  return { control, isLoading, onSubmit, isSuccess };
}
