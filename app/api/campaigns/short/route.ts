import prisma from "@/lib/prisma/prismaService";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page") || "1", 10);
    const limit = parseInt(url.searchParams.get("limit") || "10", 10);
    const desc = url.searchParams.get("desc");

    const totalCampaigns = await prisma.campaign.count();
    const campaigns = await prisma.campaign.findMany({
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
      startDate: campaign.startDate,
      endDate: campaign.endDate,
      creatorName: campaign.creator?.name || "Unknown",
      creatorImage:
        campaign.creator?.image || "/placeholder.svg?height=40&width=40",
    }));

    return new Response(
      JSON.stringify({
        total: totalCampaigns,
        page,
        limit,
        campaigns: formattedCampaigns,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching campaigns:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch campaigns" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
