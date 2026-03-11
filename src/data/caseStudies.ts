import casePremise from "@/assets/case-premise.jpg";
import caseSkool from "@/assets/case-skool.png";
import caseEnergy from "@/assets/case-energy.jpg";
import skoolcompass2 from "@/assets/skoolcompass2.png";
import skoolcompass3 from "@/assets/skoolcompass3.png";
import skoolcompass4 from "@/assets/skoolcompass4.png";
import skoolcompass5 from "@/assets/skoolcompass5.png";

export interface CaseStudy {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  tags: string[];
  overview: string;
  problem: string;
  goal: string;
  research: string[];
  process: string;
  features: string[];
  decisions: string;
  outcome: string;
  gallery?: { src: string; caption: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "premise-connect",
    image: casePremise,
    title: "Premise Connect",
    subtitle: "House Renting App",
    tags: ["Mobile App", "Marketplace UX", "Trust & Verification"],
    overview:
      "A mobile platform designed to simplify house hunting by connecting renters with verified property listings in Kenyan cities.",
    problem:
      "Renters in Kenya face a fragmented, opaque market. Listings are scattered across WhatsApp groups, roadside signs, and unreliable websites. Fraud is common — people pay deposits for properties that don't exist. There's no standardized way to verify listings, landlords, or agents.",
    goal: "Design a trustworthy, location-aware rental platform that reduces fraud, improves listing transparency, and makes finding a home straightforward.",
    research: [
      "78% of surveyed renters had encountered misleading or fraudulent listings",
      "Renters spent an average of 3–6 weeks searching, visiting 8+ properties",
      "Trust was the single biggest barrier — people wanted verified listings and real photos",
      "Location proximity to work, schools, and transit was the top filter priority",
    ],
    process:
      "Mapped the end-to-end renter journey from initial search to move-in. Identified friction points through user interviews and competitive analysis. Created user personas for first-time renters, families relocating, and students. Developed wireframes for listing discovery, filtering, verification badges, and landlord communication. Iterated through 3 rounds of usability testing.",
    features: [
      "Verified listing badges with landlord identity checks",
      "Location-based search with map integration",
      "Smart filters for budget, bedrooms, amenities, and proximity",
      "In-app messaging between renters and verified landlords",
      "Photo verification requiring real-time property images",
    ],
    decisions:
      "Prioritized the verification badge system as the primary trust signal. Used map-first navigation because research showed renters think in neighborhoods, not keywords. Designed the messaging flow to keep conversations on-platform, reducing scam risk.",
    outcome:
      "Usability testing showed a 60% reduction in time-to-shortlist compared to participants' current methods. The verification system was rated as the most valued feature by 9 out of 12 test participants.",
  },
  {
    id: "skoolcompass",
    image: caseSkool,
    title: "SkoolCompass",
    subtitle: "School Discovery Platform",
    tags: ["Web Platform", "Information Architecture", "Decision Support"],
    overview:
      "A digital platform that helps parents discover and compare schools based on curriculum, location, fees, and facilities.",
    problem:
      "Parents making school decisions face information overload and inconsistency. School websites vary wildly in quality. Fees are often hidden. Comparing curricula (CBC, 8-4-4, British, IB) requires visiting multiple sources. There's no single place to make an informed comparison.",
    goal: "Design a clear, unbiased school discovery platform that organizes complex education data into a format parents can actually use to make confident decisions.",
    research: [
      "Parents visited an average of 5–7 school websites before making a shortlist",
      "Fee transparency was the #1 frustration — 65% said fees were unclear or hidden",
      "Parents relied heavily on word-of-mouth because they didn't trust online information",
      "Curriculum type and distance from home were the primary decision factors",
    ],
    process:
      "Conducted contextual interviews with 15 parents across different income levels. Built an information architecture that mirrors how parents naturally think about school selection. Designed a comparison matrix that reduces cognitive load. Tested card-based school profiles against list-based layouts — cards won on speed and preference.",
    features: [
      "Structured school profiles with standardized data fields",
      "Side-by-side comparison tool for up to 3 schools",
      "Transparent fee breakdowns with term-by-term visibility",
      "Curriculum filter system (CBC, British, IB, Montessori)",
      "Parent reviews and ratings with verified enrollment",
    ],
    decisions:
      "Chose a card-based layout over dense tables because parents scan, they don't read line-by-line. Built the comparison tool to cap at 3 schools based on research showing more options increase decision paralysis. Made fee information mandatory for listed schools.",
    outcome:
      "User testing demonstrated that parents could create a meaningful shortlist in under 10 minutes — compared to days using their existing methods. The comparison feature had the highest engagement rate in prototype testing.",
  },
  {
    id: "energy-marketplace",
    image: caseEnergy,
    title: "P2P Energy Marketplace",
    subtitle: "Renewable Energy Trading Platform",
    tags: ["Dashboard", "Multi-user Platform", "Sustainability"],
    overview:
      "A marketplace platform where households with solar panels can sell surplus electricity to nearby consumers, creating a decentralized energy ecosystem.",
    problem:
      "Households that invest in solar panels often generate more electricity than they use, but have no way to monetize the surplus. Meanwhile, their neighbors pay high prices to the national grid. The infrastructure for peer-to-peer energy trading exists technically, but there's no accessible platform for regular people.",
    goal: "Design an intuitive marketplace that makes selling and buying surplus solar energy as simple as any other e-commerce transaction — with transparent pricing, real-time tracking, and trust built into the system.",
    research: [
      "Solar panel owners wasted an average of 30% of generated energy",
      "Potential buyers were willing to pay 15–20% less than grid prices for renewable energy",
      "Both sellers and buyers needed real-time visibility into energy production and consumption",
      "Trust and transparent pricing were critical — users feared hidden fees",
    ],
    process:
      "Researched existing energy trading models (UK, Australia, Bangladesh). Defined three user types: sellers (solar owners), buyers (neighbors), and administrators. Mapped transaction flows for each user type. Designed dashboards that surface different information based on role. Prototyped the pricing and trading interface through iterative testing with 10 participants.",
    features: [
      "Role-based dashboards for sellers, buyers, and admins",
      "Real-time energy production and consumption tracking",
      "Transparent dynamic pricing based on supply and demand",
      "Transaction history with detailed energy logs",
      "Proximity-based matching connecting nearby sellers and buyers",
    ],
    decisions:
      "Designed the seller dashboard to emphasize earnings and surplus — motivating continued participation. The buyer view focuses on savings vs. grid pricing. Used progressive disclosure to handle complex data without overwhelming non-technical users. Pricing transparency was a non-negotiable design principle.",
    outcome:
      "Prototype testing with 10 participants showed that 8 could complete a full buy-sell transaction without assistance. The savings calculator was identified as the key conversion driver for potential buyers.",
  },
];
