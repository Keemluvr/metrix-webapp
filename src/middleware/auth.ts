import { withAuth } from "next-auth/middleware";
import { NextRequest } from "next/server";
import { JWT } from "next-auth/jwt";
import intlMiddleware from "./internationalization";

const onSuccess = (req: NextRequest) => {
  return intlMiddleware(req);
};

const callbacks = {
  authorized: ({ token }: { token: JWT | null; req: NextRequest }) => token != null
};

const pages = {
  signIn: "/"
};

const authMiddleware = withAuth(onSuccess, {
  callbacks,
  pages
});

export default authMiddleware;
