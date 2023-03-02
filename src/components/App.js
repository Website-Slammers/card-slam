import React from 'react'
import { Outlet } from 'react-router-dom'

import './css/style.css'

import Footer from './Footer'

function App() {
  return (
    <div>

      <Outlet context />

      <Footer />

    </div>
  )
}

export default App