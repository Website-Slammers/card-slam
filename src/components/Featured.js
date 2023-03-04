import React from 'react'
import { Link } from 'react-router-dom'

function Featured() {
  return (
    <div className="featured">

      <h2 className="featured__title">Featured</h2>

      <div className="featured__container">
        <Link to="/play/hearts">
          <div className="featured__feature featured__feature--lg featured__feature--hearts">
            <p>Hearts</p>
          </div>
        </Link>

        <div className="featured__small-box">
          <Link to="/play/spades"><div className="featured__feature featured__feature--sm featured__feature--spades">
            <p>Spades</p>
          </div></Link>
          <Link to="/play/blackjack"><div className="featured__feature featured__feature--sm featured__feature--blackjack">
            <p>Blackjack</p>
          </div></Link>
        </div>

      </div>

    </div>
  )
}

export default Featured