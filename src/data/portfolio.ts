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
    items: ["Ant Design", "Styled Components", "Shopify Polaris", "Formik", "Yup", "Zustand"]
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
      "Developed and maintained front-end apps for loyalty points and CRM systems.",
      "Built back-office features including margin settings, dashboards, transaction reports and reward configs.",
      "Developed customer-facing redemption flows for products, discounts and rewards.",
      "Integrated apps with internal APIs and external platform services.",
      "Created reusable UI components to improve consistency and development speed."
    ]
  },
  {
    period: "March 2020 - May 2023",
    role: "Programmer and Developer",
    company: "Natachat Company Limited",
    points: [
      "Developed web app pages from UX/UI requirements using React.js and Next.js.",
      "Integrated front-end applications with REST APIs based on technical specs.",
      "Developed Node.js APIs to support front-end functionality.",
      "Collaborated with PMs, SAs and testers before customer delivery.",
      "Fixed bugs, improved features and supported production issues."
    ]
  },
  {
    period: "September 2018 - January 2020",
    role: "Programmer and Developer",
    company: "JMT Network Services Public Co., Ltd.",
    points: [
      "Collected business requirements and translated them into system features.",
      "Designed database structures for internal applications.",
      "Developed and maintained internal web applications.",
      "Supported issue resolution and improved operational workflows."
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
    title: "Loyalty Points Back Office",
    type: "CRM / Loyalty Platform",
    description:
      "Operational dashboard for margin settings, transaction reports, reward configuration and internal user workflows.",
    stack: ["React.js", "Next.js", "TypeScript", "REST API", "Ant Design"]
  },
  {
    title: "Customer Reward Redemption",
    type: "Customer-facing Web App",
    description:
      "Redemption experience for products, discounts and rewards with API-backed eligibility and transaction flows.",
    stack: ["React.js", "Next.js", "Zustand", "API Integration", "Responsive Design"]
  },
  {
    title: "Internal Operations Systems",
    type: "Enterprise Web Apps",
    description:
      "Internal tools that convert business requirements into maintainable web applications and database-backed features.",
    stack: ["Node.js", "Express.js", "SQL", "Supabase", "Postman"]
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
