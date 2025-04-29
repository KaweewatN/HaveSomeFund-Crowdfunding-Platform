import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  LightbulbIcon,
  PencilIcon,
  ShareIcon,
  MessageSquareIcon,
} from "lucide-react";

export default function CreatorTab() {
  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Creating a Successful Campaign
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Follow these steps to create and manage a successful fundraising
          campaign on HaveSomeFund.
        </p>
      </div>

      {/* Creator Steps */}
      <div className="space-y-12">
        {/* Step 1 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center justify-center rounded-full bg-teal-100 p-2 text-teal-600 mb-4">
              <LightbulbIcon className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold mb-3">1. Plan Your Campaign</h3>
            <p className="text-muted-foreground mb-4">
              Define your fundraising goal, timeline, and story. Consider what
              makes your campaign unique and compelling. Gather photos, videos,
              and testimonials to support your cause.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-teal-600">•</span>
                <span>Set a realistic funding goal based on your needs</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-teal-600">•</span>
                <span>
                  Prepare a compelling story that connects emotionally
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-teal-600">•</span>
                <span>Collect high-quality images and videos</span>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2 relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="https://plus.unsplash.com/premium_photo-1661690088942-d968065868d0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Planning a campaign"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Step 2 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1669532673647-b1185ea1a594?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Creating a campaign"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="inline-flex items-center justify-center rounded-full bg-teal-100 p-2 text-teal-600 mb-4">
              <PencilIcon className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold mb-3">2. Create Your Campaign</h3>
            <p className="text-muted-foreground mb-4">
              Sign up or log in to HaveSomeFund and use our intuitive campaign
              builder to set up your fundraiser. Fill in all the details, upload
              media, and review everything before publishing.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-teal-600">•</span>
                <span>Complete all sections of the campaign form</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-teal-600">•</span>
                <span>
                  Upload a compelling main image and additional photos
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-teal-600">•</span>
                <span>Preview your campaign before publishing</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Step 3 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center justify-center rounded-full bg-teal-100 p-2 text-teal-600 mb-4">
              <ShareIcon className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold mb-3">3. Share & Promote</h3>
            <p className="text-muted-foreground mb-4">
              Once your campaign is live, share it with your network. Use social
              media, email, and word of mouth to spread the word. The first 48
              hours are crucial for building momentum.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-teal-600">•</span>
                <span>Share on all your social media platforms</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-teal-600">•</span>
                <span>Send personal emails to friends and family</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-teal-600">•</span>
                <span>Consider reaching out to local media if relevant</span>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2 relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1656164630363-676511a9668c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Sharing a campaign"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Step 4 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1632406898177-95f7acd8854f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Managing a campaign"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="inline-flex items-center justify-center rounded-full bg-teal-100 p-2 text-teal-600 mb-4">
              <MessageSquareIcon className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold mb-3">4. Engage & Update</h3>
            <p className="text-muted-foreground mb-4">
              Keep your supporters engaged by posting regular updates about your
              progress. Respond to comments and questions promptly. Show
              appreciation for donations of all sizes.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-teal-600">•</span>
                <span>Post updates at least once a week</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-teal-600">•</span>
                <span>Respond to all comments and questions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-teal-600">•</span>
                <span>Thank donors personally when possible</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center pt-8">
        <Button asChild size="lg">
          <Link href="/campaigns/create">Start Your Campaign</Link>
        </Button>
      </div>
    </>
  );
}
