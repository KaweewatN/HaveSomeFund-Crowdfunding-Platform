import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// components
import CreatorTab from "./components/CreatorTab";
import DonorTab from "./components/DonorTab";
import HowItWorksFaq from "./components/HowItWorksFaq";
import HowItWorksCta from "./components/HowItWorksCta";

export default function HowItWorks() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-500 to-emerald-600 py-16 md:py-24">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            How HaveSomeFund Works
          </h1>
          <p className="max-w-[700px] mx-auto text-white md:text-xl mb-8">
            Our platform connects passionate creators with generous supporters.
            Learn how to start a campaign or discover causes that matter to you.
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
      </section>

      {/* Tabs Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="creators" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-12 h-fit p-2">
              <TabsTrigger value="creators" className="text-lg">
                For Campaign Creators
              </TabsTrigger>
              <TabsTrigger value="donors" className="text-lg">
                For Donors
              </TabsTrigger>
            </TabsList>
            <TabsContent value="creators" className="space-y-12">
              <CreatorTab />
            </TabsContent>

            <TabsContent value="donors" className="space-y-12">
              <DonorTab />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-24 bg-gray-50">
        <HowItWorksFaq />
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-gradient-to-r from-teal-500 to-emerald-600">
        <HowItWorksCta />
      </section>
    </main>
  );
}
