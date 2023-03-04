import React from 'react'

import  { BiSearch } from 'react-icons/bi'
import { BsGearWideConnected } from 'react-icons/bs'

function TopNav() {
  return (
    <div className="top-nav">

      <img src="https://i.imgur.com/zsV00xq.png" className="top-nav__logo" alt="games-logo"/>  

      <form className="top-nav__search-form">
        <input type="text" className="top-nav__search-input" placeholder="Search games" />
        <button className="top-nav__search-button">
          <BiSearch />
        </button>
      </form>
      <div className="top-nav__user-nav">
        <div className="top-nav__user-icon-box">
          <BsGearWideConnected className="top-nav__user-settings"/>
        </div>
        <div className="top-nav__user-box">
          <img className="top-nav__user-photo" src="https://i.imgur.com/7PG0Tup.png" alt="user-img" />
          <span className="top-nav__user-name">Account</span>
        </div>
      </div>
    </div>
  )
}

export default TopNav