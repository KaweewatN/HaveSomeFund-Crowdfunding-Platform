"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import UpdateModal from "./update-modal";
import { Edit, MessageSquare, Share2 } from "lucide-react";

// Mock campaign data - in a real app, this would come from an API
const getCampaignData = (id: string) => {
  return {
    id,
    title: "Help Build a Community Garden",
    status: "active",
    image: "/placeholder.svg?height=300&width=600",
    raised: 4500,
    goal: 10000,
    donors: 45,
    daysLeft: 15,
    category: "Community",
    description:
      "Creating a sustainable garden space for the local neighborhood.",
  };
};

interface CampaignHeaderProps {
  campaignId: string;
}

export default function CampaignHeader({ campaignId }: CampaignHeaderProps) {
  const campaign = getCampaignData(campaignId);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  return (
    <>
      <Card className="overflow-hidden">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={campaign.image || "/placeholder.svg"}
            alt={campaign.title}
            className="h-full w-full object-cover"
          />
        </div>
        <CardContent className="p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">{campaign.title}</h1>
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
              <p className="mt-2 text-muted-foreground">
                {campaign.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href={`/dashboard/campaigns/${campaignId}/edit`}>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit Campaign
                </Link>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsUpdateModalOpen(true)}
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Post Update
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>

          <div className="mt-6 space-y-2">
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
      </Card>

      <UpdateModal
        campaignId={campaignId}
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
      />
    </>
  );
}
