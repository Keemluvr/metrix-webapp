import "next-auth";

declare module "next-auth" {
  interface User {
    email: string;
  }

  interface Session {
    user: User & {
      email: string;
      accessToken: string;
      role: string;
    };
    token: {
      email: string;
      accessToken: string;
    };
  }

  type authorizedProps = {
    token: JWT | null;
  };
}
