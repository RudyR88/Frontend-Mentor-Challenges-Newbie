import React, { useState, useEffect } from 'react'
import Stat from './components/Stat'
import { data } from './js/data.js'
import './scss/components/Card.css'

function App() {

  const getWindowWidth = () => {
    const {innerWidth: width} = window
    return width
  }

  const [windowWidth, setWindowWidth] = useState(getWindowWidth);

  const {
    mobileImg,
    desktopImg,
    txt,
    stats
  } = data

  const statsComp = stats.map((stat, index) => <Stat key={index} stat={stat} />);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  console.log(windowWidth)

  return (
    <main className='card container'>
      <div className='gradient'>
        {
          windowWidth > 1000 ? 
          <img className='dec-img' src={desktopImg} alt='' aria-hidden='true'/> :
          <img className='dec-img' src={mobileImg} alt='' aria-hidden='true'/>
        }
      </div>
      <div className='content'>
        <h2>Get <span className='accent'>insights</span> that help your business grow.</h2>
        <p>{txt}</p>
        <div className='stat-container'>
          {statsComp}
        </div>
      </div>
    </main>
  )
}

export default App
