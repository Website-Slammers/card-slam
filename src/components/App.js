import React from 'react'
import { Outlet } from 'react-router-dom'

import './css/style.css'

import Footer from './Footer'
import Play from './Play'

function App() {
  return (
    <div>

      <Outlet context />

      <Footer />

    </div>
  )
}

export default App