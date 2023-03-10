import '../App.scss';
import React, { useState } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiCopy, FiCoffee  } from 'react-icons/fi';

export default function Home() {
  const [active, setActive] = useState(false)

  const handleChangeActive = () => {
    setActive((previous) => {
      return !previous;
    });
  };

//   onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}

  return (
    <div className="App">
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

            <div className='icon-wrapper checkmark'>
            {/* onClick={() => handleChangeActive()} */}
              {/* { active ?  */}
                <><FiMail className="icon"/><div className='icon-text'> meda.serenaite@gmail.com</div></> 
                {/* copied-notify  icon--copied*/}
              {/* : 
                <FiMail className="icon"/>  } */}
            </div>

            <div className='icon-wrapper'>
              <FiMapPin className="icon--location"/>
              <div className='icon-text'>CHICAGO, IL</div>
            </div>
          </div>

          <div className='work-icon'>
              <a href="/work">
                <FiCoffee className="icon"/>
                <div className='icon-text'>WORK</div>
              </a>
            </div>
    </div>
  </div>
</div>
  );
}

