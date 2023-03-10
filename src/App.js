import './App.scss';
import React, { useState } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiCopy, FiCoffee  } from 'react-icons/fi';
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Work from './pages/Work';

export default function App() {
  const [active, setActive] = useState(false)

  const handleChangeActive = () => {
    setActive((previous) => {
      return !previous;
    });
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
    </Routes>
//     <div className="App">
//       <div className='page-wrapper'>
//         <div className='intro'>
//           <h1>Meda Serenaite</h1>
//           <p className='intro__role'>frontend software engineer</p>
//           <div className="icon-container">
            

//             <div className='icon-wrapper'>
//               <a href="https://github.com/medaserenaite" target={'_blank'}>
//                 <FiGithub className="icon"/>
//               </a>
//             </div>

//             <div className='icon-wrapper'>
//               <a href="https://www.linkedin.com/in/medaserenaite/" target={'_blank'}>
//                 <FiLinkedin className="icon"/>
//               </a>
//             </div>

//             <div className='icon-wrapper checkmark' onClick={() => handleChangeActive()}>
//               { active ? <FiCopy className="icon copied"/> : <FiMail className="icon"/>  }
//             </div>

//             <div className='icon-wrapper'>
//               <FiMapPin className="icon-location"/>
//               <div className='icon-text'>CHICAGO, IL</div>
//             </div>

//             <div className='icon-wrapper'>
//               <a href="/work">
//                 <FiCoffee className="icon"/>
//               </a>
//               <div className='icon-text'>WORK</div>
//             </div>
//           </div>
//     </div>
//   </div>
// </div>
  );
}

