import React, { useEffect } from 'react'
import NavbarAdmin from '../../componentest/NavbarAdmin/NavbarAdmin'

function TurnosConsultas() {

  const inicio = ()=>{
    const data = localStorage.getItem('Admin')
    if(!data){
      window.location.href='/login-administracion'
      return
    }
  }
  
  useEffect(()=>{
    inicio()
  },[])

  return (
    <>
      <NavbarAdmin/>
      <div className='contenedor-admin-content'>
        TurnosConsultas
      </div>
    </>
  )
}

export default TurnosConsultas