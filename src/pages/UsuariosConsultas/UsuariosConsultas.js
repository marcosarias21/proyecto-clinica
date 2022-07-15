import React, { useEffect, useState } from 'react'
import NavbarAdmin from '../../componentest/NavbarAdmin/NavbarAdmin'
import UsuariosConsultasCards from '../../componentest/UsuariosConsultasCards/UsuariosConsultasCards'
import './usuariosConsultas.css'

function UsuariosConsultas() {
  const urlBE = process.env.REACT_APP_URL_BE
  const [data , getdata] = useState([])


  const inicio = async ()=>{
    const data = localStorage.getItem('Admin')
    if(!data){
      window.location.href='/login-administracion'
      return
    }else{
        const res = await fetch(`${urlBE}/register`)
        const json = await res.json()
        getdata(json.registros)
    }
  }

  
  useEffect(()=>{
    inicio()
  },[])// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <NavbarAdmin/>
      <div className='contenedor-admin-content d-flex align-items-center flex-column'>
        <h2 className='my-3'>Consulta de Usuarios Activos</h2>
        <table className='tabla-consultas'>
        <thead className='encabezado-tabla'>
            <tr>
              <th className='fw-bold d-none p-2'>ID</th>
              <th className='fw-bold p-2'>Nombre</th>
              <th className='fw-bold p-2'>DNI</th>
              <th className='fw-bold p-2 d-none d-lg-table-cell'>Nacimiento</th>
              <th className='fw-bold  p-2 d-none d-lg-table-cell'>Provincia</th>
              <th className='fw-bold p-2 d-none d-md-table-cell'>Email</th>
              <th></th>
            </tr>
          </thead>
          { 
            data.map(item=> <UsuariosConsultasCards nombre={item.nombre} fecha={item.fecha} id={item._id} key={item._id} dni={item.dni} email={item.email} provincia={item.provincia}/>) 
          }
        </table>
      </div> 
    </>
  )
}

export default UsuariosConsultas