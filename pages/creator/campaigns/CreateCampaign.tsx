"use client";

import type React from "react";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
// ui
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { isBefore } from "date-fns";
import { CalendarIcon } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { toastSuccess, toastError } from "@/components/core/appToast";
//zod
import {
  campaignSchema,
  campaignSchemaType,
} from "../../../common/createNewCampaign.zod";
import { zodResolver } from "@hookform/resolvers/zod";
// constants
import { categories } from "../../../common/constants/creatorConstants";
// API service
import apiService from "@/services/apiService";

export default function CreateCampaign() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [activeTab, setActiveTab] = useState("basics");
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [tags, setTags] = useState<string[]>([]);

  const form = useForm<campaignSchemaType>({
    resolver: zodResolver(campaignSchema),
    defaultValues: {
      title: "",
      description: "",
      shortDescription: "",
      image: "",
      category: "",
      tags: [],
      location: "",
      goalAmount: undefined,
      startDate: undefined,
      endDate: undefined,
    },
  });

  const onStartDateChange = (date: Date) => {
    setStartDate(date);
    form.setValue("startDate", date, { shouldValidate: true });
  };

  const onEndDateChange = (date: Date) => {
    setEndDate(date);
    form.setValue("endDate", date, { shouldValidate: true });
  };

  console.log(form.getValues());

  const onSubmit = (data: campaignSchemaType) => {
    const campaignData = {
      id: `c-${Date.now()}`,
      ...data,
      tags,
      startDate: startDate?.toISOString(),
      endDate: endDate?.toISOString(),
      amountRaised: 0,
      donorsCount: 0,
      status: "active",
      featured: false,
      verified: true,
    };
    startTransition(async () => {
      try {
        const response = await apiService.post(
          "/creator/create-campaign",
          campaignData
        );
        console.log("Campaign created successfully:", response);
        toastSuccess("Successfully created campaign!");
        router.push("/creator/dashboard");
      } catch (error) {
        console.error("Error creating campaign:", error);
        toastError("Failed to create campaign. Please try again.");
      }
    });
  };

  const addTag = (tag: string) => {
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <main className="container px-4 md:px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Create Your Campaign</h1>
        <p className="text-muted-foreground mb-8">
          Fill out the details below to start your fundraising campaign.
        </p>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 items-start">
            <TabsTrigger value="basics">Basics</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="goal">Goal & Dates</TabsTrigger>
          </TabsList>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {/* BASICS TAB */}
              <TabsContent value="basics">
                <Card>
                  <CardHeader>
                    <CardTitle>Campaign Basics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Campaign Title</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter a clear, specific title"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Enter a clear and specific title for your campaign.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="shortDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Short Description</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Briefly describe your campaign"
                              className="resize-none h-20"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Provide a brief summary of your campaign.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="image"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Image URL</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="https://example.com/image.jpg"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Provide a URL to an image that represents your
                            campaign.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button onClick={() => setActiveTab("details")}>
                      Continue
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              {/* DETAILS TAB */}
              <TabsContent value="details">
                <Card>
                  <CardHeader>
                    <CardTitle>Campaign Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Provide a detailed description of your campaign"
                              className="min-h-[200px]"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Provide a detailed description of your campaign.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Category</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {categories.map((category) => (
                                <SelectItem
                                  key={category.id}
                                  value={category.id}
                                >
                                  {category.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            Select the category that best fits your campaign.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Location</FormLabel>
                          <FormControl>
                            <Input placeholder="City, Province" {...field} />
                          </FormControl>
                          <FormDescription>
                            Specify the location of your campaign.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div>
                      <Label>Tags</Label>
                      <div className="flex items-center space-x-2">
                        <Input
                          placeholder="Enter a tag"
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              addTag(e.currentTarget.value);
                              e.currentTarget.value = "";
                            }
                          }}
                        />
                      </div>
                      <div className="flex flex-wrap mt-2 space-x-2">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-teal-100 border-teal-500 text-teal-700 px-2 py-1 rounded-full text-sm flex items-center space-x-1"
                          >
                            {tag}
                            <button
                              type="button"
                              onClick={() => removeTag(tag)}
                              className="text-red-500 mx-1"
                            >
                              &times;
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      variant="outline"
                      onClick={() => setActiveTab("basics")}
                    >
                      Back
                    </Button>
                    <Button onClick={() => setActiveTab("goal")}>
                      Continue
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              {/* GOAL & DATES TAB */}
              <TabsContent value="goal">
                <Card>
                  <CardHeader>
                    <CardTitle>Goal & Dates</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <FormField
                      control={form.control}
                      name="goalAmount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Funding Goal (THB)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              min={1}
                              {...field}
                              onChange={(e) =>
                                field.onChange(
                                  e.target.value ? +e.target.value : undefined
                                )
                              }
                            />
                          </FormControl>
                          <FormDescription>
                            Specify the amount you aim to raise.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div>
                      <Label>Start Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {startDate ? (
                              format(startDate, "PPP")
                            ) : (
                              <span>Select start date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={startDate}
                            onSelect={(date) => {
                              if (date && !isBefore(date, new Date())) {
                                if (date) {
                                  onStartDateChange(date);
                                }
                              }
                            }}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormDescription>
                        Select the start date for your campaign.
                      </FormDescription>
                    </div>
                    <div>
                      <Label>End Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {endDate ? (
                              format(endDate, "PPP")
                            ) : (
                              <span>Select end date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={endDate}
                            onSelect={(date) => {
                              if (date && !isBefore(date, new Date())) {
                                if (date) {
                                  onEndDateChange(date);
                                }
                              }
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                      <FormDescription>
                        Select the end date for your campaign. Ensure it is
                        after the start date.
                      </FormDescription>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      variant="outline"
                      onClick={() => setActiveTab("details")}
                    >
                      Back
                    </Button>
                    <Button type="submit" disabled={isPending}>
                      {isPending ? "Submitting..." : "Submit Campaign"}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </form>
          </Form>
        </Tabs>
      </div>
    </main>
  );
}
