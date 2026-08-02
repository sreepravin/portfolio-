export const profile = {
  name: 'Sree Preavin K I',
  title: 'Software Developer',
  roles: ['Software Developer', 'Data Analyst', 'AI Enthusiast', 'Full Stack Developer'],
  tagline: 'Software Developer | Full Stack Developer | AI & Data Science Student',
  summary:
    'Aspiring Software Developer with a strong foundation in Java, Python, JavaScript, SQL, and full-stack web development. Proficient in designing and developing responsive web applications, RESTful APIs, and database-driven software solutions using PostgreSQL and MySQL. Experienced in object-oriented programming, the software development lifecycle (SDLC), debugging, and problem-solving through academic and real-world projects. Passionate about building scalable, efficient, and user-friendly applications while continuously learning modern technologies such as Spring Boot, React, Docker, and cloud platforms.',
  email: 'sreepravin103@gmail.com',
  phone: '+91 9342725175',
  github: 'https://github.com/sreepravin',
  githubLabel: 'github.com/sreepravin',
  linkedin: 'https://linkedin.com/in/sree-pravin-k-i',
  linkedinLabel: 'linkedin.com/in/sree-pravin-k-i',
  location: 'Tiruchengode, Tamil Nadu, India',
  resumeFile: '/Sree_Preavin_KI_Resume.pdf',
  photo: '/photo.jpg',
  hobbies: ['Cycling', 'Playing volleyball'],
}

export const stats = [
  { label: 'Projects Built', value: 2 },
  { label: 'Certifications', value: 2 },
  { label: 'Core Skills', value: 12 },
  { label: 'Internship', value: 1 },
]

export const aboutPoints = [
  'AI & Data Science undergraduate at K.S. Rangasamy College of Technology',
  'Passionate software developer with a builder-first mindset',
  'Strong problem solving and object-oriented programming fundamentals',
  'Comfortable across the stack — Java, Python, SQL, React, Spring Boot',
  'Hands-on with PostgreSQL, MySQL and RESTful API design',
  'Focused on modern, scalable, user-friendly web development',
]

export type SkillGroup = {
  category: string
  items: { name: string; level: number }[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    items: [
      { name: 'Java', level: 85 },
      { name: 'Python', level: 82 },
      { name: 'JavaScript', level: 78 },
      { name: 'SQL', level: 85 },
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
    ],
  },
  {
    category: 'Frameworks',
    items: [
      { name: 'React', level: 78 },
      { name: 'Spring Boot', level: 70 },
      { name: 'Flask', level: 75 },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'PostgreSQL', level: 82 },
      { name: 'MySQL', level: 80 },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Microsoft Fabric', level: 72 },
      { name: 'Docker', level: 65 },
    ],
  },
  {
    category: 'Other',
    items: [
      { name: 'REST APIs', level: 82 },
      { name: 'OOP', level: 85 },
      { name: 'Data Analysis', level: 80 },
      { name: 'Responsive Design', level: 85 },
    ],
  },
]

export const experience = [
  {
    role: 'Tech Associate Intern',
    company: 'SiDRA Hub (Inaiyam Innovations)',
    org: 'ACIC-KSRCT Incubation Foundation',
    location: 'Tiruchengode – 637215, Tamil Nadu',
    period: 'July 2025 – October 2025',
    points: [
      'Analyzed agricultural and operational datasets to identify trends and support data-driven decision-making for rural development initiatives.',
      'Collected, cleaned, and transformed field data using Excel, SQL, and Python to improve data accuracy and reporting efficiency.',
      'Supported digital agriculture initiatives by managing data workflows, coordinating field operations, and ensuring timely reporting of project outcomes.',
      'Assisted in maintaining data quality, documentation, and reporting processes to ensure reliable analytics and informed decision-making.',
      'Contributed to community engagement and AgriTech projects by leveraging data analytics to support sustainable agricultural practices.',
    ],
  },
]

export type Project = {
  id: string
  title: string
  tag: string
  overview: string
  features: string[]
  stack: string[]
  challenges: string[]
  improvements: string[]
  github?: string
  demo?: string
  theme: 'medical' | 'ai'
}

export const projects: Project[] = [
  {
    id: 'medical-adherence',
    title: 'Medical Adherence & Prescription Management System',
    tag: 'Full Stack',
    overview:
      'A full-stack application that digitizes prescriptions and manages medication adherence using OCR, AI integration, intelligent scheduling, and safety checks — helping patients stay on track with their medication.',
    features: [
      'Digitizes handwritten and printed prescriptions with OCR',
      'AI-assisted medication guidance and safety checks',
      'Intelligent, personalized dose scheduling and reminders',
      'Adherence tracking dashboard for patients and caregivers',
    ],
    stack: ['Python', 'PostgreSQL', 'HTML', 'RESTful APIs'],
    challenges: [
      'Reliably extracting structured dosage data from varied prescription formats',
      'Designing a scheduling engine that adapts to real-world dosage timings',
    ],
    improvements: [
      'Mobile app companion with push notifications',
      'Pharmacy integration for automatic refill alerts',
    ],
    theme: 'medical',
  },
  {
    id: 'ai-db-assistant',
    title: 'AI Database Assistant — Text to SQL',
    tag: 'Data Analyst',
    overview:
      'A web application that converts natural language questions into SQL queries using Google Gemini AI, enabling non-technical users to query PostgreSQL databases without writing a line of SQL.',
    features: [
      'Natural language to SQL translation powered by Gemini AI',
      'Live query preview before execution',
      'Schema-aware prompting for accurate query generation',
      'Clean, responsive query results dashboard',
    ],
    stack: ['Gemini AI', 'React + Vite', 'Python', 'Flask', 'PostgreSQL', 'SQLAlchemy'],
    challenges: [
      'Grounding the model in the correct database schema for accurate SQL',
      'Safely executing generated queries without exposing destructive operations',
    ],
    improvements: [
      'Support for multi-table joins with visual query explanations',
      'Conversation memory for iterative query refinement',
    ],
    theme: 'ai',
  },
]

export const certificates = [
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle University',
    date: 'September 2025',
    description:
      'Professional certification validating foundational knowledge of AI, Machine Learning, Generative AI, LLMs, Responsible AI principles, and Oracle Cloud Infrastructure AI services.',
  },
  {
    title: 'Big Data Computing',
    issuer: 'NPTEL (IIT) – SWAYAM',
    date: 'October 2025',
    description:
      'An 8-week certification covering big data fundamentals, distributed computing, the Hadoop ecosystem, MapReduce, data processing techniques, and scalable analytics for large datasets.',
  },
]

export const education = [
  {
    degree: 'Bachelor of Technology — Artificial Intelligence & Data Science',
    school: 'K.S. Rangasamy College of Technology',
    location: 'Tiruchengode, Tamil Nadu, India',
    period: '2023 – 2027',
    detail: 'CGPA: 7.8 / 10',
  },
  {
    degree: 'Higher Secondary',
    school: 'M A M Exel Matric Hr Sec School',
    location: 'Guruvareddiyur, Erode',
    period: '2023',
    detail: 'State Board — 75.0%',
  },
  {
    degree: 'Secondary School',
    school: 'Talent Matriculation School',
    location: 'Ammapettai, Erode',
    period: '2021',
    detail: 'State Board — 100.0%',
  },
]

export const achievements = [
  {
    title: 'Oracle Certified AI Foundations Associate',
    description:
      'Earned Oracle Cloud Infrastructure 2025 AI Foundations Associate certification, validating applied knowledge of AI, ML and Generative AI concepts.',
  },
  {
    title: 'IIT NPTEL — Big Data Computing',
    description:
      'Completed an 8-week NPTEL (IIT) certification on distributed computing and the Hadoop ecosystem via SWAYAM.',
  },
  {
    title: 'Industry Internship at SiDRA Hub',
    description:
      'Completed a 4-month Tech Associate internship at ACIC-KSRCT Incubation Foundation, contributing to real-world AgriTech data initiatives.',
  },
  {
    title: 'Perfect Score in Secondary School',
    description:
      'Achieved a 100% score in the State Board Secondary School examinations at Talent Matriculation School.',
  },
  {
    title: 'Two Shipped Full-Stack Projects',
    description:
      'Designed and built two end-to-end applications spanning OCR/AI-driven healthcare tooling and natural-language database querying.',
  },
]
