import React from 'react'
import { Link } from 'react-router-dom'

function Play() {
  return (
    <div className="play">

      <div className="play__main">
        <Link className="play__card play__card--hearts" to="/play/Hearts"><span>Hearts</span></Link>
        <Link className="play__card" to="/play/Spades"><span>Spades</span></Link>
      </div>
      
    </div>
  )
}

export default Play