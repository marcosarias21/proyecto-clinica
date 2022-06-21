import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import AreasConsultasCards from '../AreasConsultasCards/AreasConsultasCards'

function AreasConsultas() {

  const [data , getadata] = useState([])

  const getAreas= async ()=>{
    const res = await fetch('http://localhost:8000/areas')
    const json = await res.json()
    getadata(json.areas)
  }

  useEffect(()=>{
    getAreas()
  },[])

  return (
    <section className='d-flex flex-column align-items-center justify-content-center container'>
      {
        data.map(item=> <AreasConsultasCards nombre={item.nombre} imagen={item.imagen} id={item._id} key={item._id}/>)
      }
    </section>
  )
}

export default AreasConsultas