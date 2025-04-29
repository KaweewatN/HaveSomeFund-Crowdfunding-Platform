import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import FeaturedCampaigns from "@/pages/landing/components/featured-campaigns";
import CategoryList from "@/pages/landing/components/category-list";
import HowItWorks from "@/pages/landing/components/how-it-works";
import TrustElements from "@/pages/landing/components/trust-elements";

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen w-full items-center">
      <main className="flex flex-col w-full items-center gap-y-5">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-teal-500 to-emerald-600 py-20 md:py-28 w-full">
          <div className="px-8 md:px-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Fund Your Dreams, Support Others
                </h1>
                <p className="max-w-[600px] text-white md:text-xl">
                  HaveSomeFund connects passionate creators with generous
                  supporters. Start a campaign or discover causes that matter to
                  you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
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
              <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1643321612557-57cef422f401?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="People celebrating a successful campaign"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-8 bg-white w-full">
          <div className="px-4 md:px-6 w-full">
            <div className="flex w-full max-w-3xl mx-auto items-center space-x-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search for campaigns..."
                  className="pl-8 bg-white"
                />
              </div>
              <Button type="submit">Search</Button>
            </div>
          </div>
        </section>

        {/* Featured Campaigns */}
        <section className="py-12 bg-gray-50 w-full">
          <div className="px-8 sm:px-12 md:px-14">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight">
                Featured Campaigns
              </h2>
              <Button variant="outline" asChild>
                <Link href="/campaigns">View All</Link>
              </Button>
            </div>
            <FeaturedCampaigns />
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 bg-white w-full">
          <div className="px-4 md:px-6 w-full">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-8">
              Browse by Category
            </h2>
            <CategoryList />
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12 bg-gray-50 w-full">
          <div className="px-4 md:px-6 w-full">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-8">
              How It Works
            </h2>
            <HowItWorks />
          </div>
        </section>

        {/* Trust Elements */}
        <section className="py-12 bg-white w-full">
          <div className="px-4 md:px-6 w-full">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-8">
              Why Choose HaveSomeFund
            </h2>
            <TrustElements />
          </div>
        </section>
      </main>
    </div>
  );
}
