
import { BiBuilding } from 'react-icons/bi';
import { CiVial } from 'react-icons/ci';
import { FaLaptopCode, FaServer, FaRobot, FaGamepad, FaHandsHelping, FaUnlockAlt, FaGithub, FaLinkedin, FaEnvelope, FaCode, FaBrain, FaStore, FaHeartbeat } from 'react-icons/fa';

export const portfolioData = {
    name: "Deiaa Mohamed",
    title: "Software Engineer",
    bio: "A passionate Software Engineer with expertise in building scalable web applications, automation scripts, and interactive systems. I love turning complex problems into simple, elegant solutions using modern technologies.",
    longBio: "I am a dedicated software engineer with a strong foundation in computer science currently participating in the Open-Source track at ITI. My journey involves mastering various technologies to build robust applications that solve real-world problems. I have a competitive coding background, having ranked 30th out of 120 teams in ECPC 2022.",
    email: "deiaa100@gmail.com",
    socialLinks: [
        {
            platform: "GitHub",
            url: "https://github.com/deiaamohamed", // Placeholder
            icon: FaGithub
        },
        {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/in/deiaa-mohamed-913221250/", // Placeholder
            icon: FaLinkedin
        },
        {
            platform: "Email",
            url: "mailto:deiaa100@gmail.com",
            icon: FaEnvelope
        }
    ],
    skills: [
        "CPP",
        "JAVA",
        "Kotlin",
        "C#",
        "JavaScript",
        "React.js",
        "Python",
        "Web Development",
        "Automation-ChatBot",
        "Game Development-Unity",
        "Machine Learning Basics",
        "AI Coding Editors (Cursor, Antigravity, Copilot)",
        "Linux",
        "Redhat-1",


    ],
    projects: [
        {
            id: 3,
            title: "Kemet Constructing",
            description: "A freelance website for a construction company featuring an interactive UI and responsive design.",
            tech: ["HTML/CSS", "JavaScript", "Bootstrap"],
            repoLink: "https://github.com/deiaamohamed/Kemet-Constructing", // Placeholder
            liveLink: "https://kemetconstructing.com/", // Placeholder
            icon: BiBuilding,
            color: "#60a5fa" // Blue
        },
        {
            id: 7,
            title: "LabShare",
            description: "Secure collaborative platform for ITI labs with OTP auth and version control features.",
            tech: ["typescript", "nextjs", "Supabase", "Security"],
            repoLink: "https://github.com/TryOmar/LabShare", // Placeholder
            liveLink: "https://lab-share.vercel.app/", // Placeholder
            icon: FaServer,
            color: "#22d3ee" // Cyan
        },
        {
            id: 10,
            title: "Pixel Palace",
            description: "A digital game store platform inspired by Steam and Epic Games, featuring game listings and user management.",
            tech: ["C#", ".NET MVC", "SQL Server", "Web Application"],
            repoLink: "https://github.com/deiaamohamed/Pixel-Palace", // Placeholder
            icon: FaStore,
            color: "#ec4899" // Pink-500
        },
        {
            id: 1,
            title: "HealthSync Manager",
            description: "A comprehensive hospital management system for handling patient records, appointments, and staff coordination.",
            tech: ["C#", "WPF", "SQL Server", "Desktop Application"],
            repoLink: "https://github.com/deiaamohamed/Hospital_Management_System", // Placeholder
            icon: FaHeartbeat,
            color: "#ef4444" // Red-500
        },

        {
            id: 11,
            title: "Employee System",
            description: "A full-stack application for managing employee records with CRUD operations and database integration.",
            tech: ["python", "Terminal"],
            repoLink: "https://github.com/deiaamohamed/Employee-System", // Placeholder
            icon: FaServer,
            color: "#4ade80" // Green
        },
        {
            id: 2,
            title: "SSH Protocol",
            description: "Implemented core concepts of the SSH protocol to demonstrate understanding of secure network communication and low-level networking.",
            tech: ["Golang", "SSH", "Networking"],
            repoLink: "https://github.com/deiaamohamed/SSH-Protocol", // Placeholder
            icon: FaUnlockAlt,
            color: "#f87171" // Red
        },

        {
            id: 4,
            title: "Freelance BOT",
            description: "An automation bot designed to handle freelance workflow tasks, showcasing scripting and process automation capabilities.",
            tech: ["Python", "Selenium", "Flask"],
            repoLink: "https://github.com/deiaamohamed/freelance_BOT", // Placeholder
            icon: FaRobot,
            color: "#ca8a04" // Yellow
        },
        {
            id: 5,
            title: "Fly Bird",
            description: "A fun, interactive game project inspired by Flappy Bird, demonstrating front-end game development logic.",
            tech: ["C#", "Unity"],
            repoLink: "https://github.com/deiaamohamed/Fly-Bird", // Placeholder
            icon: FaGamepad,
            color: "#a78bfa" // Purple
        },
        {
            id: 6,
            title: "American Sign Language",
            description: "An AI/ML project that recognizes hand signs using computer vision, aiming to improve accessibility.",
            tech: ["Python", "OpenCV", "TensorFlow"],
            repoLink: "https://github.com/deiaamohamed/AmericanSignLangauge", // Placeholder
            icon: FaHandsHelping,
            color: "#fb923c" // Orange
        },

        {
            id: 8,
            title: "Arabic Compiler",
            description: "A C# compiler/parser for the Arabic language using recursive descent; includes scanner, parser, and GUI for code analysis.",
            tech: ["C#", "WPF", "Compiler Design"],
            repoLink: "https://github.com/deiaamohamed/Arabic-Compiler-", // Placeholder
            icon: FaCode,
            color: "#ef4444" // Red-500
        },
        {
            id: 9,
            title: "AI Coach",
            description: "An AI-powered educational assistant that helps users learn programming and computer science concepts interactively.",
            tech: ["Python", "AI", "CV", "Machine Learning"],
            repoLink: "https://github.com/deiaamohamed/Ai-Coach", // Placeholder
            icon: FaBrain,
            color: "#8b5cf6" // Violet-500
        },


    ]
};
