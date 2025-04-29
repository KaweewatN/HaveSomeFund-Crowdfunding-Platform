import prisma from "@/lib/prisma/prismaService";

export async function GET(request: Request) {
  try {
    // for  query time
    const startTime = Date.now(); // delete when go on production

    const url = new URL(request.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
      return new Response(
        JSON.stringify({ error: "Campaign ID is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const campaign = await prisma.campaign.findFirst({
      where: { id: id },
      include: {
        donorTransactions: {
          take: 3,
        },
        donorComments: true,
        faqs: true,
        updates: true,
      },
    });

    if (!campaign) {
      return new Response(JSON.stringify({ error: "Campaign not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // for  query time   // delete when go on production
    const endTime = Date.now();
    const responseTime = (endTime - startTime) / 1000;

    const campaignFormmated = {
      responseTime,
      campaign: {
        ...campaign,
        updates: {
          count: campaign?.updates.length || 0,
          data: campaign?.updates || [],
        },
        donorTransactions: {
          count: campaign?.donorTransactions.length || 0,
          data: campaign?.donorTransactions || [],
        },
        donorComments: {
          count: campaign?.donorComments.length || 0,
          data: campaign?.donorComments || [],
        },
        faqs: {
          count: campaign?.faqs.length || 0,
          data: campaign?.faqs || [],
        },
      },
    };

    return new Response(JSON.stringify(campaignFormmated), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
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
