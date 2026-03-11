// Static data used across the portfolio sections
export const SKILLS = [
    { category: "Frontend", items: ["React", "JavaScript", "Tailwind CSS",] },
    { category: "Backend", items: ["Python", "Django", "MySQL", "SQLite"] },
    { category: "Tools", items: ["Git", "GitHub", "Figma"] },
];

export const SKILL_PROFICIENCY = {
    React: 69,
    JavaScript: 80,
    "Tailwind CSS": 80,
    Python: 85,
    Django: 85,
    MySQL: 80,
    SQLite: 78,
    Git: 80,
    GitHub: 80,
    Figma: 88,
};

export const PROJECTS = [
    {
        number: "01",
        title: "TCTS Payroll System",
        tags: ["Django", "JavaScript", "SQLite"],
        description:
            "A full-featured payroll management system with face recognition-based attendance tracking. Automates employee time logging, salary computation, and payroll reporting through an integrated biometric workflow.",
        year: "2025",
        link: "#",
    },
    {
        number: "02",
        title: "PARK TRACK",
        tags: ["Django", "JavaScript", "MySQL"],
        description:
            "ParkTrack is an innovative computer vision-based smart parking management system designed to make parking faster, smarter, and more efficient. Developed as a capstone project by BSIT students from Western Mindanao State University, the system uses real-time video feeds and advanced AI technology—powered by the YOLOv8 object detection model—to automatically detect vehicles and determine whether parking slots are occupied or vacant.",
        year: "2026",
        link: "#",
    }
];

export const CONTACT_INFO = [
    { label: "Email", value: "ejayrulona@gmail.com" },
    { label: "Location", value: "Zamboanga City, Philippines" },
    { label: "Availability", value: "Open to opportunities" },
];

export const SOCIAL_LINKS = [
    { label: "GitHub", href: "https://github.com/ejayrulona" },
    { label: "LinkedIn", href: "in/ejay-rulona-5507553b0" },
    { label: "Facebook", href: "ejay.rulona.9" }
];

export const STATS = [
    // { number: "00", label: "Years Exp." },
    { number: "2", label: "Projects" },
    // { number: "12+", label: "Clients" },
    //{ number: "99%", label: "Satisfaction" },
];

export const TYPEWRITER_ROLES = [
    "Full-Stack Developer",
    "UI/UX Enthusiast",
];

export const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];