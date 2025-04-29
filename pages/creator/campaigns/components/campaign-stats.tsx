import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins, Users, TrendingUp, Goal } from "lucide-react";

interface CampaignStatsProps {
  amountRaised: number;
  goalAmount: number;
  donorsCount: number;
}

export default function CampaignStats({
  amountRaised,
  goalAmount,
  donorsCount,
}: CampaignStatsProps) {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Raised</CardTitle>
          <Coins className="h-6 w-6 text-muted-foreground text-teal-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${amountRaised ? Number(amountRaised)?.toLocaleString() : 0}
          </div>
          <p className="text-xs text-muted-foreground">+12% from last week</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Donors</CardTitle>
          <Users className="h-6 w-6 text-muted-foreground text-teal-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {amountRaised ? Number(donorsCount)?.toLocaleString() : 0}
          </div>
          <p className="text-xs text-muted-foreground">+1 new donors today</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Average Donation
          </CardTitle>
          <TrendingUp className="h-6 w-6 text-muted-foreground text-teal-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ฿
            {amountRaised && donorsCount
              ? Number(amountRaised / donorsCount)?.toLocaleString()
              : 0}
          </div>
          <p className="text-xs text-muted-foreground">+$15 from last week</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Goal Amount</CardTitle>
          <Goal className="h-6 w-6 text-muted-foreground text-teal-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {goalAmount ? Number(goalAmount)?.toLocaleString() : 0}
          </div>
          <p className="text-xs text-muted-foreground">+18% from last week</p>
        </CardContent>
      </Card>
    </div>
  );
}
