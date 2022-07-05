import React, { useEffect, useState } from 'react'
import NavbarAdmin from '../../componentest/NavbarAdmin/NavbarAdmin'
import TurnosConsultasCards from '../../componentest/TurnosConsultasCards/TurnosConsultasCards'

function TurnosConsultas() {
  const urlBE = process.env.REACT_APP_URL_BE
  const [data , getdata] = useState([])


  const inicio = async ()=>{
    const data = localStorage.getItem('Admin')
    if(!data){
      window.location.href='/login-administracion'
      return
    }else{
      const res = await fetch(`${urlBE}/turnos`)
      const json = await res.json()
      getdata(json.turnos)
    }
  }
  
  useEffect(()=>{
    inicio()
  },[])

  return (
    <>
      <NavbarAdmin/>
      <div className='contenedor-admin-content d-flex align-items-center flex-column'>
        <h2 className='my-3'>Consulta de Turnos</h2>
        <div className='container contenedor-cards-areas'>
        {
          data.map(item=> <TurnosConsultasCards nombre={item.nombre} fecha={item.fecha} id={item._id} key={item._id} dni={item.dni} area={item.area} medico={item.medico} hora={item.hora}/>)
        }
        </div>
      </div>
    </>
  )
}

export default TurnosConsultas
