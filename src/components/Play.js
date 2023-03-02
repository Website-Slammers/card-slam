import React from 'react'
import { Link } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

function Play() {
  return (
    <div className="play">

      <Header />

      <h3 className="heading-tertiary">CARD GAMES</h3>

      <div className="play__main">

        <Link className="play__card play__card--hearts" to="/play/Hearts"><span>
          Hearts</span></Link>

        <Link className="play__card play__card--spades" to="/play/Spades"><span>
          Spades</span></Link>

      </div>

      <h3 className="heading-tertiary">MORE GAMES</h3>

      <div className="play__main">

        <a className="play__card play__card--sudoku" target="_blank" href="https://sudoku-slam.netlify.app"><span>
          Sudoku</span></a>

        <a className="play__card play__card--connect-four" target="_blank" href="https://connect4bydrewford.netlify.app"><span>
          Connect 4</span></a>

        <a className="play__card play__card--pixelate" target="_blank" href="https://pixel8game.netlify.app"><span>
          Pixelate</span></a>

        <a className="play__card play__card--puppy-clicker" target="_blank" href="https://puppy-clicker.netlify.app"><span>
          Puppy Clicker</span></a>

        <a className="play__card play__card--pokemon-picker" target="_blank" href="https://gotta-pick-em-all.netlify.app"><span>
          Pok&eacute; Picker</span></a>


      </div>

      {/* <Footer /> */}
      
    </div>
  )
}

export default Play