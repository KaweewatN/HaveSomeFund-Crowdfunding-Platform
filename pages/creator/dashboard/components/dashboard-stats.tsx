import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins, Users, TrendingUp } from "lucide-react";

export default function DashboardStats({
  summary,
}: {
  summary: {
    totalCampaigns: number;
    totalAmountRaised: number;
    totalDonors: number;
  };
}) {
  return (
    <div className="grid gap-4 md:grid-cols-3 mb-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Raised</CardTitle>
          <Coins className="h-6 w-6 text-muted-foreground text-teal-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            $
            {summary?.totalAmountRaised
              ? Number(summary?.totalAmountRaised).toLocaleString()
              : 0}
          </div>
          <p className="text-xs text-muted-foreground">Across all campaigns</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Donors</CardTitle>
          <Users className="h-6 w-6 text-muted-foreground text-teal-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {summary?.totalDonors
              ? Number(summary?.totalDonors).toLocaleString()
              : 0}
          </div>
          <p className="text-xs text-muted-foreground">
            People supporting your causes
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Campaigns</CardTitle>
          <TrendingUp className="h-6 w-6 text-muted-foreground text-teal-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {summary?.totalCampaigns
              ? Number(summary?.totalCampaigns).toLocaleString()
              : 0}
          </div>
          <p className="text-xs text-muted-foreground">
            All your fundraising campaigns
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
