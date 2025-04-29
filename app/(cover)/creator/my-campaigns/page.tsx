import { authenticateCreator } from "@/app/api/auth/[...nextauth]/auth";
import { redirect } from "next/navigation";
import MyCampaigns from "@/pages/creator/campaigns/MyCampaigns";

export default async function NyCampaignsPage() {
  await authenticateCreator().catch(() => redirect("/"));
  return <MyCampaigns />;
}
