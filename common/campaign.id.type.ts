interface donorTransactions {
  id: string;
  amount: number;
  date: string;
  paymentMethod: string;
  donorName?: string;
  message?: string;
  campaignId: string;
}

interface DonorComment {
  id: string;
  amount: number;
  isAnonymous: boolean;
  content: string;
  userName: string;
  userImage: string | null;
  date: string;
  campaignId: string;
  userId: string;
}

interface FAQ {
  id: string;
  question: string;
  answer: string;
  campaignId: string;
}

interface Update {
  id: string;
  title: string;
  content: string;
  date: string;
  creatorName: string;
  creatorImage: string | null;
  campaignId: string;
}

export default interface Campaign {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  category: string;
  tags: string[];
  creatorId: string;
  creatorName: string;
  creatorImage: string | null;
  creatorBio: string;
  amountRaised: number;
  goalAmount: number;
  donorsCount: number;
  startDate: string;
  endDate: string;
  location: string;
  status: string;
  featured: boolean;
  verified: boolean;
  donorTransactions: {
    count: number;
    data: donorTransactions[];
  };
  donorComments: {
    count: number;
    data: DonorComment[];
  };
  faqs: {
    count: number;
    data: FAQ[];
  };
  updates: {
    count: number;
    data: Update[];
  };
}

// export interface CampaignResponse {
//   responseTime: number;
//   campaign: Campaign;
// }
