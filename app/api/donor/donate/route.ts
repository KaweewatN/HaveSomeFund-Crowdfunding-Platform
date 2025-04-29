import { NextResponse } from "next/server";
import { authenticateUser } from "@/app/api/auth/[...nextauth]/auth";
import prisma from "@/lib/prisma/prismaService";
import { z } from "zod";

// a schema for request body validation
const transactionSchema = z.object({
  amount: z.number().positive(),
  date: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  paymentMethod: z.string().nonempty(),
  isAnonymous: z.boolean().optional(),
  message: z.string().optional(),
  donorName: z.string().optional(),
  campaignId: z.string().nonempty(),
});

export async function POST(request: Request) {
  let user;

  try {
    user = await authenticateUser();
    if (!user) {
      return NextResponse.json(
        {
          error: "Unauthorized",
          headers: { "Content-Type": "application/json" },
        },
        { status: 401 }
      );
    }
  } catch (authError) {
    console.error("Error during user authentication:", authError);
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    // Parse and validate the request body
    const body = await request.json();
    const parsedBody = transactionSchema.safeParse(body);

    if (!parsedBody.success) {
      return NextResponse.json(
        { error: "Invalid request data", details: parsedBody.error.errors },
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const {
      amount,
      date,
      paymentMethod,
      isAnonymous = false,
      message,
      campaignId,
    } = parsedBody.data;
    // console.log("Parsed data:", parsedBody.data);

    // Check if the campaign exists
    const campaignExists = await prisma.campaign.findUnique({
      where: { id: campaignId },
    });
    if (!campaignExists) {
      return NextResponse.json(
        { error: "Invalid campaignId: Campaign does not exist" },
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    // console.log("Campaign exists:", campaignExists);

    // Create the transaction in the database
    const transactionData = await prisma.donorTransaction.create({
      data: {
        amount,
        date: new Date(date),
        paymentMethod,
        isAnonymous,
        message,
        donorName: isAnonymous ? null : user?.session?.user?.name,
        campaignId,
        userId: user?.session?.user?.id,
      },
    });
    // console.log("Transaction created:", transactionData);

    // Update the campaign's amountRaised
    await prisma.campaign.update({
      where: { id: campaignId },
      data: {
        amountRaised: {
          increment: amount,
        },
        donorsCount: {
          increment: 1,
        },
      },
    });

    return NextResponse.json(
      {
        message: `Successfully donate to ${campaignId}`,
        data: transactionData,
      },
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (transactionError) {
    console.error("Error processing transaction:", transactionError);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
