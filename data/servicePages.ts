import type { ServicePageData } from '@/components/services/ServicePage';

export type ServicePageEntry = ServicePageData & { metaTitle: string; metaDesc: string };

export const servicePages: Record<string, ServicePageEntry> = {
  'ai-automation-development': {
    metaTitle: 'AI Automation Solutions UAE | BVM Tech Limited',
    metaDesc: 'AI automation solutions built around your business processes to automate repetitive tasks, streamline operations, and enhance customer experiences across UAE & GCC.',
    header: {
      category: 'SERVICES / AI AUTOMATIONS',
      titleLine1: 'AI Automation Solutions That',
      titleLine2: 'Make Your Business Smarter',
      summary: 'AI automation solutions specially built around your actual business processes, designed to streamline operations, automate repetitive tasks, enhance customer experiences, and help businesses across Dubai, Abu Dhabi, and the wider GCC.',
      trustTags: [
        {
          icon: 'fa-solid fa-robot text-cyan',
          text: 'AI-Powered Business Automation',
        },
        {
          icon: 'fa-solid fa-bolt text-red',
          text: 'Smarter Process Management',
        },
        {
          icon: 'fa-solid fa-clock text-cyan',
          text: 'Reduced Manual Work',
        },
      ],
      floatingPills: [
        {
          position: 'pill-top',
          icon: 'fa-solid fa-microchip text-cyan',
          text: 'Workflow Automation',
        },
        {
          position: 'pill-bottom-left',
          icon: 'fa-solid fa-comments text-red',
          text: '24/7 AI Chatbots',
        },
        {
          position: 'pill-bottom-right',
          icon: 'fa-solid fa-file-invoice text-cyan',
          text: 'Document Intelligence',
        },
      ],
      showcaseImg: '/images/service-custom.jpg',
      showcaseAlt: 'AI Automation Dashboard',
    },
    capabilities: {
      badge: 'AI & AUTOMATION CAPABILITIES',
      titleLines: [
        'Intelligent Automation Built',
        'Around Your Business',
      ],
      cards: [
        {
          icon: 'fa-solid fa-diagram-project',
          iconBadgeClass: 'flutter-icon text-cyan',
          techBadge: 'WORKFLOW AUTOMATION',
          title: 'Automate Business Processes',
          desc: 'When you have multiple systems, repetitive tasks and manual workflows in one place, AI automation helps your team reduce manual work, connect processes, and complete tasks faster with minimum errors.',
          tags: [
            'Workflow Automation',
            'Task Automation',
            'System Integration',
          ],
        },
        {
          icon: 'fa-solid fa-comments',
          iconBadgeClass: 'ios-icon text-red',
          techBadge: 'AI CHATBOTS & SUPPORT',
          title: 'AI-Powered Customer Support',
          desc: 'Manage customer conversations efficiently across different channels. AI-powered solutions help your team respond quickly to inquiries, maintain conversation history, handle common questions, and provide support without doing everything manually.',
          tags: [
            'AI Chatbots',
            'Smart Responses',
            '24/7 Support',
          ],
        },
        {
          icon: 'fa-solid fa-file-lines',
          iconBadgeClass: 'android-icon text-cyan',
          techBadge: 'DATA EXTRACTION',
          title: 'Intelligent Document Processing',
          desc: 'Process documents without spending hours on manual data entry. AI solutions extract information from invoices, contracts, forms, and other documents, organize the data, and keep your business processes updated automatically.',
          tags: [
            'Data Extraction',
            'Document Automation',
            'Information Processing',
          ],
        },
        {
          icon: 'fa-solid fa-chart-pie',
          iconBadgeClass: 'enterprise-icon text-red',
          techBadge: 'PREDICTIVE ANALYTICS',
          title: 'AI Insights & Decision Making',
          desc: 'Have an actual picture of how your business operations are performing. AI can analyze business data, identify patterns, support forecasting, generate insights, and help your team make better decisions using real-time information.',
          tags: [
            'Predictive Analytics',
            'Business Insights',
            'Smart Forecasting',
          ],
        },
      ],
    },
    why: {
      badge: 'WHY CHOOSE BVM AI & AUTOMATION?',
      titleLines: [
        'AI & Automation Built',
        'Around Your Business',
      ],
      description: 'We build AI and automation solutions for your business processes, helping you improve productivity, reduce manual work, and make smarter decisions with the AI capabilities your team actually needs, with complete ownership of your solution.',
      calloutValue: 'Custom AI Solutions',
      calloutLabel: 'Build AI solutions tailored to your business needs without depending on ready-made platforms.',
      strips: [
        {
          icon: 'fa-solid fa-microchip',
          iconColor: 'text-cyan',
          heading: 'Smart Business Automation',
          tag: 'EFFICIENCY GAINS',
          tagColor: 'text-cyan',
          sub: 'Automate repetitive tasks and workflows to help your team save time, reduce errors, and focus on business growth.',
        },
        {
          icon: 'fa-solid fa-plug',
          iconColor: 'text-red',
          heading: 'AI-Powered Integrations',
          tag: 'CONNECT SYSTEMS',
          tagColor: 'text-red',
          sub: 'Connect AI with your existing tools and systems to automate communication, data processing, customer support, and daily operations.',
        },
        {
          icon: 'fa-solid fa-language',
          iconColor: 'text-cyan',
          heading: 'Arabic & English Support',
          tag: 'BUILT FOR BILINGUAL TEAMS',
          tagColor: 'text-cyan',
          sub: 'Create AI solutions with a clean interface that can switch between Arabic and English, supporting both RTL and LTR languages.',
        },
        {
          icon: 'fa-solid fa-network-wired',
          iconColor: 'text-red',
          heading: 'ERP & Business System Integration',
          tag: 'CONNECT YOUR BUSINESS',
          tagColor: 'text-red',
          sub: 'Connect AI and automation with your ERP, CRM, accounting, or other business systems to simplify operations, reporting, and decision-making.',
        },
      ],
    },
    techTitleLines: [
      'The Tools We Use to Build',
      'Your AI Automation',
    ],
    process: {
      badge: 'OUR AI AUTOMATION PROCESS',
      titleLines: [
        'Steps to Build & Launch',
        'Your AI Automation',
      ],
      stages: [
        {
          name: 'Understand Your Business Process',
          desc: 'First of all we understand your team, daily tasks, repetitive processes, customer handling and how your business works to identify where AI automation can bring the most value.',
          num: '1',
          className: 'p-card-1',
        },
        {
          name: 'Plan the Automation & Design the Experience',
          desc: "We plan the AI automation as per your team's daily work and create user-friendly workflows for employees, managers, customers, and business operations before development begins.",
          num: '2',
          className: 'p-card-2',
        },
        {
          name: 'Build & Test in Stages',
          desc: 'We build the AI automation in phases, allowing your team to test each stage properly before completing the entire system.',
          num: '3',
          className: 'p-card-3',
        },
        {
          name: 'Connect AI & Other Systems',
          desc: 'We connect AI with your existing tools, CRM, ERP, WhatsApp, accounting systems, APIs and other business platforms so everything works together.',
          num: '4',
          className: 'p-card-4',
        },
        {
          name: 'Launch & Train Your Team',
          desc: 'After everything is tested, we launch the AI automation and help your team understand how to use the automated workflows effectively in daily operations.',
          num: '5',
          className: 'p-card-5',
        },
        {
          name: 'Ongoing Support & Improvements',
          desc: 'After launch, we continue supporting your AI automation, fix issues, improve workflows and add new AI features that help your business grow.',
          num: '6',
          className: 'p-card-6',
        },
      ],
    },
    faq: {
      badge: 'AI AUTOMATION FAQs',
      items: [
        {
          q: 'Can AI Automation Be Customized for Our Business Requirements?',
          a: 'Yes, AI automation can be built around your actual business needs, workflows, and goals. Instead of adjusting your processes to a ready-made tool, we develop automation that fits your operations, teams, and business requirements in the UAE.',
        },
        {
          q: 'Can We Automate Our Customer Communication With AI?',
          a: 'Yes, AI can automate customer communication across WhatsApp, websites, email, and other channels. It can help respond to common queries, qualify new leads, provide fast replies, and maintain conversation history, reducing manual work for your team.',
        },
        {
          q: 'Can You Integrate AI Automation With Our Existing Systems?',
          a: 'Yes, we can integrate AI automation with your existing CRM, ERP, accounting software, websites, APIs, or other business systems. This allows information to move automatically between platforms and reduces repetitive data entry and manual processes.',
        },
        {
          q: 'Can AI Automation Support Both English and Arabic?',
          a: 'Yes, AI automation can be developed to support multiple languages, including English and Arabic. Your AI-powered workflows can be configured according to your team, customers, and business communication requirements, including Arabic-friendly interactions.',
        },
        {
          q: 'Can AI Automate Our Repetitive Business Processes?',
          a: 'Yes, AI automation can handle repetitive tasks such as lead qualification, document processing, data entry, customer queries, notifications, reporting, and workflow management. This helps your team save time, reduce errors, and focus on higher-value business activities.',
        },
      ],
    },
  },

  'saas-development': {
    metaTitle: 'SaaS Development Services UAE | BVM Tech Limited',
    metaDesc: 'Custom SaaS development for UAE businesses: multi-tenant architecture, subscription billing, self-service portals, and scalable cloud platforms with 100% code ownership.',
    header: {
      category: 'SERVICES / SAAS DEVELOPMENT',
      titleLine1: 'SaaS Solutions That Make',
      titleLine2: 'Your Business Work Smarter',
      summary: 'SaaS solutions specially built according to your business needs, from multi-tenant platforms and subscription management to secure cloud infrastructure and user portals, helping businesses in Dubai, Abu Dhabi, and across the GCC.',
      trustTags: [
        {
          icon: 'fa-solid fa-server text-cyan',
          text: 'Multi-Tenant Architecture',
        },
        {
          icon: 'fa-solid fa-credit-card text-red',
          text: 'Subscription Management',
        },
        {
          icon: 'fa-solid fa-cloud text-cyan',
          text: 'Scalable Cloud Platforms',
        },
      ],
      floatingPills: [
        {
          position: 'pill-top',
          icon: 'fa-solid fa-users text-cyan',
          text: 'Multi-Tenant Platform',
        },
        {
          position: 'pill-bottom-left',
          icon: 'fa-solid fa-repeat text-red',
          text: 'Recurring Billing Engine',
        },
        {
          position: 'pill-bottom-right',
          icon: 'fa-solid fa-door-open text-cyan',
          text: 'Customer Portal',
        },
      ],
      showcaseImg: '/images/service-web.jpg',
      showcaseAlt: 'SaaS Platform Interface',
    },
    capabilities: {
      badge: 'SAAS CAPABILITIES',
      titleLines: [
        'Scalable SaaS Solutions Built',
        'Around Your Business',
      ],
      cards: [
        {
          icon: 'fa-solid fa-cubes',
          iconBadgeClass: 'flutter-icon text-cyan',
          techBadge: 'MULTI-TENANT PLATFORM',
          title: 'Build & Manage SaaS Products',
          desc: 'When you need to serve multiple customers through one scalable platform, your SaaS solution should support separate accounts, flexible user access, centralized management and smooth operations without compromising performance.',
          tags: [
            'Multi-Tenant Architecture',
            'User Management',
            'Scalable Infrastructure',
          ],
        },
        {
          icon: 'fa-solid fa-credit-card',
          iconBadgeClass: 'ios-icon text-red',
          techBadge: 'SUBSCRIPTION MANAGEMENT',
          title: 'Subscriptions & Billing',
          desc: 'Manage subscriptions, plans and recurring payments as part of your SaaS platform. It helps your business automate billing, manage upgrades and downgrades, track payments and deliver a seamless customer experience.',
          tags: [
            'Plan Management',
            'Recurring Billing',
            'Payment Tracking',
          ],
        },
        {
          icon: 'fa-solid fa-door-open',
          iconBadgeClass: 'android-icon text-cyan',
          techBadge: 'CUSTOMER PORTAL',
          title: 'Self-Service Customer Portal',
          desc: 'Provide customers with a dedicated portal where they can easily manage their accounts, access services, update information, view subscriptions and raise support requests without repeatedly contacting your team.',
          tags: [
            'Account Management',
            'Subscription Access',
            'Support Tickets',
          ],
        },
        {
          icon: 'fa-solid fa-chart-line',
          iconBadgeClass: 'enterprise-icon text-red',
          techBadge: 'ANALYTICS & REPORTING',
          title: 'SaaS Analytics & Performance',
          desc: 'Get a clear picture of how your SaaS product is performing. Track users, subscriptions, revenue, engagement and platform activity to understand customer behavior and make better business decisions.',
          tags: [
            'User Analytics',
            'Revenue Tracking',
            'Performance Insights',
          ],
        },
      ],
    },
    why: {
      badge: 'WHY CHOOSE BVM FOR SAAS DEVELOPMENT?',
      titleLines: [
        'SaaS Solutions Built',
        'Around Your Business',
      ],
      description: "We build SaaS solutions around your business model so you don't need to depend on rigid platforms with monthly per-user fees. Get the features your customers and team actually need, seamless integrations, and complete ownership of your SaaS platform.",
      calloutValue: 'Unlimited Users',
      calloutLabel: 'Pay for the development once without monthly per-user SaaS fees.',
      strips: [
        {
          icon: 'fa-solid fa-users',
          iconColor: 'text-cyan',
          heading: 'No Monthly Per-User Fees',
          tag: 'UNLIMITED USERS',
          tagColor: 'text-cyan',
          sub: 'Add more customers, employees, or business users as your platform grows without paying monthly fees for every user.',
        },
        {
          icon: 'fa-solid fa-plug',
          iconColor: 'text-red',
          heading: 'Integrated Business Tools',
          tag: 'CONNECT YOUR SERVICES',
          tagColor: 'text-red',
          sub: 'Integrate APIs, payment gateways, WhatsApp, CRM, ERP, or other business tools directly into your SaaS platform without depending on multiple platforms.',
        },
        {
          icon: 'fa-solid fa-language',
          iconColor: 'text-cyan',
          heading: 'Arabic & English Support',
          tag: 'BUILT FOR BILINGUAL USERS',
          tagColor: 'text-cyan',
          sub: 'Create a clean interface that can switch between Arabic and English and works smoothly across both RTL and LTR languages.',
        },
        {
          icon: 'fa-solid fa-cloud',
          iconColor: 'text-red',
          heading: 'Scalable Cloud Architecture',
          tag: 'READY TO GROW',
          tagColor: 'text-red',
          sub: 'Build your SaaS platform on scalable cloud architecture that supports growing users, data, features, and business operations without compromising performance.',
        },
      ],
    },
    techTitleLines: [
      'The Tools We Use',
      'to Build Your SaaS Platform',
    ],
    process: {
      badge: 'OUR SAAS DEVELOPMENT PROCESS',
      titleLines: [
        'Steps to Build and Launch',
        'Your SaaS Product',
      ],
      stages: [
        {
          name: 'Understand Your SaaS Business Needs',
          desc: 'First of all we understand your business model, target users, key features, workflows and how your SaaS product should work to know what your actual product needs.',
          num: '1',
          className: 'p-card-1',
        },
        {
          name: 'Plan the SaaS & Design the Experience',
          desc: 'We plan the SaaS product as per your business needs and before development we create user-friendly screens for users, administrators, teams, and customers.',
          num: '2',
          className: 'p-card-2',
        },
        {
          name: 'Build & Test in Stages',
          desc: 'We build the SaaS product into phases by which you test each phase well before completing the entire system.',
          num: '3',
          className: 'p-card-3',
        },
        {
          name: 'Connect APIs & Other Systems',
          desc: 'We connect business tools, APIs, payment gateways, accounting or ERP systems, so everything works together smoothly.',
          num: '4',
          className: 'p-card-4',
        },
        {
          name: 'Launch & Train Your Team',
          desc: 'After everything is tested, we launch the SaaS product and help your team understand the system and use its features effectively.',
          num: '5',
          className: 'p-card-5',
        },
        {
          name: 'Ongoing Support & Improvements',
          desc: 'After launch, we continue supporting your SaaS product, fix issues, improve performance, and add new features that help your business grow.',
          num: '6',
          className: 'p-card-6',
        },
      ],
    },
    faq: {
      badge: 'SAAS DEVELOPMENT FAQs',
      items: [
        {
          q: 'Can a Custom SaaS Product Be Built Specifically for Our Business?',
          a: 'Yes, we can build SaaS software around your actual business requirements, workflows, users, and goals. You get the features you need without paying for unnecessary tools, while keeping the platform ready to scale as your business grows.',
        },
        {
          q: 'Can We Start With a Basic SaaS Product and Add Features Later?',
          a: 'Yes, your SaaS product can start with the most important features and grow over time. We can build an MVP first, test it with real users, collect feedback, and add new features, integrations, and automation as your business requirements increase.',
        },
        {
          q: 'Can Our SaaS Platform Support Multiple Businesses or Users?',
          a: 'Yes, we can develop multi-tenant SaaS platforms where multiple businesses, teams, or customers can use the same application securely. Each user can have their own account, data, permissions, subscription, and access based on their role.',
        },
        {
          q: 'Can We Move Our Existing Data to the New SaaS Platform?',
          a: 'Yes, we can migrate existing business data from Excel, Google Sheets, databases, or other software into your new SaaS platform. We can also clean and organise the data during migration to help maintain accurate and useful information.',
        },
        {
          q: 'Can Our SaaS Product Support English and Arabic?',
          a: 'Yes, your SaaS application can support multiple languages, including English and Arabic, based on your target users. We can also implement right-to-left (RTL) layouts to provide a better experience for Arabic-speaking users.',
        },
        {
          q: 'Can the SaaS Platform Connect With Other Business Software?',
          a: 'Yes, your SaaS platform can connect with accounting, ERP, CRM, payment gateways, communication tools, and other business software through APIs. This helps automate data sharing and reduces repetitive manual work between different systems.',
        },
      ],
    },
  },

  'web-development': {
    metaTitle: 'Website Development UAE | BVM Tech Limited',
    metaDesc: 'Speedy and high performing websites and custom web applications for businesses across Dubai, Abu Dhabi, and the GCC.',
    header: {
      category: 'SERVICES / WEBSITE DEVELOPMENT',
      titleLine1: 'Web Solutions Built for',
      titleLine2: 'UAE Businesses',
      summary: 'BVM Tech builds speedy and high performing websites and Custom web applications for businesses across Dubai, Abu Dhabi, and the GCC. Our Website development solutions are designed for speed, scalability, security, and seamless user experiences. For the long term growth, a reliable digital presence and technology that support your UAE enterprises, startups, and growing businesses.',
      trustTags: [
        {
          icon: 'fa-solid fa-gauge-high text-cyan',
          text: 'Core Web Vitals Ready',
        },
        {
          icon: 'fa-solid fa-globe text-red',
          text: 'Arabic RTL Ready',
        },
        {
          icon: 'fa-solid fa-bolt text-cyan',
          text: 'Fast & Secure',
        },
      ],
      floatingPills: [
        {
          position: 'pill-top',
          icon: 'fa-solid fa-bolt text-cyan',
          text: 'Next.js 14 SSR Speed',
        },
        {
          position: 'pill-bottom-left',
          icon: 'fa-solid fa-database text-red',
          text: 'Headless CMS Sync',
        },
        {
          position: 'pill-bottom-right',
          icon: 'fa-solid fa-shield-halved text-cyan',
          text: 'OWASP Security Ready',
        },
      ],
      showcaseImg: '/images/service-web.jpg',
      showcaseAlt: 'Enterprise Web Application UI',
    },
    capabilities: {
      badge: 'WEB CAPABILITIES',
      titleLines: [
        'Custom Development built',
        'Growth and Performance',
      ],
      cards: [
        {
          icon: 'fa-solid fa-laptop-code',
          iconBadgeClass: 'flutter-icon text-cyan',
          techBadge: 'MODERN TECH STACK',
          title: 'Modern Tech Stack',
          desc: 'Modern Technology tailored to your business needs like MERN Stack, Node.js, React.js, Next.js, Shopify and so on.',
          tags: [
            'Next.js',
            'React.js',
            'Node.js',
            'MERN',
          ],
        },
        {
          icon: 'fa-solid fa-cubes',
          iconBadgeClass: 'ios-icon text-red',
          techBadge: 'ARCHITECTURE',
          title: 'Flexible and Future-Ready Architecture',
          desc: 'Design robust web architectures that support ERP, CRM, HRMS, SaaS, eCommerce and custom business applications.',
          tags: [
            'ERP Ready',
            'SaaS Platforms',
            'Scalable Design',
          ],
        },
        {
          icon: 'fa-solid fa-cart-shopping',
          iconBadgeClass: 'android-icon text-cyan',
          techBadge: 'PAYMENT & BUSINESS GATEWAYS',
          title: 'Secure Integrations',
          desc: 'To simplify transactions and business operations integrate Secure Payment Gateway, TallyPrime Integration, e-Invoicing and API integration.',
          tags: [
            'Payment Gateways',
            'TallyPrime',
            'E-Invoicing',
          ],
        },
        {
          icon: 'fa-solid fa-gauge-high',
          iconBadgeClass: 'enterprise-icon text-red',
          techBadge: 'CORE WEB VITALS',
          title: 'Fast, Secure & Optimised Experiences',
          desc: 'Improve loading speed, website responsiveness, Optimise key performance, build search friendly website structures and clean code.',
          tags: [
            'Core Web Vitals',
            'SEO-Ready',
            'Performance',
          ],
        },
      ],
    },
    why: {
      badge: 'WHY BVM WEB',
      titleLines: [
        'Fast and secure digital',
        'Solutions for UAE',
      ],
      description: 'BVM Tech builds speedy and high performing websites and Custom web applications for businesses across Dubai, Abu Dhabi, and the GCC. Our Website development solutions are designed for speed, scalability, security, and seamless user experiences. We provide from ERP, HRMS, and SaaS platforms to AI-powered automations.',
      calloutValue: 'Next.js Server-Side Rendering',
      calloutLabel: 'Fast loading pages, Optimized architecture, Mobile performance, and SEO-ready development.',
      strips: [
        {
          icon: 'fa-solid fa-bolt',
          iconColor: 'text-cyan',
          heading: 'Next.js Server-Side Rendering (SSR)',
          tag: 'PERFORMANCE',
          tagColor: 'text-cyan',
          sub: 'Fast loading pages, Optimized architecture, Mobile performance, and SEO-ready development for better user experience and search visibility.',
        },
        {
          icon: 'fa-solid fa-language',
          iconColor: 'text-red',
          heading: 'Native Arabic and English',
          tag: 'ARABIC RTL READY',
          tagColor: 'text-red',
          sub: 'For UAE and GCC audiences seamless Arabic and English switching with responsive RTL interfaces.',
        },
        {
          icon: 'fa-solid fa-shield-halved',
          iconColor: 'text-cyan',
          heading: 'Secure Software Architecture',
          tag: 'FOCUSED SECURITY',
          tagColor: 'text-cyan',
          sub: 'Secure, scalable architecture designed around modern security practices to protect applications, APIs, Databases, and business data.',
        },
        {
          icon: 'fa-solid fa-credit-card',
          iconColor: 'text-red',
          heading: 'UAE-Ready Payments integrations',
          tag: 'PAYMENT INTEGRATIONS READY',
          tagColor: 'text-red',
          sub: 'Integration with Network International, Stripe, Apple Pay, Tabby and Tamara along with business systems such as Tally Prime, HRMS, E-Invoicing, and ERPs.',
        },
      ],
    },
    techTitleLines: [
      'Technologies We Deploy',
      'for Enterprise Web Platforms',
    ],
    projects: {
      badge: 'FEATURED WEB PROJECTS',
      titleLines: [
        'Web Platforms That',
        'Dominated the Market',
      ],
      projects: [
        {
          className: 'p-card-1',
          img: '/images/p1.png',
          alt: 'MediConnect Web Platform',
          tags: [
            'Next.js 14',
            'Node.js',
            'DHA Sync',
            'Arabic RTL',
          ],
          title: 'MediConnect — Telehealth Web Portal',
          desc: 'Engineered a high-concurrency medical portal for Dubai clinics supporting online appointment scheduling, doctor availability, patient portals, and video consultations.',
          stats: [
            {
              type: 'counter',
              target: '50',
              suffix: '%',
              label: 'Faster Booking Velocity',
            },
            {
              type: 'counter',
              target: '95',
              suffix: '+',
              label: 'Google Core Web Vitals',
            },
          ],
        },
        {
          className: 'p-card-2',
          img: '/images/case-telehealth.jpg',
          alt: 'PropTech Real Estate Web Platform',
          tags: [
            'React',
            'Ejari API',
            'TypeScript',
            'AWS UAE',
          ],
          title: 'PropTech Dubai — Lease & Tenant Web Portal',
          desc: 'Architected a real estate web application automating Ejari lease registrations, online rent payment collection, virtual 3D tour scheduling, and tenant service requests.',
          stats: [
            {
              type: 'static',
              value: 'AED 2.5B+',
              label: 'Lease Value Managed',
            },
          ],
        },
      ],
    },
    process: {
      badge: 'WEB DEVELOPMENT STAGES',
      titleLines: [
        'From strategy and Figma to',
        'scalable software launch.',
      ],
      stages: [
        {
          name: 'Strategy',
          desc: 'Understand your business requirements, goals, user journeys, system integrations to build the perfect web & software development plan.',
          num: '1',
          className: 'p-card-1',
        },
        {
          name: 'UI and Arabic RTL design',
          desc: "For your UAE businesses' needs we focused on Figma designs with responsive English and Arabic RTL interfaces.",
          num: '2',
          className: 'p-card-2',
        },
        {
          name: 'Web and Software Development',
          desc: 'Build scalable websites, SaaS platforms and custom solutions using modern technologies, with integrations for HRMS, ERP, CRMS, AI and automation.',
          num: '3',
          className: 'p-card-3',
        },
        {
          name: 'Testing and Security',
          desc: 'API and security testing to deliver reliable, Responsive, Performance, Secure and high-performing solutions.',
          num: '4',
          className: 'p-card-4',
        },
        {
          name: 'UAE Cloud Deployment',
          desc: 'For performance, scalability and business continuity, we deploy your website or software on AWS or Microsoft Azure, with CDN and cloud infrastructure designed.',
          num: '5',
          className: 'p-card-5',
        },
        {
          name: 'Support & Growth',
          desc: 'To help your software evolve with your business, including AI automation, ERP, HRMS, TallyPrime and e-Invoice integrations. We Continuous maintenance, upgrades and optimise.',
          num: '6',
          className: 'p-card-6',
        },
      ],
    },
    faq: {
      badge: 'WEB DEVELOPMENT FAQs',
      items: [
        {
          q: 'Why choose custom Next.js development?',
          a: 'Because Next.js development provides better performance, scalability, security, and flexibility for enterprise websites and SaaS platforms. It is best for custom business solutions and for high-performance digital products.',
        },
        {
          q: 'Can you build bilingual English and Arabic websites with RTL support?',
          a: 'Yes. We build bilingual English and Arabic websites with RTL support for UAE businesses and the wider Middle East market.',
        },
        {
          q: 'Do you integrate UAE and Middle East payment gateways?',
          a: 'Yes. We integrate UAE and Middle East payment gateways with ERP, eCommerce platforms, SaaS applications, and custom software based on your payment requirements.',
        },
        {
          q: 'Can you integrate TallyPrime, ERP and UAE e-Invoicing?',
          a: 'Yes. We integrate ERP systems, HRMS, accounting platforms, TallyPrime, and other business applications to streamline data exchange, automation, reporting, and UAE e-invoicing workflows.',
        },
        {
          q: 'Do you guarantee top Google SEO rankings?',
          a: 'We follow SEO best practices covering technical SEO, performance, content structure, keywords, mobile experience, and search-friendly development to build a strong foundation for organic growth.',
        },
        {
          q: 'How long does it take to design and launch an enterprise website?',
          a: 'It depends on features, integrations, and complexity. A standard business website may take a few weeks, while an enterprise site with ERP, CRM, AI Automation, or SaaS integrations can take longer.',
        },
      ],
    },
  },

  'mobile-apps': {
    metaTitle: 'Mobile App Development UAE | BVM Tech Limited',
    metaDesc: 'High-quality mobile apps for iOS and Android with UAE payment integration, Face ID and biometric login, built for your business needs.',
    header: {
      category: 'SERVICES / MOBILE APP DEVELOPMENT',
      titleLine1: 'High-Quality Mobile Apps',
      titleLine2: 'Built for Your Business',
      summary: 'We build fast and user friendly custom mobile apps for iOS and android as per your business needs that include payment gateways to secure Face ID and biometric login and also ensuring that your app is ready for real-world use.',
      trustTags: [
        {
          icon: 'fa-brands fa-apple text-cyan',
          text: 'iOS & Android Apps',
        },
        {
          icon: 'fa-solid fa-credit-card text-red',
          text: 'UAE Payment Integration',
        },
        {
          icon: 'fa-solid fa-fingerprint text-cyan',
          text: 'Face ID & Biometric Login',
        },
      ],
      floatingPills: [
        {
          position: 'pill-top',
          icon: 'fa-brands fa-apple text-cyan',
          text: 'Native iOS Swift',
        },
        {
          position: 'pill-bottom-left',
          icon: 'fa-brands fa-android text-red',
          text: 'Android Kotlin',
        },
        {
          position: 'pill-bottom-right',
          icon: 'fa-solid fa-layer-group text-cyan',
          text: 'Flutter & React Native',
        },
      ],
      showcaseImg: '/images/service-mobile.jpg',
      showcaseAlt: 'Custom Mobile App UI',
    },
    capabilities: {
      badge: 'CORE CAPABILITIES',
      titleLines: [
        'Mobile App Development',
        'Built for UAE Businesses',
      ],
      cards: [
        {
          icon: 'fa-brands fa-apple',
          iconBadgeClass: 'ios-icon text-cyan',
          techBadge: 'SWIFT & SWIFTUI',
          title: 'Native iOS Development',
          desc: 'A high-performing iOS application built with Swift and SwiftUI, featuring secure authentication, Apple Pay, Face ID, background sync, and seamless enterprise integrations.',
          tags: [
            'Swift',
            'SwiftUI',
            'Apple Pay',
            'Face ID',
          ],
        },
        {
          icon: 'fa-brands fa-android',
          iconBadgeClass: 'android-icon text-red',
          techBadge: 'KOTLIN & JETPACK COMPOSE',
          title: 'Native Android Development',
          desc: 'Safe and scalable Android applications built for different devices and business requirements, with biometric authentication, NFC payments, offline functionality, and optimized performance.',
          tags: [
            'Kotlin',
            'Jetpack Compose',
            'NFC',
            'Biometric Security',
          ],
        },
        {
          icon: 'fa-solid fa-layer-group',
          iconBadgeClass: 'flutter-icon text-cyan',
          techBadge: 'FLUTTER & REACT NATIVE',
          title: 'Cross-Platform App Development',
          desc: 'BVM builds applications for iOS and Android from a unified codebase, reducing development time and cost while maintaining a consistent, high-quality user experience.',
          tags: [
            'Flutter',
            'React Native',
            'Faster Deployment',
            'Shared Codebase',
          ],
        },
        {
          icon: 'fa-solid fa-plug',
          iconBadgeClass: 'enterprise-icon text-red',
          techBadge: 'ERP, CRM & BUSINESS',
          title: 'ERP, CRM & Business System Integration',
          desc: 'Connect your mobile applications with ERP, CRM, HRMS, SaaS platforms, Tally Prime, e-Invoicing systems, and custom business software. Enable real-time data exchange, offline operations, cloud synchronization, and AI-powered automation for smarter business workflows.',
          tags: [
            'ERP Integration',
            'CRM Sync',
            'Offline Support',
            'AI Automation',
          ],
        },
      ],
    },
    why: {
      badge: 'WHY CHOOSE US',
      titleLines: [
        'Best Performance Mobile Apps',
        'Built for UAE Businesses',
      ],
      description: 'We build secure, scalable and user-friendly mobile apps tailored to UAE business needs. From ERP, HRMS and SaaS to AI, AI Automation and e-commerce, our mobile solutions are designed for smooth performance, seamless integrations and long-term growth.',
      calloutValue: 'App Store & Google Play Ready',
      calloutLabel: 'Complete compliance checks, app optimisation, metadata support and deployment assistance.',
      strips: [
        {
          icon: 'fa-solid fa-store',
          iconColor: 'text-cyan',
          heading: 'App Store & Google Play Ready',
          tag: 'LAUNCH READY',
          tagColor: 'text-cyan',
          sub: 'Complete compliance checks, app optimisation, metadata support and deployment assistance for Apple App Store and Google Play.',
        },
        {
          icon: 'fa-solid fa-credit-card',
          iconColor: 'text-red',
          heading: 'UAE-Ready Payments & Biometrics',
          tag: 'PAYMENTS READY',
          tagColor: 'text-red',
          sub: 'Integrate Apple Pay, Samsung Pay, Network International, and secure Face ID/Fingerprint authentication for seamless transactions.',
        },
        {
          icon: 'fa-solid fa-bolt',
          iconColor: 'text-cyan',
          heading: 'Fast & Reliable Offline Performance',
          tag: 'HIGH PERFORMANCE',
          tagColor: 'text-cyan',
          sub: 'Smart local data caching with SQLite/Realm helps applications perform smoothly, even with limited or unstable network connectivity.',
        },
        {
          icon: 'fa-solid fa-shield-halved',
          iconColor: 'text-red',
          heading: 'Enterprise Security & NDA',
          tag: 'SECURITY FIRST',
          tagColor: 'text-red',
          sub: 'Secure data storage, SSL/TLS protection, OWASP mobile security practices and NDA-based development to protect your business and customer data.',
        },
      ],
    },
    techTitleLines: [
      'The Tools We Use',
      'to Build Your Mobile Apps',
    ],
    projects: {
      badge: 'FEATURED MOBILE PROJECTS',
      titleLines: [
        'Mobile Apps Built for',
        'UAE Business Growth',
      ],
      projects: [
        {
          className: 'p-card-1',
          img: '/images/p1.png',
          alt: 'Enterprise Mobile App',
          tags: [
            'iOS',
            'Android',
            'Flutter',
            'UAE Payments',
          ],
          title: 'Enterprise Business Mobile Platform',
          desc: 'Custom mobile applications connected to ERP, CRM and HRMS systems with biometric login, offline support and UAE payment gateways for teams across Dubai and Abu Dhabi.',
          stats: [
            {
              type: 'counter',
              target: '60',
              suffix: ' FPS',
              label: 'Smooth Performance',
            },
          ],
        },
        {
          className: 'p-card-2',
          img: '/images/service-mobile.jpg',
          alt: 'Customer Mobile App',
          tags: [
            'React Native',
            'Apple Pay',
            'Face ID',
          ],
          title: 'Customer Engagement Mobile App',
          desc: 'High-quality iOS and Android apps with Face ID, secure payments and real-time sync designed for UAE customer experiences and business operations.',
          stats: [
            {
              type: 'counter',
              target: '99',
              suffix: '%',
              label: 'App Store Approval Rate',
            },
          ],
        },
      ],
    },
    process: {
      badge: 'MOBILE APP DEVELOPMENT CYCLE',
      titleLines: [
        'Six stages. From idea to a',
        'secure, scalable mobile app.',
      ],
      stages: [
        {
          name: 'Discovery & Strategy',
          desc: 'To define the right mobile app strategy, We Understand your business goals, users, integrations, security needs, and technical requirements.',
          num: '1',
          className: 'p-card-1',
        },
        {
          name: 'UI/UX Design',
          desc: 'We build intuitive Figma prototypes and user-focused interfaces aligned with iOS and Android standards for a best experience.',
          num: '2',
          className: 'p-card-2',
        },
        {
          name: 'Agile App Development',
          desc: 'Develop scalable mobile applications using Swift, Kotlin, or Flutter, with API integration and agile development sprints.',
          num: '3',
          className: 'p-card-3',
        },
        {
          name: 'Testing & Security',
          desc: 'Quality Analysis, performance testing, API security, data protection, and device compatibility testing to deliver reliable applications.',
          num: '4',
          className: 'p-card-4',
        },
        {
          name: 'App Store & Play Store Launch',
          desc: 'Manage app deployment, store guidelines, metadata, optimization, and production releases across Apple App Store and Google Play Store.',
          num: '5',
          className: 'p-card-5',
        },
        {
          name: 'Support, AI & Automation',
          desc: 'Monitoring, updates, performance optimization, and feature enhancements. Integrate AI Automation, ERP, HRMS, SaaS, and cloud solutions for your business growth.',
          num: '6',
          className: 'p-card-6',
        },
      ],
    },
    faq: {
      badge: 'MOBILE APP DEVELOPMENT FAQs',
      items: [
        {
          q: 'Should I choose Native iOS/Android or Cross-Platform development?',
          a: 'We help UAE businesses choose between native iOS/Android and cross-platform options such as Flutter, based on performance, scalability, budget, and business needs.',
        },
        {
          q: 'Do you support Apple App Store and Google Play approval?',
          a: 'Yes. Our Mobile App Development team helps prepare, test, and deploy apps for Apple App Store and Google Play requirements.',
        },
        {
          q: 'How long does it take to develop an enterprise mobile app?',
          a: "Development time varies as per the app's features, integrations, and complexity. AI Automation, ERP, HRMS, SaaS, and third-party integrations may require additional development time.",
        },
        {
          q: 'Do you integrate UAE and Middle East payment gateways?',
          a: 'Yes. We integrate UAE and Middle East payment gateways with ERP, eCommerce platforms, SaaS applications, and custom software based on your payment requirements.',
        },
        {
          q: 'Do you provide post-launch mobile app support and maintenance?',
          a: 'Yes. We provide ongoing app maintenance, security updates, performance optimisation, bug fixes, feature upgrades, and support so your app can grow with your business.',
        },
      ],
    },
  },

  'crm-development': {
    metaTitle: 'CRM Development UAE | BVM Tech Limited',
    metaDesc: 'CRM and sales systems for Dubai, Abu Dhabi, and GCC with WhatsApp Business integration, smarter lead management, and no per-user license costs.',
    header: {
      category: 'SERVICES / CRM SYSTEMS DEVELOPMENT',
      titleLine1: 'CRM & Sales Systems That',
      titleLine2: "Make Your Team's Work Easier",
      summary: 'We develop a CRM and sales systems that specially build according to your actual work and it is designed for managing leads and tracking sales to WhatsApp integration and client portals to help teams in Dubai, Abu Dhabi, and across the GCC.',
      trustTags: [
        {
          icon: 'fa-brands fa-whatsapp text-cyan',
          text: 'WhatsApp Business Integration',
        },
        {
          icon: 'fa-solid fa-chart-line text-red',
          text: 'Smarter Lead Management',
        },
        {
          icon: 'fa-solid fa-user-check text-cyan',
          text: 'No Per-User License Costs',
        },
      ],
      floatingPills: [
        {
          position: 'pill-top',
          icon: 'fa-solid fa-filter text-cyan',
          text: 'Lead & Deal Tracking',
        },
        {
          position: 'pill-bottom-left',
          icon: 'fa-brands fa-whatsapp text-red',
          text: 'WhatsApp for Sales',
        },
        {
          position: 'pill-bottom-right',
          icon: 'fa-solid fa-user-gear text-cyan',
          text: 'Arabic & English Support',
        },
      ],
      showcaseImg: '/images/service-crm.jpg',
      showcaseAlt: 'Custom CRM Sales Dashboard',
    },
    capabilities: {
      badge: 'CRM CAPABILITIES',
      titleLines: [
        'Sales & Customer Management Tools',
        'Built Around Your Business',
      ],
      cards: [
        {
          icon: 'fa-solid fa-filter',
          iconBadgeClass: 'flutter-icon text-cyan',
          techBadge: 'LEAD CAPTURE',
          title: 'Manage Leads & Sales',
          desc: 'When you have your website, social media, phone calls, and other channels at once place then your team can easily track each lead, move deals through different stages and have no chance to miss the inquiry.',
          tags: [
            'Lead Capture',
            'Deal Tracking',
            'Task Assignment',
          ],
        },
        {
          icon: 'fa-brands fa-whatsapp',
          iconBadgeClass: 'ios-icon text-red',
          techBadge: 'WHATSAPP FOR SALES',
          title: 'WhatsApp for Sales',
          desc: 'You need to manage properly WhatsApp conversations along with your sales process. It helps your team to rapidly respond to new enquiries, keep history of each customer and also send follow-ups without doing manually.',
          tags: [
            'Chat History',
            'Quick Replies',
            'WhatsApp Campaigns',
          ],
        },
        {
          icon: 'fa-solid fa-door-open',
          iconBadgeClass: 'android-icon text-cyan',
          techBadge: 'CUSTOMER PORTAL',
          title: 'Customer Portal',
          desc: 'Provide a place where your customer can easily manage related to their account such as sign documents, upload files, raise support requests, check invoices while always updated they no need contacting your team again and again.',
          tags: [
            'Digital Signatures',
            'Document Management',
            'Support Tickets',
          ],
        },
        {
          icon: 'fa-solid fa-chart-line',
          iconBadgeClass: 'enterprise-icon text-red',
          techBadge: 'SALES TRACKING',
          title: 'Sales Tracking & Forecasting',
          desc: 'Need to have an actual picture for how your sales team and pipeline are performing. Track conversions, compare team performance, manage commissions and use of your sales data to future better understand.',
          tags: [
            'Team Performance',
            'Conversion Tracking',
            'Revenue Forecasting',
          ],
        },
      ],
    },
    why: {
      badge: 'WHY CHOOSE BVM CRM?',
      titleLines: [
        'A CRM Built Around',
        'Your Business',
      ],
      description: "We build a CRM for your sales process in which you don't need to paying monthly fees for every user as Salesforce or HubSpot where also included WhatsApp integration, the features your team actually needs, and complete ownership of your system.",
      calloutValue: 'Unlimited Users',
      calloutLabel: 'Pay for the development once without monthly per-user CRM fees.',
      strips: [
        {
          icon: 'fa-solid fa-users',
          iconColor: 'text-cyan',
          heading: 'No Monthly Per-User Fees',
          tag: 'UNLIMITED USERS',
          tagColor: 'text-cyan',
          sub: 'Include more members into your business team for growth without paying monthly fee for every user.',
        },
        {
          icon: 'fa-brands fa-whatsapp',
          iconColor: 'text-red',
          heading: 'WhatsApp Business Integration',
          tag: 'WHATSAPP FOR SALES',
          tagColor: 'text-red',
          sub: "Directly talk to customers using WhatsApp and link to your CRM and without using the other tools send quotes or payment links.",
        },
        {
          icon: 'fa-solid fa-language',
          iconColor: 'text-cyan',
          heading: 'Arabic & English Support',
          tag: 'BUILT FOR BILINGUAL TEAMS',
          tagColor: 'text-cyan',
          sub: 'Using a clean interface can be switched between Arabic and English that works smoothly for both RTL and LTR languages.',
        },
        {
          icon: 'fa-solid fa-plug',
          iconColor: 'text-red',
          heading: 'ERP & Accounting Integration',
          tag: 'CONNECT YOUR ACCOUNTS',
          tagColor: 'text-red',
          sub: 'Please connect your CRM to your accounting or ERP system to make simple invoicing, payments, and VAT-related reporting.',
        },
      ],
    },
    techTitleLines: [
      'The Tools We Use',
      'to Build Your CRM',
    ],
    projects: {
      badge: 'FEATURED CRM CASE STUDIES',
      titleLines: [
        'CRM Projects That',
        'Helped Businesses Grow',
      ],
      projects: [
        {
          className: 'p-card-1',
          img: '/images/case-proptech.jpg',
          alt: 'Dubai Property Sales & Tenant CRM',
          tags: [
            'Property CRM',
            'WhatsApp Integration',
            'Ejari Integration',
            'Web & Mobile',
          ],
          title: 'Dubai Property Sales & Tenant CRM',
          desc: 'We built a complete custom CRM for Dubai property developers where we could easily manage sales leads and tenants and using WhatsApp help the sales team to identify custom, schedule virtual property tours, and generate Ejari contracts faster.',
          stats: [
            {
              type: 'counter',
              target: '50',
              suffix: '%',
              label: 'Faster Lead Response Time',
            },
            {
              type: 'static',
              value: 'AED 2.5B+',
              label: 'Sales Pipeline Managed',
            },
          ],
        },
        {
          className: 'p-card-1',
          img: '/images/p1.png',
          alt: 'MediConnect Clinic Patient CRM',
          tags: [
            'Healthcare CRM',
            'DHA Integration',
            'SMS & Push Notifications',
          ],
          title: 'MediConnect — Clinic Patient CRM',
          desc: 'We Build a healthcare CRM in which Abu Dhabi and Dubai manage patient enquiries, appointments, follow-ups, and renewals and also help for SMS reminders and remain updated to doctors and staff about the upcoming appointments.',
          stats: [
            {
              type: 'counter',
              target: '35',
              suffix: '%',
              label: 'Fewer Patient No-Shows',
            },
            {
              type: 'static',
              value: '120K+',
              label: 'Patient Profiles Managed',
            },
          ],
        },
      ],
    },
    process: {
      badge: 'OUR CRM PROCESS',
      titleLines: [
        'Steps to Build and',
        'Launch Your CRM',
      ],
      stages: [
        {
          name: 'Understand Your Sales Process',
          desc: 'Simply, first of all we understand your team how to handle leads, follow up with customers, deal progression and how to use WhatsApp that we help to know what actual need your CRM.',
          num: '1',
          className: 'p-card-1',
        },
        {
          name: 'Plan the CRM & Design the Experience',
          desc: "We plan the CRM as per your team's daily work and before the development we create user-friendly screens for leads, sales teams, managers, and customers.",
          num: '2',
          className: 'p-card-2',
        },
        {
          name: 'Build & Test in Stages',
          desc: 'We build the CRM into the phases by which you test well to each phase before the complete entire system.',
          num: '3',
          className: 'p-card-3',
        },
        {
          name: 'Connect WhatsApp & Other Systems',
          desc: 'We connect business tools and WhatsApp, your accounting or ERP system, e-signatures so everything works together.',
          num: '4',
          className: 'p-card-4',
        },
        {
          name: 'Launch & Train Your Team',
          desc: 'After the everything tested, we launch CRM that help better understanding to your sales team and managers.',
          num: '5',
          className: 'p-card-5',
        },
        {
          name: 'Ongoing Support & Improvements',
          desc: 'After launch, we continue supporting your CRM—fixing issues and adding features that help your business grow.',
          num: '6',
          className: 'p-card-6',
        },
      ],
    },
    faq: {
      badge: 'CRM FAQs',
      items: [
        {
          q: 'Can a Custom CRM Be Better Than Salesforce or HubSpot for Our Business?',
          a: 'Yes. A custom CRM is built around your sales process and team workflows in the UAE, so you pay for what you need instead of rising per-user subscription costs for features you may never use.',
        },
        {
          q: 'Can We Manage WhatsApp Conversations Inside the CRM?',
          a: 'Yes. Your team can handle WhatsApp conversations inside the CRM—capture new leads, reply faster, and keep chat history, messages, and shared documents in one place.',
        },
        {
          q: 'Can You Move Our Existing Customer Data to the New CRM?',
          a: 'Yes. We can migrate leads and customer data from Excel, Google Sheets, Salesforce, HubSpot, or other systems. During migration we clean and organise records so important history is not lost.',
        },
        {
          q: 'Can Our Team Use the CRM in Both English and Arabic?',
          a: 'Yes. Teams can switch between English and Arabic, including right-to-left (RTL) layout support.',
        },
        {
          q: 'Can the CRM Connect With Our Accounting or ERP Software?',
          a: 'Yes. The CRM can connect to your existing accounting or ERP system—for example, when a deal is won, it can send the required data to create invoices and maintain VAT records automatically.',
        },
      ],
    },
  },

  'erp-development': {
    metaTitle: 'ERP Development UAE | BVM Tech Limited',
    metaDesc: 'Custom ERP & HRMS solutions for UAE businesses covering VAT accounting, multi-currency payroll, inventory, procurement, and supply chain management.',
    header: {
      category: 'SERVICES / ERP SYSTEMS DEVELOPMENT',
      titleLine1: 'Custom ERP & HRMS Solutions',
      titleLine2: 'Designed for UAE Businesses',
      summary: 'Custom ERP and HRMS systems for businesses in Dubai, Abu Dhabi, and across the GCC—covering UAE VAT accounting, multi-currency payroll, inventory, procurement, and supply chain management on one platform.',
      trustTags: [
        {
          icon: 'fa-solid fa-file-invoice-dollar text-cyan',
          text: 'UAE VAT Ready',
        },
        {
          icon: 'fa-solid fa-users text-red',
          text: 'WPS & EOSB Payroll Support',
        },
        {
          icon: 'fa-solid fa-building text-cyan',
          text: 'No Annual User Fees',
        },
      ],
      floatingPills: [
        {
          position: 'pill-top',
          icon: 'fa-solid fa-calculator text-cyan',
          text: 'UAE VAT Ready',
        },
        {
          position: 'pill-bottom-left',
          icon: 'fa-solid fa-money-check-dollar text-red',
          text: 'WPS Payroll Support',
        },
        {
          position: 'pill-bottom-right',
          icon: 'fa-solid fa-warehouse text-cyan',
          text: 'Inventory & Procurement',
        },
      ],
      showcaseImg: '/images/service-erp.jpg',
      showcaseAlt: 'Custom ERP Dashboard',
    },
    capabilities: {
      badge: 'ERP CAPABILITIES',
      titleLines: [
        'ERP Modules Designed for',
        'Middle East Businesses',
      ],
      cards: [
        {
          icon: 'fa-solid fa-file-invoice-dollar',
          iconBadgeClass: 'flutter-icon text-cyan',
          techBadge: 'VAT READY',
          title: 'Finance & VAT Management',
          desc: 'At the same place all things can be managed such as your accounts, VAT reporting, invoice and payments as per multiple currencies and bank reconciliation.',
          tags: [
            'VAT Ready',
            'Multi-Currency',
            'Easy Reconciliation',
          ],
        },
        {
          icon: 'fa-solid fa-users-gear',
          iconBadgeClass: 'ios-icon text-red',
          techBadge: 'WPS PAYROLL',
          title: 'HRMS & GCC Payroll',
          desc: 'We use the paperless work to handle WPS, employee salaries, severance pay, visas and staff details.',
          tags: [
            'WPS Payroll',
            'EOSB Support',
            'Visa Tracking',
          ],
        },
        {
          icon: 'fa-solid fa-truck',
          iconBadgeClass: 'android-icon text-cyan',
          techBadge: 'STOCK TRACKING',
          title: 'Purchasing & Inventory Management',
          desc: 'All time your team has to get the information regarding stock such as track stock, purchase order, suppliers, and about warehouse inventory.',
          tags: [
            'Stock Tracking',
            'PO Approvals',
            'Barcode Support',
          ],
        },
        {
          icon: 'fa-solid fa-chart-pie',
          iconBadgeClass: 'enterprise-icon text-red',
          techBadge: 'REAL-TIME INSIGHTS',
          title: 'Business Reporting & Analytics',
          desc: 'View a real time picture for your business on your dashboard about Dubai, Abu Dhabi, and other GCC locations.',
          tags: [
            'Consolidated Reports',
            'Real-Time Insights',
            'Role-Based Dashboards',
          ],
        },
      ],
    },
    why: {
      badge: 'WHY BVM ERP',
      titleLines: [
        'No Per-User Fees.',
        'Built Around Your Business.',
      ],
      description: 'We build ERP systems around your business requirements with a development fee—not recurring per-user licensing costs.',
      calloutValue: 'Unlimited Users Included',
      calloutLabel: 'One-Time Development with Full Code Ownership',
      strips: [
        {
          icon: 'fa-solid fa-users',
          iconColor: 'text-cyan',
          heading: 'No Recurring User Fees',
          tag: 'UNLIMITED USERS',
          tagColor: 'text-cyan',
          sub: 'Add unlimited team members and employees with no monthly fee per user.',
        },
        {
          icon: 'fa-solid fa-file-shield',
          iconColor: 'text-red',
          heading: 'UAE WPS Payroll',
          tag: 'WPS READY',
          tagColor: 'text-red',
          sub: 'Generate WPS payroll files for salary processing that meet UAE requirements.',
        },
        {
          icon: 'fa-solid fa-stamp',
          iconColor: 'text-cyan',
          heading: 'UAE VAT & E-Invoicing',
          tag: 'VAT READY',
          tagColor: 'text-cyan',
          sub: 'Manage invoices and VAT records with a system designed for UAE tax requirements.',
        },
        {
          icon: 'fa-solid fa-plug',
          iconColor: 'text-red',
          heading: 'Easy Database & API Integration',
          tag: 'EASY INTEGRATION',
          tagColor: 'text-red',
          sub: 'Connect your new ERP to existing databases, POS systems, and other business software.',
        },
      ],
    },
    techTitleLines: [
      'Technologies We Use',
      'to Build Your ERP',
    ],
    projects: {
      badge: 'FEATURED ERP CASE STUDIES',
      titleLines: [
        'ERP Solutions Made for',
        'Middle East Businesses',
      ],
      projects: [
        {
          className: 'p-card-1',
          img: '/images/p2.png',
          alt: 'Apex Logistics Fleet ERP',
          tags: [
            'Custom ERP',
            'React / Node',
            'PostgreSQL',
            'WPS Payroll',
          ],
          title: 'Apex Logistics — A Smarter Way to Manage Fleet & Procurement',
          desc: "We created a custom ERP system that you can easily manage day to day vehicles, drivers, payroll, purchasing, and accounts across multiple UAE branches. That's what you can say in a short apex logistics system.",
          stats: [
            {
              type: 'counter',
              target: '40',
              suffix: '%',
              label: 'Faster Procurement',
            },
            {
              type: 'counter',
              target: '20',
              suffix: '%',
              label: 'Lower Operational Costs',
            },
          ],
        },
        {
          className: 'p-card-2',
          img: '/images/service-erp.jpg',
          alt: 'PropTech Real Estate ERP',
          tags: [
            'Property ERP',
            'Ejari Sync',
            'Python / Django',
            'Azure UAE',
          ],
          title: 'PropTech Dubai — Real Estate & Lease Management',
          desc: 'We developed a custom system that can help to make property and lease management simple. It helps to manage Ejari registrations, landlord payments, tenant cheque tracking, and RERA compliance across over the 50 residential towers.',
          stats: [
            {
              type: 'static',
              value: 'AED 2.5B+',
              label: 'Lease Value Managed',
            },
            {
              type: 'static',
              value: '100%',
              label: 'Ejari Sync Automated',
            },
          ],
        },
      ],
    },
    process: {
      badge: 'ERP IMPLEMENTATION',
      titleLines: [
        'A Simple Six-Step Process',
        'From Planning to Launch',
      ],
      stages: [
        {
          name: 'Understand Your Business',
          desc: 'First of all we review your team works, where your daily work is included like accounts, approvals, inventory, payroll.',
          num: '1',
          className: 'p-card-1',
        },
        {
          name: 'Plan Your ERP',
          desc: 'We design the database, user access, and workflows according to your business operations.',
          num: '2',
          className: 'p-card-2',
        },
        {
          name: 'Build & Test',
          desc: 'We build the ERP into the phase with proper testing to each module in which your team also can use and review with us.',
          num: '3',
          className: 'p-card-3',
        },
        {
          name: 'Move Your Existing Data',
          desc: 'We safely carry forward your existing accounts, employee records, inventory, and other important data into the new system.',
          num: '4',
          className: 'p-card-4',
        },
        {
          name: 'Launch Your ERP',
          desc: 'We deploy your ERP on cloud or on-premises as you prefer, and train your team so they can get started confidently.',
          num: '5',
          className: 'p-card-5',
        },
        {
          name: 'Ongoing Support',
          desc: 'After launch we help resolve issues, keep the system backed up, and support continuous improvement as your business grows.',
          num: '6',
          className: 'p-card-6',
        },
      ],
    },
    faq: {
      badge: 'ERP FAQs',
      items: [
        {
          q: 'Does BVM Charge Recurring User Fees for a Custom ERP?',
          a: 'No. We build custom ERP solutions with unlimited user access and no per-user licence fees—unlike many platforms that charge again for every additional user.',
        },
        {
          q: 'Is the HRMS Compliant with UAE Labor Law and MOHRE WPS?',
          a: 'Yes. Our custom HRMS supports UAE labour law and MOHRE Wages Protection System (WPS) requirements. It helps you store key documents (visas, passports, Emirates IDs), produce WPS-compliant .SIF payroll files, and calculate End of Service Benefits (EOSB).',
        },
        {
          q: 'Can We Migrate Our Existing Accounting and Inventory Data?',
          a: 'Yes. We can migrate accounting transactions, customer and vendor records, contracts, and inventory or SKU data from your current software into the new ERP. Our team cleans and organises the data during migration so records move accurately.',
        },
        {
          q: 'How Does the ERP Handle UAE 5% VAT and FTA Requirements?',
          a: 'The finance module is built for UAE VAT, including the standard 5% rate on taxable transactions. It supports zero-rated and exempt transactions, generates tax invoices, and provides the VAT reports needed for FTA filing and audits.',
        },
        {
          q: 'Can We Add New ERP Modules in the Future?',
          a: 'Yes. You can add modules such as Asset Management, CRM, POS, or other custom integrations as your needs grow—without replacing the entire system.',
        },
      ],
    },
  },

  'custom-software-development': {
    metaTitle: 'Custom Software Development UAE | BVM Tech Limited',
    metaDesc: 'Custom software solutions for UAE businesses with web applications, workflow solutions, and automation. Full code ownership and UAE VAT ready.',
    header: {
      category: 'SERVICES / CUSTOM SOFTWARE DEVELOPMENT',
      titleLine1: 'Custom Software Build For',
      titleLine2: "Businesses' Proportional Growth",
      summary: "Every business has different goals, challenges, and processes. We develop custom software solutions according to your requirements and needs with web applications, workflow solutions, and automation. Our services help businesses for dubai, abu dhabi, sharjah and over the UAE transform manuals into automated workflows.",
      trustTags: [
        {
          icon: 'fa-solid fa-code text-cyan',
          text: '100% OWNERSHIP',
        },
        {
          icon: 'fa-solid fa-lock text-red',
          text: 'UAE TAX READY',
        },
        {
          icon: 'fa-solid fa-handshake text-cyan',
          text: 'NO HIDDEN COSTS',
        },
      ],
      floatingPills: [
        {
          position: 'pill-top',
          icon: 'fa-solid fa-code-branch text-cyan',
          text: 'Complete Code Ownership',
        },
        {
          position: 'pill-bottom-left',
          icon: 'fa-solid fa-cloud text-red',
          text: 'UAE Cloud Deployment',
        },
        {
          position: 'pill-bottom-right',
          icon: 'fa-solid fa-robot text-cyan',
          text: 'AI Powered Automation',
        },
      ],
      showcaseImg: '/images/service-custom.jpg',
      showcaseAlt: 'Custom Enterprise Software Dashboard',
    },
    capabilities: {
      badge: 'ADVANCED SOFTWARE SOLUTIONS',
      titleLines: [
        'Advanced Software Solutions',
        'for Modern Enterprises',
      ],
      cards: [
        {
          icon: 'fa-solid fa-globe',
          iconBadgeClass: 'flutter-icon text-cyan',
          techBadge: 'ENTERPRISE SOLUTIONS',
          title: 'Adaptable & Flexible Enterprise Solutions',
          desc: 'Here modular enterprise web portals that feature secure role-based access, seamless integrations, real-time data, and high-performance business operations.',
          tags: [
            'Role-Based Access',
            'Real-Time Data',
            'Seamless Integrations',
          ],
        },
        {
          icon: 'fa-solid fa-network-wired',
          iconBadgeClass: 'ios-icon text-red',
          techBadge: 'API & MICROSERVICES',
          title: 'API & Microservices Solutions',
          desc: 'Provide the Scalable microservices and API solutions designed for the applications that are able to easily integrate, better performance without loss of data security.',
          tags: [
            'Scalable APIs',
            'Microservices',
            'Data Security',
          ],
        },
        {
          icon: 'fa-solid fa-robot',
          iconBadgeClass: 'android-icon text-cyan',
          techBadge: 'AI AUTOMATION',
          title: 'AI Powered Automation',
          desc: 'We provide the AI powered automation solutions that make it easy to repetitive tasks, perfection workflow and increase efficiency for your organization.',
          tags: [
            'Workflow Automation',
            'Repetitive Tasks',
            'Efficiency Gains',
          ],
        },
        {
          icon: 'fa-solid fa-recycle',
          iconBadgeClass: 'enterprise-icon text-red',
          techBadge: 'SYSTEM MODERNIZATION',
          title: 'System Modernization',
          desc: 'To transform existing software system into modernize outdated with using the better architecture, secure integrations without disrupting your ongoing business operations.',
          tags: [
            'Modern Architecture',
            'Secure Integrations',
            'Zero Disruption',
          ],
        },
      ],
    },
    why: {
      badge: 'WHY BVM SOFTWARE',
      titleLines: [
        'Our Ownership &',
        'Code Perfections',
      ],
      description: 'When software is already built and your business needs to customize as per processes to the technology. so in the BVM software we build accordingly to your unique business logic, workflow and requirements that help to grow your business with automation work.',
      calloutValue: '100% OWNERSHIP',
      calloutLabel: 'Get the full access of your complete code, APIs, database, and customized files without any restriction.',
      strips: [
        {
          icon: 'fa-solid fa-code-branch',
          iconColor: 'text-cyan',
          heading: 'Complete Code & Ownership',
          tag: '100% OWNERSHIP',
          tagColor: 'text-cyan',
          sub: 'Get the full access of your complete code, APIs, database, and customized files without any restriction.',
        },
        {
          icon: 'fa-solid fa-file-invoice-dollar',
          iconColor: 'text-red',
          heading: 'Clear Pricing & Rapidly Development',
          tag: 'NO HIDDEN COSTS',
          tagColor: 'text-red',
          sub: 'Already you need to known range and cost of project We update the regularly and work in short development cycles.',
        },
        {
          icon: 'fa-solid fa-stamp',
          iconColor: 'text-cyan',
          heading: 'UAE VAT & E-Invoicing Support',
          tag: 'UAE TAX READY',
          tagColor: 'text-cyan',
          sub: 'Our support provide VAT calculation, multi-currency transactions and e-invoicing for UAE businesses.',
        },
        {
          icon: 'fa-solid fa-shield-halved',
          iconColor: 'text-red',
          heading: 'Secure & Protected Infrastructure',
          tag: 'ENTERPRISE-GRADE SECURITY',
          tagColor: 'text-red',
          sub: 'Keep your business data protected with secure cloud infrastructure, encrypted systems, and reliable security practices.',
        },
      ],
    },
    techTitleLines: [
      'Technologies We Use for',
      'Custom Software Development',
    ],
    projects: {
      badge: 'FEATURED SOFTWARE PROJECTS',
      titleLines: [
        'Custom Software Built to',
        'Improve Business Operations',
      ],
      projects: [
        {
          className: 'p-card-1',
          img: '/images/p3.png',
          alt: 'Digital Payment & Wallet Management Platform',
          tags: [
            'Vue.js',
            'Python / Django',
            'PostgreSQL',
            'Microservices',
          ],
          title: 'Digital Payment & Wallet Management Platform',
          desc: 'We developed a reliable and secure digital platform which is capable of making online payment, digital wallets, money transfers and automated financial processes and also it helps to manage transactions, providing you with a greater sense of security and trust.',
          stats: [
            {
              type: 'counter',
              target: '99.99',
              suffix: '%',
              label: 'Core System Uptime SLA',
            },
          ],
        },
        {
          className: 'p-card-2',
          img: '/images/p2.png',
          alt: 'Logistics & Fleet Management Platform',
          tags: [
            'React',
            'Laravel',
            'AWS',
            'GPS Telematics',
          ],
          title: 'Logistics & Fleet Management Platform',
          desc: 'We built real-time management solutions that manage day-by-day logistics operations to help your business to trace vehicles, plan time-saving delivery routes, and reduce fuel consumption.',
          stats: [
            {
              type: 'counter',
              target: '40',
              suffix: '%',
              label: 'Fleet Efficiency Increase',
            },
            {
              type: 'counter',
              target: '20',
              suffix: '%',
              label: 'Fuel Cost Reduction',
            },
          ],
        },
      ],
    },
    process: {
      badge: 'SOFTWARE STACK',
      titleLines: [
        'Six Simple Steps',
        'From Idea to Launch',
      ],
      stages: [
        {
          name: 'Discovery & Planning',
          desc: 'To build the software project we make plans as per your business, goals, users, and requirements.',
          num: '1',
          className: 'p-card-1',
        },
        {
          name: 'Software Architecture & UI/UX Design',
          desc: 'We think and create a user friendly design in which you can easily use, understand and consistent with your aims.',
          num: '2',
          className: 'p-card-2',
        },
        {
          name: 'Agile Software Development',
          desc: 'Our team develops your software into small phases that help you review easily and give us feedback over the course of development.',
          num: '3',
          className: 'p-card-3',
        },
        {
          name: 'Testing & Quality Assurance',
          desc: 'We test your software to analyze the bugs and optimize performance while ensuring it is working smoothly and securely.',
          num: '4',
          className: 'p-card-4',
        },
        {
          name: 'Cloud Deployment',
          desc: 'When the software is built then we launch it on a secure cloud network and confirm that everything is working properly for production.',
          num: '5',
          className: 'p-card-5',
        },
        {
          name: 'Ongoing Support & Improvements',
          desc: 'After delivered, we also provide some more service to help your software grow like continuous support, updates, maintenance, and new features.',
          num: '6',
          className: 'p-card-6',
        },
      ],
    },
    faq: {
      badge: 'SOFTWARE FAQs',
      items: [
        {
          q: 'Who owns the software after the project is completed?',
          a: 'After the project completes we provide complete access for all the required files, code then your team has full control.',
        },
        {
          q: 'Can I request changes during the development process?',
          a: 'Yes we perform with a flexible workflow, so you can easily give the feedback and requirements as the project progresses. and also we discuss changes for Future development stages.',
        },
        {
          q: 'Can you connect the software with our existing systems?',
          a: 'Yes. we can integrate databases, APIs, CRMs, ERPs, and other third-party platforms into your existing system.',
        },
        {
          q: 'How do you keep our software and data secure?',
          a: 'Yes we use the reliable cloud infrastructure to secure your software and business data. and also create necessary security for your project.',
        },
        {
          q: 'Do you provide support after the software is launched?',
          a: 'Yes. After the delivered project we also provide the technical support, maintenance, bug fixes, updates, and new feature development. As per you, our team can keep in touch with you.',
        },
      ],
    },
  },
};