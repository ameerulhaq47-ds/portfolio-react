import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    // {
    //   id: 1,
    //   title: "Tamil Nadu Political Voting Platform",
    //   description: "Interactive political party platform with voter ID generation, hard-coded voter data management, and form validation using HTML, CSS, and JavaScript.",
    //   image: "/api/placeholder/400/250",
    //   technologies: ["HTML", "CSS", "JavaScript", "Form Validation"],
    //   category: "web",
    //   github: "https://github.com/yourusername/political-platform",
    //   live: "https://yourproject.com",
    //   featured: true
    // },
    // {
    //   id: 2,
    //   title: "Swiggy-Inspired Food Delivery App",
    //   description: "Professional food delivery platform with city selection, enhanced UI, professional styling, and food categorization system.",
    //   image: "/api/placeholder/400/250",
    //   technologies: ["React", "JavaScript", "CSS3", "Responsive Design"],
    //   category: "web",
    //   github: "https://github.com/yourusername/food-delivery",
    //   live: "https://yourproject.com",
    //   featured: true
    // },
    // {
    //   id: 3,
    //   title: "Interactive Photo Showcase",
    //   description: "Aesthetic photo gallery with animations, local storage functionality, file upload capabilities, and Tamil music integration.",
    //   image: "/api/placeholder/400/250",
    //   technologies: ["JavaScript", "Local Storage", "CSS Animations", "File Upload"],
    //   category: "web",
    //   github: "https://github.com/yourusername/photo-gallery",
    //   live: "https://yourproject.com",
    //   featured: false
    // },
    // {
    //   id: 4,
    //   title: "Java Pattern Printing Algorithms",
    //   description: "Advanced Java programs for printing letter patterns (A, N) and palindrome substring detection with interactive web interface integration.",
    //   image: "/api/placeholder/400/250",
    //   technologies: ["Java", "Algorithm Design", "Pattern Recognition"],
    //   category: "java",
    //   github: "https://github.com/yourusername/java-patterns",
    //   live: null,
    //   featured: false
    // },
    // {
    //   id: 5,
    //   title: "Hangman Game Implementation",
    //   description: "Interactive hangman game with challenging English movie names, logo design integration, and web-based user interface.",
    //   image: "/api/placeholder/400/250",
    //   technologies: ["Java", "JavaScript", "Game Logic", "UI Design"],
    //   category: "game",
    //   github: "https://github.com/yourusername/hangman-game",
    //   live: "https://yourproject.com",
    //   featured: false
    // },
    // {
    //   id: 6,
    //   title: "Spring Framework Learning Projects",
    //   description: "Collection of Spring MVC and JDBC projects demonstrating backend development skills and database integration.",
    //   image: "/api/placeholder/400/250",
    //   technologies: ["Spring Framework", "Spring MVC", "JDBC", "MySQL"],
    //   category: "backend",
    //   github: "https://github.com/yourusername/spring-projects",
    //   live: null,
    //   featured: true
    // }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'java', label: 'Java Applications' },
    { key: 'backend', label: 'Backend Development' },
    // { key: 'game', label: 'Game Development' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
    <div className="projects">
      <div className="container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>My Projects</h1>
          <p className="projects-subtitle">
            A showcase of my technical skills and creative problem-solving abilities
          </p>
        </motion.div>

        <motion.div
          className="filter-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Filter className="filter-icon" />
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category.key}
                className={`filter-btn ${filter === category.key ? 'active' : ''}`}
                onClick={() => setFilter(category.key)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={filter}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={24} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={24} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                {project.featured && <span className="featured-badge">Featured</span>}
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
