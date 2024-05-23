"use client";

import { User } from "@/types/User";
import { useForm } from "react-hook-form";
import { CalendarDate, getLocalTimeZone, parseAbsolute } from "@internationalized/date";
import { formatCEP, formatCPF, formatPhone } from "@/helpers/formatString";
import { omit } from "@/helpers/formatObject";
import useUpdateUserMutation from "@/data/users/use-update-user-mutation";

interface UseEditUserProps {
  user: User.Edit | undefined;
  onSuccess?: () => void;
}

export function UseEditUser({ user, onSuccess }: UseEditUserProps) {
  const removeUnexpectedProperties = (data: User.Session | undefined) => {
    const fieldsToOmit: (keyof User.Session)[] = [
      "createdAt",
      "updatedAt",
      "address",
      "physical",
      "sub",
      "accessToken",
      "iat",
      "exp",
      "jti"
    ];

    return omit(data as User.Session, fieldsToOmit);
  };

  const formatUser = (user: User.Session | User.Edit | undefined) => {
    return {
      ...removeUnexpectedProperties(user as User.Session),
      cpf: user?.cpf ? formatCPF(user?.cpf) : "",
      phone: user?.phone ? formatPhone(user?.phone) : "",
      cellphone: user?.cellphone ? formatPhone(user?.cellphone) : "",
      birthdate: user?.birthdate ? parseAbsolute(user.birthdate, getLocalTimeZone()) : null,
      ...(user?.address && {
        address: {
          ...user?.address,
          cep: user?.address?.cep ? formatCEP(user?.address?.cep) : ""
        }
      })
    };
  };

  const defaultValues = formatUser(user) as User.Edit;

  const { handleSubmit, control, setError } = useForm<User.Edit>({
    defaultValues,
    values: defaultValues
  });

  const { updateUser, isPending: isLoading } = useUpdateUserMutation(setError);

  const onFinish = async (data: User.Edit) => {
    const birthdate = data.birthdate as unknown as CalendarDate;
    data.birthdate = birthdate.toDate(getLocalTimeZone()).toUTCString();

    await updateUser(data as User.Edit).then((result) => {
      if (result.ok) onSuccess?.();
    });
  };

  const onSubmit = handleSubmit(onFinish);

  return { control, isLoading, onSubmit };
}
