"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  formatCurrency,
  calculateDaysLeft,
  calculateProgress,
} from "@/lib/utils";
// api service
import apiService from "@/services/apiService";
import {
  CampaignResponse,
  Campaign,
} from "@/app/api/campaigns/short/campaign.type";

export default function FeaturedCampaigns() {
  const [featuredCampaigns, setFeaturedCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    const fetchCampaigns = async () => {
      try {
        const response = await apiService.get<CampaignResponse>(
          "/campaigns/short?limit=3?desc=true"
        );
        setFeaturedCampaigns(response.campaigns);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-5">
      {featuredCampaigns.map((campaign) => (
        <Link href={`/campaigns/${campaign?.id}`} key={campaign?.id}>
          <Card
            key={campaign?.id}
            className="overflow-hidden flex flex-col h-full hover:border-teal-500 transition-colors duration-200"
          >
            <div className="relative h-48 w-full">
              <Image
                src={campaign?.image || "/placeholder.svg"}
                alt={campaign?.title}
                fill
                className="object-cover"
              />
              <Badge className="absolute top-2 right-2 bg-teal-600">
                {campaign?.category}
              </Badge>
            </div>

            <CardContent className="flex-1 p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="relative h-6 w-6 rounded-full overflow-hidden">
                  <Image
                    src={campaign?.creatorImage || "/placeholder.svg"}
                    alt={campaign?.creatorName}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-sm text-muted-foreground">
                  {campaign?.creatorName}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2 line-clamp-2">
                {campaign?.title}
              </h3>
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {campaign?.shortDescription?.length > 40
                  ? `${campaign.shortDescription.substring(0, 36)}...`
                  : campaign.shortDescription}
              </p>
              <div className="space-y-3 mt-auto">
                <Progress
                  value={calculateProgress(
                    campaign?.amountRaised,
                    campaign?.goalAmount
                  )}
                  className="h-2"
                />
                <div className="flex justify-between text-sm">
                  <span className="font-medium">
                    {formatCurrency(campaign?.amountRaised)} raised
                  </span>
                  <span className="text-muted-foreground">
                    {calculateProgress(
                      campaign?.amountRaised,
                      campaign?.goalAmount
                    )}
                    % of {formatCurrency(campaign?.goalAmount)}
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="px-6 py-4 border-t bg-muted/50 flex justify-between">
              <span className="text-sm">{campaign?.donorsCount} donors</span>
              <span className="text-sm">
                {calculateDaysLeft(campaign?.endDate)} days left
              </span>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
