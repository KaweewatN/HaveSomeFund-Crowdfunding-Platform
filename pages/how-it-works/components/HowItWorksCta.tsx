import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HowItWorksCta() {
  return (
    <div className="container px-4 md:px-6 text-center">
      <h2 className="text-3xl font-bold text-white mb-6">
        Ready to Make a Difference?
      </h2>
      <p className="max-w-[700px] mx-auto text-white md:text-xl mb-8">
        Whether you want to start a campaign or support a cause, HaveSomeFund
        makes it easy to create positive change.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          asChild
          size="lg"
          className="bg-white text-emerald-600 hover:bg-gray-100"
        >
          <Link href="/campaigns/create">Start a Campaign</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="bg-transparent border-white text-white hover:bg-white/10"
        >
          <Link href="/campaigns">Explore Campaigns</Link>
        </Button>
      </div>
    </div>
  );
}
