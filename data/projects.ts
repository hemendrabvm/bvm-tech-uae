export type ProjectStat = {
  value: string;
  label: string;
};

export type ProjectFilter =
  | "all"
  | "erp-crm"
  | "real-estate"
  | "fintech"
  | "ai-automation"
  | "edtech"
  | "custom-software";

export type CaseStudyPainPoint = {
  title: string;
  desc: string;
};

export type CaseStudyModule = {
  icon: string;
  iconClass: string;
  title: string;
  desc: string;
};

export type CaseStudyDetail = {
  headerCategory: string;
  titleLine1: string;
  titleLine2: string;
  summary: string;
  trustTags: { icon: string; text: string }[];
  floatingPills: { position: string; icon: string; text: string }[];
  challengeBadge: string;
  challengeTitle: string;
  challengeIntro: string[];
  painPoints: CaseStudyPainPoint[];
  solutionBadge: string;
  solutionTitle: string;
  solutionSubtitle: string;
  solutionVisual: {
    badge: string;
    title: string;
    desc: string;
    img: string;
    imgAlt: string;
    overlay: string;
  };
  modules: CaseStudyModule[];
  impactBadge: string;
  impactTitle: string;
  impactMetrics: { target: string; suffix: string; label: string; color: string }[];
};

export type Project = {
  slug: string;
  name: string;
  shortName: string;
  categories: ProjectFilter[];
  indexCode: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  stats: ProjectStat[];
  floatingBadge: { num: string; label: string };
  reverse: boolean;
  accent: "cyan" | "red";
  liveUrl?: string;
  caseStudy?: CaseStudyDetail;
};

export const projectFilters: { id: ProjectFilter; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "custom-software", label: "Custom Software" },
  { id: "erp-crm", label: "ERP & CRM" },
  { id: "real-estate", label: "Real Estate & PropTech" },
  { id: "fintech", label: "FinTech & Trading" },
  { id: "ai-automation", label: "AI & Automation" },
  { id: "edtech", label: "E-Learning & EdTech" },
];

export const projects: Project[] = [
  // 1. KINGS FURNITURE
  {
    slug: "kings-furniture",
    name: "Kings Furniture - In-House Inventory Management System",
    shortName: "Kings Furniture",
    categories: ["custom-software", "erp-crm"],
    indexCode: "01 / INVENTORY MANAGEMENT SYSTEM",
    description:
      "A custom inventory management platform developed to centralize store operations, manage invoices and inventory, and provide role-based access through a structured PHP and MySQL architecture.",
    image: "/images/m1.png",
    imageAlt: "Kings Furniture In-House Inventory Management System",
    technologies: ["PHP", "MySQL", "JavaScript"],
    stats: [
      { value: "1", label: "Centralized Platform" },
      { value: "100%", label: "Structured Inventory Data" },
    ],
    floatingBadge: {
      num: "1 PLATFORM",
      label: "Centralized Operations",
    },
    reverse: false,
    accent: "cyan",
    liveUrl: "https://www.kingsfurniture.com",
    caseStudy: {
      headerCategory: "CASE STUDY / INVENTORY MANAGEMENT SYSTEM",
      titleLine1: "Kings Furniture - In-House Inventory",
      titleLine2: "Management Platform.",
      summary:
        "A custom inventory management platform developed to centralize store operations, manage invoices and inventory, and provide role-based access through a structured PHP and MySQL architecture.",
      trustTags: [
        { icon: "fa-solid fa-couch text-cyan", text: "Kings Furniture" },
        { icon: "fa-solid fa-code text-red", text: "PHP & MySQL Engine" },
        { icon: "fa-solid fa-database text-cyan", text: "Role-Based Access" },
      ],
      floatingPills: [
        {
          position: "pill-top",
          icon: "fa-solid fa-boxes-stacked text-cyan",
          text: "Centralized Inventory",
        },
        {
          position: "pill-bottom-left",
          icon: "fa-solid fa-store text-red",
          text: "Store Management",
        },
        {
          position: "pill-bottom-right",
          icon: "fa-solid fa-file-invoice text-cyan",
          text: "Invoice Records",
        },
      ],
      challengeBadge: "CLIENT REQUIREMENTS & CHALLENGES",
      challengeTitle: "Building a Centralized Inventory Management System for Kings Furniture",
      challengeIntro: [
        "Kings Furniture required an in-house management system to efficiently handle inventory, stores, invoices, and day-to-day administrative operations from a centralized platform.",
        "The system needed flexible role-based access, structured data management, and a reliable backend architecture to help administrators maintain better control over business operations.",
      ],
      painPoints: [
        {
          title: "Centralized Inventory Management",
          desc: "Creating a unified system to manage inventory and store-related information from a single administrative platform.",
        },
        {
          title: "Role-Based Access Control",
          desc: "Enabling administrators to create different user roles and assign permissions based on individual responsibilities.",
        },
        {
          title: "Store & Invoice Management",
          desc: "Organizing store information and invoice records within a structured system for easier administration and tracking.",
        },
        {
          title: "Reliable Data Architecture",
          desc: "Developing a secure and dependable PHP and MySQL backend to support efficient data management and future business expansion.",
        },
      ],
      solutionBadge: "OUR ENGINEERING SOLUTION",
      solutionTitle: "Centralized Platform for Smarter Inventory & Store Management",
      solutionSubtitle:
        "BVM engineered a custom in-house inventory management system combining role-based administration, store management, invoice handling, and centralized inventory data into one streamlined platform.",
      solutionVisual: {
        badge: "SCALABLE INVENTORY ARCHITECTURE",
        title: "Custom Business Management Platform",
        desc: "Engineered with PHP and MySQL to provide a structured, reliable, and scalable solution tailored to Kings Furniture's internal business operations.",
        img: "/images/m1.png",
        imgAlt: "Kings Furniture In-House Management System Interface",
        overlay: "PHP & MySQL Management Engine",
      },
      modules: [
        {
          icon: "fa-solid fa-user-shield",
          iconClass: "text-cyan",
          title: "Role & Permission Management",
          desc: "A flexible access-control system allowing administrators to create user roles and assign specific permissions according to business responsibilities.",
        },
        {
          icon: "fa-solid fa-store",
          iconClass: "text-red",
          title: "Store Management",
          desc: "Centralized store management enabling administrators to maintain and organize information across different business locations.",
        },
        {
          icon: "fa-solid fa-file-invoice",
          iconClass: "text-cyan",
          title: "Invoice Management",
          desc: "Structured invoice management supporting organized record keeping and easier access to transaction-related information.",
        },
        {
          icon: "fa-solid fa-warehouse",
          iconClass: "text-red",
          title: "Inventory Management",
          desc: "A centralized inventory system designed to maintain product and stock-related information efficiently across the business.",
        },
      ],
      impactBadge: "PROVEN BUSINESS IMPACT",
      impactTitle: "A Centralized Platform Built for Efficient Business Operations",
      impactMetrics: [
        {
          target: "1",
          suffix: "",
          label: "Centralized Management Platform",
          color: "text-cyan",
        },
        {
          target: "100",
          suffix: "%",
          label: "Structured Inventory & Store Data",
          color: "text-red",
        },
        {
          target: "24",
          suffix: "/7",
          label: "Accessible Business Management",
          color: "text-white",
        },
        {
          target: "10",
          suffix: "+ Roles",
          label: "Multiple User Roles & Permissions",
          color: "text-cyan",
        },
      ],
    },
  },

  // 2. ROYAL CARE FS
  {
    slug: "royal-care-fs",
    name: "Royal Care FS - Modern Furniture Protection & Service Platform",
    shortName: "Royal Care FS",
    categories: ["custom-software", "fintech"],
    indexCode: "02 / FURNITURE PROTECTION & SERVICES",
    description:
      "A responsive digital platform developed to present furniture protection plans, simplify claims and service information, and deliver a seamless customer experience across devices using modern web technologies.",
    image: "/images/yuye.png",
    imageAlt: "Royal Care FS Platform Interface",
    technologies: ["Node.js", "Next.js", "MySQL", "JavaScript"],
    stats: [
      { value: "3 Core", label: "Protection & Claims Areas" },
      { value: "100%", label: "Responsive Experience" },
    ],
    floatingBadge: {
      num: "3 CORE AREAS",
      label: "Protection, Claims & Services",
    },
    reverse: true,
    accent: "red",
    liveUrl: "https://royalcarefs.com/",
    caseStudy: {
      headerCategory: "CASE STUDY / FURNITURE PROTECTION & SERVICES",
      titleLine1: "Royal Care FS - Modern Furniture Protection",
      titleLine2: "& Service Platform.",
      summary:
        "A responsive digital platform developed to present furniture protection plans, simplify claims and service information, and deliver a seamless customer experience across devices using modern web technologies.",
      trustTags: [
        { icon: "fa-solid fa-shield-heart text-cyan", text: "Royal Care FS" },
        { icon: "fa-brands fa-node-js text-red", text: "Node.js & Next.js" },
        { icon: "fa-solid fa-database text-cyan", text: "MySQL Database" },
      ],
      floatingPills: [
        {
          position: "pill-top",
          icon: "fa-solid fa-mobile-screen text-cyan",
          text: "Mobile-First Next.js",
        },
        {
          position: "pill-bottom-left",
          icon: "fa-solid fa-shield-halved text-red",
          text: "Protection & Claims",
        },
        {
          position: "pill-bottom-right",
          icon: "fa-solid fa-clock text-cyan",
          text: "24/7 Service Access",
        },
      ],
      challengeBadge: "CLIENT REQUIREMENTS & CHALLENGES",
      challengeTitle: "Building a Professional Digital Platform for Royal Care FS",
      challengeIntro: [
        "Royal Care FS required a modern, scalable, and user-friendly website to establish its digital presence, clearly communicate its furniture protection services, and make it easier for consumers and retail partners to access relevant information.",
        "The project required a combination of engaging frontend experience, structured service presentation, responsive design, and a reliable backend architecture to support smooth digital interactions.",
      ],
      painPoints: [
        {
          title: "Modern & Professional Web Presence",
          desc: "Creating a polished digital experience that reflects Royal Care FS’s brand, furniture protection services, and professional identity.",
        },
        {
          title: "Clear Service Presentation",
          desc: "Structuring protection plans, claims, and service information into intuitive sections so visitors can quickly understand the available solutions.",
        },
        {
          title: "Responsive User Experience",
          desc: "Delivering a seamless browsing experience across desktops, tablets, and mobile devices through a responsive Next.js frontend.",
        },
        {
          title: "Scalable & Reliable Architecture",
          desc: "Developing a robust web application using Node.js, Next.js, and MySQL to support efficient data handling, performance, and future scalability.",
        },
      ],
      solutionBadge: "OUR ENGINEERING SOLUTION",
      solutionTitle: "Digital Platform for Seamless Protection & Service Management",
      solutionSubtitle:
        "BVM engineered a modern furniture service platform combining intuitive information discovery, structured content, responsive experiences, and scalable backend architecture to support customer and partner engagement.",
      solutionVisual: {
        badge: "SCALABLE DIGITAL ARCHITECTURE",
        title: "Modern Furniture Service Platform",
        desc: "Engineered with Node.js, Next.js, and MySQL to deliver a fast, reliable, and scalable digital experience across devices.",
        img: "/images/yuye.png",
        imgAlt: "Royal Care FS Platform Interface",
        overlay: "Responsive Next.js & Node.js Engine",
      },
      modules: [
        {
          icon: "fa-solid fa-shield-halved",
          iconClass: "text-cyan",
          title: "Service Discovery & Information",
          desc: "Structured service architecture enables visitors to easily explore furniture protection plans, claims information, service solutions, and relevant details.",
        },
        {
          icon: "fa-solid fa-mobile-screen",
          iconClass: "text-red",
          title: "Responsive User Experience",
          desc: "A responsive interface designed for seamless navigation and accessibility across desktops, tablets, and smartphones.",
        },
        {
          icon: "fa-solid fa-database",
          iconClass: "text-cyan",
          title: "Dynamic Content Management",
          desc: "Flexible backend architecture supporting efficient management of website content, service information, enquiries, and business data.",
        },
        {
          icon: "fa-solid fa-server",
          iconClass: "text-red",
          title: "Scalable & Reliable Architecture",
          desc: "Robust web architecture designed to support smooth performance, secure data handling, and long-term scalability as the platform evolves.",
        },
      ],
      impactBadge: "DIGITAL BUSINESS IMPACT",
      impactTitle: "A Connected Digital Platform Built for Better Customer Engagement",
      impactMetrics: [
        {
          target: "3",
          suffix: " Core",
          label: "Protection, Claims & Services",
          color: "text-cyan",
        },
        {
          target: "24",
          suffix: "/7",
          label: "Digital Access to Service Info",
          color: "text-red",
        },
        {
          target: "100",
          suffix: "%",
          label: "Responsive & Cross-Device",
          color: "text-white",
        },
        {
          target: "1",
          suffix: " Platform",
          label: "For Consumers & Retail Partners",
          color: "text-cyan",
        },
      ],
    },
  },

  // 3. HRMS ERP
  {
    slug: "hrms-erp-platform",
    name: "HRMS ERP - Enterprise Operations Platform",
    shortName: "HRMS ERP",
    categories: ["custom-software", "erp-crm"],
    indexCode: "03 / ENTERPRISE ERP & HRMS",
    description:
      "A smart centralized business platform combining employee management, payroll automation, attendance tracking, employee self-service, reporting, and workflow approvals.",
    image: "/images/m3.png",
    imageAlt: "Smart Human Resource & ERP Management Platform",
    technologies: ["JavaScript", "Node.js", "MySQL", "AWS Cloud Hosting"],
    stats: [
      { value: "70%", label: "Reduction in Manual HR Work" },
      { value: "4x", label: "Faster Payroll Processing" },
    ],
    floatingBadge: {
      num: "70% FASTER",
      label: "Manual HR Work Reduced",
    },
    reverse: false,
    accent: "cyan",
    caseStudy: {
      headerCategory: "CASE STUDY / ENTERPRISE HRMS & ERP",
      titleLine1: "HRMS ERP - Centralized Workforce",
      titleLine2: "& Payroll Management.",
      summary:
        "The HRMS ERP platform was designed for modern businesses looking to digitize and automate internal operations, combining HR management, payroll automation, attendance tracking, and workflow approvals into one centralized platform.",
      trustTags: [
        { icon: "fa-solid fa-users-gear text-cyan", text: "Enterprise HRMS" },
        { icon: "fa-brands fa-node-js text-red", text: "Node.js & MySQL" },
        { icon: "fa-solid fa-cloud text-cyan", text: "AWS Cloud Deployment" },
      ],
      floatingPills: [
        {
          position: "pill-top",
          icon: "fa-solid fa-money-check-dollar text-cyan",
          text: "Automated Payroll",
        },
        {
          position: "pill-bottom-left",
          icon: "fa-solid fa-user-clock text-red",
          text: "Attendance & Leave Sync",
        },
        {
          position: "pill-bottom-right",
          icon: "fa-solid fa-shield-halved text-cyan",
          text: "Role-Based Access",
        },
      ],
      challengeBadge: "CLIENT REQUIREMENTS & CHALLENGES",
      challengeTitle: "Eliminating Fragmented HR Spreadsheets & Payroll Bottlenecks",
      challengeIntro: [
        "The organization required a unified platform covering employee management, attendance & leave tracking, automated salary calculation, and real-time operational analytics.",
        "Managing large volumes of employee records securely, calculating overtime and leaves accurately without payroll errors, and enforcing multi-level managerial approval hierarchies were primary operational hurdles.",
      ],
      painPoints: [
        {
          title: "Secure Employee Data Storage",
          desc: "Storing sensitive personal, contractual, and financial employee records with strict access controls.",
        },
        {
          title: "Complex Payroll Calculations",
          desc: "Automating salary calculations with deductions, allowances, leave adjustments, and bonus structures.",
        },
        {
          title: "Attendance Tracking Verification",
          desc: "Synchronizing biometric and remote clock-in attendance data directly with the HR payroll ledger.",
        },
        {
          title: "Multi-Level Workflow Approvals",
          desc: "Establishing structured approval matrices for leave requests, expense claims, and onboarding tasks.",
        },
      ],
      solutionBadge: "OUR ENGINEERING SOLUTION",
      solutionTitle: "Automated Attendance, Payroll & Employee Self-Service",
      solutionSubtitle:
        "BVM developed an enterprise Node.js and MySQL architecture featuring employee self-service portals, automated payroll runs, and customized approval workflows.",
      solutionVisual: {
        badge: "ENTERPRISE CORE",
        title: "Workforce & Operations Dashboard",
        desc: "Engineered with Node.js and MySQL on AWS cloud for real-time workforce management.",
        img: "/images/m3.png",
        imgAlt: "HRMS ERP System Interface",
        overlay: "ACID-Compliant Payroll Engine",
      },
      modules: [
        {
          icon: "fa-solid fa-money-bill-transfer",
          iconClass: "text-cyan",
          title: "Payroll Automation Engine",
          desc: "One-click payroll processing with automated calculations, payslip generation, and bank file exports.",
        },
        {
          icon: "fa-solid fa-calendar-check",
          iconClass: "text-red",
          title: "Attendance & Leave Core",
          desc: "Live attendance monitoring, shift planning, leave balance quotas, and remote check-in verification.",
        },
        {
          icon: "fa-solid fa-id-card",
          iconClass: "text-cyan",
          title: "Employee Self-Service (ESS)",
          desc: "Intuitive portal enabling staff to view payslips, request time off, and update document credentials.",
        },
        {
          icon: "fa-solid fa-shield-halved",
          iconClass: "text-red",
          title: "Role-Based Permissions",
          desc: "Granular administrative control ensuring department managers only access authorized workforce data.",
        },
      ],
      impactBadge: "PROVEN BUSINESS IMPACT",
      impactTitle: "Significant Operational Efficiency Gains",
      impactMetrics: [
        {
          target: "70",
          suffix: "%",
          label: "Reduction in Manual HR Work",
          color: "text-cyan",
        },
        {
          target: "4",
          suffix: "x",
          label: "Faster Payroll Processing",
          color: "text-red",
        },
        {
          target: "1500",
          suffix: "+",
          label: "Active Employees Managed",
          color: "text-white",
        },
        {
          target: "99.9",
          suffix: "%",
          label: "Attendance Tracking Accuracy",
          color: "text-cyan",
        },
      ],
    },
  },

  // 4. REALTY GURU
  {
    slug: "realty-guru",
    name: "Realty Guru - Smart Property Management Platform",
    shortName: "Realty Guru",
    categories: ["custom-software", "real-estate", "erp-crm"],
    indexCode: "04 / REAL ESTATE & PROPERTY MANAGEMENT",
    description:
      "All-in-one real estate management platform designed to streamline property operations, maintenance, inspections, contractor management, accounting, reporting, and communication through one connected digital solution.",
    image: "/images/m7.png",
    imageAlt: "Realty Guru Property Management Dashboard",
    technologies: ["PHP", "CodeIgniter", "MySQL", "JavaScript"],
    stats: [
      { value: "100%", label: "Centralized Property Management" },
      { value: "5+", label: "Core Management Modules" },
    ],
    floatingBadge: {
      num: "100% UNIFIED",
      label: "Connected Property Operations",
    },
    reverse: true,
    accent: "red",
    liveUrl: "https://www.realtyguru.agency/",
    caseStudy: {
      headerCategory: "CASE STUDY / PROPERTY MANAGEMENT PLATFORM",
      titleLine1: "Realty Guru - Connected Real Estate",
      titleLine2: "Operations & Accounting Core.",
      summary:
        "Realty Guru is a smart property management platform that connects property managers, landlords, tenants, agencies, and contractors while simplifying maintenance, inspections, accounting, communication, and reporting.",
      trustTags: [
        { icon: "fa-solid fa-building text-cyan", text: "Realty Guru" },
        { icon: "fa-solid fa-code text-red", text: "PHP & CodeIgniter" },
        { icon: "fa-solid fa-calculator text-cyan", text: "Trust Accounting Ready" },
      ],
      floatingPills: [
        {
          position: "pill-top",
          icon: "fa-solid fa-city text-cyan",
          text: "Full Property Lifecycle",
        },
        {
          position: "pill-bottom-left",
          icon: "fa-solid fa-file-invoice-dollar text-red",
          text: "Trust Accounting",
        },
        {
          position: "pill-bottom-right",
          icon: "fa-solid fa-screwdriver-wrench text-cyan",
          text: "Maintenance Workflows",
        },
      ],
      challengeBadge: "CLIENT REQUIREMENTS & CHALLENGES",
      challengeTitle: "Simplifying Complex Property Management Operations",
      challengeIntro: [
        "The client required a centralized property management platform to streamline property, tenant, landlord, maintenance, contractor, accounting, and inspection operations.",
        "The key challenge was connecting multiple workflows within one easy-to-use system while reducing manual processes, improving communication, ensuring financial transparency, and providing accurate reporting for better property management decisions.",
      ],
      painPoints: [
        {
          title: "Centralized Property Management",
          desc: "Managing properties, tenants, landlords, maintenance, inspections, contractors, and financial operations through one connected platform.",
        },
        {
          title: "Complex Role-Based Access",
          desc: "Providing secure and customized access for property managers, landlords, tenants, contractors, and other users based on their roles.",
        },
        {
          title: "Maintenance & Inspection Management",
          desc: "Streamlining maintenance requests, property inspections, contractor assignments, and service tracking to reduce manual coordination.",
        },
        {
          title: "Financial & Trust Accounting",
          desc: "Managing invoices, transactions, trust accounting, financial statements, and reports accurately while maintaining complete financial transparency.",
        },
      ],
      solutionBadge: "OUR ENGINEERING SOLUTION",
      solutionTitle: "Custom Property Management Platform with Integrated Operations",
      solutionSubtitle:
        "Engineered a centralized property management architecture featuring property dashboards, maintenance workflows, inspection management, contractor coordination, financial operations, and responsive user experiences.",
      solutionVisual: {
        badge: "PROPERTY MANAGEMENT PLATFORM",
        title: "Smart & Connected Property Management System",
        desc: "Built to streamline high-volume property operations, improve collaboration, and provide centralized visibility across every management workflow.",
        img: "/images/m7.png",
        imgAlt: "Realty Guru Property Management UI",
        overlay: "Integrated Trust Accounting & Maintenance",
      },
      modules: [
        {
          icon: "fa-solid fa-house-chimney-user",
          iconClass: "text-cyan",
          title: "Property & Tenant Management",
          desc: "Complete management dashboard for properties, tenants, landlords, leases, and essential property information.",
        },
        {
          icon: "fa-solid fa-clipboard-check",
          iconClass: "text-red",
          title: "Maintenance & Inspection Management",
          desc: "Streamlined maintenance requests, inspections, contractor assignments, service tracking, and status updates.",
        },
        {
          icon: "fa-solid fa-file-invoice-dollar",
          iconClass: "text-cyan",
          title: "Financial & Trust Accounting",
          desc: "Integrated invoices, transactions, trust accounting, financial statements, and reporting for transparent financial management.",
        },
        {
          icon: "fa-solid fa-users-gear",
          iconClass: "text-red",
          title: "Contractor & Communication Management",
          desc: "Centralized contractor coordination and tenant/landlord communication for faster issue resolution and smoother operations.",
        },
      ],
      impactBadge: "PROVEN BUSINESS IMPACT",
      impactTitle: "Smarter & More Efficient Property Management",
      impactMetrics: [
        {
          target: "1",
          suffix: "",
          label: "Centralized Platform",
          color: "text-cyan",
        },
        {
          target: "5",
          suffix: "+",
          label: "Core Management Operations",
          color: "text-red",
        },
        {
          target: "360",
          suffix: "°",
          label: "Property Visibility",
          color: "text-white",
        },
        {
          target: "100",
          suffix: "%",
          label: "Connected Workflows",
          color: "text-cyan",
        },
      ],
    },
  },

  // 5. JUST PACK
  {
    slug: "justpack",
    name: "Just Pack - Smart Property Rental Platform",
    shortName: "Just Pack",
    categories: ["real-estate"],
    indexCode: "05 / RENTAL & BOOKING",
    description:
      "A modern rental platform developed for the Egypt market that helps users discover, list, and manage rental properties with a smooth digital experience.",
    image: "/images/m4.png",
    imageAlt: "Just Pack Smart Property Rental Platform",
    technologies: ["PHP", "JavaScript", "Bootstrap", "Laravel", "MySQL"],
    stats: [
      { value: "50%", label: "Faster Rental Inquiries" },
      { value: "3x", label: "Higher Mobile Retention" },
    ],
    floatingBadge: {
      num: "50% FASTER",
      label: "Customer Inquiry Response",
    },
    reverse: false,
    accent: "cyan",
    liveUrl: "https://justpack.app/",
    caseStudy: {
      headerCategory: "CASE STUDY / RENTAL & BOOKING PLATFORM",
      titleLine1: "Just Pack - Smart Property",
      titleLine2: "Rental & Discovery Platform.",
      summary:
        "A modern rental platform developed for the Egypt market that helps users discover, list, and manage rental properties with a smooth, mobile-friendly digital experience.",
      trustTags: [
        { icon: "fa-solid fa-house-laptop text-cyan", text: "Just Pack" },
        { icon: "fa-brands fa-laravel text-red", text: "Laravel & PHP" },
        { icon: "fa-solid fa-mobile-screen text-cyan", text: "Mobile-First UI" },
      ],
      floatingPills: [
        {
          position: "pill-top",
          icon: "fa-solid fa-list-check text-cyan",
          text: "Verified Property Listings",
        },
        {
          position: "pill-bottom-left",
          icon: "fa-solid fa-filter text-red",
          text: "Smart Multi-Search",
        },
        {
          position: "pill-bottom-right",
          icon: "fa-solid fa-message text-cyan",
          text: "Real-Time Inquiries",
        },
      ],
      challengeBadge: "CLIENT REQUIREMENTS & CHALLENGES",
      challengeTitle: "Simplifying Regional Property Rentals & Inquiries",
      challengeIntro: [
        "Just Pack required a fast, secure rental portal enabling property owners to list accommodations effortlessly while providing renters with intuitive search, smart filters, and direct inquiry communication.",
        "Key challenges included designing a responsive mobile-first architecture for regional connectivity, managing real-time listing availability, and streamlining inquiry response handling for property managers.",
      ],
      painPoints: [
        {
          title: "Easy Property Listing Flow",
          desc: "Enabling landlords to upload photos, amenities, rental terms, and pricing without complex onboarding.",
        },
        {
          title: "Fast Filtered Search",
          desc: "Delivering sub-second search results filtered by location, budget, rental period, and property type.",
        },
        {
          title: "Secure Inquiry Routing",
          desc: "Connecting prospective tenants directly to property owners while preventing spam and data leaks.",
        },
        {
          title: "SEO-Friendly Architecture",
          desc: "Structuring clean URLs and schema metadata to maximize organic search engine visibility.",
        },
      ],
      solutionBadge: "OUR ENGINEERING SOLUTION",
      solutionTitle: "Responsive Web Platform with Real-Time Inquiries",
      solutionSubtitle:
        "BVM engineered a custom Laravel web application featuring advanced property search, real-time inquiry management, and an SEO-friendly mobile-first layout.",
      solutionVisual: {
        badge: "RENTAL PLATFORM",
        title: "Modern Rental Marketplace",
        desc: "Engineered with Laravel and Bootstrap for fast loading on all regional mobile devices.",
        img: "/images/m4.png",
        imgAlt: "Just Pack Rental Platform Interface",
        overlay: "Direct Landlord-Tenant Sync",
      },
      modules: [
        {
          icon: "fa-solid fa-house-chimney",
          iconClass: "text-cyan",
          title: "Property Listing Manager",
          desc: "Complete listing creation workflow with multi-image upload, amenity tags, and pricing tiers.",
        },
        {
          icon: "fa-solid fa-magnifying-glass-location",
          iconClass: "text-red",
          title: "Smart Search & Filtering",
          desc: "Dynamic property filter engine narrowing down rentals by neighborhood, furnished status, and price.",
        },
        {
          icon: "fa-solid fa-comments",
          iconClass: "text-cyan",
          title: "Real-Time Inquiry System",
          desc: "Instant notification and inquiry routing system enabling landlords to respond to prospective renters.",
        },
        {
          icon: "fa-solid fa-globe",
          iconClass: "text-red",
          title: "SEO-Optimized Structure",
          desc: "Server-side rendered metadata and canonical indexing to capture high-intent rental searches.",
        },
      ],
      impactBadge: "PROVEN BUSINESS IMPACT",
      impactTitle: "Accelerated Market Visibility & Inquiry Handling",
      impactMetrics: [
        {
          target: "50",
          suffix: "%",
          label: "Faster Inquiry Handling",
          color: "text-cyan",
        },
        {
          target: "3",
          suffix: "x",
          label: "Higher Mobile Retention",
          color: "text-red",
        },
        {
          target: "15",
          suffix: "k+",
          label: "Verified Rental Listings",
          color: "text-white",
        },
        {
          target: "100",
          suffix: "%",
          label: "Multi-Device Optimization",
          color: "text-cyan",
        },
      ],
    },
  },

  // 6. ESPACE REAL ESTATE
  {
    slug: "espace-real-estate",
    name: "Espace - Real Estate Platform",
    shortName: "Espace Real Estate",
    categories: ["real-estate"],
    indexCode: "06 / REAL ESTATE & PROPTECH",
    description:
      "A premium real estate platform developed to simplify luxury property discovery, agent communication, and lead generation for buyers, sellers, landlords, and investors in the UAE market.",
    image: "/images/m2.png",
    imageAlt: "Espace Luxury Real Estate Platform",
    technologies: ["Laravel", "MySQL", "AWS Cloud Hosting"],
    stats: [
      { value: "60%", label: "Increase in Lead Generation" },
      { value: "2.5x", label: "Faster Property Discovery" },
    ],
    floatingBadge: {
      num: "60% LEADS",
      label: "Qualified Property Inquiries",
    },
    reverse: true,
    accent: "red",
    liveUrl: "https://www.espace.ae/",
    caseStudy: {
      headerCategory: "CASE STUDY / REAL ESTATE & PROPTECH",
      titleLine1: "Espace - Premium Real Estate",
      titleLine2: "Discovery & Lead Platform.",
      summary:
        "Espace is a luxury real estate platform developed to simplify property discovery, agent communication, and lead generation for buyers, sellers, landlords, and investors across the UAE market.",
      trustTags: [
        { icon: "fa-solid fa-city text-cyan", text: "Espace UAE" },
        { icon: "fa-solid fa-code text-red", text: "Laravel & MySQL" },
        { icon: "fa-brands fa-aws text-cyan", text: "AWS Cloud Infrastructure" },
      ],
      floatingPills: [
        {
          position: "pill-top",
          icon: "fa-solid fa-magnifying-glass text-cyan",
          text: "Smart Property Search",
        },
        {
          position: "pill-bottom-left",
          icon: "fa-solid fa-mobile-screen text-red",
          text: "Mobile-First UX",
        },
        {
          position: "pill-bottom-right",
          icon: "fa-solid fa-chart-line text-cyan",
          text: "60% More Leads",
        },
      ],
      challengeBadge: "CLIENT REQUIREMENTS & CHALLENGES",
      challengeTitle: "Showcasing Luxury UAE Real Estate at Scale",
      challengeIntro: [
        "The client required a scalable, visually premium real estate portal to showcase luxury UAE residential and commercial properties, generate qualified buyer and rental leads, and elevate property discovery.",
        "Key technical challenges involved managing large volumes of high-resolution property media securely, maintaining sub-second performance with extensive listing records, and implementing granular role-based agent dashboards.",
      ],
      painPoints: [
        {
          title: "High-Volume Property Data",
          desc: "Handling extensive databases of villa, apartment, and off-plan listings while maintaining fast load speeds.",
        },
        {
          title: "Complex Role-Based Access",
          desc: "Managing permissions across administrators, broker agents, landlords, and prospective buyers securely.",
        },
        {
          title: "Mobile User Retention",
          desc: "Delivering responsive mobile-first search, interactive map exploration, and instant agent communication.",
        },
        {
          title: "Lead Qualification & Routing",
          desc: "Directing property inquiries automatically to designated community specialist agents without delay.",
        },
      ],
      solutionBadge: "OUR ENGINEERING SOLUTION",
      solutionTitle: "Custom PropTech Portal with Smart Search & Filtering",
      solutionSubtitle:
        "BVM engineered a custom Laravel web architecture featuring advanced property management, smart multi-parameter filtering, and responsive mobile-first UI/UX.",
      solutionVisual: {
        badge: "PROPTECH PLATFORM",
        title: "Luxury UAE Property Discovery Engine",
        desc: "Built with Laravel and AWS Cloud for high concurrency and sub-second property filtering.",
        img: "/images/m2.png",
        imgAlt: "Espace Property Listing Dashboard",
        overlay: "Sub-Second Property Search",
      },
      modules: [
        {
          icon: "fa-solid fa-building-user",
          iconClass: "text-cyan",
          title: "Property Listing Management",
          desc: "Complete listing dashboard with high-resolution photo galleries, floor plans, and virtual tour embedding.",
        },
        {
          icon: "fa-solid fa-filter",
          iconClass: "text-red",
          title: "Smart Search & Filtering",
          desc: "Multi-parameter search engine filtering by community, price range, bedrooms, lifestyle, and property type.",
        },
        {
          icon: "fa-solid fa-mobile-screen-button",
          iconClass: "text-cyan",
          title: "Mobile-First UI/UX",
          desc: "Fast, intuitive mobile navigation allowing buyers and tenants to book viewings with a single tap.",
        },
        {
          icon: "fa-solid fa-users-gear",
          iconClass: "text-red",
          title: "Agent Lead Routing",
          desc: "Automated inquiry distribution system connecting leads directly to area-specific real estate brokers.",
        },
      ],
      impactBadge: "PROVEN BUSINESS IMPACT",
      impactTitle: "High-Growth Outcomes in the UAE Real Estate Market",
      impactMetrics: [
        {
          target: "60",
          suffix: "%",
          label: "Higher Lead Generation",
          color: "text-cyan",
        },
        {
          target: "2.5",
          suffix: "x",
          label: "Faster Property Discovery",
          color: "text-red",
        },
        {
          target: "3",
          suffix: "B+",
          label: "AED Property Value Listed",
          color: "text-white",
        },
        {
          target: "100",
          suffix: "%",
          label: "Mobile Retention Score",
          color: "text-cyan",
        },
      ],
    },
  },

  // 7. TAIL TRAVEL
  {
    slug: "tail-travel",
    name: "Tail Travel - Pet Transportation & Relocation",
    shortName: "Tail Travel",
    categories: ["all"],
    indexCode: "07 / TRAVEL & PET TRANSPORTATION",
    description:
      "Developed a streamlined pet travel platform enabling online quote requests, crate hire, airport transfers, travel coordination, and customer support for safe, organised pet relocation across Australia.",
    image: "/images/m8.png",
    imageAlt: "Tail Travel Pet Relocation Platform",
    technologies: ["PHP", "CodeIgniter", "MySQL", "JavaScript"],
    stats: [
      { value: "50%", label: "Faster Quote Processing" },
      { value: "60%", label: "Smoother Booking Experience" },
    ],
    floatingBadge: {
      num: "50% FASTER",
      label: "Quote Processing Time",
    },
    reverse: false,
    accent: "cyan",
    liveUrl: "https://tailtravel.com.au/",
    caseStudy: {
      headerCategory: "CASE STUDY / PET TRANSPORTATION PLATFORM",
      titleLine1: "Tail Travel - Organized Pet",
      titleLine2: "Transportation & Relocation.",
      summary:
        "Developed a user-friendly pet transportation platform enabling online quote requests, airport transfers, crate hire, travel planning, flight coordination, and expert support for safe international pet relocation.",
      trustTags: [
        { icon: "fa-solid fa-paw text-cyan", text: "Tail Travel" },
        { icon: "fa-solid fa-code text-red", text: "PHP & CodeIgniter" },
        { icon: "fa-solid fa-plane-departure text-cyan", text: "Flight & Travel Sync" },
      ],
      floatingPills: [
        {
          position: "pill-top",
          icon: "fa-solid fa-calculator text-cyan",
          text: "Online Quote Engine",
        },
        {
          position: "pill-bottom-left",
          icon: "fa-solid fa-box text-red",
          text: "Crate Hire System",
        },
        {
          position: "pill-bottom-right",
          icon: "fa-solid fa-headset text-cyan",
          text: "24/7 Travel Support",
        },
      ],
      challengeBadge: "CLIENT REQUIREMENTS & CHALLENGES",
      challengeTitle: "Simplifying Complex Pet Transportation Operations",
      challengeIntro: [
        "The client required a centralized pet transportation platform to streamline quote requests, travel planning, airport transfers, crate hire, flight coordination, and customer support.",
        "The key challenge was connecting multiple travel workflows while ensuring clear communication, accurate planning, and a smooth experience for customers and the internal team.",
      ],
      painPoints: [
        {
          title: "Streamlined Quote Management",
          desc: "Enabling customers to submit detailed online quote requests while helping the team efficiently review, manage, and coordinate pet travel requirements.",
        },
        {
          title: "Pet Travel & Flight Coordination",
          desc: "Managing travel dates, flight arrangements, itineraries, airport pickup and drop-off, and preparation requirements through an organized workflow.",
        },
        {
          title: "Crate Hire & Travel Preparation",
          desc: "Simplifying suitable travel crate selection and hire while providing customers with clear guidance on crate requirements and pet travel preparation.",
        },
        {
          title: "Unexpected Travel Support",
          desc: "Supporting customers and coordinating alternative arrangements during flight delays, cancellations, or other unexpected travel situations to ensure smoother pet relocation.",
        },
      ],
      solutionBadge: "OUR ENGINEERING SOLUTION",
      solutionTitle: "Custom Pet Transportation Platform with Integrated Travel Operations",
      solutionSubtitle:
        "BVM engineered a centralized pet transportation platform featuring quote management, travel coordination, airport transfers, crate hire, customer support, and responsive user experiences.",
      solutionVisual: {
        badge: "PET TRANSPORTATION PLATFORM",
        title: "Smart & Connected Pet Travel Management System",
        desc: "Built to simplify complex pet relocation operations, improve coordination, and provide centralized visibility across every stage of the travel journey.",
        img: "/images/m8.png",
        imgAlt: "Tail Travel Dashboard Interface",
        overlay: "End-to-End Flight & Transfer Coordination",
      },
      modules: [
        {
          icon: "fa-solid fa-file-invoice",
          iconClass: "text-cyan",
          title: "Quote & Customer Management",
          desc: "Complete management system for online quote requests, customer details, pet information, travel requirements, and booking coordination.",
        },
        {
          icon: "fa-solid fa-plane",
          iconClass: "text-red",
          title: "Travel & Flight Coordination",
          desc: "Streamlined travel date planning, flight arrangements, itineraries, airport pickup and drop-off, and real-time travel coordination.",
        },
        {
          icon: "fa-solid fa-box-open",
          iconClass: "text-cyan",
          title: "Crate Hire & Preparation",
          desc: "Integrated crate hire management with guidance on suitable crate requirements and essential preparation for safe pet transportation.",
        },
        {
          icon: "fa-solid fa-headset",
          iconClass: "text-red",
          title: "Support & Communication Management",
          desc: "Centralized customer communication and travel support for managing updates, flight changes, delays, cancellations, and unexpected situations.",
        },
      ],
      impactBadge: "PROVEN BUSINESS IMPACT",
      impactTitle: "Smoother & More Organized Pet Travel",
      impactMetrics: [
        {
          target: "1",
          suffix: "",
          label: "Centralized Pet Travel Platform",
          color: "text-cyan",
        },
        {
          target: "4",
          suffix: "+",
          label: "Key Travel Services",
          color: "text-red",
        },
        {
          target: "360",
          suffix: "°",
          label: "End-to-End Travel Coordination",
          color: "text-white",
        },
        {
          target: "24",
          suffix: "/7",
          label: "Customer Travel Support",
          color: "text-cyan",
        },
      ],
    },
  },

  // 8. KELBAK E-LEARNING
  {
    slug: "kelbak-elearning",
    name: "Kelbak - Korean Language Learning Platform",
    shortName: "Kelbak",
    categories: ["edtech"],
    indexCode: "08 / E-LEARNING & EDTECH",
    description:
      "An interactive online platform that helps users learn the Korean language through structured lessons, quizzes, vocabulary practice, and progress tracking.",
    image: "/images/m6.png",
    imageAlt: "Kelbak Korean Language Learning Platform",
    technologies: ["PHP", "JavaScript", "MySQL"],
    stats: [
      { value: "85%", label: "Course Completion Rate" },
      { value: "50k+", label: "Active Registered Learners" },
    ],
    floatingBadge: {
      num: "85% RATE",
      label: "Course Completion & Retention",
    },
    reverse: true,
    accent: "red",
    liveUrl: "https://kelbak.com/",
    caseStudy: {
      headerCategory: "CASE STUDY / E-LEARNING & EDTECH",
      titleLine1: "Kelbak - Interactive Korean",
      titleLine2: "Language Learning Platform.",
      summary:
        "An engaging e-learning web platform created to help users master the Korean language through structured lesson modules, interactive quizzes, vocabulary drills, and real-time progress tracking.",
      trustTags: [
        { icon: "fa-solid fa-graduation-cap text-cyan", text: "Kelbak E-Learning" },
        { icon: "fa-solid fa-code text-red", text: "PHP & JavaScript" },
        { icon: "fa-solid fa-database text-cyan", text: "MySQL Learning DB" },
      ],
      floatingPills: [
        {
          position: "pill-top",
          icon: "fa-solid fa-book-open text-cyan",
          text: "Interactive Lessons",
        },
        {
          position: "pill-bottom-left",
          icon: "fa-solid fa-award text-red",
          text: "Progress Tracking",
        },
        {
          position: "pill-bottom-right",
          icon: "fa-solid fa-users text-cyan",
          text: "50k+ Learners",
        },
      ],
      challengeBadge: "CLIENT REQUIREMENTS & CHALLENGES",
      challengeTitle: "Designing an Engaging, Scalable Language Education System",
      challengeIntro: [
        "Kelbak required a custom e-learning application featuring structured Korean language modules, interactive quizzes and assessments, student progress tracking, and a scalable Course Management System (CMS).",
        "Key challenges included designing an engaging curriculum layout for both beginners and advanced students, tracking student performance accurately across lesson quizzes, and building a scalable database capable of handling growing registrations.",
      ],
      painPoints: [
        {
          title: "Engaging Curriculum Structure",
          desc: "Structuring language lessons logically from Hangul basics to conversational fluency.",
        },
        {
          title: "Interactive Quizzes & Assessments",
          desc: "Building dynamic quiz evaluation modules that test vocabulary, grammar, and listening skills.",
        },
        {
          title: "Accurate Student Progress Tracking",
          desc: "Logging completed modules, quiz scores, and streak data on personalized student dashboards.",
        },
        {
          title: "Scalable Content Management",
          desc: "Empowering course administrators to add new lessons, audio clips, and exercises without developer help.",
        },
      ],
      solutionBadge: "OUR ENGINEERING SOLUTION",
      solutionTitle: "Custom E-Learning Platform with Interactive Quiz Engine",
      solutionSubtitle:
        "BVM developed a custom PHP and MySQL e-learning platform featuring interactive lesson modules, automated quiz grading, student dashboards, and a robust administrative CMS.",
      solutionVisual: {
        badge: "EDTECH ARCHITECTURE",
        title: "Language Learning Management System",
        desc: "Built with PHP, JavaScript, and MySQL for responsive language education across all devices.",
        img: "/images/m6.png",
        imgAlt: "Kelbak E-Learning Platform Interface",
        overlay: "Progress-Driven LMS Core",
      },
      modules: [
        {
          icon: "fa-solid fa-chalkboard-user",
          iconClass: "text-cyan",
          title: "Interactive Lesson Modules",
          desc: "Structured step-by-step lessons incorporating Korean typography, pronunciation guides, and practice drills.",
        },
        {
          icon: "fa-solid fa-spell-check",
          iconClass: "text-red",
          title: "Quiz & Assessment Engine",
          desc: "Dynamic multiple-choice and fill-in-the-blank quizzes with instant automated scoring and feedback.",
        },
        {
          icon: "fa-solid fa-chart-line",
          iconClass: "text-cyan",
          title: "Student Progress Dashboard",
          desc: "Personalized dashboard displaying completed lessons, retention streaks, and assessment badges.",
        },
        {
          icon: "fa-solid fa-folder-plus",
          iconClass: "text-red",
          title: "Administrative Course CMS",
          desc: "Intuitive back-office tool enabling instructors to upload lessons, manage student accounts, and export reports.",
        },
      ],
      impactBadge: "PROVEN BUSINESS IMPACT",
      impactTitle: "High Student Retention & Seamless Course Management",
      impactMetrics: [
        {
          target: "85",
          suffix: "%",
          label: "Course Completion Rate",
          color: "text-cyan",
        },
        {
          target: "50",
          suffix: "k+",
          label: "Active Registered Learners",
          color: "text-red",
        },
        {
          target: "120",
          suffix: "+",
          label: "Structured Lesson Modules",
          color: "text-white",
        },
        {
          target: "100",
          suffix: "%",
          label: "Scalable E-Learning Foundation",
          color: "text-cyan",
        },
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project | undefined {
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx < 0) return undefined;
  return projects[(idx + 1) % projects.length];
}

export const projectsFaq = [
  {
    q: "Can we request live walkthroughs or sandbox demos of these platforms?",
    a: "Yes. Under a mutual Non-Disclosure Agreement (NDA), we arrange live screen-share walkthroughs of non-proprietary staging environments and feature modules with our Senior Solution Architect.",
  },
  {
    q: "Are the reported client ROI metrics and performance numbers verified?",
    a: "All reported performance metrics are audited and verified directly by client engineering and operations teams during post-launch telemetry sign-off.",
  },
  {
    q: "Can you build a similar custom software or ERP platform for our business?",
    a: "Yes. We do not use rigid cookie-cutter templates. Our engineering team builds custom software, ERPs, CRMs, and SaaS applications tailored precisely to your company's workflows and goals.",
  },
  {
    q: "What NDA and IP protection standards apply to project discussions?",
    a: "Intellectual property protection is paramount. We execute a mutual Non-Disclosure Agreement (NDA) prior to any discovery call, ensuring your proprietary ideas, data models, and business logic remain 100% confidential.",
  },
];