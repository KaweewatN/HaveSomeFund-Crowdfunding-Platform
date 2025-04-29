"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import DashboardShell from "../dashboard/components/dashboard-shell";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import MyCampaignsContainer from "../campaigns/components/my-campaigns";

import apiService from "@/services/apiService";

export default function MyCampaigns() {
  const [campaigns, setCampaigns] = useState<any>([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const data = await apiService.get<any>("/creator/my-campaigns");
        setCampaigns(data?.campaigns || []);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    };
    fetchCampaigns();
  }, []);

  return (
    <div className="flex min-h-screen flex-col w-full">
      <div className="px-4 py-10 sm:px-6 lg:px-10">
        <main className="flex w-full flex-col overflow-hidden">
          <DashboardShell className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">
                  My Campaigns
                </h2>
                <p className="text-muted-foreground">
                  View and manage all your fundraising campaigns.
                </p>
              </div>
              <div className="mt-4 flex-shrink-0 md:mt-0">
                <Button asChild className="flex items-center gap-1">
                  <Link href="/creator/my-campaigns/create">
                    <PlusCircle className="h-4 w-4" />
                    <span>Start a New Campaign</span>
                  </Link>
                </Button>
              </div>
            </div>
          </DashboardShell>

          <MyCampaignsContainer myCampaigns={campaigns} />
        </main>
      </div>
    </div>
  );
}
