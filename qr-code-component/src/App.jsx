import React from 'react'
import { data } from './js/data.js'
import './scss/components/QR.css'

function App() {

  const {
    qrImage,
    qrImageAlt,
    title,
    text
  } =  data

  return (
    <main className='qr container'>
      <img className='qr-img' src={qrImage} alt={qrImageAlt}/>
      <div className='inner-container'>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </main>
  )
}

export default App
