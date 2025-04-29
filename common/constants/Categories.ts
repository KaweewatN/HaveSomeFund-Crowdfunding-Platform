import {
  Heart,
  Palette,
  Users,
  Lightbulb,
  Briefcase,
  GraduationCap,
  Globe,
  Leaf,
} from "lucide-react";

export const categories = [
  {
    id: "community",
    name: "Community",
    description: "Local initiatives and neighborhood projects",
    icon: Users,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "creative",
    name: "Creative",
    description: "Art, music, film, and other creative endeavors",
    icon: Palette,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: "emergency",
    name: "Emergency",
    description: "Help those facing unexpected hardships",
    icon: Heart,
    color: "bg-red-100 text-red-600",
  },
  {
    id: "innovation",
    name: "Innovation",
    description: "Technology, inventions, and new ideas",
    icon: Lightbulb,
    color: "bg-amber-100 text-amber-600",
  },
  {
    id: "business",
    name: "Business",
    description: "Startups, small businesses, and entrepreneurs",
    icon: Briefcase,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    id: "education",
    name: "Education",
    description: "Learning initiatives and educational projects",
    icon: GraduationCap,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    id: "environment",
    name: "Environment",
    description: "Conservation and sustainability projects",
    icon: Leaf,
    color: "bg-green-100 text-green-600",
  },
  {
    id: "global",
    name: "Global",
    description: "International aid and worldwide initiatives",
    icon: Globe,
    color: "bg-cyan-100 text-cyan-600",
  },
];

export const categoriesSelect: { id: string; name: string }[] = [
  { id: "all", name: "All Categories" },
  { id: "education", name: "Education" },
  { id: "environment", name: "Environment" },
  { id: "culture", name: "Culture" },
  { id: "health", name: "Health" },
  { id: "animals", name: "Animals" },
  { id: "technology", name: "Technology" },
  { id: "community", name: "Community" },
  { id: "creative", name: "Creative" },
  { id: "innovation", name: "Innovation" },
  { id: "business", name: "Business" },
];
