import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

export default function HowItWorksFaq() {
  return (
    <div className="container px-4 md:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions about using HaveSomeFund.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-2">
              How much does it cost to create a campaign?
            </h3>
            <p className="text-muted-foreground">
              Creating a campaign on HaveSomeFund is completely free. We charge
              a small platform fee of 5% on funds raised, plus payment
              processing fees (typically 2.9% + $0.30 per transaction).
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-2">
              How long can my campaign run?
            </h3>
            <p className="text-muted-foreground">
              You can set your campaign duration anywhere from 1 to 60 days.
              Most successful campaigns run for 30 days, creating a sense of
              urgency while giving enough time to reach your goal.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-2">
              What happens if I don't reach my funding goal?
            </h3>
            <p className="text-muted-foreground">
              HaveSomeFund uses a "keep-what-you-raise" model, meaning you'll
              receive all funds raised even if you don't reach your goal, minus
              our platform and payment processing fees.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-2">
              How quickly will I receive my funds?
            </h3>
            <p className="text-muted-foreground">
              Funds are typically disbursed within 2-5 business days after your
              campaign ends. For campaigns longer than 30 days, you may be
              eligible for periodic disbursements.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-2">
              Is my donation tax-deductible?
            </h3>
            <p className="text-muted-foreground">
              Donations to personal campaigns are generally not tax-deductible.
              However, donations to verified nonprofit organizations on our
              platform may be tax-deductible. Always check with a tax
              professional.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-2">
              How do you prevent fraudulent campaigns?
            </h3>
            <p className="text-muted-foreground">
              We have a verification process for campaign creators and monitor
              campaigns for suspicious activity. We also rely on our community
              to report concerns, and we investigate all reports thoroughly.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
