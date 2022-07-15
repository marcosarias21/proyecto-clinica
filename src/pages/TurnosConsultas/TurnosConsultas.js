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
      const turnosFiltrados = json.turnos
      const turnosSort = turnosFiltrados.sort(function (a, b) {
        if (a.area > b.area) {
          return 1;
        }
        if (a.area < b.area) {
          return -1;
        }
        return 0;
      });
      getdata(turnosSort)
    }
  }
  
  useEffect(()=>{
    inicio()
  },[])// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <NavbarAdmin/>
      <div className='contenedor-admin-content d-flex align-items-center flex-column'>
        <h2 className='my-3'>Consulta de Turnos</h2>
        <table className='tabla-consultas'>
        <thead className='encabezado-tabla'>
            <tr>
              <th className='fw-bold d-none p-2'>ID</th>
              <th className='fw-bold p-2'>Nombre</th>
              <th className='fw-bold p-2 d-none d-lg-table-cell'>DNI</th>
              <th className='fw-bold p-2 |'>Area</th>
              <th className='fw-bold  p-2 d-none d-lg-table-cell'>Medico/a</th>
              <th className='fw-bold p-2 d-none d-md-table-cell'>Fecha</th>
              <th className='fw-bold p-2 d-none d-md-table-cell'>Hora</th>
              <th></th>
            </tr>
          </thead>
          { 
            data.map(item=> <TurnosConsultasCards nombre={item.nombre} fecha={item.fecha} id={item._id} key={item._id} dni={item.dni} area={item.area} medico={item.medico} hora={item.hora}/>) 
          }
        </table>
      </div>
    </>
  )
}

export default TurnosConsultas
