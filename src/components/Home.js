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

      {/* All Games Start*/}
      <div className="all-games">

        <h2 className="all-games__title">All Games</h2>

        <div className="all-games__main">

          <Link className="all-games__card all-games__card--hearts" to="/hearts"><span>
            Hearts</span></Link>

          <Link className="all-games__card all-games__card--spades" to="/spades"><span>
            Spades</span></Link>

          <Link className="all-games__card all-games__card--oh-hell" to="/oh-hell"><span>
            Oh Hell</span></Link>

          <Link className="all-games__card all-games__card--blackjack" to="/blackjack"><span>
            Blackjack</span></Link>

          <Link className="all-games__card all-games__card--euchre" to="/spades"><span>
            Euchre</span></Link>

          <Link className="all-games__card all-games__card--german-whist" to="/oh-hell"><span>
            German Whist</span></Link>

          <a className="all-games__card all-games__card--sudoku" target="_blank" href="https://sudoku-slam.netlify.app"><span>
          Sudoku</span></a>

          <a className="all-games__card all-games__card--connect-four" target="_blank" href="https://connect4bydrewford.netlify.app"><span>
            Connect 4</span></a>

          <a className="all-games__card all-games__card--pixelate" target="_blank" href="https://pixel8game.netlify.app"><span>
            Pixelate</span></a>

          <a className="all-games__card all-games__card--puppy-clicker" target="_blank" href="https://puppy-clicker.netlify.app"><span>
            Puppy Clicker</span></a>

          <a className="all-games__card all-games__card--pokemon-picker" target="_blank" href="https://gotta-pick-em-all.netlify.app"><span>
            Pok&eacute;mon Picker</span></a>

        </div> {/* all games main End */}
      </div>
      {/* All Games End */}

    </div>
  )
}

export default Home