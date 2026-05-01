import algosoftLogo from"../../assets/algosoftbd_logo.jpg";
import KmindsLogo from"../../assets/Kminds.jpg";
export const personalInfo = {
  name: "Tanzir Mannan Turzo",
  email: "tanzirmannanturzo@gmail.com",
  github: "https://github.com/vallagenakisu",
  linkedin: "https://linkedin.com/in/tanzir-mannan-turzo",
  location: "Sirajganj, Bangladesh",
  tagline: "AI/ML Engineer and Full-Stack Engineer",
  availability: "Open to Work",
  about: [
    "I bridge research-grade ML with production systems.",
    "On the backend, I've architected Spring Boot systems with 50+ APIs and LangChain agents handling real workflows. I've modernized legacy applications serving 500+ enterprise users and built cross-platform React Native products. Every framework I use is learned through production code, not tutorials so I ship faster and know which tools solve real problems.",
    "I'm obsessed with computer vision: from classical techniques like gradient fields and SIFT to modern approaches like GANs, Vision Transformers, and CNNs. My edge is taking academic concepts and turning them into production code that serves real users.",
    "I'm built for the AI era: I learn fast, adapt to any stack, and ship production-ready systems. If you need an engineer who thrives on the unknown, masters unfamiliar codebases in weeks, and stays ahead of the curve let's build together.",
  ],
} 

export const sectionNav = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]

export const aboutStats = [
  { value: "700+", label: "CP Problems Solved" },
  { value: "President", label: "KUET-MiNDS" },
  { value: "Ranked 2nd", label: "BUET DL Sprint 4.0" },
]

export const skillsData = [
  { category: "AI / ML", items: ["LangChain", "PyTorch", "OpenCV", "Hugging Face Transformers"] },
  { category: "Backend", items: [".NET Core", "Spring Boot", "Laravel", "Node.js", "FastAPI"] },
  { category: "Frontend", items: ["React", "HTML", "CSS", "Tailwind CSS", "JavaScript"] },
  { category: "Mobile and Desktop", items: ["React Native", "Android", "SwiftUI", "Electron.js", "WPF"] },
  { category: "Languages", items: ["C", "C++", "C#", "Java", "JavaScript", "TypeScript", "PHP"] },
]

export const workData = [
    {
        title: "President",
        company: "KMinds (KUET Machine Intelligence and Data Science)",
        companyLogo: KmindsLogo,
        period: "Apr 2025 - Present",
        location: "KUET Campus",
        isCurrent: true,
        bullets: [
        "Founded and led a research-driven student organization focused on Machine Learning, Deep Learning, and Computer Vision.",
        "Designed and implemented a structured curriculum covering core areas such as ML, DL, and Computer Vision, enabling systematic learning for members.",
        "Recruited and built a multidisciplinary team across departments, fostering a collaborative and competitive environment.",
        "Developed the official club ordinance, defining vision, mission, governance, and operational structure.",
        "Facilitated resource acquisition from department and alumni network to support club activities and growth.",
        "Promoted a culture of research, innovation, and competitive excellence within the university."
        ],
    },
    {
        title: "Software Engineer",
        company: "AlgoSoft Technologies Limited",
        companyLogo: algosoftLogo,
        period: "Apr 2025 - Feb 2026",
        location: "Remote",
        isCurrent: false,
        bullets: [
        "Modernized a legacy desktop application UI using WPF and .NET Core, improving maintainability across 500+ enterprise users.",
        "Led migration to Electron.js for cross-platform compatibility (Windows, macOS, Linux), reducing platform-specific overhead by 40%.",
        "Built a cross-platform mobile app using React Native with a Node.js backend, achieving 95%+ code reusability across Android and iOS.",
        ],
    },

]

export const projectsData = [
  {
    title: "Automatic Speech Recognition and Speaker Diarization for Bengali",
    period: "Jan 2026 - Mar 2026",
    description:
      "Achieved 29.54% WER and 25.67% DER on evaluation datasets, outperforming baselines. Built a web app that integrates ASR and diarization to auto-generate Bengali subtitles from audio and video.",
    tags: ["Python", "ASR", "Speaker Diarization", "NLP"],
    githubUrl: "https://github.com/vallagenakisu/Automatic-Speech-Recognition-and-Speaker-Diarization-for-Bengali-Speaker",
  },
  {
    title: "Imageo",
    period: "Sep 2025 - Oct 2025",
    description:
      "Interactive desktop app (Python, PyQt5, OpenCV) for visualizing image processing algorithms including custom kernel convolution, histogram manipulation, K-means clustering, and rotation matrices.",
    tags: ["Python", "PyQt5", "OpenCV", "Computer Vision"],
    githubUrl: "https://github.com/vallagenakisu/Imageo",
  },
  {
    title: "Career Pilot",
    period: "Aug 2024 - Dec 2024",
    description:
      "AI-powered career development platform. Architected backend with Spring Boot (15+ table schema), engineered 50+ REST APIs, WebSocket messaging, and LangChain agents for personalized roadmaps.",
    tags: ["Spring Boot", "Java", "LangChain", "WebSocket", "REST API"],
    githubUrl: "https://github.com/vallagenakisu/Career_Pilot_Backend",
  },
{
  title: "Project Management Website",
  period: "Mar 2023 - May 2023",
  description:"Full-stack Laravel project management app built from scratch. Designed and implemented a recursive, real-world nested sub-task system using custom controllers and models. Enables unlimited task breakdown, friend assignment, and real-time progress tracking with notifications.",
  tags: ["Laravel", "PHP", "Blade", "MySQL", "Recursion", "Project Management"],
  githubUrl: "https://github.com/vallagenakisu/ProjectmanagementWebsite"
}
]

export const achievementsData = [
  "President at KUET-MiNDS (KUET Machine Intelligence and Data Science)",
  "Ranked 2nd (Speaker Diarization) at BUET DL Sprint 4.0",
  "Solved over 700+ problems across online judges",
  "Finalist at Learnathon 3.0",
]

export const educationData = [
  {
    degree: "BSc. (Engr.) in Computer Science and Engineering",
    institution: "Khulna University of Engineering and Technology (KUET)",
    period: "Mar 2022 - Jul 2026",
    location: "Khulna, Bangladesh",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Dhaka Residential Model College (DRMC)",
    period: "Mar 2018 - Mar 2020",
    location: "Dhaka, Bangladesh",
  },
]
