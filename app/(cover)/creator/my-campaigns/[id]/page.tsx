import CampaignDetail from "@/pages/creator/campaigns/CampaignDetail";
import { authenticateCreator } from "@/app/api/auth/[...nextauth]/auth";
import { redirect } from "next/navigation";

export default async function CampaignDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Authenticate the creator
  await authenticateCreator().catch(() => redirect("/"));

  return <CampaignDetail params={{ id }} />;
}
