import { beehivve, ameropa, me, brasscollective, smartseer } from "./images";

export const experiences = [
  {
    title: "Software Engineer",
    company_name: "Smartseer GmbH",
    icon: smartseer,
    iconBg: "#0001AC",
    date: "May 2025 - Present",
    points: [
      "Shipped a self-service tool that clients use to set up personalized recommendations, building the multi-step wizard, placement management and live previews driven by real user profiles.",
      "Migrated 7 data-heavy manager tables to MUI DataGrid, adding server-side pagination, sorting, filtering and bulk actions.",
      "Built scope-based access control for the API docs portal (Node.js, Logto/OAuth), so each client only sees the APIs it is licensed for, with Jest tests enforced on every commit.",
      "Bridge product, design and engineering: design features in Figma, turn them into reusable Storybook components, and translate client requests into solution concepts and tracking specs.",
      "Work AI-first: wrote the AGENTS.md conventions that guide AI coding agents in the codebase and use codebase-graph tooling to move fast in a large legacy app.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Ameropa-reisen GmbH",
    icon: ameropa,
    iconBg: "#dde1ac",
    date: "July 2022 - May 2025",
    points: [
      "Spearheading the maintenance and enhancement of the company's website to elevate user experience.",
      "Collaborating with backend teams to build internal tools and optimize the main web platform.",
      "Engaging in code reviews to maintain high-quality standards and mentor team members.",
      "Creating end to end a portal for the hoteliers to upload the non-bookable content and images of their hotels, with a React/TypeScript frontend and a PHP backend, postgreSQL and Docker.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "Beehivve",
    icon: beehivve,
    iconBg: "#000000",
    date: "Apr 2022 - July 2022",
    points: [
      "Maintained and improved the landing page for optimized performance.",
      "Successfully transitioned the tech stack from Handlebars and Node.js to a modern React and Firebase ecosystem.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelancer",
    icon: me,
    iconBg: "#b7e4c7",
    date: "Jun 2021 - Today",
    points: [
      "Crafting custom websites and apps tailored to client needs, focusing on innovation and usability.",
      "Collaborating in dynamic teams to deliver high-quality digital solutions.",
      "Ensuring designs are visually appealing, mobile-friendly, and highly functional.",
      "Overseeing the entire lifecycle of development, from architecture to hosting and domain setup.",
    ],
  },
  {
    title: "Trumpet Player and Educator",
    company_name: "Music Industry",
    icon: brasscollective,
    iconBg: "#000000",
    date: "Sep 2016 - Jan 2022",
    points: [
      "Performed captivating musical pieces at a variety of events.",
      "Established and directed a successful brass quintet, showcasing exceptional organizational skills.",
      "Designed and delivered engaging lessons, fostering growth in students and collaboration among peers.",
    ],
  },
];
