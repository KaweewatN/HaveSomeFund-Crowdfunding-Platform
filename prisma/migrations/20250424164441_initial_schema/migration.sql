-- CreateEnum
CREATE TYPE "CampaignStatus" AS ENUM ('active', 'completed', 'cancelled');

-- CreateTable
CREATE TABLE "Campaign" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "shortDescription" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "tags" TEXT[],
    "creatorId" TEXT NOT NULL,
    "creatorName" TEXT NOT NULL,
    "creatorImage" TEXT,
    "creatorBio" TEXT,
    "amountRaised" INTEGER NOT NULL,
    "goalAmount" INTEGER NOT NULL,
    "donorsCount" INTEGER NOT NULL,
    "startDate" DATE NOT NULL,
    "endDate" DATE NOT NULL,
    "location" TEXT NOT NULL,
    "status" "CampaignStatus" NOT NULL DEFAULT 'active',
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "verified" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Campaign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FAQ" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "campaignId" TEXT NOT NULL,

    CONSTRAINT "FAQ_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Update" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "creatorName" TEXT NOT NULL,
    "creatorImage" TEXT,
    "campaignId" TEXT NOT NULL,

    CONSTRAINT "Update_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DonorComment" (
    "id" TEXT NOT NULL,
    "amount" INTEGER,
    "isAnonymous" BOOLEAN,
    "content" TEXT,
    "userName" TEXT NOT NULL,
    "userImage" TEXT,
    "date" DATE NOT NULL,
    "campaignId" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "DonorComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "bio" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Campaign_creatorId_idx" ON "Campaign"("creatorId");

-- CreateIndex
CREATE INDEX "FAQ_campaignId_idx" ON "FAQ"("campaignId");

-- CreateIndex
CREATE INDEX "Update_campaignId_idx" ON "Update"("campaignId");

-- CreateIndex
CREATE INDEX "DonorComment_campaignId_idx" ON "DonorComment"("campaignId");

-- CreateIndex
CREATE INDEX "DonorComment_userId_idx" ON "DonorComment"("userId");

-- AddForeignKey
ALTER TABLE "Campaign" ADD CONSTRAINT "Campaign_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FAQ" ADD CONSTRAINT "FAQ_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Update" ADD CONSTRAINT "Update_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DonorComment" ADD CONSTRAINT "DonorComment_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DonorComment" ADD CONSTRAINT "DonorComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
