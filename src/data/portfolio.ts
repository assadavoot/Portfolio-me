import {
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  LayoutDashboard,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Rocket,
  Settings,
  Sparkles,
  Users
} from "lucide-react";

export const profile = {
  firstName: "Assadavoot",
  lastName: "Anukool",
  availability: "Available for Senior Front End Developer / Full Stack Developer",
  role: "Front-end Developer / Full Stack Developer",
  summary:
    "Crafting web apps, back-office systems, CRM and loyalty platforms with React.js, Next.js, TypeScript and Node.js.",
  stats: [
    { value: "8 yrs", label: "Experience" },
    { value: "3", label: "Companies" },
    { value: "∞", label: "Components" }
  ]
};

export const navItems = [
  { href: "/", label: "Home", icon: Sparkles },
  { href: "/skills", label: "Skills", icon: Code2 },
  { href: "/experience", label: "Experience", icon: BriefcaseBusiness },
  { href: "/education", label: "Education", icon: GraduationCap },
  { href: "/projects", label: "Projects", icon: LayoutDashboard },
  { href: "/contact", label: "Contact", icon: Mail }
];

export const skills = [
  {
    index: "01",
    area: "Front-end",
    title: "Front-end Development",
    icon: Code2,
    items: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Responsive Design"]
  },
  {
    index: "02",
    area: "UI Libraries",
    title: "UI Frameworks & Libraries",
    icon: LayoutDashboard,
    items: ["Ant Design", "Styled Components", "Shopify Polaris", "Formik", "Yup", "Zustand", "Redux"]
  },
  {
    index: "03",
    area: "Back-end",
    title: "Back-end Development",
    icon: Settings,
    items: ["Node.js", "Express.js", "REST API", "API Integration", "Auth Flow"]
  },
  {
    index: "04",
    area: "Tools",
    title: "Database & Dev Tools",
    icon: Database,
    items: ["SQL", "Supabase", "Git", "GitHub", "Postman", "Jira", "Scrum"]
  },
  {
    index: "05",
    area: "Professional",
    title: "Soft Skills",
    icon: Users,
    items: ["Requirement Analysis", "System Design", "Debugging", "Code Review", "Agile"]
  }
];

export const experiences = [
  {
    period: "May 2023 - Present",
    role: "Research & Development / Front-end Developer",
    company: "Rocket Innovation Co., Ltd.",
    points: [
      "Designed and maintained scalable React / Next.js front-end architecture for loyalty points, CRM, dashboards, and reward management systems.",
      "Built reusable TypeScript UI components, form validation patterns, and shared state logic to improve consistency and reduce duplicated implementation.",
      "Developed back-office features for margin settings, transaction reports, analytics dashboards, and reward configurations.",
      "Integrated REST APIs and external platform services with authentication flows, error handling, and data mapping for production workflows.",
      "Optimized component rendering and API data flow to improve maintainability, performance, and user experience on data-heavy screens.",
      "Owned feature delivery from requirement analysis through release. Collaborated with PMs, SAs, QA, backend teams, and supported production issues."
    ]
  },
  {
    period: "Mar 2020 - May 2023",
    role: "Programmer / Full Stack Developer",
    company: "Natchat Company Limited",
    points: [
      "Developed React.js and Next.js web application pages from UX/UI requirements and technical specifications.",
      "Designed and implemented Node.js / Express REST APIs to support front-end workflows, CRUD features, and business logic.",
      "Integrated front-end applications with APIs, authentication, validation, and database-driven data flows.",
      "Worked with SQL database structures, reporting requirements, and API data models for internal systems.",
      "Fixed bugs, improved existing features, reviewed implementation details, and supported production issue resolution."
    ]
  },
  {
    period: "Sep 2018 - Jan 2020",
    role: "Programmer and Developer",
    company: "JMT Network Services Public Company Limited",
    points: [
      "Collected business requirements from internal users and translated them into system features and operational workflows.",
      "Designed database structures and developed internal web applications to support business processes.",
      "Maintained existing systems, resolved issues, and improved usability, stability, and operational efficiency."
    ]
  }
];

export const education = {
  degree: "Bachelor in Computer Engineering",
  school: "Mahanakorn University of Technology",
  period: "2013 - 2017"
};

export const projects = [
  {
    title: "CRM Rocket Platform",
    type: "CRM / Loyalty Platform",
    description:
      "Built CRM Rocket for loyalty operations: back-office modules for margin settings, transaction reports, reward configuration and internal workflows, plus responsive client flows for point redemption, discounts and rewards.",
    url: null,
    stack: [
      "Node.js",
      "Nest.js",
      "MongoDB",
      "React.js",
      "Next.js",
      "TypeScript",
      "Zustand",
      "Redux",
      "State Management",
      "REST API",
      "API Integration",
      "Ant Design",
      "Responsive Design",
      "Git"
    ]
  },
  {
    title: "GB Wallet",
    type: "Back-Office Platform",
    description:
      "Built the full Back-Office web system for GB Wallet, including internal operations workflows, dashboard pages and reporting management.",
    url: "https://www.gbwallet.co",
    stack: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Redux",
      "State Management",
      "REST API",
      "API Integration",
      "Ant Design",
      "PostgreSQL",
      "Docker",
      "Postman",
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Git"
    ]
  },
  {
    title: "Other Projects",
    type: "Other Projects from Work Experience",
    description:
      "Mainly built back-office systems and internal operation workflows.",
    url: null,
    stack: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Redux",
      "State Management",
      "REST API",
      "API Integration",
      "Ant Design",
      "PostgreSQL",
      "Docker",
      "Postman",
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Git"
    ]
  },
  {
    title: "No Name (Cat Hotel Booking Project)",
    type: "Personal Project with Friend (In Progress)",
    description:
      "Currently developing a cat hotel booking platform; I handle the front-end for booking flow and core back-office pages.",
    url: null,
    stack: [
      "React.js",
      "Next.js",
      "CSS",
      "State Management",
      "HTML",
      "API Integration",
      "Responsive Design",
      "Git"
    ]
  },
  {
    title: "Internal Operations Systems",
    type: "Enterprise Web Apps",
    description:
      "Built internal-use web systems for document storage and management, plus dashboard pages for operational and reporting workflows.",
    url: null,
    stack: ["PHP", "CodeIgniter", "SQL Server", "HTML", "CSS", "JavaScript", "Responsive Design"]
  }
];

export const contact = [
  { label: "Phone", value: "080-895-4245", href: "tel:0808954245", icon: Phone },
  { label: "Email", value: "artdeath553@gmail.com", href: "mailto:artdeath553@gmail.com", icon: Mail },
  { label: "Line", value: "art-za132", href: "https://line.me/ti/p/~art-za132", icon: MessageCircle },
  {
    label: "Facebook",
    value: "assadavoot.anukool",
    href: "https://www.facebook.com/assadavoot.anukool",
    icon: Users
  },
  { label: "Location", value: "Min buri / Bangkok, Thailand", href: null, icon: MapPin }
];

export const projectSignals = [
  { label: "Main focus", value: "Back-office, CRM, loyalty and operational tools" },
  { label: "Best fit", value: "Senior Front End Developer / Full Stack Developer" },
  { label: "Working style", value: "Requirement analysis, reusable components and production support" }
];

export const footer = {
  text: "Built with Next.js + Three.js",
  motto: "Clean Code, Clean Life",
  icon: Rocket
};
