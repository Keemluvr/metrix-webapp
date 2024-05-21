import { redirect } from "@/navigation";
import { getSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { User } from "@/types/User";
import UserAPI from "@/services/api/user";

const getUser = async (id: number): Promise<User.Profile> => {
  const session = await getSession();

  const { accessToken } = session!.user;
  if (!accessToken) redirect("/");

  const response = await UserAPI.View(accessToken as string, id).then((res) => res.json());
  return response;
};

const useViewUserQuery = (id: number) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => getUser(id)
  });
};

export default useViewUserQuery;
