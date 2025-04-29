import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ExploreCampaignFAQ() {
  return (
    <>
      <section className="py-12 md:py-24 bg-gray-50 w-full">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Common Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to frequently asked questions about supporting
              campaigns.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How do I know if a campaign is legitimate?
                </AccordionTrigger>
                <AccordionContent>
                  We verify campaign creators through various methods, but we
                  also recommend that you:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Read the campaign description thoroughly</li>
                    <li>Check the campaign creator's profile and history</li>
                    <li>
                      Look for detailed updates and transparent communication
                    </li>
                    <li>Review comments from other donors</li>
                    <li>Contact the creator directly with any questions</li>
                  </ul>
                  If you have concerns about a campaign, you can report it for
                  our team to review.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  What payment methods can I use to donate?
                </AccordionTrigger>
                <AccordionContent>
                  HaveSomeFund accepts various payment methods including:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>
                      Credit and debit cards (Visa, Mastercard, American
                      Express, Discover)
                    </li>
                    <li>PayPal</li>
                    <li>Apple Pay (on compatible devices)</li>
                    <li>Google Pay (on compatible devices)</li>
                    <li>Bank transfers (ACH) for US donors</li>
                  </ul>
                  All payments are processed securely through our payment
                  partners.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Can I get a refund for my donation?
                </AccordionTrigger>
                <AccordionContent>
                  In general, donations are non-refundable as they are
                  immediately made available to campaign creators. However, in
                  exceptional circumstances such as:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>
                      Fraudulent campaigns that we've taken action against
                    </li>
                    <li>Technical errors resulting in duplicate charges</li>
                    <li>Unauthorized use of your payment method</li>
                  </ul>
                  Please contact our support team within 14 days of your
                  donation if you believe you qualify for a refund.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  How can I share a campaign with others?
                </AccordionTrigger>
                <AccordionContent>
                  You can share campaigns in several ways:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>
                      Use the social media sharing buttons on the campaign page
                    </li>
                    <li>Copy the campaign URL directly from your browser</li>
                    <li>
                      Use the "Share" button on the campaign page to access more
                      sharing options
                    </li>
                    <li>Email the campaign link to friends and family</li>
                  </ul>
                  Sharing campaigns helps them reach more potential donors and
                  increases their chances of success.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Can I donate anonymously?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can choose to donate anonymously during the donation
                  process. When you select this option:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>
                      Your name will not be visible in the public list of donors
                    </li>
                    <li>
                      The campaign creator will still receive your donation
                    </li>
                    <li>You'll still receive a donation receipt via email</li>
                    <li>
                      Our platform will still have your information for
                      record-keeping purposes
                    </li>
                  </ul>
                  You can select the "Donate anonymously" checkbox during the
                  donation process.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mb-8">
            Start your own campaign today and bring your ideas to life with the
            support of our community.
          </p>
          <Button asChild size="lg">
            <Link href="/campaigns/create">Start a Campaign</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
