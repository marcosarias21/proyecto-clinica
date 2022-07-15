import React, { useEffect } from 'react'
import CreateMedicos from '../../componentest/CreateMedicos/CreateMedicos'
import MedicosConsultas from '../../componentest/MedicosConsultas/MedicosConsultas'
import NavbarAdmin from '../../componentest/NavbarAdmin/NavbarAdmin'

function AltaDeMedicos() {
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
        <CreateMedicos/>
        <MedicosConsultas/>
      </div>
    </>
  )
}

export default AltaDeMedicos