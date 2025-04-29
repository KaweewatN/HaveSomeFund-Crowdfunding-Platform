import { authenticateUser } from "@/app/api/auth/[...nextauth]/auth";
import { redirect } from "next/navigation";
import MyDonation from "@/pages/donor/MyDonation";

export default async function MyDonationsPage() {
  await authenticateUser().catch(() => {
    redirect("/");
  });
  return <MyDonation />;
}
