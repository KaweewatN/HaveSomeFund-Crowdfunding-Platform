import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UsersIcon, CreditCardIcon, SearchIcon, HeartIcon } from "lucide-react";

export default function DonorTab() {
  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Supporting Campaigns You Care About
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Follow these steps to discover and support meaningful campaigns on
          HaveSomeFund.
        </p>
      </div>

      {/* Donor Steps */}
      <div className="space-y-12">
        {/* Step 1 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center justify-center rounded-full bg-teal-100 p-2 text-teal-600 mb-4">
              <SearchIcon className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold mb-3">1. Discover Campaigns</h3>
            <p className="text-muted-foreground mb-4">
              Browse through our diverse range of campaigns or use search
              filters to find causes that align with your interests and values.
              Explore by category, location, or trending campaigns.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-teal-600">•</span>
                <span>Browse featured campaigns on our homepage</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-teal-600">•</span>
                <span>
                  Use filters to find campaigns by category or location
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-teal-600">•</span>
                <span>Search for specific causes or keywords</span>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2 relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1730818028738-21c19c7103fb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Discovering campaigns"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Step 2 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="https://plus.unsplash.com/premium_photo-1664440922744-5ecdf4907b0d?q=80&w=2619&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Researching a campaign"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="inline-flex items-center justify-center rounded-full bg-teal-100 p-2 text-teal-600 mb-4">
              <UsersIcon className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold mb-3">2. Research & Connect</h3>
            <p className="text-muted-foreground mb-4">
              Read campaign stories thoroughly, check updates, and review
              comments from other donors. Connect with the campaign creator if
              you have questions before donating.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-teal-600">•</span>
                <span>Read the full campaign story and updates</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-teal-600">•</span>
                <span>Check comments from other supporters</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-teal-600">•</span>
                <span>Ask questions if you need more information</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Step 3 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center justify-center rounded-full bg-teal-100 p-2 text-teal-600 mb-4">
              <CreditCardIcon className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold mb-3">3. Make a Donation</h3>
            <p className="text-muted-foreground mb-4">
              Choose your donation amount and payment method. Decide whether to
              donate anonymously or publicly. All transactions are secure and
              encrypted for your protection.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-teal-600">•</span>
                <span>Select your donation amount</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-teal-600">•</span>
                <span>Choose your preferred payment method</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-teal-600">•</span>
                <span>Decide whether to donate anonymously</span>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2 relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1674515489647-fd8f76b86f65?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Making a donation"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Step 4 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1619462729367-e47da54ba992?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Sharing a campaign"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="inline-flex items-center justify-center rounded-full bg-teal-100 p-2 text-teal-600 mb-4">
              <HeartIcon className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold mb-3">4. Share & Follow</h3>
            <p className="text-muted-foreground mb-4">
              Amplify your impact by sharing the campaign with your network.
              Follow the campaign's progress through updates and celebrate
              reaching milestones together.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-teal-600">•</span>
                <span>Share the campaign on social media</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-teal-600">•</span>
                <span>Subscribe to campaign updates</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-teal-600">•</span>
                <span>Celebrate milestones with the community</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center pt-8">
        <Button asChild size="lg">
          <Link href="/campaigns">Explore Campaigns</Link>
        </Button>
      </div>
    </>
  );
}
