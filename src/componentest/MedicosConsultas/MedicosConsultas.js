import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import MedicosConsultasCards from '../MedicosConsultasCards/MedicosConsultasCards'

function MedicosConsultas() {

  const [data , getadata] = useState([])

  const getAreas= async ()=>{
    const res = await fetch('http://localhost:8000/medicos')
    const json = await res.json()
    getadata(json.medicos)
  }

  useEffect(()=>{
    getAreas()
  },[])

  return (
    <section className='container contenedor-cards-areas'>
      {
        data.map(item=> <MedicosConsultasCards nombre={item.nombre} area={item.area} id={item._id} key={item._id}/>)
      }
    </section>
  )
}

export default MedicosConsultas