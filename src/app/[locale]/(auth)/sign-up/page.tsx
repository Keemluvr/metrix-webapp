import { redirect } from "@/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/config/auth";
import SignUp from "@/modules/auth/signUp";

const metadata = {
  title: "Sign Up"
};

export default async function SignUpPage() {
  const session = await getServerSession(authOptions);
  const isAuthenticated = Boolean(session);

  if (isAuthenticated) redirect("/admin");

  return <SignUp />;
}

export { metadata };
