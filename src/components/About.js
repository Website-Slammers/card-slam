import React from 'react'
import { Link } from 'react-router-dom'

import AboutHeader from './AboutHeader'

function About() {
  return (
    <div className="about">

    <AboutHeader />

    <div className="about__main">

      <div className="playing-card playing-card--1 playing-card--s" data-text="1">&#9824;</div>

      <div className="playing-card playing-card--2 playing-card--s" data-text="2">&#9824; &#9824;</div>

      <div className="playing-card playing-card--3 playing-card--s" data-text="3">&#9824; &#9824; &#9824;</div>

      <div className="playing-card playing-card--4 playing-card--s" data-text="4">&#9824; &#9824; &#9824; &#9824;</div>

      <div className="playing-card playing-card--5 playing-card--s" data-text="5">&#9824; &#9824; &#9824; &#9824; &#9824;</div>

      <div className="playing-card playing-card--6 playing-card--s" data-text="6">&#9824; &#9824; &#9824; &#9824; &#9824; &#9824;</div>

      <div className="playing-card playing-card--7 playing-card--s" data-text="7">&#9824; &#9824; &#9824; &#9824; &#9824; &#9824; &#9824;</div>

      <div className="playing-card playing-card--8 playing-card--s" data-text="8">&#9824; &#9824; &#9824; &#9824; &#9824; &#9824; &#9824; &#9824;</div>

      <div className="playing-card playing-card--9 playing-card--s" data-text="9">&#9824; &#9824; &#9824; &#9824; &#9824; &#9824; &#9824; &#9824; &#9824;</div>

      <div className="playing-card playing-card--10 playing-card--s" data-text="X">&#9824; &#9824; &#9824; &#9824; &#9824; &#9824; &#9824; &#9824; &#9824; &#9824;</div>

      <div className="playing-card playing-card--J playing-card--s" data-text="J">Jack</div>

      <div className="playing-card playing-card--Q playing-card--s" data-text="Q">Queen</div>

      <div className="playing-card playing-card--K playing-card--s" data-text="K">King</div>

      {/* Hearts */}

      <div className="playing-card playing-card--1 playing-card--h" data-text="1">&#9829;</div>

      <div className="playing-card playing-card--2 playing-card--h" data-text="2">&#9829; &#9829;</div>

      <div className="playing-card playing-card--3 playing-card--h" data-text="3">&#9829; &#9829; &#9829;</div>

      <div className="playing-card playing-card--4 playing-card--h" data-text="4">&#9829; &#9829; &#9829; &#9829;</div>

      <div className="playing-card playing-card--5 playing-card--h" data-text="5">&#9829; &#9829; &#9829; &#9829; &#9829;</div>

      <div className="playing-card playing-card--6 playing-card--h" data-text="6">&#9829; &#9829; &#9829; &#9829; &#9829; &#9829;</div>

      <div className="playing-card playing-card--7 playing-card--h" data-text="7">&#9829; &#9829; &#9829; &#9829; &#9829; &#9829; &#9829;</div>

      <div className="playing-card playing-card--8 playing-card--h" data-text="8">&#9829; &#9829; &#9829; &#9829; &#9829; &#9829; &#9829; &#9829;</div>

      <div className="playing-card playing-card--9 playing-card--h" data-text="9">&#9829; &#9829; &#9829; &#9829; &#9829; &#9829; &#9829; &#9829; &#9829;</div>

      <div className="playing-card playing-card--10 playing-card--h" data-text="X">&#9829; &#9829; &#9829; &#9829; &#9829; &#9829; &#9829; &#9829; &#9829; &#9829;</div>

      <div className="playing-card playing-card--J playing-card--h" data-text="J">Jack</div>

      <div className="playing-card playing-card--Q playing-card--h" data-text="Q">Queen</div>

      <div className="playing-card playing-card--K playing-card--h" data-text="K">King</div>

      {/* Clubs */}

      <div className="playing-card playing-card--1 playing-card--c" data-text="1">&#9827;</div>

      <div className="playing-card playing-card--2 playing-card--c" data-text="2">&#9827; &#9827;</div>

      <div className="playing-card playing-card--3 playing-card--c" data-text="3">&#9827; &#9827; &#9827;</div>

      <div className="playing-card playing-card--4 playing-card--c" data-text="4">&#9827; &#9827; &#9827; &#9827;</div>

      <div className="playing-card playing-card--5 playing-card--c" data-text="5">&#9827; &#9827; &#9827; &#9827; &#9827;</div>

      <div className="playing-card playing-card--6 playing-card--c" data-text="6">&#9827; &#9827; &#9827; &#9827; &#9827; &#9827;</div>

      <div className="playing-card playing-card--7 playing-card--c" data-text="7">&#9827; &#9827; &#9827; &#9827; &#9827; &#9827; &#9827;</div>

      <div className="playing-card playing-card--8 playing-card--c" data-text="8">&#9827; &#9827; &#9827; &#9827; &#9827; &#9827; &#9827; &#9827;</div>

      <div className="playing-card playing-card--9 playing-card--c" data-text="9">&#9827; &#9827; &#9827; &#9827; &#9827; &#9827; &#9827; &#9827; &#9827;</div>

      <div className="playing-card playing-card--10 playing-card--c" data-text="X">&#9827; &#9827; &#9827; &#9827; &#9827; &#9827; &#9827; &#9827; &#9827; &#9827;</div>

      <div className="playing-card playing-card--J playing-card--c" data-text="J">Jack</div>

      <div className="playing-card playing-card--Q playing-card--c" data-text="Q">Queen</div>

      <div className="playing-card playing-card--K playing-card--c" data-text="K">King</div>

      {/* Diamonds */}

      <div className="playing-card playing-card--1 playing-card--d" data-text="1">&#9830;</div>

      <div className="playing-card playing-card--2 playing-card--d" data-text="2">&#9830; &#9830;</div>

      <div className="playing-card playing-card--3 playing-card--d" data-text="3">&#9830; &#9830; &#9830;</div>

      <div className="playing-card playing-card--4 playing-card--d" data-text="4">&#9830; &#9830; &#9830; &#9830;</div>

      <div className="playing-card playing-card--5 playing-card--d" data-text="5">&#9830; &#9830; &#9830; &#9830; &#9830;</div>

      <div className="playing-card playing-card--6 playing-card--d" data-text="6">&#9830; &#9830; &#9830; &#9830; &#9830; &#9830;</div>

      <div className="playing-card playing-card--7 playing-card--d" data-text="7">&#9830; &#9830; &#9830; &#9830; &#9830; &#9830; &#9830;</div>

      <div className="playing-card playing-card--8 playing-card--d" data-text="8">&#9830; &#9830; &#9830; &#9830; &#9830; &#9830; &#9830; &#9830;</div>

      <div className="playing-card playing-card--9 playing-card--d" data-text="9">&#9830; &#9830; &#9830; &#9830; &#9830; &#9830; &#9830; &#9830; &#9830;</div>

      <div className="playing-card playing-card--10 playing-card--d" data-text="X">&#9830; &#9830; &#9830; &#9830; &#9830; &#9830; &#9830; &#9830; &#9830; &#9830;</div>

      <div className="playing-card playing-card--J playing-card--d" data-text="J">Jack</div>

      <div className="playing-card playing-card--Q playing-card--d" data-text="Q">Queen</div>

      <div className="playing-card playing-card--K playing-card--d" data-text="K">King</div>

      </div>

    </div>
  )
}

export default About