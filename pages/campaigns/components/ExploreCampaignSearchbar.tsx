import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function ExploreCampaigns({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <section className="bg-gradient-to-r from-teal-500 to-emerald-600 py-12 md:py-16 w-full">
      <div className="px-4 md:px-6 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-6">
          Explore Campaigns
        </h1>
        <p className="max-w-[700px] mx-auto text-white md:text-xl mb-8">
          Discover and support meaningful projects and causes that align with
          your values.
        </p>
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for campaigns..."
              className="pl-10 bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
