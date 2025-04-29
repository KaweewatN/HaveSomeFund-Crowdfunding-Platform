import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Schema validation using Zod
export const campaignSchema = z
  .object({
    title: z
      .string()
      .min(8, { message: "Title should be at least 8 characters" })
      .max(50, { message: "Title must be at most 50 characters" }),
    description: z.string().min(20, { message: "Description is required" }),
    shortDescription: z
      .string()
      .min(10, { message: "Short description should be at least 8 characters" })
      .max(100, { message: "Short description must be at most 80 characters" }),
    image: z.string().url({ message: "Invalid image URL" }),
    category: z.string().min(1, { message: "Category is required" }),
    tags: z.array(z.string()).optional(),
    location: z.string().min(6, { message: "Location is required" }),
    goalAmount: z
      .number({ invalid_type_error: "Goal amount must be a number" })
      .min(1, { message: "Goal amount must be at least 1" }),
    startDate: z.date({ required_error: "Start date is required" }),
    endDate: z.date({ required_error: "End date is required" }),
  })
  .refine((data) => data.startDate < data.endDate, {
    message: "Start date must be before end date",
    path: ["endDate"],
  });

export type campaignSchemaType = z.infer<typeof campaignSchema>;
