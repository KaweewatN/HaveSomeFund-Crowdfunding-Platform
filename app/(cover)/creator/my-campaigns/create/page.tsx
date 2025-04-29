import CreateCampaign from "@/pages/creator/campaigns/CreateCampaign";
import { redirect } from "next/navigation";
import { authenticateCreator } from "@/app/api/auth/[...nextauth]/auth";
export default async function CreatorCreateCampaignPage() {
  await authenticateCreator().catch(() => redirect("/"));

  return <CreateCampaign />;
}
