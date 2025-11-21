import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Server, Monitor, Palette, Brain, Users, Clock, Target, MessageCircle, Zap } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="category-icon" />,
      title: "Programming Languages",
      description: "Core programming languages I work with",
      skills: [
        { name: "Java", level: 90, color: "#f89820", experience: "2+ years" },
        { name: "JavaScript", level: 85, color: "#f7df1e", experience: "2+ years" },
        { name: "SQL", level: 80, color: "#00758f", experience: "1.5+ years" },
        { name: "HTML5", level: 90, color: "#e34f26", experience: "2+ years" },
        { name: "CSS3", level: 85, color: "#1572b6", experience: "2+ years" }
      ]
    },
    {
      icon: <Globe className="category-icon" />,
      title: "Frontend Technologies",
      description: "Modern frontend frameworks and libraries",
      skills: [
        { name: "React.js", level: 75, color: "#61dafb", experience: "1+ years" },
        { name: "JavaScript ES6+", level: 85, color: "#f7df1e", experience: "2+ years" },
        { name: "Responsive Design", level: 90, color: "#06d6a0", experience: "2+ years" },
        { name: "CSS Animations", level: 80, color: "#1572b6", experience: "1+ years" },
        { name: "Bootstrap", level: 75, color: "#7952b3", experience: "1+ years" }
      ]
    },
    {
      icon: <Server className="category-icon" />,
      title: "Backend & Framework",
      description: "Server-side technologies and frameworks",
      skills: [
        { name: "Spring Framework", level: 70, color: "#6db33f", experience: "1+ years" },
        { name: "Spring MVC", level: 68, color: "#6db33f", experience: "1+ years" },
        { name: "JDBC", level: 75, color: "#336791", experience: "1+ years" },
        { name: "REST APIs", level: 65, color: "#ff6b35", experience: "6+ months" },
        { name: "Maven", level: 60, color: "#c71a36", experience: "6+ months" }
      ]
    },
    {
      icon: <Database className="category-icon" />,
      title: "Database & Tools",
      description: "Database management and development tools",
      skills: [
        { name: "MySQL", level: 80, color: "#00758f", experience: "1.5+ years" },
        { name: "Git & GitHub", level: 85, color: "#f05032", experience: "2+ years" },
        { name: "VS Code", level: 90, color: "#007acc", experience: "2+ years" },
        { name: "IntelliJ IDEA", level: 75, color: "#000000", experience: "1+ years" },
        { name: "Postman", level: 70, color: "#ff6c37", experience: "6+ months" }
      ]
    }
  ];

  const softSkills = [
    { 
      name: "Problem Solving", 
      level: 95, 
      icon: <Brain size={24} />,
      description: "Strong mathematical foundation with excellent analytical abilities"
    },
    { 
      name: "Critical Thinking", 
      level: 90, 
      icon: <Target size={24} />,
      description: "Logical approach to complex technical challenges"
    },
    { 
      name: "Team Collaboration", 
      level: 85, 
      icon: <Users size={24} />,
      description: "Supportive team member with excellent cooperation skills"
    },
    { 
      name: "Quick Learning", 
      level: 95, 
      icon: <Zap size={24} />,
      description: "Fast learner and quick implementer of new technologies"
    },
    { 
      name: "Communication", 
      level: 80, 
      icon: <MessageCircle size={24} />,
      description: "Clear technical communication and documentation skills"
    },
    { 
      name: "Time Management", 
      level: 85, 
      icon: <Clock size={24} />,
      description: "Efficient project planning and deadline management"
    }
  ];

  const achievements = [
    {
      title: "Academic Excellence",
      description: "Strong CGPA with consistent academic performance",
      value: "High CGPA",
      icon: "🎓"
    },
    {
      title: "Project Portfolio",
      description: "10+ completed web development projects",
      value: "10+",
      icon: "💻"
    },
    {
      title: "Technical Skills",
      description: "Proficient in 5+ programming languages",
      value: "5+",
      icon: "⚡"
    },
    {
      title: "Learning Speed",
      description: "Fast adaptation to new technologies",
      value: "100%",
      icon: "🚀"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="skills">
      <div className="container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Technical Skills & Expertise</h1>
          <p className="skills-subtitle">
            A comprehensive overview of my technical proficiencies and core competencies
          </p>
        </motion.div>

        <div className="skills-content">
          {/* Technical Skills Section */}
          <div className="technical-skills">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Technical Proficiency
            </motion.h2>
            
            <motion.div
              className="skills-categories"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  className="skill-category"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="category-header">
                    {category.icon}
                    <div className="category-info">
                      <h3>{category.title}</h3>
                      <p className="category-description">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="skills-list">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="skill-item"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                        whileHover={{ x: 10 }}
                      >
                        <div className="skill-info">
                          <div className="skill-name-section">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-experience">{skill.experience}</span>
                          </div>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <motion.div
                            className="skill-progress"
                            style={{ backgroundColor: skill.color }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: skillIndex * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Soft Skills Section */}
          <motion.div
            className="soft-skills"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Core Competencies</h2>
            <p className="soft-skills-intro">
              Personal strengths that enhance my technical capabilities and teamwork
            </p>
            
            <div className="soft-skills-grid">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="soft-skill-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="soft-skill-header">
                    <div className="soft-skill-icon">
                      {skill.icon}
                    </div>
                    <h4>{skill.name}</h4>
                  </div>
                  
                  <div className="circular-progress">
                    <svg className="progress-ring" width="80" height="80">
                      <circle
                        className="progress-ring-bg"
                        stroke="#e9ecef"
                        strokeWidth="6"
                        fill="transparent"
                        r="34"
                        cx="40"
                        cy="40"
                      />
                      <motion.circle
                        className="progress-ring-circle"
                        stroke="url(#gradient)"
                        strokeWidth="6"
                        fill="transparent"
                        r="34"
                        cx="40"
                        cy="40"
                        style={{
                          strokeDasharray: `${2 * Math.PI * 34}`,
                        }}
                        initial={{ strokeDashoffset: `${2 * Math.PI * 34}` }}
                        whileInView={{ 
                          strokeDashoffset: `${2 * Math.PI * 34 * (1 - skill.level / 100)}` 
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="var(--primary-color)" />
                          <stop offset="100%" stopColor="var(--secondary-color)" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className="progress-text">{skill.level}%</span>
                  </div>
                  
                  <p className="soft-skill-description">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievement Stats */}
          <motion.div
            className="achievements-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Key Achievements</h2>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  className="achievement-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="achievement-icon">{achievement.icon}</div>
                  <div className="achievement-value">{achievement.value}</div>
                  <h4>{achievement.title}</h4>
                  <p>{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Summary */}
          <motion.div
            className="skills-summary"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="summary-content">
              <h2>Ready for New Challenges</h2>
              <p>
                As a computer science fresher with strong technical foundations and 
                excellent learning capabilities, I'm excited to contribute to innovative 
                projects and grow with a dynamic team. My combination of technical 
                skills, mathematical background, and collaborative approach makes me 
                well-suited for software development roles.
              </p>
              <div className="summary-stats">
                <div className="stat">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Technologies</span>
                </div>
                <div className="stat">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Dedication</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
