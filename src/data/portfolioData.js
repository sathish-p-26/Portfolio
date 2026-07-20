// ============================================================
// portfolioData.js — Single source of truth for all content
// Update any section here; components pick it up automatically.
// ============================================================

export const personal = {
  name: 'SATHISH P',
  firstName: 'Sathish',
  tagline:
    'I build modern web applications and AI-powered automation solutions that improve efficiency and create seamless user experiences.',
  about:
    'Computer Science and Business Systems undergraduate with practical experience in frontend development, workflow automation, and API integration. Proficient in HTML, CSS, JavaScript, Python, MySQL, and n8n, with experience building responsive web applications and automated workflow solutions. I enjoy transforming complex problems into practical, scalable digital products while continuing to improve my software development and artificial intelligence skills.',
  phone: '+91 9042696553',
  email: 'pssthish10@gmail.com',
  location: 'Cuddalore, Tamil Nadu, India',
  resumeUrl: '/resume/Sathish-P-Resume.pdf',
  profileImage: '/images/profile.png',
  social: {
    linkedin: 'https://www.linkedin.com/in/sathish--p',
    github: 'https://github.com/sathish-p-26',
    email: 'mailto:pssthish10@gmail.com',
  },
}

export const experiences = [
  {
    id: 1,
    role: 'Web Developer Intern',
    company: 'Easy Fix Expert',
    location: 'Karaikudi',
    duration: 'Jun 2025 – Jul 2025',
    type: 'Internship',
    highlights: [
      'Developed responsive web pages using HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS.',
      'Improved mobile accessibility and cross-device compatibility.',
      'Built and optimized reusable UI components.',
      'Improved interface responsiveness across multiple screen sizes.',
      'Collaborated with the development team on a live frontend project.',
    ],
  },
  {
    id: 2,
    role: 'Automation Intern',
    company: 'MappIn-Out',
    location: '',
    duration: 'Feb 2026 – Apr 2026',
    type: 'Internship',
    highlights: [
      'Developed n8n-based email automation workflows.',
      'Built and integrated Telegram bot automation.',
      'Created real-time notifications and workflow-triggered responses.',
      'Connected multiple platforms through REST APIs.',
      'Streamlined workflow execution and reduced repetitive manual work.',
    ],
  },
]

export const skillCategories = [
  {
    id: 1,
    category: 'Frontend',
    icon: 'monitor',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Bootstrap',
      'Tailwind CSS',
      'Responsive Web Design',
    ],
  },
  {
    id: 2,
    category: 'Programming',
    icon: 'code',
    skills: ['Python', 'Java'],
  },
  {
    id: 3,
    category: 'Database',
    icon: 'database',
    skills: ['MySQL', 'SQL'],
  },
  {
    id: 4,
    category: 'Automation & APIs',
    icon: 'zap',
    skills: [
      'n8n',
      'REST API Integration',
      'Gmail API',
      'Telegram Bot API',
      'Google Calendar API',
      'Google Tasks API',
      'News API',
      'Ollama',
      'Webhooks',
      'Event-Driven Triggers',
    ],
  },
  {
    id: 5,
    category: 'Tools & Design',
    icon: 'wrench',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Figma',
      'Adobe Photoshop',
      'Blender',
      'Android Studio',
      'Microsoft Office',
      'Video Editing',
    ],
  },
]

export const projects = [
  {
    id: 1,
    title: 'AI-Powered Email Automation System',
    description:
      'Developed an AI-powered email workflow that monitors incoming emails, generates intelligent responses, and records communication data automatically.',
    image: '/images/email-automation.png',
    tags: ['n8n', 'Gmail API', 'Ollama', 'Google Sheets'],
    liveUrl: '',
    githubUrl: 'https://github.com/sathish-p-26/n8n-Email-Automation',
  },
  {
    id: 2,
    title: 'AI-Powered Telegram Automation Assistant',
    description:
      'Built an AI-powered Telegram assistant that manages tasks, creates calendar events, retrieves schedules, and processes user requests automatically.',
    image: '/images/telegram-assistant.png',
    tags: ['n8n', 'Telegram Bot API', 'Google Calendar', 'Google Tasks', 'Ollama'],
    liveUrl: '',
    githubUrl: 'https://github.com/sathish-p-26/Telegram-bot',
  },
  {
    id: 3,
    title: 'AI-Powered News Automation System',
    description:
      'Created an automated news aggregation workflow that collects news from multiple sources, generates concise summaries, and sends personalized email updates.',
    image: '/images/news-automation.png',
    tags: ['n8n', 'News API', 'Ollama', 'Gmail'],
    liveUrl: '',
    githubUrl: 'https://github.com/sathish-p-26/n8n-News-Paper-Automation',
  },
  {
    id: 4,
    title: 'SoundTrack Android Application',
    description:
      'Built the frontend of a music-streaming Android application with responsive screens, smooth navigation, and a modern mobile interface.',
    image: '/images/soundtrack-app.png',
    tags: ['Java', 'Android Studio'],
    liveUrl: '',
    githubUrl: 'https://github.com/sathish-p-26/SoundTrackHub',
  },
]

export const education = [
  {
    id: 1,
    period: '2023 – Present',
    degree: 'B.Tech – Computer Science and Business Systems',
    institution: 'Jansons Institute of Technology',
    grade: 'CGPA: 7.10',
    current: true,
  },
  {
    id: 2,
    period: '2021 – 2023',
    degree: 'Higher Secondary School',
    institution: 'GK Matric Higher Secondary School',
    grade: 'Percentage: 68%',
    current: false,
  },
]

export const certifications = [
  {
    id: 1,
    title: 'UI/UX Designer',
    issuer: '',
    date: '',
    credentialUrl: '',
    icon: 'palette',
  },
  {
    id: 2,
    title: '3D Printing',
    issuer: '',
    date: '',
    credentialUrl: '',
    icon: 'box',
  },
  {
    id: 3,
    title: 'Drone Technology',
    issuer: '',
    date: '',
    credentialUrl: '',
    icon: 'plane',
  },
  {
    id: 4,
    title: 'Microsoft SQL – Stored Procedures',
    issuer: '',
    date: '',
    credentialUrl: '',
    icon: 'database',
  },
]
