import { NextResponse } from "next/server";
import { authenticateUser } from "@/app/api/auth/[...nextauth]/auth";
import prisma from "@/lib/prisma/prismaService";

export async function GET(req: Request) {
  let user;

  try {
    // Authenticate the user
    user = await authenticateUser();

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }
  } catch (authError) {
    console.error("Authentication error:", authError);
    return NextResponse.json(
      { error: "Failed to authenticate user" },
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    // Fetch donations for the authenticated user
    const donations = await prisma.donorTransaction.findMany({
      where: {
        userId: user.session.user.id,
      },
      orderBy: {
        date: "desc",
      },
    });

    // Calculate the total donation amount
    const totalAmountDonated = await prisma.donorTransaction.aggregate({
      where: {
        userId: user.session.user.id,
      },
      _sum: {
        amount: true,
      },
    });

    return NextResponse.json(
      {
        data: donations,
        totalAmountDonated: totalAmountDonated._sum.amount || 0,
      },
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (fetchError) {
    console.error("Error fetching donations:", fetchError);
    return NextResponse.json(
      { error: "Failed to fetch donations" },
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
