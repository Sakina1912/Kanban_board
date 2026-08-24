import { IoIosRadioButtonOff } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
import { GoCodeReview } from "react-icons/go";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

export const STATUSES = [
  { title: "Backlog", icon: IoIosRadioButtonOff },
  { title: "In Progress", icon: IoMdTime },
  { title: "Review", icon: GoCodeReview },
  { title: "Done", icon: IoCheckmarkDoneCircleSharp },
];

export const PRIORITIES = [
  {
    label: "Low",
    value: "Low",
  },
  {
    label: "Medium",
    value: "Medium",
  },
  {
    label: "High",
    value: "High",
  },
];

export const Tasks = [
  // Backlog
  {
    id: crypto.randomUUID(),
    title: "Design new dashboard layout",
    description:
      "Create mockups and wireframes for the new admin dashboard with improved UI/UX",
    status: "Backlog",
    priority: "High",
    tags: ["Design", "UI/UX", "Frontend"],
  },
  {
    id: crypto.randomUUID(),
    title: "Refactor authentication module",
    description:
      "Refactor the authentication system to support OAuth 2.0 and JWT tokens",
    status: "Backlog",
    priority: "High",
    tags: ["Backend", "Security", "Authentication"],
  },
  {
    id: crypto.randomUUID(),
    title: "Add dark mode support",
    description:
      "Implement dark mode theme toggle across the entire application",
    status: "Backlog",
    priority: "Medium",
    tags: ["Frontend", "Tailwind", "React"],
  },
  // In Progress
  {
    id: crypto.randomUUID(),
    title: "Implement user profile page",
    description:
      "Build user profile page with edit functionality and profile picture upload",
    status: "In Progress",
    priority: "High",
    tags: ["Frontend", "React", "Database"],
  },
  {
    id: crypto.randomUUID(),
    title: "Setup CI/CD pipeline",
    description:
      "Configure automated testing and deployment pipeline using GitHub Actions",
    status: "In Progress",
    priority: "Medium",
    tags: ["DevOps", "CI/CD", "GitHub"],
  },
  {
    id: crypto.randomUUID(),
    title: "Database optimization",
    description:
      "Optimize database queries and add proper indexing for better performance",
    status: "In Progress",
    priority: "Medium",
    tags: ["Database", "Backend", "Performance"],
  },
  // Review
  {
    id: crypto.randomUUID(),
    title: "QA mobile responsive design",
    description:
      "Test and validate mobile responsiveness across all components and pages",
    status: "Review",
    priority: "High",
    tags: ["QA", "Testing", "Mobile"],
  },
  {
    id: crypto.randomUUID(),
    title: "Performance testing",
    description:
      "Run comprehensive performance tests and generate optimization report",
    status: "Review",
    priority: "Medium",
    tags: ["QA", "Testing", "Performance"],
  },
  {
    id: crypto.randomUUID(),
    title: "Security vulnerability scan",
    description:
      "Conduct security audit and fix any identified vulnerabilities",
    status: "Review",
    priority: "High",
    tags: ["Security", "QA", "Testing"],
  },
  // Done
  {
    id: crypto.randomUUID(),
    title: "Deploy v2.0 release",
    description: "Successfully deployed version 2.0 to production environment",
    status: "Done",
    priority: "High",
    tags: ["Deployment", "Release", "DevOps"],
  },
  {
    id: crypto.randomUUID(),
    title: "Fix login bug",
    description:
      "Fixed authentication issue where users couldn't log in with email verification",
    status: "Done",
    priority: "High",
    tags: ["Bug", "Authentication", "Frontend"],
  },
  {
    id: crypto.randomUUID(),
    title: "Migrate to new hosting",
    description:
      "Successfully migrated application and database to new cloud hosting provider",
    status: "Done",
    priority: "Medium",
    tags: ["DevOps", "Infrastructure", "Migration"],
  },
];
