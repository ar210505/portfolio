import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

function Skills() {
  const categories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "MySQL", "SQL", "Supabase", "REST APIs"],
    },
    {
      title: "AI/ML",
      skills: ["Machine Learning", "AI Integration", "Python", "Basic ML Concepts"],
    },
    {
      title: "Languages",
      skills: ["JavaScript", "Python", "Java", "C"],
    },
  ];

  return (
    <section id="skills" className="skills">
      <motion.div 
        className="container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Skills Directory</h2>
        
        <div className="skills-grid">
          {categories.map((category, index) => (
            <motion.div 
              className="skill-category" 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h3 className="mono category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span className="skill-tag" key={i}>{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;