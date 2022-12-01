import React from 'react'

function RoundBtn({number}) {
    return (
        <button id={`rating-${number}`} className='circle-btn' data-id={number}>{number}</button> 
    )
}

export default RoundBtn
