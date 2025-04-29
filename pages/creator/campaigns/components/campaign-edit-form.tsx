"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, ImagePlus, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "@/components/ui/use-toast";

// Mock campaign data - in a real app, this would come from an API
const getCampaignData = (id: string) => {
  return {
    id,
    title: "Help Build a Community Garden",
    category: "community",
    goal: 10000,
    endDate: new Date(2023, 5, 15),
    story:
      "We're raising funds to build a community garden in the heart of our neighborhood. This garden will provide fresh produce for local families, create a beautiful green space, and offer educational opportunities for children and adults alike.\n\nThe funds will be used for:\n- Purchasing soil, seeds, and plants\n- Building raised garden beds and pathways\n- Installing irrigation systems\n- Creating educational signage\n- Purchasing tools and equipment",
    mainImage: "/placeholder.svg?height=300&width=600",
    videoUrl: "",
    isPublic: true,
    allowAnonymousDonations: true,
    showDonorComments: true,
    enableTeamFundraising: false,
  };
};

const formSchema = z.object({
  title: z
    .string()
    .min(5, "Title must be at least 5 characters")
    .max(100, "Title must be less than 100 characters"),
  category: z.string().min(1, "Please select a category"),
  goal: z.coerce.number().min(100, "Goal must be at least $100"),
  endDate: z
    .date()
    .refine((date) => date > new Date(), "End date must be in the future"),
  story: z.string().min(100, "Story must be at least 100 characters"),
  mainImage: z.string().optional(),
  videoUrl: z.string().url().optional().or(z.literal("")),
  isPublic: z.boolean(),
  allowAnonymousDonations: z.boolean(),
  showDonorComments: z.boolean(),
  enableTeamFundraising: z.boolean(),
});

type FormValues = z.infer<typeof formSchema>;

// Sample categories
const categories = [
  { id: "education", name: "Education" },
  { id: "medical", name: "Medical" },
  { id: "emergency", name: "Emergency Relief" },
  { id: "animals", name: "Animals" },
  { id: "environment", name: "Environment" },
  { id: "community", name: "Community" },
  { id: "creative", name: "Creative" },
  { id: "business", name: "Business" },
  { id: "other", name: "Other" },
];

interface CampaignEditFormProps {
  campaignId: string;
}

export default function CampaignEditForm({
  campaignId,
}: CampaignEditFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const campaignData = getCampaignData(campaignId);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: campaignData.title,
      category: campaignData.category,
      goal: campaignData.goal,
      endDate: campaignData.endDate,
      story: campaignData.story,
      mainImage: campaignData.mainImage,
      videoUrl: campaignData.videoUrl,
      isPublic: campaignData.isPublic,
      allowAnonymousDonations: campaignData.allowAnonymousDonations,
      showDonorComments: campaignData.showDonorComments,
      enableTeamFundraising: campaignData.enableTeamFundraising,
    },
  });

  function onSubmit(data: FormValues) {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Updating campaign:", data);

      toast({
        title: "Campaign updated!",
        description: "Your campaign has been successfully updated.",
      });

      setIsSubmitting(false);
      router.push(`/dashboard/campaigns/${campaignId}`);
    }, 1500);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Tabs defaultValue="basics" className="w-full">
          <TabsList className="mb-4 w-full justify-start">
            <TabsTrigger value="basics">Basic Info</TabsTrigger>
            <TabsTrigger value="story">Story</TabsTrigger>
            <TabsTrigger value="media">Media</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="basics">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>
                  Edit the core details of your campaign
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Campaign Title</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
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
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category.id} value={category.id}>
                              {category.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="goal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fundraising Goal ($)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) =>
                            field.onChange(e.target.valueAsNumber)
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="endDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>End Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="story">
            <Card>
              <CardHeader>
                <CardTitle>Campaign Story</CardTitle>
                <CardDescription>
                  Edit your campaign's story and description
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FormField
                  control={form.control}
                  name="story"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Campaign Story</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell your campaign's story..."
                          className="min-h-[300px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Describe your campaign in detail. What are you raising
                        money for? Why is this important? How will the funds be
                        used?
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="media">
            <Card>
              <CardHeader>
                <CardTitle>Campaign Media</CardTitle>
                <CardDescription>
                  Update your campaign's images and videos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="mainImage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Main Campaign Image</FormLabel>
                      <FormControl>
                        <div className="space-y-4">
                          <div className="flex items-center justify-center">
                            <img
                              src={field.value || "/placeholder.svg"}
                              alt="Campaign preview"
                              className="max-h-[200px] rounded-md object-contain"
                            />
                          </div>
                          <div
                            className={cn(
                              "flex flex-col items-center justify-center rounded-md border border-dashed p-4 text-center",
                              "hover:bg-muted/50 cursor-pointer"
                            )}
                          >
                            <ImagePlus className="mb-2 h-8 w-8 text-muted-foreground" />
                            <p className="mb-2 text-sm font-medium">
                              Click to replace image
                            </p>
                            <p className="text-xs text-muted-foreground">
                              PNG, JPG or JPEG (max 5MB)
                            </p>
                            <Input
                              id="main-image-upload"
                              type="file"
                              accept="image/*"
                              className="hidden"
                            />
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="videoUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Campaign Video URL (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://www.youtube.com/watch?v=..."
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Add a YouTube or Vimeo URL to include a video on your
                        campaign page.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Campaign Settings</CardTitle>
                <CardDescription>
                  Configure your campaign's visibility and donation settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="isPublic"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">
                          Campaign Visibility
                        </FormLabel>
                        <FormDescription>
                          Make your campaign visible to the public
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="allowAnonymousDonations"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">
                          Anonymous Donations
                        </FormLabel>
                        <FormDescription>
                          Allow donors to contribute anonymously
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="showDonorComments"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">
                          Donor Comments
                        </FormLabel>
                        <FormDescription>
                          Display donor comments on your campaign page
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="enableTeamFundraising"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">
                          Team Fundraising
                        </FormLabel>
                        <FormDescription>
                          Allow others to join your campaign as team members
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-6 flex justify-end space-x-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push(`/dashboard/campaigns/${campaignId}`)}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving Changes...
              </>
            ) : (
              "Save Changes"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
