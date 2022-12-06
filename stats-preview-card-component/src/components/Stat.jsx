import React from 'react'
import '../scss/components/Stat.css'

function Stat({stat}) {
    const {quantity, statName} = stat

    return (
        <div className='stat flex-column'>
            <h3>{quantity}</h3>
            <span>{statName}</span>
        </div>
    )
}

export default Stat
