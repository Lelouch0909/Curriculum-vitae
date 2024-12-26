import dockerCert from '../assets/certifications/Docker.pdf';
import devopsCert from '../assets/certifications/devops.pdf';
import pmCert from '../assets/certifications/gestionDeProjets.pdf';
import careerCert from '../assets/certifications/chefDeProjet.pdf';
import { 
  FaJava, 
  FaPython, 
  FaDatabase, 
  FaJs, 
  FaReact, 
  FaNode, 
  FaDocker, 
  FaGithub, 
  FaAws,
  FaCloud
} from "react-icons/fa";
import { 
  SiSpring, 
  SiNextdotjs, 
  SiMongodb, 
  SiPostgresql,
  SiSelenium,
  SiLangchain
} from "react-icons/si";

export const contents = {
  profile: {
    name: "Hermann",
    lastName: "Lontsi",
    job: "Software Engineer",
    summary:
      "Passionate software developer with expertise in Java, Python, ReactJS, Node.js, and cloud technologies. Proven experience in building scalable applications, REST APIs, and microservices architectures. Strong background in DevOps practices (Docker, CI/CD) and cloud platforms (AWS, Huawei Cloud). Adept at prompt engineering for generative AI systems and fostering collaborative development environments.",
  },
  contact: {
    mail: "lontsihermann01@gmail.com",
    phone: "+237 653 38 90 95",
    linkedin: "https://www.linkedin.com/in/hermann-lontsi/",
    github: "https://github.com/Lelouch0909",
    city: "Douala, Cameroun",
  },
  language: {
    french: "French",
    english: "English",
    frenchNote: 5,
    englishNote: 3,
  },
  education: {
    university: "National Polytechnic School, Douala, Cameroon",
    degree: "BSc in Software Engineering",
    year: "2020-present",
  },
  experience: {
    title: "EXPERIENCE",
    experiences: [
      {
        title: "Mobile Application Development Team Lead",
        comment: "National Polytechnic School of Douala (ENSPD) | 2024",
        descriptions: [
          "Led a team of 6 developers in designing and building MINDY, a mobile application for autistic individuals to improve communication skills through interactive games.",
          "Managed the project lifecycle from ideation to implementation, ensuring adherence to timelines and technical specifications.",
          "Utilized Node.js for backend services and PostgreSQL for data storage, ensuring high performance and scalability.",
        ],
      },
      {
        title: "Software Developer",
        comment: "Smart Intelligence Blockchain | 2024",
        descriptions: [
          "Developed a Chrome extension to censor sensitive images and information during web browsing, enhancing user safety.",
          "Collaborated with cross-functional teams to ensure compatibility and performance, achieving 100% compliance with Chrome Web Store standards.",
          " Implemented backend services using Spring and stored data in PostgreSQL, ensuring efficient data management and retrieval.",
          "Conducted extensive testing and debugging, reducing bug reports by 30%.",
        ],
      },
    ],
  },
  project: {
    title: "PROJECTS",
    projects: [
      {
        title: "Lyna: Smart Glasses for the Visually Impaired",
        comment:
          "Personal Project | 2024 | Winner of the Camtel Innovation Award",
        descriptions: [
          "Designed and developed a prototype of smart glasses to assist visually impaired individuals in navigating their environment.",
          "Integrated computer vision using OpenCV and Python to detect obstacles and provide real-time audio feedback.",
          "Recognized as the winner of the Camtel Innovation Award for its innovative approach to solving real-world challenges.",
        ],
      },
      {
        title: "WELLTH: AI-driven Health Application",
        comment: "Team Project | 2023",
        github: "https://github.com/Lelouch0909/WellthAppFront",
        descriptions: [
          "Web app using Generative AI to generate personalized dietary plans.",
          "Technologies: Node.js, Spring Boot, React, PostgreSQL.",
        ],
      },
      {
        title: "Twitter Clone",
        comment: "Team Project | 2022",
        github: "https://github.com/Lelouch0909/social-app-front-api",
        descriptions: ["Replication of Twitter using Spring and ReactJS."],
      },
      {
        title: "Video Streaming Web App",
        comment: "Personal Project | 2022",
        github: "https://github.com/Lelouch0909/streamingApp-front",
        descriptions: ["Frontend in ReactJS, Backend in Spring Boot."],
      },
    ],
  },
  certification: {
    title: "CERTIFICATIONS",
    certifications: [
      {
        name: "Docker Foundations Professional Certificate",
        issuer: "Docker",
        file: dockerCert,
        description:
          "Certification awarded by Docker, certifying the ability to understand and utilize containers. It covers key Docker concepts, including the creation, management, and deployment of containers, essential for modern application development and DevOps environments.",
      },
      {
        name: "Becoming a DevOps Expert",
        issuer: "LinkedIn Learning",
        file: devopsCert,
        description:
          "This program covers DevOps tools and practices such as Continuous Integration/Continuous Delivery (CI/CD), infrastructure management with Terraform, and automation with Ansible. It fosters a culture of collaboration between development and operations teams for fast and efficient software delivery.",
      },
      {
        name: "Project Management",
        issuer: "PMI - Project Management Institute",
        file: pmCert,
        description:
          "This certification introduces the fundamental principles of project management, aligned with the PMBOK Guide. It covers areas such as planning, execution, risk management, and project completion.",
      },
      {
        name: "Career Essentials Certificate",
        issuer: "Microsoft & LinkedIn",
        file: careerCert,
        description:
          "Certification that prepares individuals for the role of project manager, focusing on management skills and the preparation needed for handling complex project responsibilities.",
      },
      // {
      //   name: "Cloud Advanced: Architecture and Technologies",
      //   issuer: "Huawei ICT Academy",
      //   file: "/assets/certifications/cloud.png",
      //   description:
      //     "Advanced cloud architecture and technologies certification.",
      // },
    ],
  },
  // ... autres imports et contenus existants
  skills: {
    title: "SKILLS",
    categories: [
      {
        name: "Programming Languages",
        skills: [
          { name: "Java", icon: FaJava },
          { name: "Python", icon: FaPython },
          { name: "SQL", icon: FaDatabase },
          { name: "JavaScript", icon: FaJs }
        ]
      },
      {
        name: "Frameworks & Libraries",
        skills: [
          { name: "Spring Framework", icon: SiSpring },
          { name: "LangChain", icon: SiLangchain },
          { name: "ReactJS", icon: FaReact },
          { name: "Next.js", icon: SiNextdotjs },
          { name: "Node.js", icon: FaNode },
          { name: "LangChain4j", icon: SiLangchain }
        ]
      },
      {
        name: "DevOps & CI/CD Tools",
        skills: [
          { name: "Docker", icon: FaDocker },
          { name: "GitHub Actions", icon: FaGithub },
          { name: "Selenium", icon: SiSelenium }
        ]
      },
      {
        name: "Cloud Technologies",
        skills: [
          { name: "AWS", icon: FaAws },
          { name: "Huawei Cloud", icon: FaCloud }
        ]
      },
      {
        name: "Databases",
        skills: [
          { name: "MongoDB", icon: SiMongodb },
          { name: "PostgreSQL", icon: SiPostgresql },
          { name: "SQL", icon: FaDatabase }
        ]
      }
    ]
  },
};
