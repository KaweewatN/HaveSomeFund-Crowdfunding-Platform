import Login from "@/pages/auth/Login";
import { getServerAuthSession } from "../../api/auth/[...nextauth]/auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getServerAuthSession();
  if (session) {
    redirect("/campaigns");
  }

  return <Login />;
}
