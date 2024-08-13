import React, { useRef, useState, useEffect } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import gmailImage from '../../images/gmail.png';
import linkedIn from '../../images/linkedin.png';
import github from '../../images/github.png';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let valid = true;
    let errors = {};

    // Validate name
    if (!formData.name.trim().includes(' ')) {
      errors.name = 'Full name must contain at least two words separated by a space';
      valid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      errors.email = 'Invalid email address';
      valid = false;
    }

    // Validate message
    if (formData.message.trim() === '') {
      errors.message = 'Please enter message';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const form = useRef();
  const contactRef = useRef(null);
  const controls = useAnimation();
  const inView = useInView(contactRef, { triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs
        .sendForm('service_etwcns2', 'template_b4573mu', form.current, {
          publicKey: 'nfAcFoaVTCcSOyJAk',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
      // Reset the form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setErrors({});
    }
  };

  return (
    <div id="contact">
      <motion.div
        ref={contactRef}
        className="Contact-title"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 2 }}
      >
        <h1>Contact Me</h1>
      </motion.div>

      <motion.div
        ref={contactRef}
        className="contact"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 2 }}
      >
        <div className="contact-menu">
          <a href="mailto:sandakelumlakshitha69@gmail.com"><img src={gmailImage} alt="gmail" /></a>
          <a href="https://www.linkedin.com/in/lakshitha-sandakelum-22013b313/"><img src={linkedIn} alt="linkedin" /></a>
          <a href="https://github.com/Lakshitha6"><img src={github} alt="github" /></a>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit} ref={form}>
            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="input-group">
              <label>Your Message</label>
              <textarea
                name="message"
                rows="3"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <span className="error">{errors.message}</span>}
            </div>

            <button type="submit">SEND</button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
