"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useWindowSize } from "react-use";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";
import Confetti from "react-confetti";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toastSuccess, toastError } from "./core/appToast";
import { formatCurrency } from "@/lib/utils";

const donationSchema = z.object({
  amount: z.string().min(1, "Amount is required"),
  message: z.string().optional(),
  isAnonymous: z.boolean(),
  paymentMethod: z.string().nonempty("Payment method is required"),
});

type DonationFormValues = z.infer<typeof donationSchema>;

export default function DonateButton({
  campaignId,
  creatorId,
  session,
}: {
  campaignId: string;
  creatorId: string;
  session: any;
}) {
  const router = useRouter();
  const { width, height } = useWindowSize();

  const [showConfetti, setShowConfetti] = useState(false); //  to show confetti effect
  const [isSubmitting, setIsSubmitting] = useState(false); //  // to handle form submission

  const form = useForm<DonationFormValues>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      message: "",
      amount: "25",
      isAnonymous: false,
      paymentMethod: "creditCard",
    },
  });

  const predefinedAmounts: string[] = ["20", "50", "100", "500"];

  const onSubmit = async (data: DonationFormValues) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/donor/donate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          amount: parseFloat(data.amount),
          campaignId,
          date: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to process donation");
      }

      console.log("Donation successful:");
      toastSuccess("Donation successful!");
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
        window.location.reload();
      }, 8000);
    } catch (error) {
      console.error("Error submitting donation:", error);
      toastError("Failed to process donation. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!session) {
    return (
      <Button
        size="lg"
        className="w-full text-lg"
        onClick={() => router.push("/login")}
      >
        Login to Donate
      </Button>
    );
  }

  return (
    <>
      {showConfetti && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 999,
          }}
        >
          <Confetti width={width} height={height} className="z-50" />
        </div>
      )}
      <Dialog>
        <DialogTrigger asChild>
          <Button
            size="lg"
            className="w-full text-lg"
            disabled={creatorId === session?.user?.id}
          >
            Donate Now
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] z-20">
          <DialogHeader>
            <DialogTitle>Make a Donation</DialogTitle>
            <DialogDescription>
              Support this campaign by making a donation. Every contribution
              helps!
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Donation Amount</FormLabel>
                    <div className="grid grid-cols-4 gap-2">
                      {predefinedAmounts.map((presetAmount) => (
                        <Button
                          key={presetAmount}
                          type="button"
                          variant={
                            field.value === presetAmount ? "default" : "outline"
                          }
                          onClick={() => field.onChange(presetAmount)}
                        >
                          ฿{presetAmount}
                        </Button>
                      ))}
                    </div>
                    <div className="relative mt-2">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                        THB
                      </span>
                      <FormControl>
                        <Input
                          type="number"
                          min="1"
                          step="1"
                          {...field}
                          className="pl-14"
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Message <span className="text-gray-500">(Optional)</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Write a message to the campaign creator"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="isAnonymous"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="anonymous"
                        checked={field.value}
                        onCheckedChange={(checked) =>
                          field.onChange(checked as boolean)
                        }
                      />
                      <Label htmlFor="anonymous">Donate anonymously</Label>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Payment Method</FormLabel>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                      className="space-y-2"
                    >
                      <div className="flex items-center space-x-2 border rounded-md p-3">
                        <RadioGroupItem value="creditCard" id="creditCard" />
                        <Image
                          src="/assets/icons/credit-card.png"
                          alt="credit-card-image"
                          width={16}
                          height={16}
                          className="object-cover"
                        />
                        <Label htmlFor="creditCard" className="flex-1">
                          Credit Card
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-md p-3">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <Image
                          src="/assets/icons/paypal.png"
                          alt="paypal-image"
                          width={16}
                          height={16}
                          className="object-cover"
                        />
                        <Label htmlFor="paypal" className="flex-1">
                          PayPal
                        </Label>
                      </div>
                    </RadioGroup>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="border-t pt-4">
                <div className="flex justify-between mb-2">
                  <span>Donation Amount</span>
                  <span>
                    {formatCurrency(
                      Number.parseFloat(form.watch("amount")) || 0
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground mb-4">
                  <span>Processing Fee</span>
                  <span>{formatCurrency(5)}</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>
                    {formatCurrency(
                      Number.parseFloat(form.watch("amount")) + 5 || 0
                    )}
                  </span>
                </div>
              </div>

              <DialogFooter>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Complete Donation"}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
