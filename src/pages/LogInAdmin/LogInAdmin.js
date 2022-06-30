
import React from 'react'
import './loginAdmin.css'
import {useForm} from 'react-hook-form'
import NavbarAdmin from '../../componentest/NavbarAdmin/NavbarAdmin'

function LogInAdmin() {
  const {register, handleSubmit } = useForm()

  const onSubmit = async (data)=>{
    const resp = await fetch('http://localhost:8000/loginAdmin' , {
      method: "POST",
      body: JSON.stringify(data),
      headers:{
        'content-type': 'application/json'
      }
    })
    const json = await resp.json()
    if(resp.ok===false){
      alert(json.message)
      return
    }else{
      const jsonStr = JSON.stringify(json.user)  
      localStorage.setItem("Admin" , jsonStr)  
      window.location.href='/usuarios-consultas'  
    }
  }
  return (
    <>
      <NavbarAdmin/>
      <div className='contenedor-admin-content '>
        <div className='contenedor-login-admin'>
          <form className='form-login-admin' >
            <h2 className='login-admin-title'>Iniciar sesión</h2>
            <div className='d-flex flex-column'>
              <input type="text" placeholder='Usuario' className='login-admin-input'{...register('nombre')}/>
              <input type="password" placeholder='Contraseña' className='login-admin-input'{...register('contrasena')}/>
            </div>
            <button className='login-admin-btn' onClick={handleSubmit(onSubmit)}>Iniciar sesión</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default LogInAdmin;
