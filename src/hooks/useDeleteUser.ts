"use client";

import useDeleteUserMutation from "@/data/users/use-delete-user-mutation";

export function UseDeleteUser(onSuccess: () => void) {
  const { deleteUser, isPending: isLoading } = useDeleteUserMutation();

  const onConfirm = async (id: number) => {
    await deleteUser(id).then((result) => {
      if (result.ok) onSuccess();
    });
  };

  return { onConfirm, isLoading };
}
