import React, { useRef, useEffect } from 'react';
import './About.css';
import aboutImage from '../images/about.png'
import htmlImage from '../images/html.png'
import cssImage from '../images/css.png'
import jsImage from '../images/js.png'
import reactImage from '../images/react.png'
import phpImage from '../images/php.png'
import { motion, useAnimation, useInView } from 'framer-motion';

export default function About() {

    const aboutImageRef = useRef(null);
    const controls = useAnimation();
    const inView = useInView(aboutImageRef, { triggerOnce: false });
  
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      } else {
        controls.start('hidden');
      }
    }, [controls, inView]);
  

  return (

    <div>


        <div className='header' >

        <h1>About Me</h1>    
        </div>

        <div className="details" id='about'>
        <motion.div
          ref={aboutImageRef}
          className="about-image"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 2 }}
        >
          <img src={aboutImage} alt="about" />
        </motion.div>

        <motion.div
          ref={aboutImageRef}
          className="my-info"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 2 }}
        >

                <p>I'm a BSc (hons) Computer Science undergraduate student at the University of Kelaniya.<br/>
                   Learning new technologies and having clear knowledge and experience about <span> HTML, CSS, JavaScript ,
                   React-js and also PHP </span>.  <br/> <br/>         
                </p>

                <p>Pursuing artificial intelligence and new technologies that are coming to the world and industry.</p><br/><br/>
                    <h2>Skills</h2><br/><br/>

                <div className="skills">
                    <div className="technology"><img src={htmlImage} alt="html" /></div>
                    <div className="technology"><img src={cssImage} alt="css" /></div>
                    <div className="technology"><img src={jsImage} alt="js" /></div>
                    <div className="technology"><img src={reactImage} alt="react" /></div>
                    <div className="technology"><img src={phpImage} alt="php" /></div>
                </div>
            </motion.div>

        </div>
    </div>

  )
}
