// src/components/Footer.jsx
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiVite } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <p>
          <strong>GitHub:</strong>{" "}
          https://github.com/Rocio89/catalogo-autos-react
        </p>
        <p>
          <strong>Proyecto Final:</strong> Auto Dealer - Curso de Frontend II
        </p>
        <p>
          <strong>Hecho por:</strong> Lucas-Rocio-Joel
        </p>
      </div>
      <div className="footer-social">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaReact />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <IoLogoJavascript />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <SiVite />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
