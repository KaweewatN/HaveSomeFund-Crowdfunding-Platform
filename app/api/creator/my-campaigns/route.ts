import prisma from "@/lib/prisma/prismaService";
import { authenticateCreator } from "../../auth/[...nextauth]/auth";

export async function GET(request: Request) {
  let userId;

  try {
    // Only authenticated creators can access this route
    const authenticatedCreator = await authenticateCreator();
    userId = authenticatedCreator.session.user.id;

    if (!userId) {
      return new Response(
        JSON.stringify({ error: "Unauthorized: Missing session ID" }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  } catch (error) {
    console.error("Authentication error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to authenticate user" }),
      {
        status: 401,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page") || "1", 10);
    const limit = parseInt(url.searchParams.get("limit") || "10", 10);
    const desc = url.searchParams.get("desc");
    const status = url.searchParams.get("status"); // Get the status filter from query params

    // Build the `where` clause dynamically based on the status
    const whereClause: any = { creatorId: userId };
    if (status && status !== "all") {
      whereClause.status = status;
    }

    // Total campaigns matching the filter
    const totalCampaigns = await prisma.campaign.count({
      where: whereClause,
    });

    // Fetch campaigns
    const campaigns = await prisma.campaign.findMany({
      where: whereClause,
      skip: (page - 1) * limit,
      take: limit,
      select: {
        id: true,
        title: true,
        shortDescription: true,
        image: true,
        category: true,
        location: true,
        amountRaised: true,
        goalAmount: true,
        donorsCount: true,
        startDate: true,
        status: true,
        endDate: true,
        creator: {
          select: {
            name: true,
            image: true,
          },
        },
      },
      orderBy: {
        startDate: desc === "true" ? "desc" : "asc",
      },
    });

    // Total pages
    const totalPage = Math.ceil(totalCampaigns / limit);

    // Check invalid userId
    if (campaigns.length === 0) {
      return new Response(JSON.stringify({ error: "No campaigns found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Calculate total amount raised and total donors
    const totalAmountRaised = campaigns.reduce(
      (sum, campaign) => sum + campaign.amountRaised,
      0
    );
    const totalDonors = campaigns
      .filter((campaign) => campaign.donorsCount && campaign.donorsCount > 0)
      .reduce((sum, campaign) => sum + campaign.donorsCount, 0);

    // Format the campaigns data for response
    const formattedCampaigns = campaigns.map((campaign) => ({
      id: campaign.id,
      title: campaign.title,
      shortDescription: campaign.shortDescription,
      image: campaign.image,
      category: campaign.category,
      location: campaign.location,
      amountRaised: campaign.amountRaised,
      goalAmount: campaign.goalAmount,
      donorsCount: campaign.donorsCount,
      status: campaign.status,
      startDate: campaign.startDate,
      endDate: campaign.endDate,
    }));

    return new Response(
      JSON.stringify({
        totalPage,
        page,
        limit,
        summary: {
          totalCampaigns,
          totalAmountRaised,
          totalDonors: totalDonors,
        },
        campaigns: formattedCampaigns,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error fetching campaigns:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch campaigns" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
