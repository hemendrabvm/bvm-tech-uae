export type FaqItem = { q: string; a: string };
export type FaqCategory = {
  id: string;
  badge: string;
  title: string;
  glow: "left" | "right";
  glowImg: string;
  items: FaqItem[];
};

export const faqCategories: FaqCategory[] = [
  {
    id: "faq-pricing",
    badge: "CATEGORY 01 — PRICING, TIMELINES & DEVELOPMENT PROCESS",
    title: "Pricing, Timelines & Development Process",
    glow: "right",
    glowImg: "/images/2.png",
    items: [
      {
        q: "How long does it take to develop custom software?",
        a: "To develop a custom software timeline depends on the project's features, integrations and complexity. Most custom software, ERP and CRM projects are delivered through structured Agile development sprints, allowing you to review progress throughout the project.",
      },
      {
        q: "How much does custom software development cost in the UAE?",
        a: "To develop a custom software the cost depends on your business requirements, technology stack, integrations and project scope. After understanding your requirements, BVM provides a clear project proposal and transparent quotation.",
      },
      {
        q: "Do you offer fixed-price software development?",
        a: "Yes, We offer, for projects with clearly defined requirements, we can provide fixed-price software development with agreed deliverables, milestones and timelines.",
      },
      {
        q: "Can I track the progress of my software project?",
        a: "Yes, you can track each step of your software project. Our development team provides regular updates, demonstrations and staging builds so you can review features and provide feedback during development.",
      },
      {
        q: "Can BVM develop an MVP or SaaS product?",
        a: "Yes, We develop MVPs, SaaS platforms and scalable business applications for startups and established companies. Our solutions can be designed to scale as your users and business requirements grow.",
      },
    ],
  },
  {
    id: "faq-compliance",
    badge: "CATEGORY 02 — ERP, CRM, HRMS & BUSINESS SOFTWARE",
    title: "ERP, CRM, HRMS & Business Software",
    glow: "left",
    glowImg: "/images/1.png",
    items: [
      {
        q: "Does BVM provide ERP software development in the UAE?",
        a: "Yes. We provide software development custom ERP software tailored to business processes such as finance, inventory, sales, procurement, operations, HR and reporting.",
      },
      {
        q: "Can you develop a custom CRM system?",
        a: "Yes. Our CRM development services can include lead management, customer records, sales pipelines, follow-ups, reports, notifications, integrations and automation.",
      },
      {
        q: "Can you develop HRMS software?",
        a: "Yes. We can build HRMS solutions covering employee management, attendance, recruitment, leave management, payroll, performance management and HR reporting.",
      },
      {
        q: "Can you integrate TallyPrime with custom software?",
        a: "Yes. We can develop custom software integrations between TallyPrime and business applications where technically supported, helping businesses connect accounting data with ERP, CRM, e-commerce and other operational systems.",
      },
      {
        q: "Can you develop accounting and invoicing software for UAE businesses?",
        a: "Yes. We can build accounting, billing and invoicing solutions with features such as VAT calculations, multi-currency support, reporting and e-invoicing workflows, based on your compliance and business requirements.",
      },
    ],
  },
  {
    id: "faq-ai",
    badge: "CATEGORY 03 — AI AUTOMATION & INTELLIGENT SOLUTIONS",
    title: "AI Automation & Intelligent Solutions",
    glow: "right",
    glowImg: "/images/2.png",
    items: [
      {
        q: "Does BVM provide AI development services?",
        a: "Yes. We provide AI-powered business development solutions including AI assistants, recommendation systems, intelligent search, document processing, predictive analytics and AI-enabled business applications.",
      },
      {
        q: "Can you automate repetitive business processes?",
        a: "Yes. Our AI and business automation solutions can automate repetitive workflows such as data entry, approvals, customer support, document processing, notifications, reporting and system-to-system data transfer.",
      },
      {
        q: "Can AI be integrated into existing software?",
        a: "Yes. AI can be integrated into existing ERP, CRM, HRMS, websites, mobile apps and SaaS platforms depending on your business requirements.",
      },
      {
        q: "Can you build an AI chatbot for my business?",
        a: "Yes. We can develop AI chatbots for websites, customer portals and internal business systems to help automate customer support, lead qualification, FAQs, and information retrieval.",
      },
    ],
  },
  {
    id: "faq-einvoicing",
    badge: "CATEGORY 04 — UAE E-INVOICING, VAT & BUSINESS COMPLIANCE",
    title: "UAE E-Invoicing, VAT & Business Compliance",
    glow: "left",
    glowImg: "/images/1.png",
    items: [
      {
        q: "Can you develop UAE e-invoicing solutions?",
        a: "Yes. BVM helps your businesses to develop or integrate e-invoicing workflows with ERP, accounting and billing systems according to applicable UAE requirements and the final technical specifications of the relevant authorities.",
      },
      {
        q: "Do your solutions support UAE VAT?",
        a: "BVM ERP, invoicing solutions and accounting can be configured to support UAE VAT calculations, reporting and business workflows according to the client's requirements.",
      },
      {
        q: "Can you integrate e-invoicing with ERP or accounting software?",
        a: "Yes. We can connect e-invoicing workflows with ERP, accounting, billing and business management systems, subject to the capabilities and requirements of the systems involved.",
      },
      {
        q: "Do your software solutions support multiple currencies?",
        a: "Yes. Multi-currency functionality can be incorporated into ERP, CRM, accounting, e-commerce and other business software based on the project's requirements.",
      },
    ],
  },
  {
    id: "faq-ownership",
    badge: "CATEGORY 05 — CODE OWNERSHIP & AFTER LAUNCH SUPPORT",
    title: "Code Ownership & After Launch Support",
    glow: "right",
    glowImg: "/images/2.png",
    items: [
      {
        q: "IP TRANSFER - 100% Source Ownership",
        a: "We provide complete ownership of your source code, database, and deployment files after project completion, APIs, ensuring transparency and zero vendor lock-in. Complete Source Code | 0 Vendor Lock-In | Full Documentation",
      },
      {
        q: "MAINTENANCE SLA — Post-Launch Support",
        a: "BVM support team provides quick issue resolution, server monitoring, performance management, and ongoing maintenance to keep your software running smoothly. Fast Response | 24/7 Monitoring | Performance Support",
      },
      {
        q: "SECURITY & UPDATES — Security & System Maintenance",
        a: "Keep eyes on your security by regular updates, dependency management, SSL renewal, database backups, and vulnerability checks help protect your software and business data. Security Updates | SSL Renewal | Database Backups",
      },
      {
        q: "FEATURE SCALING — Scale Your Software as You Grow",
        a: "Add new features, API integrations, AI automation, ERP modules, HRMS capabilities, or SaaS functionality as your business requirements evolve. Flexible Development | API Integration | Scalable Solutions",
      },
    ],
  },
  {
    id: "faq-onboarding",
    badge: "ONBOARDING ROADMAP",
    title: "Your Journey From Discovery to Launch",
    glow: "left",
    glowImg: "/images/1.png",
    items: [
      {
        q: "STEP 01 — DAY 1: Discovery & Mutual NDA",
        a: "It began with understanding your business, technical requirements, and project goals. As per need of your business whether it is custom software development, ERP, HRMS, AI Automation, or SaaS solutions, we define the right approach from the start.",
      },
      {
        q: "STEP 02 — DAY 3: Technical Plan & Fixed-Price Proposal",
        a: "Receive a clear technical architecture, development roadmap, sprint deliverables, and transparent fixed-price proposal. We align the solution with your business needs, budget, and growth plans.",
      },
      {
        q: "STEP 03 — DAY 7: Agile Kickoff & Staging",
        a: "Our dedicated development team starts the first sprint. Working software is deployed to a secure staging environment for review, testing, and feedback.",
      },
    ],
  },
];

export const faqNav = [
  { href: "#faq-pricing", label: "Pricing & Timelines" },
  { href: "#faq-compliance", label: "ERP, CRM & HRMS" },
  { href: "#faq-ai", label: "AI & Automation" },
  { href: "#faq-einvoicing", label: "UAE E-Invoicing & VAT" },
  { href: "#faq-ownership", label: "Code Ownership & Support" },
  { href: "#faq-onboarding", label: "Client Onboarding" },
] as const;
