export interface Campaign {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  category: string;
  location: string;
  amountRaised: number;
  goalAmount: number;
  donorsCount: number;
  startDate: string;
  endDate: string;
  creatorName: string;
  creatorImage: string;
}
export interface CampaignResponse {
  total: number;
  page: number;
  limit: number;
  campaigns: Campaign[];
}
