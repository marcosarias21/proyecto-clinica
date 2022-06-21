import React from 'react';
import './Register.css'
import { useForm  } from 'react-hook-form'
import Logotipo from '../../Assets/Logotipo.png'

const Register = () => {
  const { register , handleSubmit , formState: {errors} } = useForm()

  const onSubmit = async(data) => {
    const resp = await fetch( 'http://localhost:8000/register', {
      method: 'POST',
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
        <div className="formulario-contenedor-register">
          <form onSubmit={handleSubmit(onSubmit)} className= "form-className formulario-estilo d-flex flex-column">
              <h1 className="text-center fs-3 pt-3">Registro De Usuarios</h1>
              <div className="my-2 row justify-content-center pt">
                <div className="col-sm-6 col-md-6 col-lg-5">
                  <input type="text" className="input-style me-1" id="nombre" aria-describedby="nombre" placeholder="Nombre completo" {...register("nombre" , {required: true})} />
                  {errors.nombre?.type === 'required' && <span>Este campo es obligatorio </span>}
                </div>
                <div className="col-sm-12 col-md-6 col-lg-5">
                  <input type="text" className="input-style" id="date" placeholder="Fecha de nacimiento" {...register("fecha", {required: true})} />
                  {errors.fecha?.type === 'required' &&<span>Este campo es obligatorio </span>}
                </div>
              </div>
              <div className="my-2 row justify-content-center">        
                <div className="col-sm-6 col-md-6 col-lg-5">
                  <input type="number" className="input-style me-1" placeholder="DNI" id="exampleInputDNI" aria-describedby="DNI" {...register("dni", {required: true})}/> 
                  {errors.dni?.type === 'required' && <span>Este campo es obligatorio </span>}
                </div> 
                <div className="col-sm-6 col-md-6 col-lg-5">
                  <input type="text" className="input-style" name="direccion" id="direccion" placeholder="Dirección" {...register("direccion", {required: true})} />
                  {errors.direccion?.type === 'required' && <span>Este campo es obligatorio </span>}
                </div>               
              </div>
              <div className="my-2 row justify-content-center">
                <div className="col-sm-6 col-md-6 col-lg-5">
                  <input type="text" className="input-style me-1" id="exampleInputLocalidad" placeholder="Localidad" {...register("localidad", {required: true})}/>
                  {errors.localidad?.type === 'required' && <span>Este campo es obligatorio </span>}
                </div>
                <div className="col-sm-6 col-md-6 col-lg-5">
                  <input type="text" className="input-style" id="exampleInputProvincia" placeholder="Provincia" {...register("provincia", {required: true})}/>
                  {errors.provincia?.type === 'required' &&<span>Este campo es obligatorio </span>}
                </div>        
              </div>
              <div>
                <div className="my-2 col-sm-12 col-lg-10 mx-auto">           
                    <input type="text" className="input-style" name="email" id="email" placeholder="Email" {...register("email", {required: true})}/> 
                    {errors.email?.type === 'required' && <span>Este campo es obligatorio </span>}           
                </div>
                <div className="my-2 pb-4 col-sm-12 col-lg-10 mx-auto">
                  <input type="password" className="input-style" name="password" id="password" placeholder="Contraseña" {...register("contrasena", {required: true})}/>
                  {errors.contrasena?.type === 'required' && <span>Este campo es obligatorio </span>}  
                  <input type="password" className="input-style mt-3" name="repeatpassword" id="repeatpassword" placeholder="Repetir Contraseña" {...register("repeatcontrasena", {required: true})}/> 
                  {errors.repeatcontrasena?.type === 'required' && <span>Este campo es obligatorio </span>}         
                </div>
              </div>        
              <div className="pb-2 mx-auto mb-5">             
                <button type="submit" className="boton-contacto-register px-5 py-2">Registrarse</button>                
              </div>           
          </form>      
        </div>
    </section> 
  );
};

export default Register;