import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";

function Experience() {
  const experiences = [
    {
      company: "Steel Authority of India Limited (SAIL)",
      role: "Vocational Trainee",
      date: "Jun 2025 - Jul 2025",
      description: "Enhanced IT operations efficiency at SAIL Bokaro by automating backups, optimizing SQL queries, and monitoring server performance. Gained hands-on experience in network management, web development, and IT infrastructure."
    },
    {
      company: "Smart India Hackathon 2025",
      role: "Finalist",
      date: "2025",
      description: "Qualified for the national SIH event by ranking in the top 45 teams of the internal hackathon. Demonstrated innovative problem-solving and full-stack development skills at a national level."
    },
    {
      company: "National & Regional Hackathons",
      role: "Active Competitor",
      date: "2023 - Present",
      description: "Experienced in national and regional challenges hosted by organizations like ISRO (Bharatiya Antariksh Hackathon), TVS Credit, NIT Rourkela, and Odoo. Consistently delivering innovative tech solutions under pressure."
    }
  ];

  return (
    <section id="experience" className="experience">
      <motion.div 
        className="container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Experience</h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              className="timeline-item" 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.role} <span className="highlight">@ {exp.company}</span></h3>
                  <span className="mono timeline-date">{exp.date}</span>
                </div>
                <p>{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;
