"use client";

import { User } from "@/types/User";
import { useForm } from "react-hook-form";
import { CalendarDate, getLocalTimeZone } from "@internationalized/date";
import useCreateUserMutation from "@/data/users/use-create-user-mutation";

export function UseCreateUser(onSuccess: () => void) {
  const { handleSubmit, control, setError } = useForm<User.Create>();
  const { createUser, isPending: isLoading } = useCreateUserMutation(setError);

  const onFinish = async (data: User.Create) => {
    const birthdate = data.birthdate as unknown as CalendarDate;
    data.birthdate = birthdate.toDate(getLocalTimeZone()).toUTCString();

    await createUser(data as User.Create).then((result) => {
      if (result.ok) onSuccess();
    });
  };

  const onSubmit = handleSubmit(onFinish);

  return { control, isLoading, onSubmit };
}
