import EditCampaign from "@/pages/creator/campaigns/CampaignEdit";

export default async function DashboardPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  return <EditCampaign params={{ id }} />;
}
