import { redirect } from "@/navigation";
import { getSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { User } from "@/types/User";
import UserAPI from "@/services/api/user";

const getUsers = async (): Promise<User.List[]> => {
  const session = await getSession();

  const { accessToken } = session!.user;
  if (!accessToken) redirect("/");

  const response = await UserAPI.List(accessToken as string).then((res) => res.json());
  return response;
};

const useUsersQuery = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers
  });
};

export default useUsersQuery;
