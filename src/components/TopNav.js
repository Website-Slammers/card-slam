import React from 'react'
import { Link } from 'react-router-dom'

import  { BiSearch } from 'react-icons/bi'
import { BsGearWideConnected } from 'react-icons/bs'

function TopNav() {
  return (
    <div className="top-nav-container">

      <div className="top-nav">

        <Link to="/"><img src="https://i.imgur.com/zsV00xq.png" className="top-nav__logo" alt="games-logo"/>  </Link>

        <form className="top-nav__search-form">
          <input type="text" className="top-nav__search-input" placeholder="Search games" />
          <button name="search" className="top-nav__search-button">
            <BiSearch className="top-nav__search-button--icon"/>
          </button>
        </form>
        <div className="top-nav__user-nav">
          <div className="top-nav__user">
            <span className="top-nav__user--name">Account</span>
            <img className="top-nav__user--photo" src="https://i.imgur.com/7PG0Tup.png" alt="user-img" />
            
          </div>
          <div className="top-nav__user-icon-box">
            <BsGearWideConnected className="top-nav__user-settings"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNav