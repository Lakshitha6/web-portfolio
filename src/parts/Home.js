import React, { useRef, useEffect, useState } from 'react';
import Typed from 'typed.js';
import './Home.css';
import { Link } from 'react-scroll';
import logo from '../images/logo.png';
import dropdownicon from '../images/menu.png';
import homeimg from "../images/home.png";
import { motion, useAnimation, useInView } from 'framer-motion';

export default function Home() {

  const dynamicH3El = useRef(null);

  useEffect(() => {
    let typedStrings = ["omputer Science Undergraduate |<br> DeVops | AI"];
    
    if (window.innerWidth <= 400) {
      typedStrings = ["omputer Science<br> Undergraduate |<br> DeVops | AI"];
    }

    const typedH3 = new Typed(dynamicH3El.current, {
      strings: typedStrings,
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });

    const handleResize = () => {
      if (window.innerWidth <= 401) {
        typedH3.strings = ["omputer Science<br> Undergraduate |<br> DeVops | AI"];
      } else {
        typedH3.strings = ["omputer Science Undergraduate |<br> DeVops | AI"];
      }
      typedH3.reset(); // Reset the animation with the new strings
    };

    window.addEventListener('resize', handleResize);

    return () => {
      typedH3.destroy();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [showMenu, setShowMenu] = useState(false);

  const homeImageRef = useRef(null);
  const controls = useAnimation();
  const inView = useInView(homeImageRef, { triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <div>
      <nav className='navbar'>
        <img src={logo} alt='logo' className='logo' />
        <div className='menu'>
          <Link activeClass='active' to='home' spy={true} smooth={true} offset={-120} duration={500} className='list'>Home</Link>
          <Link activeClass='active' to='about' spy={true} smooth={true} offset={-120} duration={500} className='list'>About</Link>
          <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-110} duration={500} className='list'>Projects</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='list'>Contact</Link>
        </div>
        <img src={dropdownicon} alt='Mobmenu' className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
        <div className='navMenu' style={{ display: showMenu ? 'flex' : 'none' }}>
          <Link activeClass='active' to='home' spy={true} smooth={true} offset={-120} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Home</Link>
          <Link activeClass='active' to='about' spy={true} smooth={true} offset={-110} duration={500} className='listItem' onClick={() => setShowMenu(false)}>About</Link>
          <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-110} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Projects</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-120} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Contact</Link>
        </div>
      </nav>

      <div className="home">
        <div className="info" id='home'>
          <h1>I'm Lakshitha Sandakelum<br /></h1>
          <h3> <span>C</span><span ref={dynamicH3El}></span></h3>
        </div>

        <motion.div
          ref={homeImageRef}
          className="home-image"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 2 }}
        >
          <img src={homeimg} alt="home" />
        </motion.div>
      </div>
    </div>
  );
}