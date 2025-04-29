/*
  Warnings:

  - You are about to drop the column `amount` on the `DonorComment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "DonorComment" DROP COLUMN "amount";

-- CreateTable
CREATE TABLE "DonorTransaction" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "date" DATE NOT NULL,
    "campaignId" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "DonorTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "DonorTransaction_campaignId_idx" ON "DonorTransaction"("campaignId");

-- CreateIndex
CREATE INDEX "DonorTransaction_userId_idx" ON "DonorTransaction"("userId");

-- AddForeignKey
ALTER TABLE "DonorTransaction" ADD CONSTRAINT "DonorTransaction_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DonorTransaction" ADD CONSTRAINT "DonorTransaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
