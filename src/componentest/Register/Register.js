import React from 'react';
import './Register.css'
import Logotipo from '../../Assets/Logotipo.png'

const Register = () => {
  return (
    <section className="bg-hero">
      <div className="img-container">
        <img className="img-tamaño" src={Logotipo} alt="logotipo.png" />
      </div>
      <div className="formulario-contenedor">
        <form className= "form-className formulario-estilo d-flex flex-column">
            <h1 className="text-center fs-3 pt-3">Registro De Usuarios</h1>
          <div className="my-3 row justify-content-center pt">
            <div className="col-sm-6 col-md-6 col-lg-5">
              <input type="text" className="input-style me-1" id="nombre" aria-describedby="nombre" placeholder="Nombre completo" />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-5">
              <input type="text" className="input-style" id="date" placeholder="Fecha de nacimiento" />
            </div>
          </div>
          <div className="my-3 row justify-content-center">        
            <div className="col-sm-6 col-md-6 col-lg-5">
              <input type="number" className="input-style me-1" placeholder="DNI" id="exampleInputDNI" aria-describedby="DNI" /> 
            </div> 
            <div className="col-sm-6 col-md-6 col-lg-5">
              <input type="text" className="input-style" name="direccion" id="direccion" placeholder="Dirección" />
            </div>               
          </div>
          <div className="my-3 row justify-content-center">
            <div className="col-sm-6 col-md-6 col-lg-5">
              <input type="text" className="input-style me-1" id="exampleInputLocalidad" placeholder="Localidad" />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-5">
              <input type="text" className="input-style" id="exampleInputProvincia" placeholder="Provincia" />
            </div>        
          </div>
          <div>
            <div className="my-3 col-sm-12 col-lg-10 mx-auto">           
                <input type="text" className="input-style" name="email" id="email" placeholder="Email" />            
            </div>
            <div className="my-3 pb-4 col-sm-12 col-lg-10 mx-auto">
              <input type="password" className="input-style" name="password" id="password" placeholder="Contraseña" />           
            </div>
          </div>        
          <div className="pb-2 mx-auto mb-5">             
            <button className="boton-contacto px-5 py-2">Registrarse</button>                
          </div>           
        </form>      
      </div>
  </section> 
  );
};

export default Register;