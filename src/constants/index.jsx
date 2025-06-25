import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/personal.png";
import projectImage2 from "../assets/ecommerce.png";
import projectImage3 from "../assets/travel.png";
import projectImage4 from "../assets/hotel.png";
import projectImage5 from "../assets/chatbot.png";
import projectImage6 from "../assets/Perspective.png";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaLaravel, FaDraftingCompass, FaDatabase } from "react-icons/fa";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Jaycob Magno",
  greet: "Hello there! 👋🏻",
  description:
    "I am determined to develop my learning in the IT industry, apply my skills and contribute to the industry's growth through continuous learning and hands-on experience.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/KhavishLoser17/Personal-Website",
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using Laravel and Tailwind Css for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "https://github.com/KhavishLoser17/ECommerce",
  },
  {
    id: 3,
    name: "Travel And Tours Management",
    description:
      "A web application using Laravel and Tailwind CSS managing Travel and tours also integrates with AI and API with a focus on competency and succession planning, as well as learning management and employee training management ",
    image: projectImage3,
    githubLink: "https://github.com/KhavishLoser17/HR2",
  },
  {
    id: 4,
    name: "Hotel and Restaurant Dashboard",
    description:
      "Web Application using Laravel and Tailwind CSS Hotel And Restaurant Dashboard focusing on Human Resource Management System.",
    image: projectImage4,
    githubLink: "https://github.com/KhavishLoser17/Hotel-and-Resto",
  },
  {
    id: 5,
    name: "Chatbot AI",
    description:
      "Using Laravel integrates with Gemini AI",
    image: projectImage5,
    githubLink: "https://github.com/KhavishLoser17/Gemini-Chatbot",
  },
  {
    id: 6,
    name: "Some of my Perspective",
    description:
      "I've been helping my aunt, a civil engineer, Using SketchUp and Lumion to create a perspective design for their home or business construction.",
    image: projectImage6,
    githubLink: "https://github.com/KhavishLoser17/Perspective-Designs",
  },
];

export const BIO = [
  "I'm Jaycob Magno, a 4th-year IT student at Bestlink College of the Philippines. I seek further opportunities to develop my technical and programming skills while gaining valuable industry experience. In addition to my academic background, I have hands-on experience working with Adobe Photoshop and rendering 3D designs for various projects, which has helped refine my creativity and attention to detail. I am eager to apply my knowledge, learn new skills, and contribute to real-world projects in the IT field..",
];

export const SKILLS = [
  {
    icon: <FaLaravel  className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "Laravel",
    experience: "1 years",
  },
  {
    icon: <FaDraftingCompass  className="text-4xl text-white lg:text-5xl" />,
    name: "Sketchup/Lumion",
    experience: "1 year",
  },
  {
    icon: <FaDatabase  className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Mysql",
    experience: "1+ years",
  },
  
  
  
];

export const EXPERIENCES = [
  {
    title: "",
    company: "MBJD-Build, Design, Consultancy and Printing Services",
    duration: "March 2018 - 2021",
    description:
      "As an assistant of MBJD-Build, Design, Consultancy, and Printing Services, I have learned how to effectively communicate with customers, fulfill their design requests for invitations, and handle the printing process. Additionally, I've been assisting my aunt, a Civil Engineer, has been guiding me in learning how to use SketchUp and Lumion for design work.",
  },
];

export const EDUCATION = [
  {
    degree: "Accountancy, Business, and Management",
    institution: "Bestlink College of the Philippines",
    duration: "June 2019 - July 2021",
    description:
      "(Senior High)Designed for students who are interested in pursuing careers in business, finance, accounting, and management. This strand focuses on subjects such as financial accounting, economics, business management, and marketing, among others.",
  },
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Bestlink College of the Philippines",
    duration: "August 2021 - Present",
    description:
      "Program that focuses on studying computer systems, software development, networking, and IT management. The program prepares students for careers in information technology, software development, network administration, and related fields.",
  },

];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/KhavishLoser17",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
