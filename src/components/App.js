import React from 'react'
import { Outlet } from 'react-router-dom'

import './css/style.css'

import TopNav from './TopNav'
import Footer from './Footer'

function App() {
  return (
    <div className="app-return">

      <TopNav />

      <Outlet context className="outlet-context"/>
{/* 
      <Footer /> */}

    </div>
  )
}

export default App