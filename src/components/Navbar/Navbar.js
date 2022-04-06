import React from 'react';
import './Navbar.scss';
import { images } from '../../constants';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo"/>
      </div>
      <ul className="app__navbar-links">
        {['Home', 'About', 'work', 'skills','contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div>
              <a href={`#${item}`}>{item}</a>
            </div>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {
          toggle && (
            <motion.div
              whileInView={{ x: [300, 0]}}
              transition={{ duration: 0.85, ease: 'easeOut' }}
              className="app__navbar-menu-card"
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {['Home', 'About', 'work', 'skills','contact'].map((item) => (
                  <li key={item}>
                    <div>
                      <a 
                        href={`#${item}`}
                        onClick={() => setToggle(false)}
                      >{item}</a>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar