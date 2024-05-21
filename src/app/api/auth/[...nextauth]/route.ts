import { authOptionsWrapper } from "@/config/auth";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  return NextAuth(...authOptionsWrapper(request, response));
};

export { handler as GET, handler as POST };
