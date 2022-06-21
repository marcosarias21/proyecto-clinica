import React from 'react';
import './login.css'
import Logotipo from '../../Assets/Logotipo.png'
import { useForm } from 'react-hook-form'

const Login = () => {
  const {register , handleSubmit , formState : {errors}} = useForm()

  const onSubmit = async(data) =>{
    const resp = await fetch('http://localhost:8000/login' , {
      method: "POST",
      body: JSON.stringify(data),
      headers:{
        'content-type': 'application/json'
      }
    })

    const json = await resp.json()
    console.log(json)
    alert(json.message)
    
  }


  return (
    <section className="bg-hero">
      <div className="img-container">
        <img className="img-tamaño" src={Logotipo} alt="logotipo.png" />
      </div>
      <div className="formulario-contenedor-login">
        <form onSubmit={handleSubmit(onSubmit)} className= "form-className formulario-estilo d-flex flex-column">
            <h1 className="text-center fs-3 py-3">Login</h1>                    
            <input type="text" className="input-style my-3" name="email" id="email" placeholder="Email" {...register("email" , {required: true})}/>   
            <input type="password" className="input-style my-3" name="password" id="password" placeholder="Contraseña" {...register("contrasena")}/>           
            <button type="submit" className="boton-contacto-login my-5">Loguearse</button>                
        </form>      
      </div>  
    </section>  
  );
};

export default Login;