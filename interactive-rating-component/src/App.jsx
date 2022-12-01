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
  const {selected, rated, ratedValue} = manager

  const selectRating = (ratingNum) => {
    const ratings = document.querySelectorAll('.circle-btn');
    const selectedBtn = document.querySelector(`#rating-${ratingNum}`)
    ratings.forEach(btn => {
      btn.classList.remove('active')
    })
    selectedBtn.blur()
    selectedBtn.classList.add('active')
    setManager(prevState => ({...prevState, selected: true, ratedValue: ratingNum}))
  }

  const handleClick = () => {setManager(prevState => ({...prevState, rated: true}))}

  const ratingsComps = ratings.map((rating, index) => <RoundBtn key={index} number={rating}/>)

  document.addEventListener('click', (e)=>{
    if(e.target.dataset.id){
      selectRating(e.target.dataset.id)
    }
  })

  return (
    <main className='rating container'>
      {
        !rated ? 
        <>
          <img className='circle-star' src='../assets/images/icon-star.svg' alt='orange star'/>
          <h2>{title}</h2>
          <p>{text}</p>
          <div className='ratings flex-between'>
            {ratingsComps}
          </div>
          <button className='btn' onClick={selected ? handleClick : ''}>submit</button>
        </> : 
        <div className='centered'>
          <img className='thank-you-img' src='../assets/images/illustration-thank-you.svg' alt='rating thank you img'/>
          <span className='thanks-text'>You selected {ratedValue} out of {ratings.length}</span>
          <h2>{thankYou}</h2>
          <p className='thanks-p'>{thanksTxt}</p>
        </div>
        }
    </main>
  )
}

export default App
