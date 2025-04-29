import prisma from "@/lib/prisma/prismaService";
import { authenticateCreator } from "../../auth/[...nextauth]/auth";

export async function POST(request: Request) {
  try {
    // Authenticate the creator
    const authenticatedCreator = await authenticateCreator();
    const creatorId = authenticatedCreator.session.user.id;

    // Parse and validate the request body
    const body = await request.json();
    const {
      id,
      title,
      description,
      shortDescription,
      image,
      category,
      tags,
      amountRaised,
      goalAmount,
      donorsCount,
      startDate,
      endDate,
      location,
      status,
      featured,
      verified,
    } = body;

    // Check for required fields
    if (!title || !description || !goalAmount || !startDate || !endDate) {
      return new Response(
        JSON.stringify({
          error:
            "Missing required fields: title, description, goalAmount, startDate, or endDate",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Validate the creator's role
    const creator = await prisma.user.findUnique({
      where: { id: creatorId },
      select: { role: true, name: true, image: true, bio: true },
    });

    if (!creator || creator.role !== "creator") {
      return new Response(
        JSON.stringify({ error: "User is not authorized to create campaigns" }),
        {
          status: 403,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Create the campaign
    const newCampaign = await prisma.campaign.create({
      data: {
        id,
        title,
        description,
        shortDescription,
        image,
        category,
        tags: Array.isArray(tags) ? tags : [],
        amountRaised: amountRaised || 0,
        goalAmount,
        donorsCount: donorsCount || 0,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        location,
        status: status || "draft", // Default to "draft" if not provided
        featured: featured || false,
        verified: verified || false,
        creatorName: creator.name,
        creatorImage: creator.image,
        creatorBio: creator.bio,
        creator: {
          connect: { id: creatorId },
        },
      },
      include: { creator: true },
    });

    return new Response(JSON.stringify(newCampaign), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating campaign:", error);

    // Handle specific error cases
    if (error instanceof SyntaxError) {
      return new Response(
        JSON.stringify({ error: "Invalid JSON in request body" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({
        error: "Failed to create campaign",
        message: (error as Error).message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
