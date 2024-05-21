"use client";

import { User } from "@/types/User";
import { useForm } from "react-hook-form";
import useCreateUserMutation from "@/data/users/use-create-user-mutation";

export function UseCreateUser(onSuccess: () => void) {
  const { handleSubmit, control, setError, watch, setValue } = useForm<User.Create>();
  const { createUser, isPending: isLoading } = useCreateUserMutation(setError);

  const generateRandomPassword = () => {
    const password = Math.random().toString(36).slice(-8);
    setValue("password", password);
  };

  const onFinish = async (data: User.Create) => {
    await createUser(data as User.Create).then((result) => {
      if (result.ok) onSuccess();
    });
  };

  const onSubmit = handleSubmit(onFinish);

  return { control, isLoading, onSubmit, watch, generateRandomPassword };
}
