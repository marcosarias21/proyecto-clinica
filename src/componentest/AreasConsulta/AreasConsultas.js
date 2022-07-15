import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import AreasConsultasCards from '../AreasConsultasCards/AreasConsultasCards'

function AreasConsultas() {
  const urlBE = process.env.REACT_APP_URL_BE
  const [data , getadata] = useState([])

  const getAreas= async ()=>{
    const res = await fetch(`${urlBE}/areas`)
    const json = await res.json()
    getadata(json.areas)
  }

  useEffect(()=>{
    getAreas()
  },[])// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className='container contenedor-cards-areas'>
      <table className='tabla-consultas w-100 mb-5'>
        <thead className='encabezado-tabla'>
          <tr>
            <th className='fw-bold d-none d-md-table-cell p-2'>ID</th>
            <th className='fw-bold p-2'>Area</th>
            <th className='fw-bold p-2'>Imagen</th>
            <th></th>
          </tr>
        </thead>
        {
          data.map(item=> <AreasConsultasCards nombre={item.nombre} imagen={item.imagen} id={item._id} key={item._id}/>)
        }
    </table>
    </section>
  )
}

export default AreasConsultas