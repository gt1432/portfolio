// Portfolio Configuration File
// Update this file to change any text or data on the website without modifying the HTML/CSS/JS files.

const CONFIG = {
  // Personal Info
  profile: {
    name: "G T Prashanth",
    headline: "AI Developer | Full Stack Developer | Machine Learning Enthusiast | Information Science Engineering Student",
    aboutMe: "I am a passionate Information Science Engineering student interested in Artificial Intelligence, Machine Learning, Full Stack Development, IoT, and solving real-world problems through technology. I actively participate in hackathons, build innovative applications, and continuously improve my technical skills.",
    location: "Bengaluru, India",
    email: "gtprashanth2@gmail.com",
    phone: "+91 63660 62095", // User configured phone number
    linkedin: "https://www.linkedin.com/in/gt-prashanth/",
    github: "https://github.com/gt1432",
    githubUsername: "gt1432",
    resumeUrl: "resume.pdf",
    visitorCounterStart: 1247, // Baseline visitor count
  },

  // Social Links
  socials: [
    { name: "GitHub", url: "https://github.com/gt1432", icon: "fa-brands fa-github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/gt-prashanth/", icon: "fa-brands fa-linkedin" },
    { name: "Email", url: "mailto:gtprashanth2@gmail.com", icon: "fa-solid fa-envelope" }
  ],

  // Coding Profiles (Placeholders)
  codingProfiles: [
    { platform: "GitHub", username: "gt1432", url: "https://github.com/gt1432", icon: "fa-brands fa-github", color: "#333" },
    { platform: "LeetCode", username: "gt1432", url: "https://leetcode.com/u/gt1432/", icon: "fa-solid fa-code", color: "#ffa116" },
    { platform: "HackerRank", username: "gt1432", url: "https://www.hackerrank.com/profile/gt1432", icon: "fa-brands fa-hackerrank", color: "#2ec866" },
    { platform: "CodeChef", username: "gt1432", url: "https://www.codechef.com/users/gt1432", icon: "fa-solid fa-cookie", color: "#5b4636" }
  ],

  // Education Details
  education: [
    {
      degree: "B.Tech in Information Science Engineering",
      institution: "Presidency University, Bangalore",
      period: "2024 - 2028 (Current)",
      details: "Sustaining a strong academic record with a CGPA of 8.9 / 10. Focusing on Web Development, Machine Learning, OOPs, DBMS, and Data Structures. Actively building dynamic applications and participating in university events."
    },
    {
      degree: "Pre-University College (Class 12 / PUC) - CBSE",
      institution: "Sri Chaitanya PU College, Bangalore",
      period: "Completed 2024 (75%)",
      details: "Specialized in PCMC (Physics, Chemistry, Mathematics, Computer Science) with a strong foundation in science and engineering fundamentals."
    },
    {
      degree: "Secondary School Education (Class 10) - ICSE",
      institution: "Gnana Jyoti School, Mulbagal",
      period: "Completed 2022 (82%)",
      details: "Acquired deep interest in science and programming foundations, graduating with a score of 82%."
    }
  ],

  // Skills organized by category
  skills: [
    {
      category: "Programming",
      items: [
        { name: "Java", percentage: 85, icon: "fa-brands fa-java" },
        { name: "Python", percentage: 90, icon: "fa-brands fa-python" },
        { name: "C", percentage: 80, icon: "fa-solid fa-c" }
      ]
    },
    {
      category: "Web Tech",
      items: [
        { name: "HTML5", percentage: 95, icon: "fa-brands fa-html5" },
        { name: "CSS3", percentage: 90, icon: "fa-brands fa-css3-alt" },
        { name: "PHP", percentage: 75, icon: "fa-brands fa-php" }
      ]
    },
    {
      category: "Databases & Tools",
      items: [
        { name: "MySQL", percentage: 85, icon: "fa-solid fa-database" },
        { name: "Git", percentage: 88, icon: "fa-brands fa-git-alt" },
        { name: "GitHub", percentage: 90, icon: "fa-brands fa-github" }
      ]
    },
    {
      category: "Core Concepts",
      items: [
        { name: "OOPs", percentage: 85, icon: "fa-solid fa-shapes" },
        { name: "DBMS", percentage: 82, icon: "fa-solid fa-server" },
        { name: "Data Structures", percentage: 80, icon: "fa-solid fa-network-wired" }
      ]
    }
  ],

  // Academic Projects & Hackathons Timeline
  experience: [
    {
      title: "AI & Machine Learning Projects",
      subtitle: "Independent & Academic Development",
      period: "2025 - Present",
      description: "Designed and implemented end-to-end Machine Learning pipelines using Scikit-Learn and TensorFlow. Built GeoMiner AI, an artificial intelligence tool for extracting spatial mining patterns and predicting resource distributions.",
      icon: "fa-solid fa-brain"
    },
    {
      title: "Full Stack Web Projects",
      subtitle: "EduBridge & FocusLearn",
      period: "2025",
      description: "Developed responsive web applications with interactive frontends and backend services. EduBridge bridges the learning gap for students, while FocusLearn provides a structured space for visual and focus-oriented course modules.",
      icon: "fa-solid fa-laptop-code"
    },

    {
      title: "Hackathons & Team Collaboration",
      subtitle: "Presidency University & Inter-college Events",
      period: "2025 - Present",
      description: "Participated in regional and institutional hackathons. Formulated concepts, divided development responsibilities in high-pressure team settings, and pitched projects like AgriGeo AI (GeoSmart-Agri) to panels of industry experts.",
      icon: "fa-solid fa-users"
    }
  ],

  // Achievements List
  achievements: [
    {
      title: "Hackathon Excellence",
      period: "2025",
      description: "Pitched and showcased AgriGeo AI (GeoSmart-Agri), winning accolades for outstanding integration of geospatial analytics and precision farming models.",
      icon: "fa-solid fa-trophy"
    },
    {
      title: "AI/ML Solutions Deployment",
      period: "2025",
      description: "Developed and published GeoMiner AI, demonstrating active knowledge of geospatial analysis, pattern recognition, and predictive machine learning models.",
      icon: "fa-solid fa-gears"
    },
    {
      title: "GitHub Open Source Contributions",
      period: "2025 - Present",
      description: "Maintained active repositories including code-compiler, focuslearn, and EduBridge. Built dynamic utilities, keeping code structures optimized and clean.",
      icon: "fa-brands fa-git-alt"
    },
    {
      title: "Academic Achievements",
      period: "Current",
      description: "Consistently ranked in the top tier of the Computer Science Engineering batch at Presidency University, sustaining excellent grades in Core CS modules.",
      icon: "fa-solid fa-graduation-cap"
    }
  ],

  // Certifications List
  certifications: [
    {
      name: "Machine Learning Specialization",
      issuer: "DeepLearning.AI & Stanford University (Coursera)",
      date: "2025",
      link: "#",
      icon: "fa-solid fa-certificate"
    },
    {
      name: "Geospatial Data Analysis with Python",
      issuer: "Geospatial Association",
      date: "2025",
      link: "#",
      icon: "fa-solid fa-map-location-dot"
    },
    {
      name: "Full Stack Web Development",
      issuer: "Presidency University CSE Dept",
      date: "2025",
      link: "#",
      icon: "fa-solid fa-code"
    },
    {
      name: "Arduino IoT Developer Certificate",
      issuer: "IoT Academy",
      date: "2025",
      link: "#",
      icon: "fa-solid fa-microchip"
    }
  ],

  // FAQ Section
  faqs: [
    {
      question: "What is your main domain of interest?",
      answer: "I am deeply interested in AI, Machine Learning, and their real-world intersections like Geospatial Analytics and IoT (such as smart farming and green energy)."
    },
    {
      question: "Are you open to internships or freelance opportunities?",
      answer: "Yes, absolutely! I am currently looking for software engineering and AI developer internships. You can reach out to me via the contact form or LinkedIn."
    },
    {
      question: "Which technologies do you prefer for Full Stack Development?",
      answer: "I specialize in JavaScript/HTML/CSS for front-ends, leveraging Bootstrap/Tailwind for styling. For backends, I prefer Python with Flask or Node.js, and MySQL for databases."
    },
    {
      question: "Can I customize this portfolio website easily?",
      answer: "Yes! All project titles, certifications, descriptions, social media accounts, and text details can be changed by simply updating the config.js file."
    }
  ],

  // Testimonials (Placeholders)
  testimonials: [
    {
      quote: "Prashanth has an incredible ability to translate complex ML concepts into practical web applications. His work on GeoMiner AI and AgriGeo was exceptional and well beyond what was expected.",
      author: "Academic Project Partner, ISE",
      role: "Presidency University"
    },
    {
      quote: "Working with G T Prashanth in hackathons is always a boost. He delivers clean code rapidly and is skilled at tackling complex backend spatial data models.",
      author: "Hackathon Team Member",
      role: "Full Stack Developer"
    }
  ],

  // Blog Posts (Placeholders)
  blogs: [
    {
      title: "Demystifying Geospatial Analytics in Precision Agriculture",
      date: "May 2026",
      excerpt: "Exploring how satellite imaging combined with machine learning models can revolutionize crop health tracking and yield predictions.",
      link: "#",
      readTime: "5 min read"
    },
    {
      title: "Integrating Arduino Sensors with Flask Framework",
      date: "June 2026",
      excerpt: "A complete step-by-step guide on setting up temperature sensors, processing data on Arduino, and streaming it to a web dashboard.",
      link: "#",
      readTime: "7 min read"
    }
  ],

  // Projects Mapping & Overrides
  // Dynamic repositories from GitHub will be merged with this configurations list.
  // This allows you to set custom images, mock demos, or descriptions for repos fetched from the API.
  projectOverrides: {
    "geominer-ai": {
      title: "GeoMiner AI",
      description: "An Artificial Intelligence system designed to analyze geospatial resources, extract mining patterns, and predict geological mineral distribution using spatial data models and machine learning pipelines.",
      technologies: ["Python", "Flask", "Machine Learning", "Geospatial Analytics", "GIS", "Data Visualization"],
      image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80", // Vibrant abstract image
      demoUrl: "https://geominer-ai-4379.onrender.com",
      featured: true
    },
    "GeoSmart-Agri": {
      title: "AgriGeo AI",
      description: "A precision agriculture platform using satellite telemetry, geospatial analysis, and machine learning to map soil conditions, check crop moisture levels, and provide smart irrigation recommendations.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Leaflet GIS", "Bootstrap", "Geospatial Analytics"],
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80", // Agricultural grid view
      demoUrl: "https://gt1432.github.io/GeoSmart-Agri/",
      featured: true
    },
    "code-compiler": {
      title: "Interactive Code Compiler",
      description: "A web-based interactive compiler allowing students to run and test Java, Python, and C structures directly inside a glassmorphic interface, complete with console output logs and syntax highlighting.",
      technologies: ["Java", "Spring Boot", "HTML5", "CSS3", "JavaScript", "REST APIs"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80", // High tech code layout
      demoUrl: "https://github.com/gt1432/code-compiler",
      featured: true
    },
    "EduBridge": {
      title: "EduBridge Learning Hub",
      description: "A bridge for students to easily access syllabus guides, educational materials, and peer mentorship. Features interactive schedules, resource tables, and collaborative chats.",
      technologies: ["JavaScript", "React", "Node.js", "Express", "MySQL", "CSS3"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80", // Educational digital concept
      demoUrl: "https://github.com/gt1432/EduBridge",
      featured: false
    },
    "focuslearn": {
      title: "FocusLearn Dashboard",
      description: "A distraction-free web dashboard equipped with focus music, Pomodoro timers, and minimal note pads. Encourages deep focus and structured academic sessions.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Web Audio API", "LocalStorage"],
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80", // Minimal calendar and notes
      demoUrl: "https://gt1432.github.io/focuslearn/",
      featured: false
    }
  },

  // Fallback Custom Projects (displayed if the user wants to show off-GitHub projects like Arduino hardware systems)
  customProjects: [
    {
      title: "Machine Learning Core Projects",
      description: "A comprehensive laboratory repository housing custom implementations of Convolutional Neural Networks (CNNs), Random Forests, SVMs, and OpenCV computer vision face tracking templates.",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "OpenCV", "Pandas", "NumPy"],
      image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=800&q=80", // Cyber intelligence graph
      repoUrl: "https://github.com/gt1432",
      demoUrl: "#",
      stars: 8,
      language: "Python",
      updatedAt: "2026-02-15",
      featured: true
    }
  ],

  // EmailJS keys: Edit these values to connect your real form submissions to EmailJS
  emailjs: {
    serviceId: "service_default",   // Replace with your Service ID
    templateId: "template_portfolio", // Replace with your Template ID
    publicKey: "user_publickey_placeholder" // Replace with your Public Key
  }
};
