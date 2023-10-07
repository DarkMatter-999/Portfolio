import React from 'react'

import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <div className="leftheader">
          <h1>Lakshyajeet Singh Goyal</h1>
      </div>
      <div className="rightheader">
        <ul>
          <li><a href="" className="active">Home</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Work</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header

