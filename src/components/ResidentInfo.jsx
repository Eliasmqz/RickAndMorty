import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ResidentInfo = ({resident}) => {

    const [characterInfo, setCharacterInfo] = useState()
useEffect(() => {
    axios.get(resident)
    .then(res=> setCharacterInfo(res.data))
    .catch(err => console.log(err))
}, [characterInfo])


  return (
    <article className='resident_info'>
        <section>
        <img src={characterInfo?.image} alt="img_resident" />
        </section>
        <section>
            <ul>
                <li>Name: {characterInfo?.name}</li>
                <li>Origin: {characterInfo?.origin.name}</li>
                <li>Appeareances: {characterInfo?.episode.length}</li>
            </ul>
        </section>
        

    </article>
  )
}

export default ResidentInfo