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
      include: {
        donorComments: true,
        faqs: true,
        updates: true,
      },
      orderBy: {
        startDate: desc === "true" ? "desc" : "asc",
      },
    });

    return new Response(
      JSON.stringify({
        total: totalCampaigns,
        page,
        limit,
        campaigns,
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
