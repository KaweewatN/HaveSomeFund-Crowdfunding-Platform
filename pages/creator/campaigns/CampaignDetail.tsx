"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import apiService from "@/services/apiService";
import DashboardShell from "@/pages/creator/dashboard/components/dashboard-shell";
import CampaignStats from "../campaigns/components/campaign-stats";
import CampaignDonations from "../campaigns/components/campaign-donations";
import CampaignUpdates from "../campaigns/components/campaign-updates";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import Loading from "@/components/core/loading";

export default function CampaignDetails({
  params,
}: {
  params: { id: string };
}) {
  const [campaign, setCampaign] = useState<any>([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const data = await apiService.get<any>(
          `/creator/my-campaigns/${params.id}`
        );
        setCampaign(data?.campaign || []);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    };
    fetchCampaigns();
  }, []);

  if (!campaign) {
    return <Loading />;
  }

  return (
    <div className="flex min-h-screen flex-col py-8 w-10/12 md:w-9/12">
      <main className="flex w-full flex-col overflow-hidden">
        <DashboardShell className="mb-8">
          <div className="flex items-center">
            <Button variant="ghost" size="sm" className="mr-2" asChild>
              <Link href="/creator/dashboard" scroll={true}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Campaigns
              </Link>
            </Button>
          </div>
        </DashboardShell>

        <div className="flex flex-col gap-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            {campaign.title}
          </h2>
          <p className="text-muted-foreground">{campaign.description}</p>
          <div className="flex flex-wrap gap-x-2 ">
            {campaign.tags &&
              campaign.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="w-fit inline-flex items-center rounded-full bg-teal-100 px-2 py-1 text-xs font-medium text-teal-700"
                >
                  {tag}
                </span>
              ))}
          </div>
        </div>

        <CampaignStats
          amountRaised={campaign.amountRaised}
          goalAmount={campaign.goalAmount}
          donorsCount={campaign.donorsCount}
        />

        <Tabs defaultValue="donations" className="mt-8">
          <TabsList className="mb-4">
            <TabsTrigger value="donations">Donations</TabsTrigger>
            <TabsTrigger value="updates">Updates</TabsTrigger>
          </TabsList>
          <TabsContent value="donations">
            <CampaignDonations
              donations={campaign?.donorTransactions?.data || []}
            />
          </TabsContent>
          <TabsContent value="updates">
            <CampaignUpdates updates={campaign?.updates?.data || []} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
