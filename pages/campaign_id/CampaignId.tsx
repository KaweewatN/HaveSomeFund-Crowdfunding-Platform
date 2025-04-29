"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  formatCurrency,
  calculateDaysLeft,
  calculateProgress,
} from "@/lib/utils";
import {
  Flag,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  CheckCircle,
} from "lucide-react";
import CampaignUpdates from "@/components/campaign-updates";
import CampaignComments from "@/components/campaign-comments";
import CampaignDonors from "@/components/campaign-donors";
import CampaignFAQs from "@/components/campaign-faqs";
import DonateButton from "@/components/donate-button";
// services
import apiService from "@/services/apiService";
// types
import Campaign from "../../common/campaign.id.type";
import Loading from "@/components/core/loading";

export default function CampaignPage({ params }: { params: { id: string } }) {
  const [campaignData, setCampaignData] = useState<Campaign | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { data: session } = useSession();

  useEffect(() => {
    setIsLoading(true);
    const fetchCampaigns = async () => {
      try {
        const response = await apiService.get<{
          responseTime: number;
          campaign: Campaign;
        }>(`/campaigns/${params.id}`);
        setCampaignData(response.campaign);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCampaigns();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && !campaignData) {
    return (
      <div className="container px-4 md:px-6 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Campaign Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The campaign you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild>
          <Link href="/campaigns">Browse Campaigns</Link>
        </Button>
      </div>
    );
  }

  return (
    <main className="py-8 w-11/12">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <div className="relative rounded-lg overflow-hidden h-[300px] md:h-[400px]">
            <Image
              src={campaignData?.image || "/placeholder.svg"}
              alt={campaignData?.title || "Campaign Title"}
              fill
              className="object-cover"
            />
            <Badge className="absolute top-4 right-4 bg-teal-600">
              {(campaignData?.category ?? "").charAt(0).toUpperCase() +
                (campaignData?.category ?? "").slice(1)}
            </Badge>
            {campaignData?.verified && (
              <Badge className="absolute top-4 left-4 bg-blue-600 flex items-center gap-1">
                <CheckCircle className="h-3 w-3" /> Verified
              </Badge>
            )}
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4">{campaignData?.title}</h1>
            <div className="flex items-center gap-3 mb-6">
              <Avatar>
                <AvatarImage
                  src={campaignData?.creatorImage || "/placeholder.svg"}
                  alt={campaignData?.creatorName}
                />
                <AvatarFallback>
                  {campaignData?.creatorName.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">
                  {campaignData?.creatorName}
                </p>
                <p className="text-xs text-muted-foreground">
                  {campaignData?.location}
                </p>
              </div>
            </div>
          </div>

          <Tabs defaultValue="story">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="story">Story</TabsTrigger>
              <TabsTrigger value="updates">Updates</TabsTrigger>
              <TabsTrigger value="comments">Comments</TabsTrigger>
              <TabsTrigger value="faqs">FAQs</TabsTrigger>
            </TabsList>
            <TabsContent value="story" className="pt-6 px-6">
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{
                  __html: campaignData?.description ?? "",
                }}
              />
            </TabsContent>
            <TabsContent value="updates" className="pt-6">
              <CampaignUpdates
                campaignId={params.id}
                updates={(campaignData?.updates.data || []).map((update) => ({
                  ...update,
                  creatorImage: update.creatorImage ?? undefined,
                }))}
              />
            </TabsContent>
            <TabsContent value="comments" className="pt-6">
              <CampaignComments
                campaignId={params.id}
                comments={(campaignData?.donorComments.data || []).map(
                  (comment) => ({
                    ...comment,
                    userImage: comment.userImage ?? undefined,
                  })
                )}
              />
            </TabsContent>
            <TabsContent value="faqs" className="pt-6">
              <CampaignFAQs faqs={campaignData?.faqs.data || []} />
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <div className="sticky top-24 rounded-lg border p-6 space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <h3 className="text-2xl font-bold">
                  {formatCurrency(campaignData?.amountRaised ?? 0)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  of {formatCurrency(campaignData?.goalAmount ?? 0)} goal
                </p>
              </div>
              <Progress
                value={calculateProgress(
                  campaignData?.amountRaised ?? 0,
                  campaignData?.goalAmount ?? 0
                )}
                className="h-2"
              />
              <div className="flex justify-between text-sm pt-1">
                <p>{campaignData?.donorsCount} donors</p>
                <p>
                  {calculateDaysLeft(campaignData?.endDate || "-")} days left
                </p>
              </div>
            </div>

            <DonateButton
              campaignId={params.id}
              creatorId={campaignData?.creatorId || ""}
              session={session}
            />

            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="flex-1">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
              <Button variant="outline" size="icon" className="h-9 w-9">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-9 w-9">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-9 w-9">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-9 w-9">
                <Mail className="h-4 w-4" />
              </Button>
            </div>

            <div className="pt-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground w-full justify-start"
              >
                <Flag className="mr-2 h-4 w-4" />
                Report Campaign
              </Button>
            </div>

            <div className="border-t pt-4 mt-4">
              <h4 className="font-medium mb-2">Campaign Details</h4>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Created</dt>
                  <dd>
                    {new Date(
                      campaignData?.startDate || ""
                    ).toLocaleDateString()}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Ended</dt>
                  <dd>
                    {new Date(campaignData?.endDate || "").toLocaleDateString()}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Category</dt>
                  <dd>{campaignData?.category}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Location</dt>
                  <dd>{campaignData?.location}</dd>
                </div>
              </dl>
            </div>

            {campaignData?.tags && campaignData?.tags.length > 0 && (
              <div className="border-t pt-4 mt-4">
                <h4 className="font-medium mb-2">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {campaignData?.tags.map((tag: string) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="bg-teal-100 border-teal-500 text-teal-700"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t">
        <h2 className="text-2xl font-bold mb-6">Donors</h2>
        <CampaignDonors
          campaignId={params.id}
          donors={campaignData?.donorTransactions?.data || []}
        />
      </div>
    </main>
  );
}
