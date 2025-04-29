"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const updateFormSchema = z.object({
  title: z
    .string()
    .min(5, "Title must be at least 5 characters")
    .max(100, "Title must be less than 100 characters"),
  content: z.string().min(20, "Update content must be at least 20 characters"),
});

type UpdateFormValues = z.infer<typeof updateFormSchema>;

interface UpdateModalProps {
  campaignId: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function UpdateModal({
  campaignId,
  isOpen,
  onClose,
}: UpdateModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<UpdateFormValues>({
    resolver: zodResolver(updateFormSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  function onSubmit(data: UpdateFormValues) {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Submitting update:", data, "for campaign:", campaignId);

      toast({
        title: "Update posted!",
        description:
          "Your update has been successfully posted to your campaign.",
      });

      setIsSubmitting(false);
      form.reset();
      onClose();
    }, 1000);
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Post Campaign Update</DialogTitle>
          <DialogDescription>
            Share progress, milestones, or news with your donors to keep them
            engaged.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Update Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g., 'Major Milestone Reached!'"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Update Content</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Share details about your progress, challenges, or successes..."
                      className="min-h-[200px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Posting..." : "Post Update"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
