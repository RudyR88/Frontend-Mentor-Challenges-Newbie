import React from 'react'
import {data} from './js/data.js'
import LearnMore from './components/LearnMore'
import './scss/components/Card.css'

function App() {
  const itemComps = data.map((item, index) => <LearnMore key={index} item={item}/>)
  return (
    <main className='card container'>
      {itemComps}
    </main>
  )
}

export default App
