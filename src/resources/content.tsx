import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Sampath",
  lastName: "Kandregula",
  name: `Sampath Ganesh Kandregula`,
  role: "Product Manager · AI · IoT · Robotics",
  avatar: "/images/avatar.jpg",
  email: "sampathganesh01@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English", "Telugu", "Hindi"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Insights on robotics, AI agents, and building intelligent physical products.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/sampathganesh01",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/sampath01",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.firstName}'s Portfolio`,
  description: `Portfolio of ${person.firstName} — Product Manager in IoT & Robotics, building intelligent systems and autonomous robots.`,
  headline: <>Shaping intelligent products from concept to deployment</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">ORo</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured project
        </Text>
      </Row>
    ),
    href: "/work/oro-home-robot",
  },
  subline: (
    <>
      I'm Sampath, a Product Manager in IoT & Robotics at{" "}
      <Text as="span" size="xl" weight="strong">ASBL</Text>. Previously at{" "}
      <Text as="span" size="xl" weight="strong">Ogmen Robotics</Text>, I led a cross-functional team of 8 engineers to build{" "}
      <Text as="span" size="xl" weight="strong">ORo</Text> — an autonomous home robot for dog care.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.firstName}`,
  description: `Meet ${person.firstName}, Product Manager in IoT & Robotics, based in Hyderabad, India`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendar.app.google/dhtKugqZRteCY7VR9",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi, I'm <strong>Sampath</strong> — a Product Manager fascinated by AI and the future of intelligent
        software. Whether it's AI agents, developer platforms, robotics, or connected devices, I enjoy building
        products that simplify complexity and create meaningful value for users.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "ASBL",
        timeframe: "Feb 2026 - Present",
        role: "Product Manager · IoT & Robotics",
        achievements: [
          <>
            Leading product discovery across <strong>5+ construction sites and residential communities</strong>,
            identifying high-impact opportunities for IoT and automation throughout the construction lifecycle.
          </>,
          <>
            Conducting <strong>30+ stakeholder interviews</strong> with construction teams, facility managers,
            security personnel, and residents to uncover operational bottlenecks and validate product opportunities.
          </>,
          <>
            Defining product roadmaps and business cases for smart building initiatives across{" "}
            <strong>access control, asset management, utility automation, and resident experience</strong>.
          </>,
          <>
            Working cross-functionally with engineering, operations, vendors, and leadership to prioritize
            features based on <strong>customer impact, technical feasibility, and business value</strong>.
          </>,
        ],
        images: [],
      },
      {
        company: "Ogmen Robotics",
        timeframe: "Aug 2023 - Jan 2026",
        role: "Robotics Software Engineer → Team Lead & Robotics Architect",
        achievements: [
          <>
            Progressed from <strong>Robotics Software Engineer</strong> to <strong>Team Lead & Robotics Architect</strong>,
            eventually acting as the primary <strong>Product Owner</strong> for "ORo" — a consumer robot for home dog care —
            managing a cross-functional team of 8 engineers (Embedded Systems, Robotics Software,
            Computer Vision & AI/ML) using Agile/Scrum in Jira.
          </>,
          <>
            Architected and oversaw deployment of a <strong>ROS 2-based autonomous navigation system</strong> using
            Nav2, enabling reliable indoor navigation, obstacle avoidance, and precise localization
            across a home robot fleet.
          </>,
          <>
            Championed <strong>CI/CD pipelines with OTA</strong> (Over-The-Air) update support, standardizing
            seamless deployment of embedded, perception, and control software to the robot fleet.
          </>,
          <>
            Developed <strong>LLM-based navigation and re-localization pipelines</strong> that translate natural
            language user instructions into robot behaviors and trigger smart recovery actions after
            localization failures.
          </>,
          <>
            Built a <strong>FastAPI-based backend</strong> integrating ROS 2 with cloud infrastructure and
            the mobile app, ensuring synchronized task orchestration across the full product stack.
          </>,
          <>
            Implemented custom <strong>object- and human-following behavior</strong> by integrating vision-based
            detection with a custom DWB (Dynamic Window Approach) controller plugin.
          </>,
        ],
        images: [],
      },
      {
        company: "Petpooja",
        timeframe: "Jan 2023 - Jul 2023",
        role: "Robotics Software Intern",
        achievements: [
          <>
            Engineered and delivered a complete <strong>PoC for an autonomous food delivery robot</strong> for
            restaurant environments — covering all software development and hardware integration from scratch.
          </>,
          <>
            Built the autonomous navigation system using <strong>ROS 2 and NAV2</strong>, enabling reliable
            path planning and obstacle avoidance inside restaurant venues.
          </>,
          <>
            Developed a specialized <strong>API integrating the robot with staff workflows</strong>, allowing
            waiters to assign target tables and trigger autonomous delivery runs.
          </>,
        ],
        images: [],
      },
      {
        company: "EBibil Technologies",
        timeframe: "Jul 2021 - Sep 2021",
        role: "Software Intern",
        achievements: [
          <>
            Developed and deployed a <strong>computer vision pipeline for Automatic Number Plate Recognition
            (ANPR)</strong>, achieving high accuracy in plate and character recognition.
          </>,
          <>
            Established secure data transmission with <strong>AWS services</strong> to transfer and log vehicle
            data in real-time, forming the core data layer of an automated parking system.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "G.N.A University, Punjab, India",
        description: (
          <>
            B.Tech in Mechatronics Engineering · Aug 2019 – Aug 2023.{" "}
            <strong>Gold Medalist</strong> and <strong>Best Student of the Year</strong>. Founded the
            Student Council, established 18 technical and non-technical clubs, and led GNA AutoIgnite to
            the national finals of SAE NIS Autonom 2023.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Skills & Expertise",
    skills: [
      {
        title: "Product Management",
        description: (
          <>
            Product vision definition, feature prioritization, stakeholder alignment, user story mapping,
            Agile/Scrum mastery, sprint planning & retrospectives, JIRA and Whimsical tooling.
          </>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Robotics & Autonomy",
        description: (
          <>
            ROS 1 / ROS 2, NAV2, MoveIt2, path planning, SLAM (2D Lidar and Visual), BehaviorTree.CPP,
            sensor fusion (IMU, Lidar, Camera), custom DWB controller plugins.
          </>
        ),
        tags: [],
        images: [],
      },
      {
        title: "AI & Machine Learning",
        description: (
          <>
            AI agents, CrewAI, Pydantic AI, RAG systems, VLM (Vision Language Models), LLM-based
            robot control pipelines, computer vision for perception and ANPR.
          </>
        ),
        tags: [],
        images: [],
      },
      {
        title: "DevOps & Backend",
        description: (
          <>
            Python, C++, Arduino, FastAPI, PostgreSQL, Docker, AWS, WebSockets, Webhooks,
            CI/CD pipelines with OTA update support, GitHub.
          </>
        ),
        tags: [],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about robotics, AI, and product...",
  description: `Thoughts on product management, intelligent systems, and autonomous robots by ${person.firstName}`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.firstName}`,
  description: `Robotics and IoT product projects by ${person.firstName}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.firstName}`,
  description: `A photo collection by ${person.firstName}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
