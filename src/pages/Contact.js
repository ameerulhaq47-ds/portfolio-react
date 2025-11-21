import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    await emailjs.send(
      'service_t54wcr6',
      'template_dzpvs2b',
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'BLXrPWrNVac0o8U07'
    );
    
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  } catch (error) {
    alert('Failed to send message. Please try again.');
    console.error('EmailJS error:', error);
  } finally {
    setIsSubmitting(false);
  }
};

  const contactInfo = [
    {
      icon: <Mail className="contact-icon" />,
      title: "Email",
      details: "ameerulhaq081@gmail.com",
      link: "ameerulhaq081@gmail.com"
    },
    {
      icon: <Phone className="contact-icon" />,
      title: "Phone",
      details: "+91 80501 31023",
      link: "tel:+918050131023"
    },
    {
      icon: <MapPin className="contact-icon" />,
      title: "Location",
      details: "Karnataka, India",
      link: null
    }
  ];

  const socialLinks = [
  { icon: <FaGithub size={24} />, url: "https://github.com/ameerulhaq47-ds", label: "GitHub" },
  { icon: <FaLinkedin size={24} />, url: "https://linkedin.com/in/ameerulhaq081", label: "LinkedIn" },
  { icon: <FaInstagram size={24} />, url: "https://instagram.com/ameer.47_", label: "Instagram" }
];


  return (
    <div className="contact">
      <div className="container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Get In Touch</h1>
          <p className="contact-subtitle">
            Let's discuss opportunities and bring ideas to life together
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Let's Talk</h2>
            <p>
              I'm always interested in new opportunities, whether it's a full-time position, 
              freelance project, or collaboration. Feel free to reach out!
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="contact-item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {info.icon}
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link}>{info.details}</a>
                    ) : (
                      <p>{info.details}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="social-section">
              <h3>Follow Me</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                    <span>{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
