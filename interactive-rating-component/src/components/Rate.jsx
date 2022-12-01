import React from 'react'
import RoundBtn from '../components/RoundBtn.jsx'
import '../scss/components/Rating.css'

function Rate(props) {
    const {title, text, ratings, handleClick} = props

    const ratingsComps = props.ratings.map((rating, index) => <RoundBtn key={index} number={rating}/>)
    return (
        <div>
            <img className='circle-star' src='../assets/images/icon-star.svg' alt='orange star'/>
            <h2>{title}</h2>
            <p>{text}</p>
            <div className='ratings flex-between'>
                {ratingsComps}
            </div>
            <button className='btn' onClick={selected ? handleClick : ''}>submit</button>
        </div>
    )
}

export default Rate
