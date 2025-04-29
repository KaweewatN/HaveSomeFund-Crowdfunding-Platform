-- DropForeignKey
ALTER TABLE "DonorComment" DROP CONSTRAINT "DonorComment_campaignId_fkey";

-- DropForeignKey
ALTER TABLE "DonorTransaction" DROP CONSTRAINT "DonorTransaction_campaignId_fkey";

-- DropForeignKey
ALTER TABLE "FAQ" DROP CONSTRAINT "FAQ_campaignId_fkey";

-- DropForeignKey
ALTER TABLE "Update" DROP CONSTRAINT "Update_campaignId_fkey";

-- AddForeignKey
ALTER TABLE "FAQ" ADD CONSTRAINT "FAQ_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Update" ADD CONSTRAINT "Update_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DonorComment" ADD CONSTRAINT "DonorComment_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DonorTransaction" ADD CONSTRAINT "DonorTransaction_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;
