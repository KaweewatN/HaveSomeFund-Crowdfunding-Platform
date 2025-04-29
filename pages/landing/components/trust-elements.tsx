import { ShieldCheck, Clock, CreditCard, Users } from "lucide-react";

const trustElements = [
  {
    id: 1,
    title: "Secure Payments",
    description:
      "All transactions are encrypted and processed securely through trusted payment providers.",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "Quick Setup",
    description:
      "Create your campaign in minutes and start receiving donations right away.",
    icon: Clock,
  },
  {
    id: 3,
    title: "Low Fees",
    description:
      "We keep our platform fees low so more of your donations go directly to the cause.",
    icon: CreditCard,
  },
  {
    id: 4,
    title: "Supportive Community",
    description:
      "Join a community of creators and donors committed to making a difference.",
    icon: Users,
  },
];

export default function TrustElements() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 pt-5">
      {trustElements.map((element) => (
        <div
          key={element.id}
          className="flex flex-col items-center text-center p-6 rounded-lg border"
        >
          <div className="p-3 rounded-full bg-teal-100 text-teal-600 mb-4">
            <element.icon className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold mb-2">{element.title}</h3>
          <p className="text-sm text-muted-foreground">{element.description}</p>
        </div>
      ))}
    </div>
  );
}
