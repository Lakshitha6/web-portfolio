import React, { useRef, useEffect } from 'react';
import './Services.css';
import ServicesData from '../Services/ServicesData';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function Services() {
  const servicesRef = useRef(null);
  const controls = useAnimation();
  const inView = useInView(servicesRef, { triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <div className='services'>
      <div className="services-title">
        <h1>My Work</h1>
      </div>

      <motion.div
        ref={servicesRef}
        className="services-container"
        id='portfolio'
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 2 }}
      >
        {ServicesData.map((service, index) => (
          <div key={index} className='services-format'>
            <h3>{service.No}</h3>
            <h2>{service.Name}</h2>
            <p>{service.Des}</p>

            <div className="services-readmore">
              <a href={service.Link} target="_blank" rel="noopener noreferrer">See Project..</a>
              <a href={service.Code} target="_blank" rel="noopener noreferrer">See Code...</a>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
