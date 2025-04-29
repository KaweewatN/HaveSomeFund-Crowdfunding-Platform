import { LightbulbIcon, PencilIcon, HeartIcon } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Create Your Campaign",
    description:
      "Set up your fundraising campaign with a compelling story, photos, and funding goal.",
    icon: LightbulbIcon,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Share With Everyone",
    description:
      "Spread the word about your campaign through social media, email, and word of mouth.",
    icon: PencilIcon,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 3,
    title: "Collect Donations",
    description:
      "Receive funds from supporters and track your progress toward your goal.",
    icon: HeartIcon,
    color: "bg-pink-100 text-pink-600",
  },
];

export default function HowItWorks() {
  return (
    <div className="grid gap-8 md:grid-cols-3 pt-5">
      {steps.map((step) => (
        <div key={step.id} className="flex flex-col items-center text-center">
          <div className={`p-4 rounded-full ${step.color} mb-4`}>
            <step.icon className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold mb-2">{step.title}</h3>
          <p className="text-muted-foreground">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
