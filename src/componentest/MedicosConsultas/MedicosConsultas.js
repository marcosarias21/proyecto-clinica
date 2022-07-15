import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import MedicosConsultasCards from '../MedicosConsultasCards/MedicosConsultasCards'

function MedicosConsultas() {
  const urlBE = process.env.REACT_APP_URL_BE
  const [data , getadata] = useState([])

  const getAreas= async ()=>{
    const res = await fetch(`${urlBE}/medicos`)
    const json = await res.json()
    const medicos = json.medicos
    const medicosSort = medicos.sort(function (a, b) {
      if (a.area > b.area) {
        return 1;
      }
      if (a.area < b.area) {
        return -1;
      }
      return 0;
    });
    getadata(medicosSort)
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
            <th className='fw-bold p-2'>Nombre</th>
            <th className='fw-bold p-2'>Area</th>
            <th></th>
          </tr>
        </thead>
        { 
          data.map(item=> <MedicosConsultasCards nombre={item.nombre} area={item.area} id={item._id} key={item._id}/>)
        }
      </table>
    </section>
  )
}

export default MedicosConsultas