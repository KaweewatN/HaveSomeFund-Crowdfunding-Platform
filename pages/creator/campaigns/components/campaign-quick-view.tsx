"use client";

import Link from "next/link";
import { Edit, Eye, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

// Mock data for user's campaigns
const myCampaigns = [
  {
    id: "1",
    title: "Help Build a Community Garden",
    status: "active",
    image: "/placeholder.svg?height=200&width=400",
    raised: 4500,
    goal: 10000,
    donors: 45,
    daysLeft: 15,
    category: "Community",
    description:
      "Creating a sustainable garden space for the local neighborhood.",
    isOwner: true,
  },
  {
    id: "4",
    title: "Educational Workshops",
    status: "draft",
    image: "/placeholder.svg?height=200&width=400",
    raised: 0,
    goal: 3000,
    donors: 0,
    daysLeft: 0,
    category: "Education",
    description: "Series of workshops teaching digital skills to youth.",
    isOwner: true,
  },
];

export default function CampaignQuickView() {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <Card className="flex h-[220px] flex-col items-center justify-center border-dashed">
        <div className="flex flex-col items-center justify-center space-y-4 p-6 text-center">
          <div className="rounded-full bg-primary/10 p-3">
            <Plus className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-medium">Start New Campaign</h3>
          <Button asChild>
            <Link href="/dashboard/campaigns/new">Create Campaign</Link>
          </Button>
        </div>
      </Card>

      {myCampaigns.slice(0, 2).map((campaign) => (
        <Card key={campaign.id} className="overflow-hidden">
          <div className="flex h-[220px] flex-col justify-between">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold line-clamp-1">
                    {campaign.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {campaign.category}
                  </p>
                </div>
                <Badge
                  variant={
                    campaign.status === "active"
                      ? "default"
                      : campaign.status === "draft"
                      ? "outline"
                      : "secondary"
                  }
                >
                  {campaign.status === "active"
                    ? "Active"
                    : campaign.status === "draft"
                    ? "Draft"
                    : "Ended"}
                </Badge>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">
                    ${campaign.raised.toLocaleString()} raised
                  </span>
                  <span className="text-muted-foreground">
                    ${campaign.goal.toLocaleString()} goal
                  </span>
                </div>
                <Progress
                  value={(campaign.raised / campaign.goal) * 100}
                  className="h-2"
                />
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{campaign.donors} donors</span>
                  {campaign.daysLeft > 0 ? (
                    <span>{campaign.daysLeft} days left</span>
                  ) : campaign.status === "ended" ? (
                    <span>Campaign ended</span>
                  ) : (
                    <span>Not launched</span>
                  )}
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex justify-between border-t p-4">
              <Button variant="outline" size="sm" asChild>
                <Link href={`/dashboard/campaigns/${campaign.id}`}>
                  <Eye className="mr-2 h-4 w-4" />
                  View
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link href={`/dashboard/campaigns/${campaign.id}/edit`}>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Link>
              </Button>
            </CardFooter>
          </div>
        </Card>
      ))}
    </div>
  );
}
