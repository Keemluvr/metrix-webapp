import { authOptions } from "@/config/auth";
import { redirect } from "@/navigation";
import { getServerSession } from "next-auth";
import SignIn from "@/modules/auth/signIn";

const metadata = {
  title: "Sign In"
};

export default async function SignInPage() {
  const session = await getServerSession(authOptions);
  const isAuthenticated = Boolean(session);

  if (isAuthenticated) redirect("/admin");

  return <SignIn />;
}

export { metadata };
