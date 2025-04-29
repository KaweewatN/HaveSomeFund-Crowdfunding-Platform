import CampaignId from "@/pages/campaign_id/CampaignId";

export default async function CampaignIdPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  return <CampaignId params={{ id }} />;
}
