import prisma from "@/lib/prisma/prismaService";
import { authenticateCreator } from "../../../auth/[...nextauth]/auth";

export async function GET(request: Request) {
  let userId: string;

  //  block for authentication
  try {
    const authenticatedCreator = await authenticateCreator();
    userId = authenticatedCreator.session.user.id;
  } catch (error) {
    console.error("Error authenticating creator:", error);
    return new Response(JSON.stringify({ error: "Authentication failed" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  //  fetching the campaign
  try {
    const url = new URL(request.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
      return new Response(
        JSON.stringify({ error: "Campaign ID is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const campaign = await prisma.campaign.findFirst({
      where: {
        id: id,
        creatorId: userId,
      },
      include: {
        donorTransactions: true,
        donorComments: true,
        faqs: true,
        updates: true,
      },
    });

    if (!campaign) {
      return new Response(
        JSON.stringify({ error: "Campaign not found, in your account" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const campaignFormatted = {
      campaign: {
        ...campaign,
        donorTransactions: {
          count: campaign?.donorTransactions.length || 0,
          data: campaign?.donorTransactions || [],
        },
        updates: {
          count: campaign?.updates.length || 0,
          data: campaign?.updates || [],
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

    return new Response(JSON.stringify(campaignFormatted), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching campaign:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch campaign" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
