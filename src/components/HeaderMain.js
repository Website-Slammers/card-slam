import React from 'react'
import { Link } from 'react-router-dom'

function HeaderMain() {
  return (
    <div className="header-main">
            
        <div className="header-main__textbox">
          <h1 className="heading-primary heading-primary--header-main">
              <span className="heading-primary--main">
                CARD GAMES</span>
              {/* <span className="heading-primary--sub">
                by Web Slammers</span> */}
          </h1>

          {/* <br /><br /> */}
          {/* <br /><br /> */}
          <br />
          
          <Link to="/play" className="btn btn--header-main">
              Play<span></span></Link>

        </div>

        {/* Header PNG */}
        <div className="header-main__img">
          <img src="https://i.imgur.com/t3TQZmq.png" />
        </div>

    </div>
  )
}

export default HeaderMain