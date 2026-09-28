export type IndustryItem = {
  id: string;
  title: string;
  icon: string;
  sector: string;
  desc: string;
  tags: string[];
  img: string;
  badgeNum: string;
  badgeLabel: string;
  cta: string;
  reverse: boolean;
  accent: string;
  badgeAccent: string;
};

export const industries: IndustryItem[] = [
  {
    id: "fintech",
    title: "Finance & Fintech",
    icon: "fa-solid fa-building-columns",
    sector: "SECTOR 01",
    desc: "Central Bank compliant digital wallet cores, micro-lending platforms, automated KYC/AML verification, multi-currency accounting, and peer-to-peer payment engines.",
    tags: [
      "Central Bank Ready",
      "KYC / AML Pipelines",
      "Multi-Currency",
      "E-Wallets"
    ],
    img: "/images/der.jpeg",
    badgeNum: "AED 5B+",
    badgeLabel: "Transactions Processed",
    cta: "Explore Fintech Solutions",
    reverse: false,
    accent: "text-cyan",
    badgeAccent: "text-cyan"
  },
  {
    id: "events",
    title: "Event and Exhibitions",
    icon: "fa-solid fa-ticket",
    sector: "SECTOR 02",
    desc: "High-concurrency digital ticketing, automated badge printing, vendor & attendee management portals, and AI-driven interactive exhibition experiences across the UAE.",
    tags: [
      "Dynamic QR Ticketing",
      "Access Control",
      "Cashless Payments",
      "Exhibitor Portals"
    ],
    img: "/images/sdfg.png",
    badgeNum: "100K+ SCANS",
    badgeLabel: "Real-Time Access Control",
    cta: "Explore Event Solutions",
    reverse: true,
    accent: "text-red",
    badgeAccent: "text-red"
  },
  {
    id: "hospitality",
    title: "Hospitality & Tourism",
    icon: "fa-solid fa-hotel",
    sector: "SECTOR 03",
    desc: "Centralized hotel booking engines, guest self-check-in kiosks, dynamic pricing algorithms, staff task dispatch, and multilingual concierge applications.",
    tags: [
      "Booking Engine",
      "Guest Self-Service",
      "POS & Billing",
      "Bilingual Concierge"
    ],
    img: "/images/tyuity.jpeg",
    badgeNum: "99.9% UPTIME",
    badgeLabel: "Booking Engine SLA",
    cta: "Explore Hospitality Solutions",
    reverse: false,
    accent: "text-cyan",
    badgeAccent: "text-cyan"
  },
  {
    id: "construction",
    title: "Construction & Engineering",
    icon: "fa-solid fa-helmet-safety",
    sector: "SECTOR 04",
    desc: "Subcontractor valuation workflows, material procurement tracking, site safety logs, and milestone-based project ERPs for contractors across the GCC.",
    tags: [
      "Procurement ERP",
      "Site Tracking",
      "Valuation Software"
    ],
    img: "/images/fdgtd.jpeg",
    badgeNum: "GCC ERP",
    badgeLabel: "Procurement Systems",
    cta: "Explore Construction Solutions",
    reverse: true,
    accent: "text-red",
    badgeAccent: "text-red"
  },
  {
    id: "healthcare",
    title: "Healthcare & HealthTech",
    icon: "fa-solid fa-heart-pulse",
    sector: "SECTOR 05",
    desc: "DHA and DOH compliant EMRs, telemedicine apps, clinic management portals, and e-prescription workflows built for high patient velocity across the UAE.",
    tags: [
      "DHA Interoperability",
      "Telehealth",
      "E-Prescriptions"
    ],
    img: "/images/ind-healthcare.jpg",
    badgeNum: "DHA & DOH",
    badgeLabel: "Compliant Portals",
    cta: "Explore Healthcare Solutions",
    reverse: false,
    accent: "text-cyan",
    badgeAccent: "text-cyan"
  },
  {
    id: "real-estate",
    title: "Real Estate & PropTech",
    icon: "fa-solid fa-city",
    sector: "SECTOR 06",
    desc: "Tenant self-service apps, automated Ejari lease management, facility maintenance dispatch, and escrow tracking for developers across the UAE.",
    tags: [
      "Property Portals",
      "Ejari Sync",
      "Tenant Portals"
    ],
    img: "/images/ind-realestate.jpg",
    badgeNum: "EJARI",
    badgeLabel: "Automated Sync",
    cta: "Explore PropTech Solutions",
    reverse: true,
    accent: "text-red",
    badgeAccent: "text-red"
  },
  {
    id: "logistics",
    title: "Logistics & Supply Chain",
    icon: "fa-solid fa-truck-fast",
    sector: "SECTOR 07",
    desc: "Real-time fleet GPS tracking, dynamic AI route optimization, cross-border customs documentation, warehouse inventory automation, and multi-depot ERPs.",
    tags: [
      "Route AI",
      "Fleet GPS",
      "Customs E-Filing",
      "WMS & Dispatch"
    ],
    img: "/images/ind-logistics.jpg",
    badgeNum: "20% FUEL",
    badgeLabel: "Cost Reduction",
    cta: "Explore Logistics Solutions",
    reverse: false,
    accent: "text-cyan",
    badgeAccent: "text-cyan"
  },
  {
    id: "retail",
    title: "Retail & E-commerce",
    icon: "fa-solid fa-bag-shopping",
    sector: "SECTOR 08",
    desc: "Omnichannel POS inventory synchronization, buy-now-pay-later integrations (Tabby, Tamara), localized checkouts, and automated fulfillment workflows.",
    tags: [
      "BNPL Ready",
      "Omnichannel POS",
      "Localized Checkout"
    ],
    img: "/images/ind-retail.jpg",
    badgeNum: "BNPL",
    badgeLabel: "Tabby & Tamara",
    cta: "Explore Retail Solutions",
    reverse: true,
    accent: "text-red",
    badgeAccent: "text-red"
  },
  {
    id: "education",
    title: "Education & EdTech",
    icon: "fa-solid fa-graduation-cap",
    sector: "SECTOR 09",
    desc: "Student Information Systems (SIS), automated tuition fee collection, parent portals, interactive LMS platforms, and regional regulatory sync.",
    tags: [
      "KHDA / ADEK Sync",
      "Automated Tuition",
      "Parent Portals"
    ],
    img: "/images/ind-education.jpg",
    badgeNum: "KHDA & ADEK",
    badgeLabel: "Compliant SIS",
    cta: "Explore EdTech Solutions",
    reverse: false,
    accent: "text-cyan",
    badgeAccent: "text-cyan"
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Production",
    icon: "fa-solid fa-industry",
    sector: "SECTOR 10",
    desc: "Shop-floor IoT sensors, raw material MRP tracking, batch quality assurance, and automated VAT e-invoicing for industrial enterprises.",
    tags: [
      "Shop-Floor MRP",
      "Batch Control",
      "E-Invoicing"
    ],
    img: "/images/ind-manufacturing.jpg",
    badgeNum: "FTA READY",
    badgeLabel: "VAT E-Invoicing",
    cta: "Explore Industrial Solutions",
    reverse: true,
    accent: "text-red",
    badgeAccent: "text-red"
  }
];