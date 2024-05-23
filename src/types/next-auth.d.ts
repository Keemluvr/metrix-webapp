import "next-auth";
import UserType from "./User";

declare module "next-auth" {
  interface User extends UserType.Profile {}

  interface Session extends UserType.Profile {
    user: {
      accessToken: string;
    };
  }

  type authorizedProps = {
    token: JWT | null;
  };
}
