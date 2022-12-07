import React from 'react'
import '../scss/components/Stat.css'

function Stat({stat}) {
    const {number, tag} = stat  
    return (
        <div className='stat'>
            <h3>{number}</h3>
            <span>{tag}</span>
        </div>
    )
}

export default Stat
