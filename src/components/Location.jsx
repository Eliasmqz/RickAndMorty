import React from 'react'

const Location = ({universe}) => {


  return (
    <article className='location_card'>
        <h2>{universe?.name}</h2>
        <ul key={universe?.name}>
            <li>Type: {universe?.type}</li>
            <li>Dimension:{universe?.dimension}</li>
            <li>Population:{universe?.residents.length}</li>
        </ul>
    </article>
  )
}

export default Location