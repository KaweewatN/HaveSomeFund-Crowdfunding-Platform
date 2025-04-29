"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Edit,
  Eye,
  MessageSquare,
  MoreHorizontal,
  Trash2,
  DollarSign,
  Plus,
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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function MyCampaignsContainer({
  myCampaigns,
}: {
  myCampaigns: any[];
}) {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const filteredCampaigns = myCampaigns
    .filter((campaign) => {
      // Filter by tab
      if (activeTab !== "all" && campaign.status !== activeTab) return false;

      // Filter by search query
      if (
        searchQuery &&
        !campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !campaign.description.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      // Sort campaigns
      switch (sortBy) {
        case "newest":
          return b.id.localeCompare(a.id);
        case "oldest":
          return a.id.localeCompare(b.id);
        case "most-funded":
          return b.raised - a.raised;
        case "least-funded":
          return a.raised - b.raised;
        case "ending-soon":
          return (a.daysLeft || 0) - (b.daysLeft || 0);
        default:
          return 0;
      }
    });

  return (
    <div className="space-y-6">
      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="draft">Drafts</TabsTrigger>
            <TabsTrigger value="ended">Ended</TabsTrigger>
          </TabsList>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <div className="relative">
              <Input
                placeholder="Search campaigns..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-[200px]"
              />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
                <SelectItem value="most-funded">Most Funded</SelectItem>
                <SelectItem value="least-funded">Least Funded</SelectItem>
                <SelectItem value="ending-soon">Ending Soon</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value={activeTab} className="mt-6">
          {filteredCampaigns.length === 0 ? (
            <div className="flex h-[400px] w-full flex-col items-center justify-center rounded-md border border-dashed p-8 text-center">
              <h3 className="mt-4 text-lg font-semibold">No campaigns found</h3>
              <p className="mb-4 mt-2 text-sm text-muted-foreground">
                {searchQuery
                  ? "No campaigns match your search criteria."
                  : `You don't have any ${
                      activeTab !== "all" ? activeTab : ""
                    } campaigns yet.`}
              </p>
              <Button asChild>
                <Link href="/dashboard/campaigns/new">Start New Campaign</Link>
              </Button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {filteredCampaigns.map((campaign) => (
                <Card
                  key={campaign.id}
                  className="overflow-hidden flex flex-col"
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
                            <DropdownMenuItem asChild>
                              <Link
                                href={`/dashboard/campaigns/${campaign.id}`}
                              >
                                <Eye className="mr-2 h-4 w-4" />
                                <span>View Details</span>
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link
                                href={`/dashboard/campaigns/${campaign.id}/edit`}
                              >
                                <Edit className="mr-2 h-4 w-4" />
                                <span>Edit Campaign</span>
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <MessageSquare className="mr-2 h-4 w-4" />
                              <span>Post Update</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link
                                href={`/creator/my-campaigns/${campaign.id}?tab=donations`}
                              >
                                <DollarSign className="mr-2 h-4 w-4" />
                                <span>View Donations</span>
                              </Link>
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
                        {campaign.description}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">
                          ${Number(campaign.raised || 0).toLocaleString()}{" "}
                          raised
                        </span>
                        <span className="text-muted-foreground">
                          ${Number(campaign.goal || 0).toLocaleString()} goal
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
                  <CardFooter className="flex justify-between pt-4">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/dashboard/campaigns/${campaign.id}`}>
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
    </div>
  );
}
