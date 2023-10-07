import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

import './NavBar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <a href="">
            <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="">
            <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="">
        <FontAwesomeIcon icon={faTwitter} />
        </a>
        <div className="sep"> </div>
    </div>
  )
}

export default Navbar
