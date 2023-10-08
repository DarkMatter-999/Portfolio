import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

import './NavBar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <a href="https://github.com/DarkMatter-999">
            <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/darkmatter999">
            <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://twitter.com/darkmatter_999">
        <FontAwesomeIcon icon={faTwitter} />
        </a>
        <div className="sep"> </div>
    </div>
  )
}

export default Navbar
