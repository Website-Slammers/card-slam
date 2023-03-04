import React from 'react'
import { Link } from 'react-router-dom'

import Play from './Play'

function Home() {
  return (
    <div className="home">
      
      {/* Home Header Start */}
      <div className="header-main">
        <div className="header-main__textbox">
          <h1 className="heading-primary heading-primary--header-main">
              <span className="heading-primary--main">
                CARD GAMES</span>
              {/* <span className="heading-primary--sub">
                by Web Slammers</span> */}
          </h1>
          <br />
          <Link to="/play" className="btn btn--header-main">
              Play<span></span></Link>
        </div>
        {/* Header PNG */}
        <div className="header-main__img">
          <img src="https://i.imgur.com/t3TQZmq.png" />
        </div>
      </div> {/* Home Header End */}

      {/* Featured Games Start */}
      <div className="featured">

        <h2 className="featured__title">Featured</h2>

        <Link className="featured--lg" to="/play/hearts">
          <div className="featured__feature featured__feature--hearts">
            <p>Hearts</p></div></Link>

        <Link className="featured--sm-1"to="/play/spades"><div className="featured__feature featured__feature--spades">
          <p>Spades</p></div></Link>

        <Link className="featured--sm-2" to="/play/blackjack"><div className="featured__feature featured__feature--blackjack">
          <p>Blackjack</p></div></Link>

      </div>
      {/* Featured Games End */}



    </div>
  )
}

export default Home