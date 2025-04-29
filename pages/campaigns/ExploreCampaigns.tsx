"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  formatCurrency,
  calculateDaysLeft,
  calculateProgress,
} from "@/lib/utils";
import { Filter, Grid3X3, List } from "lucide-react";
//compoenents
import ExploreCampaignFAQ from "./components/ExploreCampaignFAQ";
import ExploreCampaignSearchbar from "./components/ExploreCampaignSearchbar";
import Loading from "@/components/core/loading";
// constants
import { categoriesSelect } from "@/common/constants/Categories";
// api
import apiService from "@/services/apiService";
import { CampaignResponse } from "@/app/api/campaigns/short/campaign.type";

export default function ExploreCampaigns() {
  const searchParams = useSearchParams();
  const categoryFromQuery = searchParams?.get("category") || "all";

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] =
    useState<string>(categoryFromQuery);
  const [sortOption, setSortOption] = useState<string>("trending");
  const [viewMode, setViewMode] = useState<string>("grid");
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [fundingRange, setFundingRange] = useState<number[]>([0, 100]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [allCampaigns, setAllCampaigns] = useState<any[]>([]);
  const [filteredCampaigns, setFilteredCampaigns] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    const fetchCampaigns = async () => {
      try {
        const response = await apiService.get<CampaignResponse>(
          "/campaigns/short?limit=15"
        );
        setAllCampaigns(response.campaigns);
        setFilteredCampaigns(response.campaigns);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCampaigns();
  }, []);

  // Extract unique locations from campaigns
  const locations = Array.from(
    new Set(allCampaigns.map((campaign) => campaign.location))
  );

  // Apply filters and sorting
  useEffect(() => {
    try {
      setLoading(true);
      let result = [...allCampaigns];
      // Apply search filter
      if (searchTerm) {
        result = result.filter(
          (campaign) =>
            campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            campaign.shortDescription
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
        );
      }

      // Apply category filter
      if (selectedCategory !== "all") {
        result = result.filter(
          (campaign) =>
            campaign.category.toLowerCase() === selectedCategory.toLowerCase()
        );
      }

      // Apply location filter
      if (selectedLocations.length > 0) {
        result = result.filter((campaign) =>
          selectedLocations.includes(campaign.location)
        );
      }

      // Apply funding range filter
      result = result.filter((campaign) => {
        const progress = calculateProgress(
          campaign.amountRaised,
          campaign.goalAmount
        );
        return progress >= fundingRange[0] && progress <= fundingRange[1];
      });

      // Apply sorting
      switch (sortOption) {
        case "newest":
          result = [...result].sort(
            (a, b) =>
              new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
          );
          break;
        case "endingSoon":
          result = [...result].sort(
            (a, b) =>
              calculateDaysLeft(a.endDate) - calculateDaysLeft(b.endDate)
          );
          break;
        case "mostFunded":
          result = [...result].sort((a, b) => b.amountRaised - a.amountRaised);
          break;
        case "trending":
        default:
          result = [...result].sort((a, b) => b.donorsCount - a.donorsCount);
          break;
      }
      setFilteredCampaigns(result);
    } catch (error) {
      console.error("Error filtering campaigns:", error);
    } finally {
      setLoading(false);
    }
  }, [
    searchTerm,
    selectedCategory,
    sortOption,
    selectedLocations,
    fundingRange,
    allCampaigns,
  ]);

  const handleLocationChange = (location: string) => {
    setSelectedLocations((prev) =>
      prev.includes(location)
        ? prev.filter((loc) => loc !== location)
        : [...prev, location]
    );
  };

  return (
    <main className="flex-1 w-full flex flex-col items-center">
      {/* Hero Section */}
      <ExploreCampaignSearchbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* Filters and Results */}
      <section className="pt-8 pb-16 md:w-11/12 lg:w-10/12">
        <div className="px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between">
            <div className="flex flex-col sm:flex-row gap-4">
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categoriesSelect.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="trending">Trending</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="endingSoon">Ending Soon</SelectItem>
                  <SelectItem value="mostFunded">Most Funded</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                className="sm:w-auto w-full"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>

            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
                aria-label="Grid view"
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
                aria-label="List view"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {showFilters && (
            <div className="mb-8 p-4 border rounded-lg">
              <h3 className="font-medium mb-4">Advanced Filters</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="text-sm font-medium mb-2">Funding Progress</h4>
                  <div className="px-2">
                    <Slider
                      defaultValue={[0, 100]}
                      max={100}
                      step={1}
                      value={fundingRange}
                      onValueChange={setFundingRange}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{fundingRange[0]}% funded</span>
                      <span>{fundingRange[1]}% funded</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Location</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {locations.map((location) => (
                      <div
                        key={location}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={`location-${location}`}
                          checked={selectedLocations.includes(location)}
                          onCheckedChange={() => handleLocationChange(location)}
                        />
                        <Label htmlFor={`location-${location}`}>
                          {location}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mb-4">
            <p className="text-muted-foreground">
              Showing {filteredCampaigns.length}{" "}
              {filteredCampaigns.length === 1 ? "campaign" : "campaigns"}
            </p>
          </div>

          {loading ? (
            <Loading />
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 md:px-1">
              {filteredCampaigns.map((campaign) => (
                <Link href={`/campaigns/${campaign.id}`} key={campaign.id}>
                  <Card
                    key={campaign.id}
                    className="overflow-hidden flex flex-col h-full hover:border-teal-500 transition-colors duration-200"
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={campaign.image || "/placeholder.svg"}
                        alt={campaign.title}
                        fill
                        className="object-cover"
                      />
                      <Badge className="absolute top-2 right-2 bg-teal-600">
                        {campaign.category.charAt(0).toUpperCase() +
                          campaign.category.slice(1)}
                      </Badge>
                    </div>
                    <CardContent className="flex-1 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="relative h-6 w-6 rounded-full overflow-hidden">
                          <Image
                            src={campaign.creatorImage || "/placeholder.svg"}
                            alt={campaign.creatorName}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {campaign.creatorName}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 line-clamp-2">
                        {campaign.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {campaign.shortDescription.length > 40
                          ? `${campaign.shortDescription.substring(0, 36)}...`
                          : campaign.shortDescription}
                      </p>
                      <div className="space-y-3 mt-auto">
                        <Progress
                          value={calculateProgress(
                            campaign.amountRaised,
                            campaign.goalAmount
                          )}
                          className="h-2"
                        />
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">
                            {formatCurrency(campaign.amountRaised)} raised
                          </span>
                          <span className="text-muted-foreground">
                            {calculateProgress(
                              campaign.amountRaised,
                              campaign.goalAmount
                            )}
                            % of {formatCurrency(campaign.goalAmount)}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 py-4 border-t bg-muted/50 flex justify-between">
                      <span className="text-sm">
                        {campaign.donorsCount} donors
                      </span>
                      <span className="text-sm">
                        {calculateDaysLeft(campaign.endDate)} days left
                      </span>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex flex-col space-y-6">
              {filteredCampaigns.map((campaign) => (
                <Link href={`/campaigns/${campaign.id}`} key={campaign.id}>
                  <Card key={campaign.id} className="hover:border-teal-500">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-[240px_1fr] gap-4">
                        <div className="relative h-[160px] md:h-full">
                          <Image
                            src={campaign.image || "/placeholder.svg"}
                            alt={campaign.title}
                            fill
                            className="object-cover rounded-l-lg"
                          />
                          <Badge className="absolute top-2 right-2 bg-teal-600">
                            {campaign.category.charAt(0).toUpperCase() +
                              campaign.category.slice(1)}
                          </Badge>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="relative h-6 w-6 rounded-full overflow-hidden">
                              <Image
                                src={
                                  campaign.creatorImage || "/placeholder.svg"
                                }
                                alt={campaign.creatorName}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {campaign.creatorName} • {campaign.location}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold mb-2">
                            {campaign.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {campaign.shortDescription.length > 40
                              ? `${campaign.shortDescription.substring(
                                  0,
                                  36
                                )}...`
                              : campaign.shortDescription}
                          </p>
                          <div className="space-y-3">
                            <Progress
                              value={calculateProgress(
                                campaign.amountRaised,
                                campaign.goalAmount
                              )}
                              className="h-2"
                            />
                            <div className="flex justify-between text-sm">
                              <span className="font-medium">
                                {formatCurrency(campaign.amountRaised)} raised
                              </span>
                              <span className="text-muted-foreground">
                                {calculateProgress(
                                  campaign.amountRaised,
                                  campaign.goalAmount
                                )}
                                % of {formatCurrency(campaign.goalAmount)}
                              </span>
                            </div>
                            <div className="flex justify-between text-sm text-muted-foreground">
                              <span>{campaign.donorsCount} donors</span>
                              <span>
                                {calculateDaysLeft(campaign.endDate)} days left
                              </span>
                            </div>
                          </div>
                          <div className="mt-4">
                            <Button asChild size="sm">
                              <Link href={`/campaigns/${campaign.id}`}>
                                View Campaign
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {!loading && !filteredCampaigns && (
        <div className="text-center py-12">
          <h3 className="text-xl font-bold mb-2">No campaigns found</h3>
          <p className="text-muted-foreground mb-6">
            Try adjusting your filters or search terms
          </p>
          <Button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("all");
              setSelectedLocations([]);
              setFundingRange([0, 100]);
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}

      {/* FAQ Accordion */}
      <ExploreCampaignFAQ />
    </main>
  );
}
