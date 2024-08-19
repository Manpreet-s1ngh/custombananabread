// src/components/Footer.js

import React from "react";
import "../css/Footer.css";
import SignOutButton from "./SignOutButton";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2 className="footer-title">About Us</h2>
          <p className="footer-text">
            Banana Bread Co. is dedicated to bringing you the best banana bread
            recipes, baking tips, and more. Our mission is to make baking
            enjoyable and accessible for everyone.
          </p>
        </div>
        <div className="footer-section">
          <h2 className="footer-title">Contact Us</h2>
          <p className="footer-text">
            Email:{" "}
            <a href="mailto:support@bananabreadco.com">
              support@bananabreadco.com
            </a>
          </p>
          <p className="footer-text">
            Phone: <a href="tel:+1234567890">(123) 456-7890</a>
          </p>
          <p className="footer-text">
           Lambton College, Missisauga
          </p>
        </div>
        <div className="footer-section">
          <h2 className="footer-title">Follow Us</h2>
          <div className="social-media-links">
            <a
              href="https://facebook.com"
              className="social-media-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a
              href="https://twitter.com"
              className="social-media-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a
              href="https://instagram.com"
              className="social-media-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-text">
          © 2024 Banana Bread Co. All rights reserved.
        </p>
        <p className="footer-text">Designed with ❤️ by Group </p>
        <SignOutButton/>
      </div>
    </footer>
  );
};

export default Footer;
