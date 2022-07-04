
import React from 'react'
import './perfil.css'
import { useState , useEffect} from 'react'
import Nabvar from '../../componentest/Navbar/Navbar'
import Fondo from '../../componentest/Turn/Fondo'
import MisTurnos from '../../componentest/MisTurnos/MisTurnos'
import Footer from '../../componentest/Footer/Foteer'

function Perfil() {
  const [usuario, setUsuario] = useState({})
  const getUser = () => {
    const user = localStorage.getItem("Usuario")
    const userObj = JSON.parse(user)
    if(!user){
      window.location.href='/login'
    }else{
      setUsuario(userObj.user)    
    }
  }
  
  useEffect(() => {
    getUser()    
  }, [])
  
  const logout=()=>{
    localStorage.clear('Usuario')
    window.location.href='/'
  }
  return (
    <>
    <Nabvar />
    <section className='container'>
      <div className='row gx-0 datos-resp'>
        <div className='col-sm-12 col-md-6 col-lg-7 perfil d-flex justify-content-center'>
          <p className='fw-bold fs-5 my-2'>Nombre de usuario: <span className='text-primary'>{usuario?.nombre}</span></p>
          <p className='fw-bold fs-5 my-2'>Email: <span className='text-primary'>{usuario?.email}</span></p>       
          <p className='fw-bold fs-5 my-2'>DNI: <span className='text-primary'> {usuario?.dni}</span></p>        
          <p className='fw-bold fs-5 my-2'>Fecha de nacimiento:<span className='text-primary'> {usuario?.fecha}</span> </p>
          <p className='fw-bold fs-5 my-2'>Dirección:<span className='text-primary'> {usuario?.direccion}</span></p>
          <p className='fw-bold fs-5 my-2'>Provincia:  <span className='text-primary'>{usuario?.provincia}</span></p>
          <button className='boton-contacto red' onClick={logout}>Cerar Sesión</button>
        </div>
        <div className='d-none d-sm-block col-lg-3 imagen-responsive'>
          <Fondo />
        </div>
      </div>
    </section>
    <MisTurnos/>
    <Footer/>
    </>
  )
}

export default Perfil


