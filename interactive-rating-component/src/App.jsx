import React, {useState} from 'react'
import { data } from './js/data.js'
import RoundBtn from './components/RoundBtn.jsx'
import './scss/components/Rating.css'

function App() {
  const [manager, setManager] = useState({selected: false, rated: false, ratedValue: null})

  const {
    title, 
    text, 
    ratings,
    thankYou,
    thanksTxt } = data

  const { 
    selected, 
    rated, 
    ratedValue } = manager

  const selectRating = (ratingNum) => {
    const radios = document.querySelectorAll('.circle-btn')
    const selectedRadio = document.querySelector(`#radio-${ratingNum}`)
    document.querySelector('.btn').classList.remove('disabled')
    radios.forEach(rad => rad.classList.remove('active'))
    selectedRadio.classList.add('active')
    selectedRadio.blur()
    setManager(prevState => ({...prevState, selected: true, ratedValue: ratingNum}))
  }

  const handleClick = () => {setManager(prevState => ({...prevState, rated: true}))}

  const ratingsComps = ratings.map((rating, index) => <RoundBtn key={index} number={rating} selectRating={selectRating}/>)

  return (
    <main className='rating container'>
      {
        !rated ? 
        <>
          <img className='circle-star' src='../assets/images/icon-star.svg' alt='' aria-hidden='true'/>
          <form id='rating-form'>
            <fieldset className='ratings'>
              <legend><h2>{title}</h2></legend>
              <p>{text}</p>
              <div className='grid5x2'>
                {ratingsComps}
              </div>
            </fieldset>
            <button 
              form='rating-form' 
              value='Submit' 
              className='btn disabled' 
              onClick={selected ? handleClick : ''} 
              disabled={selected ? false : true}
            >submit</button>
          </form>
        </> : 
        <div className='centered'>
          <img className='thanks-img' src='../assets/images/illustration-thank-you.svg' alt='' aria-hidden='true'/>
          <span className='thanks-text'>You selected {ratedValue} out of {ratings.length}</span>
          <h2>{thankYou}</h2>
          <p className='thanks-p'>{thanksTxt}</p>
        </div>
        }
    </main>
  )
}

export default App
