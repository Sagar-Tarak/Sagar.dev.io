import p1 from "./assets/Thirty6.png";
import p2 from "./assets/ArtisanVista.png";
import p3 from "./assets/DreamView.png";
import p4 from "./assets/project-4.png";
import p5 from "./assets/project-5.png";
import p6 from "./assets/project-6.png";
import spylt from "./assets/Spylt.png";
import freqhaus from "./assets/Freqhaus.png";
export const filters = [
    {
        name: "All",
        id: "all",
    },
    // {
    //     name: "Dashboard",
    //     id: "dashboard",
    // },
    // {
    //     name: "Mobile App",
    //     id: "mobile-app",
    // },
    {
        name: "Website",
        id: "website",
    },
    {
        name: "Mini Projects",
        id: "mini-projects",
    }
];

export const projects = [
    {
        name: "Thirty Six Studio - A Design Agency",
        image: p1,
        tags: ["website"],
        url: "https://thirtysixstudiodev.netlify.app/"
    },
    {
        name: "Artisan Vista - A Art Gallery Website",
        image: p2,
        tags: ["website"],
        url: "https://artisanvista.netlify.app/"
    },
    {
        name : "Three JS Mask Animation Mini Project",
        image: p3,
        tags: ["mini-projects"],
        url: "https://dreamviews.netlify.app/"
    },
    {
        name: "Spylt Clone",
        image: spylt,
        tags: ["website"],
        url: "https://spyltclone.netlify.app/"
    },
    {
        name: "Freqhaus Studio",
        image: freqhaus,
        tags: ["website"],
        url: "https://freqhausstudio.netlify.app/"
    }
];

export const achievements = [
    {
        id: 1,
        year: 4,
        description: "SUCCESSFULLY<br />COMPLETED<br />PROJECTS",
    },
    {
        id: 2,
        year: 1,
        description: "YEARS OF<br />EXPERIENCE",
    },
    {
        id: 3,
        year: 25,
        description: "TECHNOLOGIES",
    },
    {
        id: 4,
        year: 12,
        description: "COMMUNITY<br />POSTS",
    },
];
