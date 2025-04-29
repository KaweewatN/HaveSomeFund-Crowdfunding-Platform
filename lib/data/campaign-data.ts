import type {
  Campaign,
  CampaignComment,
  CampaignDonor,
  CampaignUpdate,
} from "@/lib/data/types/campaign";

// Sample campaign data
const campaigns: Campaign[] = [
  {
    id: "1",
    title: "Community Garden Revitalization",
    description:
      "<p>Help us transform an abandoned lot into a thriving community garden with fresh produce for local families.</p>",
    shortDescription:
      "Help us transform an abandoned lot into a thriving community garden with fresh produce for local families.",
    image: "/placeholder.svg?height=400&width=800",
    category: "Community",
    tags: ["garden", "sustainability", "neighborhood", "food"],
    creatorId: "user1",
    creatorName: "Green Spaces Initiative",
    creatorImage: "/placeholder.svg?height=40&width=40",
    creatorBio:
      "We're a local non-profit dedicated to creating green spaces in urban environments.",
    amountRaised: 8750,
    goalAmount: 15000,
    donorsCount: 124,
    startDate: "2023-09-01",
    endDate: "2023-12-15",
    location: "Portland, OR",
    status: "active",
    featured: true,
    verified: true,
    faqs: [
      {
        id: "faq1",
        question: "How will the garden be maintained?",
        answer:
          "The garden will be maintained by community volunteers and a part-time garden coordinator. We'll establish a schedule for regular maintenance tasks and organize monthly community work days.",
      },
      {
        id: "faq2",
        question: "Who can use the garden?",
        answer:
          "The garden will be open to all community members. We'll have both community plots and individual plots that residents can apply for on a yearly basis.",
      },
      {
        id: "faq3",
        question: "What will be grown in the garden?",
        answer:
          "We plan to grow a variety of vegetables, herbs, and flowers, with a focus on crops that are culturally relevant to our diverse neighborhood and suitable for our climate.",
      },
    ],
    updates: [
      {
        id: "update1",
        title: "Site Cleanup Complete!",
        content:
          "Thanks to our amazing volunteers, we've cleared the lot and removed all debris. The soil testing results came back positive, and we're ready to start building raised beds next week!",
        date: "2023-09-15",
        creatorName: "Green Spaces Initiative",
        creatorImage: "/placeholder.svg?height=40&width=40",
      },
    ],
  },
  {
    id: "2",
    title: "Independent Film Production",
    description:
      "<p>Support our team of independent filmmakers create a short documentary about local artisans.</p>",
    shortDescription:
      "Support our team of independent filmmakers create a short documentary about local artisans.",
    image: "/placeholder.svg?height=400&width=800",
    category: "Creative",
    tags: ["film", "documentary", "arts", "local"],
    creatorId: "user2",
    creatorName: "Indie Lens Collective",
    creatorImage: "/placeholder.svg?height=40&width=40",
    creatorBio:
      "We're a collective of independent filmmakers dedicated to telling authentic stories.",
    amountRaised: 12300,
    goalAmount: 20000,
    donorsCount: 89,
    startDate: "2023-08-15",
    endDate: "2023-11-30",
    location: "Austin, TX",
    status: "active",
    featured: true,
    verified: true,
    faqs: [
      {
        id: "faq1",
        question: "When will the documentary be released?",
        answer:
          "We plan to complete filming by January, finish post-production by March, and premiere the documentary at local film festivals next spring.",
      },
      {
        id: "faq2",
        question: "Will donors receive any perks?",
        answer:
          "Yes! Depending on your donation level, perks include digital downloads of the film, behind-the-scenes content, credits in the film, and invitations to the premiere.",
      },
      {
        id: "faq3",
        question: "How will the funds be used?",
        answer:
          "The funds will cover equipment rental, crew compensation, post-production costs, music licensing, festival submission fees, and marketing expenses.",
      },
    ],
  },
  {
    id: "3",
    title: "Family Medical Emergency Fund",
    description:
      "<p>Help the Johnson family with medical expenses after their daughter's unexpected diagnosis.</p>",
    shortDescription:
      "Help the Johnson family with medical expenses after their daughter's unexpected diagnosis.",
    image: "/placeholder.svg?height=400&width=800",
    category: "Emergency",
    tags: ["medical", "family", "healthcare"],
    creatorId: "user3",
    creatorName: "Friends of Johnson Family",
    creatorImage: "/placeholder.svg?height=40&width=40",
    creatorBio:
      "We are friends and neighbors supporting the Johnson family during this difficult time.",
    amountRaised: 28500,
    goalAmount: 50000,
    donorsCount: 342,
    startDate: "2023-08-01",
    endDate: "2023-10-15",
    location: "Chicago, IL",
    status: "active",
    featured: true,
    verified: true,
    faqs: [
      {
        id: "faq1",
        question: "How is Emma doing now?",
        answer:
          "Emma has started her treatment and is showing incredible strength. The family is taking one day at a time, and the doctors are cautiously optimistic about her response to the initial treatments.",
      },
      {
        id: "faq2",
        question: "Are there other ways to help besides donating?",
        answer:
          "Yes! The family appreciates meal deliveries, help with transportation for their other children, and cards or messages of encouragement for Emma. Contact the campaign organizer for details.",
      },
      {
        id: "faq3",
        question: "Is my donation tax-deductible?",
        answer:
          "No, donations to personal fundraisers like this are generally not tax-deductible. Please consult with a tax professional if you have specific questions about your donation.",
      },
    ],
  },
  // Add more campaigns with FAQs as needed
  {
    id: "9",
    title: "Hurricane Relief Fund",
    description:
      "<p>Providing immediate assistance to families affected by the recent hurricane.</p>",
    shortDescription:
      "Providing immediate assistance to families affected by the recent hurricane.",
    image: "/placeholder.svg?height=400&width=800",
    category: "Emergency",
    tags: ["disaster", "relief", "hurricane", "emergency"],
    creatorId: "user9",
    creatorName: "Disaster Response Network",
    creatorImage: "/placeholder.svg?height=40&width=40",
    creatorBio:
      "We're a local disaster response organization providing immediate relief and recovery support.",
    amountRaised: 87300,
    goalAmount: 100000,
    donorsCount: 943,
    startDate: "2023-09-01",
    endDate: "2023-10-05",
    location: "Miami, FL",
    status: "active",
    featured: false,
    verified: true,
    faqs: [
      {
        id: "faq1",
        question: "How quickly will funds be distributed to affected families?",
        answer:
          "We're distributing funds on a rolling basis as they come in. Emergency assistance is being provided within 24-48 hours of receiving applications from affected families.",
      },
      {
        id: "faq2",
        question: "What specific items are being provided to families?",
        answer:
          "We're providing emergency supplies including bottled water, non-perishable food, hygiene kits, baby supplies, first aid items, tarps, and cleaning supplies. We're also offering financial assistance for temporary housing.",
      },
      {
        id: "faq3",
        question: "How are you identifying families in need?",
        answer:
          "We're working with local emergency management agencies, community centers, and shelters to identify affected families. We also have a simple application process for those who need assistance.",
      },
      {
        id: "faq4",
        question: "Can I volunteer to help with relief efforts?",
        answer:
          "Yes! We need volunteers for supply distribution, debris cleanup, and home repairs. Please contact our volunteer coordinator at volunteer@disasterresponse.org for more information.",
      },
    ],
  },
];

// Sample campaign updates
export const campaignUpdates: Record<string, CampaignUpdate[]> = {
  "1": [
    {
      id: "update1",
      title: "Site Cleanup Complete!",
      content:
        "Thanks to our amazing volunteers, we've cleared the lot and removed all debris. The soil testing results came back positive, and we're ready to start building raised beds next week!",
      date: "2023-09-15",
      creatorName: "Green Spaces Initiative",
      creatorImage: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "update2",
      title: "First Raised Beds Installed",
      content:
        "We've completed the first 8 raised beds and filled them with soil. Local schools will be helping us plant the first crops next weekend. We're still on track to complete the project by November!",
      date: "2023-09-30",
      creatorName: "Green Spaces Initiative",
      creatorImage: "/placeholder.svg?height=40&width=40",
    },
  ],
};

// Sample campaign comments
export const campaignComments: Record<string, CampaignComment[]> = {
  "1": [
    {
      id: "comment1",
      content:
        "This is exactly what our neighborhood needs! I can't wait to see the garden come to life.",
      date: "2023-09-05",
      userName: "Maria Rodriguez",
      userImage: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "comment2",
      content:
        "I'm a master gardener and would love to volunteer my expertise. How can I get involved?",
      date: "2023-09-10",
      userName: "James Wilson",
      userImage: "/placeholder.svg?height=40&width=40",
    },
  ],
  "2": [
    {
      id: "comment1",
      content:
        "I've seen your previous work and it's amazing. Looking forward to this documentary!",
      date: "2023-08-20",
      userName: "Sarah Chen",
      userImage: "/placeholder.svg?height=40&width=40",
    },
  ],
  "3": [
    {
      id: "comment1",
      content:
        "Sending love and strength to Emma and the whole Johnson family. You're not alone in this fight!",
      date: "2023-08-05",
      userName: "Lisa Thompson",
      userImage: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "comment2",
      content:
        "My daughter went through something similar last year. Please reach out if you need someone to talk to who understands.",
      date: "2023-08-10",
      userName: "Robert Miller",
      userImage: "/placeholder.svg?height=40&width=40",
    },
  ],
  "9": [
    {
      id: "comment1",
      content:
        "Thank you for organizing this relief effort. My family received supplies yesterday and it made a huge difference.",
      date: "2023-09-10",
      userName: "Carlos Mendez",
      userImage: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "comment2",
      content:
        "I'm coordinating a group of volunteers from my church. We'll be there Saturday to help with debris removal.",
      date: "2023-09-12",
      userName: "Jennifer Adams",
      userImage: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "comment3",
      content:
        "Is there a need for specific items right now? I can organize a collection drive in my neighborhood.",
      date: "2023-09-15",
      userName: "Michael Johnson",
      userImage: "/placeholder.svg?height=40&width=40",
    },
  ],
};

// Sample campaign donors
export const campaignDonors: Record<string, CampaignDonor[]> = {
  "1": [
    {
      id: "donor1",
      name: "Thomas Wright",
      amount: 500,
      date: "2023-09-02",
      comment: "So happy to support this wonderful project for our community!",
      image: "/placeholder.svg?height=40&width=40",
      isAnonymous: false,
    },
    {
      id: "donor2",
      name: "Anonymous",
      amount: 100,
      date: "2023-09-05",
      comment: "Great initiative. Looking forward to seeing the garden grow!",
      isAnonymous: true,
    },
    {
      id: "donor3",
      name: "Emily Johnson",
      amount: 250,
      date: "2023-09-10",
      image: "/placeholder.svg?height=40&width=40",
      isAnonymous: false,
    },
  ],
  "9": [
    {
      id: "donor1",
      name: "Corporate Cares Inc.",
      amount: 10000,
      date: "2023-09-02",
      comment: "We stand with the community during this difficult time.",
      image: "/placeholder.svg?height=40&width=40",
      isAnonymous: false,
    },
    {
      id: "donor2",
      name: "Anonymous",
      amount: 500,
      date: "2023-09-03",
      comment: "Praying for everyone affected by the hurricane.",
      isAnonymous: true,
    },
    {
      id: "donor3",
      name: "David Martinez",
      amount: 250,
      date: "2023-09-05",
      comment: "Sending strength to all the families. Stay strong!",
      image: "/placeholder.svg?height=40&width=40",
      isAnonymous: false,
    },
    {
      id: "donor4",
      name: "Local Heroes Foundation",
      amount: 5000,
      date: "2023-09-07",
      image: "/placeholder.svg?height=40&width=40",
      isAnonymous: false,
    },
    {
      id: "donor5",
      name: "Anonymous",
      amount: 100,
      date: "2023-09-10",
      isAnonymous: true,
    },
  ],
};

// Function to get a campaign by ID
export function getCampaignById(id: string): Campaign | undefined {
  return campaigns.find((campaign) => campaign.id === id);
}

// Function to get all campaigns
export function getAllCampaigns(): Campaign[] {
  return campaigns;
}

// Function to get featured campaigns
export function getFeaturedCampaigns(): Campaign[] {
  return campaigns.filter((campaign) => campaign.featured);
}

// Function to get campaigns by category
export function getCampaignsByCategory(category: string): Campaign[] {
  return campaigns.filter(
    (campaign) => campaign.category.toLowerCase() === category.toLowerCase()
  );
}

// Function to get campaigns by creator
export function getCampaignsByCreator(creatorId: string): Campaign[] {
  return campaigns.filter((campaign) => campaign.creatorId === creatorId);
}

export type { CampaignComment, CampaignDonor, CampaignUpdate };
