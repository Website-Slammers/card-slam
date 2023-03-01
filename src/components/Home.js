import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
            
        <div className="home__textbox">
          <h1 className="heading-primary heading-primary--home">
              <span className="heading-primary--main">
                Card Games</span>
              <span className="heading-primary--sub">
                by Web Slammers</span>
          </h1>

          <br /><br />
          
          <Link to="/play" className="btn btn--home">
              Play<span></span></Link>
              

        </div>


    </div>
  )
}

export default Home