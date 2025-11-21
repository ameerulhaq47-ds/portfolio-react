import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, Lightbulb } from 'lucide-react';
import myPicAbout from '../assets/images/myPicAbout.jpg';
import './About.css';

const About = () => {
  const skills = [
    { name: 'Java', level: 90 },
    { name: 'SQL', level: 90 },
    { name: 'Spring Framework', level: 90 },
    { name: 'Mathematics', level: 90 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 60 },
    { name: 'React.js', level: 50 }
    
  ];

  const achievements = [
    {
      icon: <GraduationCap className="achievement-icon" />,
      title: "Academic Excellence",
      description: "Strong academic performance with excellent CGPA in Computer Science"
    },
    {
      icon: <Award className="achievement-icon" />,
      title: "Technical Proficiency",
      description: "Expertise in Java, JavaScript, SQL with hands-on project experience"
    },
    {
      icon: <Users className="achievement-icon" />,
      title: "Team Collaboration",
      description: "Proven supportive team member with excellent communication skills"
    },
    {
      icon: <Lightbulb className="achievement-icon" />,
      title: "Quick Learner",
      description: "Fast implementation abilities with strong critical thinking skills"
    }
  ];

  return (
    <div className="about">
      <div className="container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>About Me</h1>
          <p className="about-subtitle">
            A passionate computer science fresher dedicated to creating innovative solutions
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>My Journey</h2>
            <p>
              As a computer science fresher from Karnataka, I bring a unique blend of 
              technical expertise and creative thinking to software development. My strong 
              foundation in mathematics, combined with excellent critical and logical 
              thinking abilities, enables me to approach complex problems with innovative solutions.
            </p>
            <p>
              I specialize in Java, JavaScript, and SQL, with hands-on experience in 
              building web applications using modern frameworks like Spring and React. 
              My passion extends beyond coding to creative screenplay writing and 
              developing interactive web experiences.
            </p>
            <p>
              Known for being a quick learner and fast implementer, I thrive in collaborative 
              environments where I can contribute as a supportive team member while 
              continuously expanding my technical skill set.
            </p>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src={myPicAbout} alt="About Me" />
          </motion.div>
        </div>

        <motion.div
          className="skills-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="achievements-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Key Strengths</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="achievement-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {achievement.icon}
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
