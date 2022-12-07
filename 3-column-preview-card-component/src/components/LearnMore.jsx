import React from 'react'
import '../scss/components/LearnMore.css'

function LearnMore({item}) {
    const {decImg, title, txt, color} = item
    return (
        <div className={`learn learn-${color} flex-col-between`}>
            <div>
                <img src={decImg} alt='' aria-hidden='true'/>
                <h2>{title}</h2>
                <p>{txt}</p>
            </div>
            <button className={`btn btn-${color}`}>Learn More</button>
        </div>
    )
}

export default LearnMore
