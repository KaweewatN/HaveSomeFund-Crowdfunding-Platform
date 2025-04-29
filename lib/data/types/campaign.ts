export interface FAQ {
  id: string
  question: string
  answer: string
}

export interface CampaignUpdate {
  id: string
  title: string
  content: string
  date: string
  creatorName: string
  creatorImage?: string
}

export interface CampaignComment {
  id: string
  content: string
  date: string
  userName: string
  userImage?: string
}

export interface CampaignDonor {
  id: string
  name: string
  amount: number
  date: string
  comment?: string
  image?: string
  isAnonymous: boolean
}

export interface Campaign {
  id: string
  title: string
  description: string
  shortDescription: string
  image: string
  gallery?: string[]
  video?: string | null
  category: string
  tags?: string[]
  creatorId: string
  creatorName: string
  creatorImage: string
  creatorBio?: string
  amountRaised: number
  goalAmount: number
  donorsCount: number
  startDate: string
  endDate: string
  location: string
  status: "draft" | "active" | "completed" | "cancelled"
  featured?: boolean
  verified?: boolean
  updates?: CampaignUpdate[]
  faqs?: FAQ[]
}
