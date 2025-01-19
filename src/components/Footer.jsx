import React from "react";
import logo1 from "../assets/logo1.png";
import { SOCIAL_MEDIA_LINKS } from "../constants"; // Update this file with your social links
import { motion } from "framer-motion";
import "./Footer.css"; 

export default function Footer() {
  return (
    <div className="footer-container mb-8 mt-20">
      {/* Logo Section */}
      <div className="flex items-center justify-center">
        <a href="https://github.com/KhavishLoser" target="_blank" rel="noopener noreferrer">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src={logo1}
            width={200}
            alt="Logo"
            className="my-20"
          />
        </a>
      </div>
       {/* Card Section */}
       <div className="card mt-12 mx-auto">
        <img
          className="image"
          alt="Social Media Graphic"
          src="https://uiverse.io/astronaut.png"
        />
        <div className="heading">We're on Social Media</div>
        <div className="icons flex justify-center mt-4 gap-4">
          <a
            className="instagram"
            href="https://www.instagram.com/uiverse.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Add Instagram SVG */}
          </a>
          <a
            className="twitter"
            href="https://twitter.com/uiverse_io"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Add Twitter SVG */}
          </a>
          <a
            className="discord"
            href="https://discord.gg/KD8ba2uUpT"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Add Discord SVG */}
          </a>
        </div>
      </div>
      <br/>

      {/* Social Media Links */}
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
        
     

      {/* Footer Text */}
      <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
        &copy;compileTab. All rights reserved.
      </p>
    </div>
  );
}
