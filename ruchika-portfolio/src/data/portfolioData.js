// ============================================================
// PORTFOLIO DATA — single source of truth
// Edit this file to update any content shown on the site.
// All values below come directly from the resume provided.
// Fields marked "PLACEHOLDER" are intentionally left blank/
// generic because that information wasn't in the resume —
// fill them in yourself, don't let anyone invent it for you.
// ============================================================

export const personal = {
  name: 'Ruchika Bangar',
  title: 'Frontend Developer',
  location: 'Pune, India',
  phone: '+91 7841984830',
  email: 'ruchikabangar97@gmail.com',
  intro:
    'I build responsive, interactive, and user-friendly web experiences with React.js and modern frontend technologies.',
  summary:
    'Frontend Developer with 1 year of experience building responsive web applications using React.js, JavaScript, HTML5, CSS3, Bootstrap, and REST APIs. Experienced in developing user-friendly interfaces, integrating APIs, and deploying live websites. Passionate about writing clean, scalable code and eager to contribute to modern frontend development using React.js.',
  links: {
    linkedin: 'https://www.linkedin.com/in/ruchika-bangar',
    github: 'https://www.github.com/ruchikabangar',
    hackerrank: 'https://www.hackerrank.com/ruchikabangar97',
    email: 'mailto:ruchikabangar97@gmail.com',
  },
  // PLACEHOLDER — drop your resume PDF into /public/resume.pdf and this button will work.
  resumeUrl: '/resume.pdf',
}

export const aboutHighlights = [
  { label: 'Experience', value: '1 Year', detail: 'Professional frontend development' },
  { label: 'Core Stack', value: 'React.js', detail: 'Component-driven UI development' },
  { label: 'Focus', value: 'Responsive Web', detail: 'Cross-device interfaces' },
  { label: 'Practice', value: 'API Integration', detail: 'REST API driven applications' },
]

export const aboutPoints = [
  'Building responsive, production-ready interfaces with React.js and modern JavaScript',
  'Integrating REST APIs to power dynamic, data-driven features',
  'Hands-on experience with website deployment, hosting, and domain configuration',
  'Committed to writing clean, scalable, and maintainable frontend code',
]

export const skills = {
  Frontend: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'jQuery', 'Bootstrap'],
  Backend: ['REST APIs', 'Node.js (Basic)', 'Java (Basic)'],
  Database: ['SQL'],
  Tools: ['GitHub', 'VS Code', 'Web Hosting', 'Deployment', 'Domain Configuration'],
}

export const experience = [
  {
    company: 'Tech Glow Innovation',
    location: 'Pune',
    role: 'Web Developer',
    duration: 'June 2025 – Present',
    current: true,
    points: [
      'Developed a 10+ page responsive website for a forestry-focused organization using HTML, CSS, JavaScript, and Bootstrap.',
      'Designed responsive user interfaces and implemented interactive website features.',
      'Improved website performance and user experience through UI optimization.',
      'Assisted in website deployment, hosting, and domain configuration.',
    ],
  },
]

export const projects = [
  {
    id: 'doctor-appointment-system',
    title: 'Doctor Appointment System',
    duration: 'October 2025 – December 2025',
    tech: ['React.js', 'React Hooks', 'REST API'],
    description:
      'A responsive doctor appointment system where patients can search doctors, book appointments, and manage schedules.',
    features: [
      'Search doctors by specialty',
      'Book, reschedule, and cancel appointments',
      'Built with React Hooks for state management',
      'Form validation across booking flows',
      'REST API integration for live data',
    ],
    // PLACEHOLDER — add your live deployment link here
    liveUrl: '',
    // PLACEHOLDER — add your GitHub repo link here
    githubUrl: 'https://www.github.com/ruchikabangar',
  },
  {
    id: 'cab-booking-system',
    title: 'Cab Booking System Website',
    duration: 'September 2024 – November 2024',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    description:
      'An online cab booking system with a user-friendly interface, backed by a relational database for bookings.',
    features: [
      'Online cab booking flow',
      'MySQL database connectivity',
      'Full CRUD operations',
      'User-friendly booking interface',
    ],
    // PLACEHOLDER — add your live deployment link here
    liveUrl: '',
    // PLACEHOLDER — add your GitHub repo link here
    githubUrl: 'https://www.github.com/ruchikabangar',
  },
]

export const education = [
  {
    degree: 'Bachelor of Computer Applications',
    institution: 'Marathwada Mitra Mandal College of Commerce, Pune',
    duration: '2022 – 2025',
    detail: 'CGPA by year',
    breakdown: [
      { label: 'First Year', value: '8.95' },
      { label: 'Second Year', value: '8.14' },
      { label: 'Third Year', value: '8.51' },
    ],
  },
  {
    degree: '12th — HSC',
    institution: '',
    duration: '',
    detail: 'Percentage',
    breakdown: [{ label: 'Score', value: '74.50%' }],
  },
  {
    degree: '10th — SSC',
    institution: '',
    duration: '',
    detail: 'Percentage',
    breakdown: [{ label: 'Score', value: '82.80%' }],
  },
]

export const certifications = [
  { title: 'Frontend Development', issuer: 'Udemy' },
  { title: 'Frontend Developer (React)', issuer: 'HackerRank' },
  { title: 'AI Agents Fundamentals', issuer: 'Great Learning' },
]

export const achievements = [
  {
    title: 'Chess Competition',
    rank: '1st Rank',
    level: 'College Level',
    emoji: '♟️',
  },
  {
    title: 'Pot Painting Competition',
    rank: '1st Rank',
    level: 'College Level',
    emoji: '🎨',
  },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'ai-development', label: 'AI Tools' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

// ============================================================
// AI & MODERN DEVELOPMENT
// Honest framing only: Ruchika is a Frontend Developer who uses
// modern AI tools to work faster and smarter — NOT an AI/ML
// engineer and not claiming ML expertise. Keep copy accurate.
// ============================================================
export const aiWorkflow = {
  intro:
    "As a Frontend Developer, I use modern AI tools day-to-day to speed up coding, debugging, and learning — alongside a certified foundation in how AI agents work.",
  capabilities: [
    'AI Agents Fundamentals',
    'AI-assisted coding & development',
    'AI tools for productivity',
    'AI-powered debugging & problem solving',
    'AI-assisted UI & website development',
    'Prompt engineering fundamentals',
    'Improving dev workflow with AI tools',
  ],
  cards: [
    {
      title: 'AI-Assisted Development',
      description:
        'Using AI tools to accelerate coding, debugging, learning, and problem-solving.',
    },
    {
      title: 'Prompt Engineering',
      description:
        'Creating effective prompts to work with AI tools for development and productivity.',
    },
    {
      title: 'AI Agents Fundamentals',
      description:
        'Understanding the fundamentals of AI agents and modern AI-powered workflows.',
    },
    {
      title: 'Modern Developer Workflow',
      description:
        'Combining frontend development skills with modern AI tools to build faster and smarter.',
    },
  ],
  certification: { title: 'AI Agents Fundamentals', issuer: 'Great Learning' },
}

// ============================================================
// CONTACT FORM CONFIGURATION
// The contact form in this project is frontend-only by design
// (no fake backend). To make it actually send messages, pick
// ONE of the options below and follow the short setup:
//
// OPTION A — Formspree (easiest, no code changes to backend)
//   1. Create a form at https://formspree.io
//   2. Copy your form endpoint (looks like https://formspree.io/f/xxxxxxx)
//   3. Paste it into `formspreeEndpoint` below
//
// OPTION B — EmailJS (sends straight from the browser)
//   1. Create an account at https://www.emailjs.com
//   2. Create a service + email template
//   3. Fill in the three fields below
//
// OPTION C — Your own backend
//   Point `customEndpoint` at your API route (POST { name, email, message })
// ============================================================
export const contactConfig = {
  // OPTION A
  formspreeEndpoint: '', // e.g. 'https://formspree.io/f/xxxxxxx'

  // OPTION B
  emailjs: {
    serviceId: '',
    templateId: '',
    publicKey: '',
  },

  // OPTION C
  customEndpoint: '',
}
