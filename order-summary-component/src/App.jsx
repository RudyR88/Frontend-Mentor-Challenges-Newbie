import React from 'react'
import { data } from './js/data.js'
import './scss/components/Card.css'

function App() {
  const {
    cardImg,
    title,
    txt,
    icon,
    planTitle,
    planPrice
  } = data
  return (
    <main className='card container flex-column'>
      <img className='decor' src={cardImg} alt='' aria-hidden='true'/>
      <h2>{title}</h2>
      <p>{txt}</p>
      <div className='plan flex-between'>
        <div className='flex'>
          <img className='icon music-icon' src={icon} alt='' aria-hidden='true'/>
          <div>
            <h3>{planTitle}</h3>
            <span className='price'>${planPrice}/year</span>
          </div>
        </div>
          <a href="#change" className='change'>Change</a>
      </div>
      <button className='btn btn-txt btn__payment'>Proceed to Payment</button>
      <a href="#cancel" className='cancel'>cancel order</a>
    </main>
  )
}

export default App
