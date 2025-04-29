"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Edit,
  Eye,
  MessageSquare,
  MoreHorizontal,
  Trash2,
  DollarSign,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Loading from "@/components/core/loading";

export default function CampaignList({
  activeTab,
  setActiveTab,
  loading,
  campaigns = [],
}: {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  campaigns?: any[];
}) {
  const router = useRouter();
  return (
    <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
      <TabsList className="mb-4">
        <TabsTrigger value="all">All Campaigns</TabsTrigger>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="completed">Completed</TabsTrigger>
        <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
      </TabsList>

      <TabsContent value={activeTab} className="space-y-4 w-full">
        {loading ? (
          <Loading />
        ) : campaigns.length === 0 ? (
          <div className="flex w-full flex-col items-center justify-center rounded-md border border-dashed p-8 text-center">
            <h3 className="mt-4 text-lg font-semibold">No campaigns found</h3>
            <p className="mb-4 mt-2 text-sm text-muted-foreground">
              You don't have any {activeTab !== "all" ? activeTab : ""}
              campaigns yet.
            </p>
            <Button asChild>
              <Link href="/dashboard/campaigns/new">Create a Campaign</Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {campaigns.map((campaign: any) => (
              <Card
                key={campaign.id}
                className="overflow-hidden cursor-pointer"
                onClick={() =>
                  router.push(`/creator/my-campaigns/${campaign.id}`)
                }
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={campaign.image || "/placeholder.svg"}
                    alt={campaign.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="line-clamp-1">
                        {campaign.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-1">
                        {campaign.category}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={
                          campaign.status === "active"
                            ? "default"
                            : campaign.status === "cancelled"
                            ? "outline"
                            : "secondary"
                        }
                        className={
                          campaign.status === "active"
                            ? "bg-teal-600"
                            : campaign.status === "cancelled"
                            ? "bg-yellow-600"
                            : "bg-gray-600"
                        }
                      >
                        {campaign.status === "active"
                          ? "Active"
                          : campaign.status === "cancelled"
                          ? "cancelled"
                          : "completed"}
                      </Badge>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            <span>View Campaign</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            <span>Edit Campaign</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <MessageSquare className="mr-2 h-4 w-4" />
                            <span>Post Update</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <DollarSign className="mr-2 h-4 w-4" />
                            <span>View Donations</span>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive focus:text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            <span>Delete</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {campaign.shortDescription}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">
                        ${campaign.amountRaised.toLocaleString()} raised
                      </span>
                      <span className="text-muted-foreground">
                        ${campaign.goalAmount.toLocaleString()} goal
                      </span>
                    </div>
                    <Progress
                      value={
                        (campaign.amountRaised / campaign.goalAmount) * 100
                      }
                      className="h-2"
                    />
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{campaign.donorsCount} donors</span>
                      {new Date(campaign.endDate) > new Date() ? (
                        <span>
                          {Math.ceil(
                            (Date.parse(campaign.endDate) - Date.now()) /
                              (1000 * 60 * 60 * 24)
                          )}{" "}
                          days left
                        </span>
                      ) : (
                        <span>Campaign completed</span>
                      )}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/creator/my-campaigns/${campaign.id}`}>
                      <Eye className="mr-2 h-4 w-4" />
                      View
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={`/creator/my-campaigns/${campaign.id}/edit`}>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </TabsContent>
    </Tabs>
  );
}
