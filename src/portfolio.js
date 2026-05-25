/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Abdul Samad",
  title: "Hi all, I'm Abdul Samad",
  subTitle: emoji(
    "Results-driven AI Developer 🚀 building intelligent, production-ready systems with Python, Machine Learning, and modern web architectures. Experienced integrating LLMs (Claude, ChatGPT, Groq API) into real applications. Proven ability to own full-stack development from data preprocessing to deployment using React and FastAPI."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/abdulsamadjamali",
  linkedin: "https://www.linkedin.com/in/samad-jamali-1422a8288/",
  gmail: "abdulsamadjamali115@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AI DEVELOPER BUILDING INTELLIGENT FULL-STACK SYSTEMS WITH PYTHON & REACT",
  skills: [
    emoji(
      "⚡ Build AI-powered applications integrating LLMs (Claude, ChatGPT, Groq API) into production systems"
    ),
    emoji("⚡ Develop machine learning models (PyTorch, scikit-learn) and deploy REST APIs with FastAPI"),
    emoji(
      "⚡ Create responsive, modern web interfaces with React and deploy on Vercel/Railway"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Tailwind",
      fontAwesomeClassname: "fas fa-wind"
    },
    {
      skillName: "FastAPI",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-brain"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Mehran University of Engineering and Technology",
      logo: require("./assets/images/UNIVERSITY.jpeg"),
      subHeader: "Bachelor of Science in Artificial Intelligence",
      duration: "2023 - 7th Semester (In Progress)",
      desc: "Strong focus on AI, Machine Learning, and Software Engineering with hands-on project experience.",
      descBullets: [
        "CGPA: 3.2 - Consistent academic performance",
        "Specialized in RAG systems, LLM integration, and machine learning applications",
        "Active in AI Club as Head Director of PR & Marketing"
      ]
    },
    {
      schoolName: "Government Degree College Dadu",
      logo: require("./assets/images/college.jpeg"),
      subHeader: "Higher Secondary Certificate (HSC)",
      duration: "2021 - 2023",
      desc: "Strong foundation in science and mathematics",
      descBullets: [
        "Part 1: 74% | Part 2: 80%"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "AI & Machine Learning", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend/Web Development",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend/API Development",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Head Director of PR & Marketing",
      company: "AI Club, MUET",
      companylogo: require("./assets/images/AIC CLUB.jpeg"),
      date: "2023 - Present",
      desc: "Leading promotional strategy and community engagement for AI club initiatives.",
      descBullets: [
        "Driving visibility for AI community across campus",
        "Organizing events, workshops, and knowledge-sharing sessions"
      ]
    },
    {
      role: "Pre-Incubatee",
      company: "Business Incubation Center (BIC), MUET",
      companylogo: require("./assets/images/BIC.jpeg"),
      date: "2023 - Present",
      desc: "Developing innovative business ideas and solutions focused on AI/tech applications.",
      descBullets: [
        "Transforming ideas into viable tech solutions",
        "Learning startup development and business strategy"
      ]
    },
    {
      role: "Hackathon Participant & Developer",
      company: "Multiple Hackathons",
      companylogo: require("./assets/images/hackethon.jfif"),
      date: "2023 - Present",
      desc: "Rapidly prototyping full-stack applications under tight deadlines with cross-functional teams.",
      descBullets: [
        "Built production-ready solutions using React, FastAPI, and AI integrations",
        "Collaborated using Git, agile sprints, and code reviews",
        "Gained hands-on experience in fast-paced development environments"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "AI-POWERED AND FULL-STACK WEB APPLICATIONS",
  projects: [
    {
      image: require("./assets/images/HOSTEL.png"),
      projectName: "HostelHunt",
      projectDesc: "A responsive hostel discovery platform for students. Built with React + Tailwind CSS with user authentication and hostel owner dashboard for managing listings.",
      footerLink: [
        {
          name: "Visit Live",
          url: "https://hostelhub-sage.vercel.app/"
        },
        {
          name: "GitHub",
          url: "https://github.com/abdulsamadjamali/hostelhunt"
        }
      ]
    },
    {
      image: require("./assets/images/pwaLogo.webp"),
      projectName: "RAG-Based AI Question Answering System",
      projectDesc: "An AI-powered Retrieval-Augmented Generation system using Groq API for intelligent question answering. Python backend + responsive frontend.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/abdulsamadjamali/rag-qa-system"
        }
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "AI Exam Performance Predictor",
      projectDesc: "Machine learning model using PyTorch + scikit-learn to predict student academic outcomes. Features data preprocessing and model evaluation.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/abdulsamadjamali/exam-predictor"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Recognition 🏆 "),
  subtitle:
    "Awards, Scholarships, and Recognition for Academic Excellence",

  achievementsCards: [
    {
      title: "Sindh Education Enrolment Fund (SEEF) Scholarship",
      subtitle:
        "Awarded in 2nd year for academic excellence - Full tuition support",
      image: require("./assets/images/SCHOLARSHIP-LOGO.webp"),
      imageAlt: "SEEF Scholarship",
      footerLink: [
        {
          name: "Learn More",
          url: "https://www.ssef.edu.pk/"
        }
      ]
    },
    {
      title: "AI Club Leadership",
      subtitle:
        "Head Director of PR & Marketing - Leading community engagement and promotional strategies",
      image: require("./assets/images/AIC CLUB.jpeg"),
      imageAlt: "AI Club",
      footerLink: [
        {
          name: "AI Club",
          url: "https://muet.edu.pk/"
        }
      ]
    },

    {
      title: "Business Incubation Center Pre-Incubatee",
      subtitle: "Selected as pre-incubatee for innovative AI/tech business ideas",
      image: require("./assets/images/BIC.jpeg"),
      imageAlt: "BIC Logo",
      footerLink: [
        {
          name: "BIC MUET",
          url: "https://muet.edu.pk/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Articles and technical writing coming soon...",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "Technical talks and presentations coming soon 🚀"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Podcast coming soon",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? Feel free to reach out!",
  number: "+92-318-034-9259",
  email_address: "abdulsamadjamali115@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
