import CreatorDashboard from "@/pages/creator/dashboard/CreatorDashboard";
import { authenticateCreator } from "@/app/api/auth/[...nextauth]/auth";
import { redirect } from "next/navigation";

export default async function CreatorDashboardPage() {
  await authenticateCreator().catch(() => redirect("/"));
  return <CreatorDashboard />;
}
