"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import DashboardShell from "@/pages/creator/dashboard/components/dashboard-shell";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check, X, ArrowLeft } from "lucide-react";
import MyDonationStats from "./components/MyDonationStats";
//api service
import apiService from "@/services/apiService";
import Loading from "@/components/core/loading";

interface Donation {
  id: string;
  amount: number;
  date: string;
  paymentMethod: string;
  isAnonymous: boolean;
  message: string;
  donorName: string | null;
  campaignId: string;
  userId: string;
}

export default function MyDonationPage() {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalAmountDonated, setTotalAmountDonated] = useState<number>(0);

  useEffect(() => {
    // Fetch donations data from the API
    async function fetchDonations() {
      setIsLoading(true);
      try {
        const response = await apiService.get<{
          data: Donation[];
          totalAmountDonated: number;
        }>("/donor/my-donations");
        setDonations(response.data);
        setTotalAmountDonated(response.totalAmountDonated);
      } catch (error) {
        console.error("Error fetching donations:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchDonations();
  }, []);

  return (
    <div className="flex flex-col justify-start h-full p-4 w-10/12 md:w-9/12 pb-28 pt-7">
      <DashboardShell className="mb-8">
        <div className="flex items-center">
          <Button variant="ghost" size="sm" className="mr-2" asChild>
            <Link href="#" onClick={() => window.history.back()} scroll={true}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Campaigns
            </Link>
          </Button>
        </div>
      </DashboardShell>

      <h1 className="text-2xl font-bold mb-4">My Donations</h1>
      <MyDonationStats
        totalDonations={donations.length || 0}
        totalAmountDonated={totalAmountDonated}
      />
      <div className="w-full">
        {isLoading ? (
          <Loading />
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Payment Method</TableHead>
                <TableHead>Anonymous</TableHead>
                <TableHead>Message</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="cursor-pointer">
              {donations.map((donation) => (
                <TableRow key={donation?.id}>
                  <TableCell>{donation?.id}</TableCell>
                  <TableCell className="text-teal-600 font-medium">
                    ฿{donation?.amount}
                  </TableCell>
                  <TableCell>
                    {new Date(donation?.date).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{donation?.paymentMethod}</TableCell>
                  <TableCell>
                    {donation?.isAnonymous ? (
                      <Check className="text-teal-600" aria-label="Yes" />
                    ) : (
                      <X className="text-red-500" aria-label="No" />
                    )}
                  </TableCell>
                  <TableCell>{donation?.message}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}
