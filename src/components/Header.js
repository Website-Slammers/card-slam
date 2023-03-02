import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header">

      <div className="header__textbox">
        <h2 className="heading-secondary">

            <span className="heading-secondary--main">
              Card Games
            </span>
            <span className="heading-secondary--sub">
              by Web Slammers
            </span>

        </h2>
      </div>

      <div className="header__nav">
        <div className="header__nav-item">
          about</div>
        <div className="header__nav-item">
          options</div>
      </div>

    </div>
  )
}

export default Header