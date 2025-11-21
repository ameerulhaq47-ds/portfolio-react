import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github,  Heart, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ];

  // const services = [
  //   'Web Development',
  //   'Frontend Development',
  //   'Backend Development',
  //   'Database Design',
  //   'UI/UX Design',
  //   'API Integration'
  // ];

  const socialLinks = [
    { 
      icon: <FaGithub size={20} />, 
      url: "https://github.com/ameerulhaq47-ds", 
      label: "GitHub" 
    },
    { 
      icon: <FaLinkedin size={20} />, 
      url: "https://linkedin.com/in/ameerulhaq081", 
      label: "LinkedIn" 
    },
    { 
      icon: <FaInstagram size={20} />, 
      url: "https://instagram.com/ameer.47_", 
      label: "Instagram" 
    }
  ];

  const contactInfo = [
    {
      icon: <Mail size={16} />,
      text: "ameerulhaq081@gmail.com",
      link: "mailto:ameerulhaq081@gmail.com"
    },
    {
      icon: <Phone size={16} />,
      text: "+91 80501 31023",
      link: "tel:+918050131023"
    },
    {
      icon: <MapPin size={16} />,
      text: "Karnataka, India",
      link: null
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-main">
            {/* Brand Section */}
            <motion.div
              className="footer-section footer-brand"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="footer-logo">Ameer Ul Haq</h3>
              <p className="footer-description">
                A passionate computer science fresher dedicated to creating 
                innovative web solutions with expertise in Java, JavaScript, 
                and modern web technologies.
              </p>
              
              <div className="footer-contact-info">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-item">
                    {info.icon}
                    {info.link ? (
                      <a href={info.link}>{info.text}</a>
                    ) : (
                      <span>{info.text}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="footer-social">
                <h4>Follow Me</h4>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="footer-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path}
                      onClick={scrollToTop}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              className="footer-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* <h4 className="footer-title">Services</h4>
              <ul className="footer-links">
                {services.map((service, index) => (
                  <li key={index}>
                    <span>{service}</span>
                  </li>
                ))}
              </ul> */}
            </motion.div>

            {/* Newsletter */}
            <motion.div
              className="footer-section footer-newsletter"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="footer-title">Stay Connected</h4>
              <p>Get updates about my latest projects and blog posts.</p>
              <form className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-btn">
                  Subscribe
                </button>
              </form>
              
              <div className="footer-stats">
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Technologies</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Dedication</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <motion.div
              className="footer-copyright"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p>
                © {currentYear} Ameer Ul Haq. Made with <Heart size={16} className="heart-icon" /> 
                 in India. All rights reserved.
              </p>
            </motion.div>
            
            <motion.div
              className="footer-links-bottom"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/sitemap">Sitemap</Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        className="scroll-top-btn"
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;
