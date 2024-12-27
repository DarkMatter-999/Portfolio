import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'

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
        <a href="https://x.com/darkmatter_999">
        <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <div className="sep"> </div>
    </div>
  )
}

export default Navbar
