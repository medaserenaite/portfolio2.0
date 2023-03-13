import './Home.scss';
import React, { useState } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiCopy, FiCoffee } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Home() {
  const [active, setActive] = useState(false)

  const handleChangeActive = () => {
    // copies email to clipboard
    navigator.clipboard.writeText('meda.serenaite@gmail.com')

    // sets 'copied' state
    setActive((previous) => {return !previous;});    

    // resets 'copied' state to initial
    setTimeout(() => {
        setActive((previous) => { return !previous; });
    }, 1000);
  };

  return (
      <div className='page-wrapper'>
        <div className='intro'>
          <h1>Meda Serenaite</h1>
          <p className='intro__role'>frontend software engineer</p>
          
          <div className="icon-container">
            
            <div className='icon-wrapper'>
              <a href="https://github.com/medaserenaite" target={'_blank'}>
                <FiGithub className="icon"/>
              </a>
            </div>

            <div className='icon-wrapper'>
              <a href="https://www.linkedin.com/in/medaserenaite/" target={'_blank'}>
                <FiLinkedin className="icon"/>
              </a>
            </div>

            <div className='icon-wrapper checkmark' onClick={() => handleChangeActive()}>
              { active ? 
                <><FiCopy className="icon"/><div className='icon-text copied-notify con--copied'>copied!</div></> 
              : 
                <FiMail className="icon"/>  }
            </div>

            <div className='icon-wrapper'>
              <FiMapPin className="icon--location"/>
              <div className='icon-text'>CHICAGO, IL</div>
            </div>
          </div>

          <div className='work-icon'>
            <Link to="/work">
                <FiCoffee className="icon"/>
                <div className='icon-text'>WORK</div>
            </Link>
            </div>
          </div>
        </div>
  );
}

