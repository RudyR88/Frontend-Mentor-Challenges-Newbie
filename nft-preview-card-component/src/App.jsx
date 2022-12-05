import React from 'react'
import { data } from './js/data.js'
import './scss/components/Card.css'

function App() {

  const {
    cardImg,
    cardImgAlt,
    title,
    desc,
    iconImg,
    unit,
    timeRemaining,
    creatorImg,
    creator
  } =  data

  return (
    <main className='card container'>
      <a href="#productImg" className='img'>
        <img className='product-img' src={cardImg} alt={cardImgAlt}/>
        <div className='image-overlay flex-center'>
          <img className='icon icon-view' src='../assets/images/icon-view.svg' alt='' aria-hidden='true'/>
        </div>
      </a>
      <h2><a href="#product">{title}</a></h2>
      <p>{desc}</p>
      <div className='flex-between info'>
        <div className='flex'>
          <img className='icon' src={iconImg} alt='' aria-hidden='true'/>
          <span className='unit-txt'>{unit}</span>
        </div>
        <div className='flex'>
          <img className='icon icon-clock' src='../assets/images/icon-clock.svg' alt='' aria-hidden='true'/>
          <span>{timeRemaining}</span>
        </div>
      </div>
      <hr />
      <div className='flex'>
        <img className='avatar' src={creatorImg} alt='' aria-hidden='true'/>
        <h3>Creation of <a href='#creator'>{creator}</a></h3>
      </div>
    </main>
  )
}

export default App
