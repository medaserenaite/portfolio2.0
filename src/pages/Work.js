import '../App.scss';
import React, { useState } from 'react'
import keycom from '../../src/images/keycom.png'
import keyhcp from '../../src/images/keyhcp.png'
import keylencom from '../../src/images/keylencom.png'
import keylenhcp from '../../src/images/keylenhcp.png'
import rhino from '../../src/images/rhinodox2.png'
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiCopy, FiExternalLink, FiCoffee  } from 'react-icons/fi';

export default function Work() {
  const [active, setActive] = useState(false)

  const handleChangeActive = () => {
    setActive((previous) => {
      return !previous;
    });
  };

  let projects = [
    {
      name: 'rhinodox',
      image: rhino,
      technologies: [ 'Angular 12', 'Typescript', 'Figma'],
    },
    {
      name: 'keytruda HCP',
      image: keyhcp,
      technologies: [ 'React', 'Typescript', 'Gatsby', 'styled-components', 'Storybook'],
      link: 'https://www.keytrudahcp.com'
    },
    {
        name: 'ketruda',
        image: keycom,
        technologies: [ 'handlebars', 'vanillaJS', 'SCSS' ],
        link: 'https://www.keytruda.com'
      },
    {
      name: 'keytruda lenvima',
      image: keylencom,
      technologies: [ 'handlebars', 'vanillaJS', 'SCSS' ],
      link: 'https://www.keytrudalenvima.com'
    },
    {
      name: 'keytruda lenvima HCP',
      image: keylenhcp,
      technologies: [ 'handlebars', 'vanillaJS', 'SCSS' ],
      link: 'https://www.keytrudalenvimahcp.com'
    }
  ]

  return (
    <div className="App">
      <div className='page-wrapper'>

        <div className='project-wrapper'>
        <h2>Projects</h2>
        {projects.map((project) =>
          <div className='project'>
          <div className='image-wrapper'><img src={project.image} alt=""/></div>
          <div className='project__details'>
            <div className='project__name'>{project.name}</div>
            <div className='details-wrapper'>
              <p>Technologies used:</p>
              <ul>
                {project.technologies.map((techItem)=>
                <li>{techItem}</li>
                )}
              </ul>
              { project.link? 
                    <a href={project.link} target={'_blank'}><FiExternalLink className='icon'/> visit project site</a>
                :
                    <a>Project samples coming soon</a>
                }
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
</div>
  );
}

