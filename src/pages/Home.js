import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Code, Database, Globe } from 'lucide-react';
import myPic from '../assets/images/myPic.jpg';
import './Home.css';


const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-container">
          <motion.div
            className="hero-content"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <motion.div className="hero-greeting" variants={fadeInUp}>
              <span className="greeting-text">Hi there, I'm</span>
            </motion.div>
            
            <motion.h1 className="hero-name" variants={fadeInUp}>
              <span className="name-part">FULL</span>
              <span className="name-part highlight">STACK</span>
              <br />
              <span className="name-part">DEVELOPER</span>
            </motion.h1>
            
            <motion.p className="hero-description" variants={fadeInUp}>
              I am a creative computer science fresher with expertise in Java, JavaScript, 
              and SQL. I have a strong foundation in mathematics and excellent critical 
              thinking skills, making me a quick learner and supportive team member.
            </motion.p>
            
            <motion.div className="hero-buttons" variants={fadeInUp}>
              <Link to="/projects" className="btn btn-primary">
                View My Work
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get In Touch
              </Link>
            </motion.div>
            
            <motion.div className="hero-stats" variants={fadeInUp}>
              <div className="stat">
                <Code className="stat-icon" />
                <span>Full Stack Development</span>
              </div>
              <div className="stat">
                <Database className="stat-icon" />
                <span>Database Management</span>
              </div>
              <div className="stat">
                <Globe className="stat-icon" />
                <span>Web Technologies</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="profile-image">
              
              <img src={myPic} alt="Profile" />
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      <section className="featured-work">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          
          <div className="projects-grid">
            <motion.div
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="project-image">
                <img src="https://via.placeholder.com/300x200/2d7d6b/ffffff?text=Political+Platform" alt="Tamil Nadu Political Platform" />
              </div>
              <div className="project-content">
                <h3>Political Voting Platform</h3>
                <p>Interactive Tamil Nadu political party platform with voter ID generation and data management</p>
                <div className="project-tech">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="project-image">
                <img src="https://via.placeholder.com/300x200/4a9d7d/ffffff?text=Food+Delivery" alt="Food Delivery Platform" />
              </div>
              <div className="project-content">
                <h3>Food Delivery App</h3>
                <p>Swiggy-inspired platform with professional styling, city selection, and enhanced UI</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>CSS3</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="project-image">
                <img src="https://via.placeholder.com/300x200/6bbf59/ffffff?text=Photo+Gallery" alt="Photo Showcase" />
              </div>
              <div className="project-content">
                <h3>Interactive Photo Gallery</h3>
                <p>Aesthetic photo showcase with animations, local storage, and Tamil music integration</p>
                <div className="project-tech">
                  <span>JavaScript</span>
                  <span>Local Storage</span>
                  <span>CSS Animations</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
