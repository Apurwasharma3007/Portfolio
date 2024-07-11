
// This file is used to store all the details of the user
import logolight from "./assets/logolight.png"
import logodark from "./assets/logodark.png"
// Profile Image
import profile from "./assets/profile.png";

// Porject Images
import projectImage1 from "./assets/projects/project1.png";
import projectImage4 from "./assets/projects/project4.png";
import projectImage5 from "./assets/projects/project5.png";
import projectImage6 from "./assets/projects/project6.png";

// Logos
export const logos = {
  logoDark  : logodark,
  logoLight :logolight,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Apurwa Sharma",
  tagline: "I secure the web",
  img: profile,
  about: `As a cybersecurity student, I'm dedicated to understanding and protecting against digital threats, delving into areas like cryptography, network security, and ethical hacking. Alongside this, I have a strong passion for graphic design, enjoying the creative process of crafting visually appealing digital content. By merging these interests, I aim to create user-friendly security interfaces and educational materials that make cybersecurity concepts accessible and engaging. My goal is to contribute to a safer and more visually appealing digital landscape.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/apurwa-sharma-technophile/",
  github: "https://github.com/Apurwasharma3007",
  instagram: "https://www.instagram.com/apurwa_sharma30?igsh=MTAxN2pxc2o0a3B4Mg==",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Graphic Designer",
    Company: `Cyber Infotech`,
    Location: "Work from home",
    Type: "Internship",
    Duration: "April 2024 - JUNE 2024",
  },
  {
    Position: "Cyber Security Analyst",
    Company: `Nexus Security`,
    Location: "Work from home",
    Type: "Internship",
    Duration: "May 2024 - JULY 2024",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Course: "Bachelor of Technology (B.Tech)",
    Branch: "Computer Science and Engineering",
    Institute: "LoveLy Professional University",
    Location: "Phagwara,Punjab",
    Duration: "2022 - 2026",
  },
  {
    Course: "Senior Secondary Education",
    Branch:"CBSE",
    Institute: "DH Lawrence sr. sec school",
    Location: "Jhajjar,Haryana",
    Duration: "2020- 2022"
  },
  {
    Course: "Secondary Education",
    Branch:"CBSE",
    Institute: "DH Lawrence sr. sec school",
    Location: "Jhajjar,Haryana",
    Duration: "2020"
  }
];

export const skills = [
  { id: "Networking", content: "Networking", percentage: 90 },
  { id: "Burp Suite", content: "Burp Suite", percentage: 80 },
  { id: "DSA_skill", content: "DSA", percentage: 90 },
  { id: "C_skill", content: "C", percentage: 85 },
  { id: "Cpp_skill", content: "C++", percentage: 80 },
  { id: "Java_skill", content: "Java", percentage: 75 },
  { id: "Python_skill", content: "Python", percentage: 90 },
  { id: "HTML5_skill", content: "HTML5", percentage: 40 },
  { id: "CSS3_skill", content: "CSS3", percentage: 35 },
  { id: "JavaScript_skill", content: "JavaScript", percentage: 30 },
  { id: "ReactJS_skill", content: "ReactJS", percentage: 40 },
  { id: "NodeJS_skill", content: "Node.js", percentage: 35 },
  { id: "ExpressJS_skill", content: "Express.js", percentage: 40 },
];

export const certifications = [
  { id: 1, title: "Algorithms on Strings", link: "https://coursera.org/share/da6d0b7808130d08401331cbb31eb73b" },
  { id: 2, title: "Introduction to Cybersecurity Essentials- IBM", link: "https://coursera.org/share/ec0c2ad91edd6808e4bd05119d33d131" },
  { id:3, title:"Introduction to Large Language Models- Google ",link:"https://coursera.org/share/20ac3951ad8f21201d88474be15cc45f"},
  { id:4,title:"Introduction to Generative AI- Google",link:"https://coursera.org/share/42220502189f869b3058c31d27447d75"},
  { id:5, title:"SQL Basics - HackerRank", link:"https://www.hackerrank.com/certificates/d995e18eba2e"},

  // Add more certifications
];

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Protfolio",
    image: projectImage1,
    description: `Discover my portfolio—an interactive showcase of projects, skills, and contact information. Explore live project previews and GitHub repositories to see my work in action.`,
    techstack: "React.js, Node.js, Tailwind css",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  
  {
    title: "Electricity Website",
    image: projectImage4,
    description: `Crafted a user-friendly Electricity Management  website.`,
    techstack: "HTML/CSS, JavaScript",
    githubLink: "https://github.com/Apurwasharma3007/electricity-website",
  },
  {
    title: "CA Evaluator System",
    image: projectImage6,
    description: `Coded a CA evaluator System.This systems helps in keeping the record of ca(continuous assessment) marks of students. It has different modules like creating record,modify the student details,etc.`,
    techstack: "C Programming",
    githubLink: "https://github.com/Apurwasharma3007/CA-evaluator-system",
  },
  {
    title: "Logos And Posters",
    image: projectImage5,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "Adobe Photoshop, Canva, Illustrator, InDesign, Lightroom",
    previewLink: "https://drive.google.com/drive/folders/1ChjL0mlwydbOYcHvLWDXl2eZqsR-lwTL?usp=sharing",
    githubLink: "https://github.com",
  },
  
];

