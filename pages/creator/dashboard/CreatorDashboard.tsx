"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import apiService from "@/services/apiService";
import DashboardShell from "./components/dashboard-shell";
import CampaignList from "./components/campaign-list";
import DashboardStats from "./components/dashboard-stats";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function CreatorDashboard() {
  const { data: session } = useSession();
  const userName = session?.user?.name || "Creator";
  const [summary, setSummary] = useState<any>([]);
  const [activeTab, setActiveTab] = useState("all");
  const [campaigns, setCampaigns] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCampaigns() {
      setLoading(true);
      try {
        const data = await apiService.get<any>(
          `/creator/my-campaigns?status=${activeTab}`
        );
        setCampaigns(data.campaigns || []);
        setSummary(data.summary || []);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
        setCampaigns([]);
      } finally {
        setLoading(false);
      }
    }

    fetchCampaigns();
  }, [activeTab]);

  return (
    <div className="flex min-h-screen py-8 flex-col w-10/12 md:w-9/12">
      <main className="flex flex-col overflow-hidden">
        <DashboardShell className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl tracking-tight">
                Welcome back, <span className="font-semibold">{userName}</span>
              </h2>
              <p className="text-muted-foreground">
                Here's an overview of your fundraising campaigns
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

        <DashboardStats summary={summary} />

        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-medium">All Campaigns</h3>
          <Button variant="outline" asChild>
            <Link href="/creator/my-campaigns">My campaigns</Link>
          </Button>
        </div>

        <CampaignList
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          campaigns={campaigns}
          loading={loading}
        />
      </main>
    </div>
  );
}
