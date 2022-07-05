import React, { useEffect, useState } from 'react'
import NavbarAdmin from '../../componentest/NavbarAdmin/NavbarAdmin'
import UsuariosConsultasCards from '../../componentest/UsuariosConsultasCards/UsuariosConsultasCards'

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
  },[])

  return (
    <>
      <NavbarAdmin/>
      <div className='contenedor-admin-content d-flex align-items-center flex-column'>
        <h2 className='my-3'>Consulta de Usuarios Activos</h2>
        <div className='container contenedor-cards-areas'>
        {
          data.map(item=> <UsuariosConsultasCards nombre={item.nombre} fecha={item.fecha} id={item._id} key={item._id} dni={item.dni} direccion={item.direccion} localidad={item.localidad} provincia={item.provincia} email={item.email}/>)
        }
        </div>
      </div>
    </>
  )
}

export default UsuariosConsultas