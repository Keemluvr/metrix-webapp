"use client";

import { Auth, User } from "@/types/User";
import { useForm } from "react-hook-form";
import { useRouter } from "@/navigation";
import useSignUpMutation from "@/data/users/use-sign-up-mutation";

export function UseSignUp() {
  const { handleSubmit, control, setError } = useForm<Auth.SignUp>();
  const { createUser, isPending: isLoading } = useSignUpMutation(setError);

  const router = useRouter();

  const onFinish = async (data: Auth.SignUp) => {
    await createUser(data as User.Create).then((result) => {
      if (result.ok) router.push("/");
    });
  };

  const onSubmit = handleSubmit(onFinish);

  return { control, isLoading, onSubmit };
}
