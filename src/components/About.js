import React from "react";
import { motion } from "framer-motion";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          
          <div className="about-text">
            <p>
              I'm a B.Tech CSE student at ITER, SOA University, Bhubaneswar, specializing in full-stack development with expertise in React, Node.js, and MySQL.
            </p>
            <p>
              An enthusiastic Web Developer and AI enthusiast passionate about creating innovative digital solutions. I build user-centric applications that solve real-world problems — from smart attendance systems to expense management platforms.
            </p>
            <p>
              SIH 2025 Finalist and active hackathon competitor. When I'm not coding, I'm taking on national challenges hosted by organizations like ISRO, TVS Credit, and NIT Rourkela.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
