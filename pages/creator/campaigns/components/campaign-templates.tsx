"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Building2,
  GraduationCap,
  Heart,
  Home,
  Leaf,
  Lightbulb,
  Stethoscope,
  Trophy,
  Umbrella,
} from "lucide-react";

const templates = [
  {
    id: "community",
    title: "Community Project",
    description:
      "Raise funds for local community initiatives, parks, or neighborhood improvements.",
    icon: Building2,
    presets: {
      category: "Community",
      goal: 5000,
      duration: 30,
    },
  },
  {
    id: "medical",
    title: "Medical Fundraiser",
    description:
      "Support medical treatments, hospital bills, or healthcare initiatives.",
    icon: Stethoscope,
    presets: {
      category: "Health",
      goal: 10000,
      duration: 60,
    },
  },
  {
    id: "education",
    title: "Education Fund",
    description: "Fund scholarships, school supplies, or educational programs.",
    icon: GraduationCap,
    presets: {
      category: "Education",
      goal: 3000,
      duration: 45,
    },
  },
  {
    id: "nonprofit",
    title: "Nonprofit Cause",
    description: "Support an established nonprofit organization or charity.",
    icon: Heart,
    presets: {
      category: "Nonprofit",
      goal: 7500,
      duration: 90,
    },
  },
  {
    id: "emergency",
    title: "Emergency Relief",
    description:
      "Provide immediate assistance for disaster relief or urgent situations.",
    icon: Umbrella,
    presets: {
      category: "Emergency",
      goal: 15000,
      duration: 14,
    },
  },
  {
    id: "environment",
    title: "Environmental Project",
    description:
      "Support conservation efforts, sustainability initiatives, or environmental causes.",
    icon: Leaf,
    presets: {
      category: "Environment",
      goal: 4000,
      duration: 60,
    },
  },
  {
    id: "creative",
    title: "Creative Project",
    description: "Fund art, music, film, or other creative endeavors.",
    icon: Lightbulb,
    presets: {
      category: "Arts",
      goal: 2500,
      duration: 30,
    },
  },
  {
    id: "sports",
    title: "Sports & Recreation",
    description:
      "Support sports teams, athletic events, or recreational facilities.",
    icon: Trophy,
    presets: {
      category: "Sports",
      goal: 3500,
      duration: 45,
    },
  },
  {
    id: "housing",
    title: "Housing & Shelter",
    description:
      "Provide housing assistance, shelter improvements, or homelessness initiatives.",
    icon: Home,
    presets: {
      category: "Housing",
      goal: 8000,
      duration: 60,
    },
  },
];

export default function CampaignTemplates() {
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const router = useRouter();

  const handleUseTemplate = () => {
    if (selectedTemplate) {
      // In a real app, you would store the template data in state or context
      // and then redirect to the form with the template data pre-filled
      router.push(`/dashboard/campaigns/new?template=${selectedTemplate}`);
    }
  };

  return (
    <div className="space-y-6">
      <RadioGroup value={selectedTemplate} onValueChange={setSelectedTemplate}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <div key={template.id} className="relative">
              <RadioGroupItem
                value={template.id}
                id={template.id}
                className="peer sr-only"
              />
              <Label
                htmlFor={template.id}
                className="flex flex-col items-start cursor-pointer rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <div className="mb-4 rounded-full bg-primary/10 p-2">
                  <template.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="mb-2 font-medium">{template.title}</div>
                <p className="text-sm text-muted-foreground">
                  {template.description}
                </p>
              </Label>
            </div>
          ))}
        </div>
      </RadioGroup>

      <div className="flex justify-end">
        <Button onClick={handleUseTemplate} disabled={!selectedTemplate}>
          Use Template
        </Button>
      </div>
    </div>
  );
}
