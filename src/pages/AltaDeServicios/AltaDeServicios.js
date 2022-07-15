import React, { useEffect } from 'react'
import './altaDeServicios.css'
import AreasConsultas from '../../componentest/AreasConsulta/AreasConsultas'
import CreateAreas from '../../componentest/CreateAreas/CreateAreas'
import NavbarAdmin from '../../componentest/NavbarAdmin/NavbarAdmin'

function AltaDeServicios() {
  
  const inicio = ()=>{
    const data = localStorage.getItem('Admin')
    if(!data){
      window.location.href='/login-administracion'
      return
    }
  }

  useEffect(()=>{
    inicio()
  },[])// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <NavbarAdmin/>
      <div className='contenedor-admin-content'>
        <CreateAreas/>
        <AreasConsultas/>
      </div>
    </>
  )
}

export default AltaDeServicios