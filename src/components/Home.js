import React from 'react'
import { Link } from 'react-router-dom'

import HeaderMain from './HeaderMain'
import Featured from './Featured'
import Play from './Play'

function Home() {
  return (
    <div>
      
      <HeaderMain />
      <Featured />
      {/* <Play /> */}

    </div>
  )
}

export default Home