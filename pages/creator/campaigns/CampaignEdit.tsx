import Link from "next/link";
import DashboardShell from "../dashboard/components/dashboard-shell";
import CampaignEditForm from "./components/campaign-edit-form";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function EditCampaign({ params }: { params: { id: string } }) {
  return (
    <div className="flex min-h-screen flex-col p-8">
      <main className="flex w-full flex-col overflow-hidden">
        <DashboardShell className="mb-8">
          <div className="flex items-center">
            <Button variant="ghost" size="sm" className="mr-2" asChild>
              <Link href={`/creator/dashboard/`}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Campaign
              </Link>
            </Button>
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Edit Campaign</h2>
            <p className="text-muted-foreground">
              Update your campaign details and settings
            </p>
          </div>
        </DashboardShell>

        <CampaignEditForm campaignId={params.id} />
      </main>
    </div>
  );
}
