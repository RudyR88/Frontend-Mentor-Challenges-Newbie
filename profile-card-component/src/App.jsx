import React from 'react'
import { data } from './js/data.js'
import Stat from './components/Stat.jsx'
import './scss/components/Card.css'

function App() {
  const {
    cardDecImg,
    user,
    name,
    age,
    location,
    stats
  } = data

  const statComps = stats.map((stat, index) => <Stat key={index} stat={stat} />)

  return (
    <>
    <img className='dec-img dec-img--top' src='../assets/images/bg-pattern-top.svg' alt='' aria-hidden='true'/>
    <img className='dec-img dec-img--bottom' src='../assets/images/bg-pattern-bottom.svg' alt='' aria-hidden='true'/>
    <main className='card container flex-column'>
      <img className='card__dec' src={cardDecImg} alt='' aria-hidden='true'/>
      <img className='card__avatar' src={user} alt={`${user} profile img`}/>
      <div className='card__info'>
        <div className='card__info__name flex'>
          <h2>{name}</h2>
          <span>{age}</span>
        </div>
        <span className='location'>{location}</span>
      </div>
      <hr />
      <div className='card__stats flex-row-between'>
        {statComps}
      </div>
    </main>
    </>
  )
}

export default App
