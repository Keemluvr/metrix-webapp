import CredentialsProvider from "next-auth/providers/credentials";
import { AuthOptions } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import { Auth } from "@/types/User";
import Session from "@/services/api/session";

export interface Context {
  params: { nextauth: string[] };
}

const ExpiresSessionIn = 2 * 24 * 60 * 60; // 2 days
const AuthKey = "credentials";

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: ExpiresSessionIn
  },
  pages: {
    signIn: "/"
  },
  providers: [
    CredentialsProvider({
      name: AuthKey,
      credentials: {
        email: { label: "email", type: " text" },
        password: { label: "password", type: " password" }
      },

      async authorize(credentials) {
        const { email, password } = credentials as Auth.SignIn;

        const res = await Session.signIn({ email, password });
        const user = await res.json();

        if (user.error || res.status !== 201) return null;
        return user;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update") {
        return { ...token, ...session.user };
      }

      return { ...token, ...user };
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...token
        }
      };
    }
  }
};

export const authOptionsWrapper = (req: NextApiRequest, res: NextApiResponse) => {
  return [req, res, authOptions] as const;
};
