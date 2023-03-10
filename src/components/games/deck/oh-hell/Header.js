import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header">

      <div className="header__textbox">
        <h2 className="heading-secondary">
          <Link to="/">
            <span className="heading-secondary--main">
              Oh Hell
            </span>
          </Link>
        </h2>
      </div>

      <div className="header__nav">
        <Link to="/" className="header__nav-item">
          home</Link>
        <div className="header__nav-item">
          new game</div>
        <div className="header__nav-item">
          rules</div>
        <div className="header__nav-item">
          options</div>
        <div className="header__nav-item">
          multiplayer</div>
      </div>

    </div>
  )
}

export default Header