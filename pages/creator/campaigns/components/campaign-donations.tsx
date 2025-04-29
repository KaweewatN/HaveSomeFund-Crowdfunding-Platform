"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download, Filter, Mail, MoreHorizontal, Search } from "lucide-react";

interface Donation {
  id: string;
  amount: string;
  date: Date;
  paymentMethod: string;
  donorName: string;
  message: string;
}

export default function CampaignDonations({
  donations,
}: {
  donations: Donation[];
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All Donations");

  const filteredDonations = donations.filter((donation: any) => {
    const matchesSearch = (donation.donorName || "")
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter = filter === "anonymous" ? !donation.donorName : true;
    return matchesSearch && matchesFilter;
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Donations</CardTitle>
        <CardDescription>
          View and manage all donations for this campaign
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search donors..."
                className="pl-8 w-[250px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-9">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onSelect={() => setFilter("all")}
                  className="cursor-pointer"
                >
                  All Donations
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => setFilter("highest")}
                  className="cursor-pointer"
                >
                  Highest Amount
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => setFilter("recent")}
                  className="cursor-pointer"
                >
                  Most Recent
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => setFilter("messages")}
                  className="cursor-pointer"
                >
                  With Messages
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => setFilter("anonymous")}
                  className="cursor-pointer"
                >
                  Anonymous Only
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export CSV
          </Button>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Donor</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead className="hidden md:table-cell">Date</TableHead>
                <TableHead className="hidden md:table-cell">Message</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDonations.map((donation: any) => (
                <TableRow
                  key={donation?.id}
                  className="cursor-pointer hover:bg-muted/50"
                >
                  <TableCell className="hidden md:table-cell">
                    {donation?.id}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <div>
                      <div className="font-medium">
                        {donation?.donorName ? (
                          <p>{donation?.donorName}</p>
                        ) : (
                          <p className="text-slate-400">Anonymus</p>
                        )}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium text-teal-600">
                    ฿{donation.amount}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {donation.date
                      ? new Date(donation.date).toISOString().split("T")[0]
                      : "N/A"}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {donation?.paymentMethod}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {donation.message ? (
                      <span className="line-clamp-1">{donation.message}</span>
                    ) : (
                      <span className="text-muted-foreground italic">
                        No message
                      </span>
                    )}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Mail className="mr-2 h-4 w-4" />
                          <span>Send Thank You</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
