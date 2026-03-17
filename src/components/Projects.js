import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import { FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
  const projects = [
    {
      title: "QuickAttend",
      description: "Smart, proxy-free automated attendance system for colleges. Eliminates fraudulent check-ins with real-time analytics and automated reports seamlessly integrated with existing college management systems.",
      tech: ["React", "Vite", "Supabase", "Machine Learning", "AWS"],
      link: "https://attend-ease-lyart.vercel.app/"
    },
    {
      title: "Smart Expense Splitter",
      description: "Full-stack group expense management platform supporting Equal, Exact, Percentage, and Pay-for-Someone splits. Features optimized settlement algorithm, UPI & QR payments, analytics dashboard, and JWT auth.",
      tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
      link: "https://splitwise-upi.vercel.app/"
    },
  ];

  return (
    <section id="projects" className="projects">
      <motion.div 
        className="container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Selected Works</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              className="project-card" 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span className="mono" key={i}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
