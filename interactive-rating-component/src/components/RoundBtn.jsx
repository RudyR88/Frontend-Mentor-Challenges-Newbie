import React from 'react'

function RoundBtn({number, selectRating}) {

    return (
        <label className='circle-btn' id={`radio-${number}`} tabIndex='0' onKeyDown={(e) => {e.code =='Space' || e.code == 'Enter' ?  selectRating(number) : ''}}>
            <input type='radio' name='rating' value={number} onChange={()=>{selectRating(number)}}  className='radios'/> 
            {number}
        </label>
    )
}

export default RoundBtn