import React, { useState } from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaCheck, FaLinkedin } from "react-icons/fa";

function Contact() {
  const [copied, setCopied] = useState("");

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-desc">
            Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="contact-links">
            <button 
              className="contact-btn" 
              onClick={() => handleCopy("ayush210505bksc@gmail.com", "email")}
            >
              <FaEnvelope /> 
              <span className="mono">ayush210505bksc@gmail.com</span>
              {copied === "email" && <span className="copied-tooltip"><FaCheck /> Copied!</span>}
            </button>
            
            <button 
              className="contact-btn" 
              onClick={() => handleCopy("+91 9470351465", "phone")}
            >
              <FaPhone /> 
              <span className="mono">+91 9470351465</span>
              {copied === "phone" && <span className="copied-tooltip"><FaCheck /> Copied!</span>}
            </button>

            <a
              href="https://www.linkedin.com/in/ayushraj2105"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              <FaLinkedin />
              <span className="mono">linkedin.com/in/ayushraj2105</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
