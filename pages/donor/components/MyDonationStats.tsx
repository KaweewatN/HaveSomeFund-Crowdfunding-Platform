import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins, Users, Award } from "lucide-react";

export default function MyDonationStats({
  totalDonations,
  totalAmountDonated,
}: {
  totalDonations: number;
  totalAmountDonated: number;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-3 mb-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Donated</CardTitle>
          <Coins className="h-6 w-6 text-muted-foreground text-teal-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ฿
            {totalAmountDonated
              ? Number(totalAmountDonated).toLocaleString()
              : 0}
          </div>
          <p className="text-xs text-muted-foreground">Across all donations</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
          <Users className="h-6 w-6 text-muted-foreground text-teal-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {totalDonations ? Number(totalDonations).toLocaleString() : 0}
          </div>
          <p className="text-xs text-muted-foreground">
            Donations you have made
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Donation Rank</CardTitle>
          <Award className="h-6 w-6 text-muted-foreground text-teal-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">Supporter</div>
          <p className="text-xs text-muted-foreground">
            Your rank among all donors
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
