import React from 'react'
import { Link } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

function Play() {
  return (
    <div className="play">

      <Header />

      <div className="play__main">

        <Link className="play__card play__card--hearts" to="/play/Hearts"><span>Hearts</span></Link>

        <Link className="play__card play__card--spades" to="/play/Spades"><span>Spades</span></Link>

        <a className="play__card play__card--sudoku" target="_blank" href="https://sudoku-slam.netlify.app"><span>Sudoku</span></a>

        <a className="play__card play__card--connect-four" target="_blank" href="https://connect4bydrewford.netlify.app"><span>Connect 4</span></a>

        <Link className="play__card play__card--hearts" to="/play/Hearts"><span>Hearts</span></Link>

        <Link className="play__card play__card--spades" to="/play/Spades"><span>Spades</span></Link>

        <Link className="play__card play__card--hearts" to="/play/Hearts"><span>Hearts</span></Link>

        <Link className="play__card play__card--spades" to="/play/Spades"><span>Spades</span></Link>

        <Link className="play__card play__card--hearts" to="/play/Hearts"><span>Hearts</span></Link>

        <Link className="play__card play__card--spades" to="/play/Spades"><span>Spades</span></Link>

        <Link className="play__card play__card--hearts" to="/play/Hearts"><span>Hearts</span></Link>

        <Link className="play__card play__card--spades" to="/play/Spades"><span>Spades</span></Link>

        <Link className="play__card play__card--hearts" to="/play/Hearts"><span>Hearts</span></Link>

        <Link className="play__card play__card--spades" to="/play/Spades"><span>Spades</span></Link>

        <Link className="play__card play__card--hearts" to="/play/Hearts"><span>Hearts</span></Link>

        <Link className="play__card play__card--spades" to="/play/Spades"><span>Spades</span></Link>

        <Link className="play__card play__card--hearts" to="/play/Hearts"><span>Hearts</span></Link>

        <Link className="play__card play__card--spades" to="/play/Spades"><span>Spades</span></Link>

        <Link className="play__card play__card--hearts" to="/play/Hearts"><span>Hearts</span></Link>

        <Link className="play__card play__card--spades" to="/play/Spades"><span>Spades</span></Link>

        <Link className="play__card play__card--hearts" to="/play/Hearts"><span>Hearts</span></Link>

        <Link className="play__card play__card--spades" to="/play/Spades"><span>Spades</span></Link>

        <Link className="play__card play__card--hearts" to="/play/Hearts"><span>Hearts</span></Link>

        <Link className="play__card play__card--spades" to="/play/Spades"><span>Spades</span></Link>

        <Link className="play__card play__card--hearts" to="/play/Hearts"><span>Hearts</span></Link>

        <Link className="play__card play__card--spades" to="/play/Spades"><span>Spades</span></Link>

        <Link className="play__card play__card--hearts" to="/play/Hearts"><span>Hearts</span></Link>

        <Link className="play__card play__card--spades" to="/play/Spades"><span>Spades</span></Link>

      </div>

      <Footer />
      
    </div>
  )
}

export default Play