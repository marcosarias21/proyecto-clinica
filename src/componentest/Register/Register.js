import React from 'react';
import './Register.css'

const Register = () => {
  return (
      <>    
        <form className= "form-className w-50 formulario-estilo d-flex flex-column">
          <h1 className="text-center fs-3">Registro De Usuarios</h1>
          <div className="mb-2 row justify-content-center pt">
            <div className="col-sm-6 col-md-6 col-lg-5">
              <input type="text" className="input-style me-1" id="nombre" aria-describedby="nombre" placeholder="Nombre completo" />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-5">
              <input type="text" className="input-style" id="date" placeholder="Fecha de nacimiento" />
            </div>
          </div>
          <div className="mb-2 row justify-content-center">        
            <div className="col-sm-6 col-md-6 col-lg-5">
              <input type="number" className="input-style me-1" placeholder="DNI" id="exampleInputDNI" aria-describedby="DNI" /> 
            </div> 
            <div className="col-sm-6 col-md-6 col-lg-5">
              <input type="text" className="input-style" name="direccion" id="direccion" placeholder="Dirección" />
            </div>               
          </div>
          <div className="mb-2 row justify-content-center">
            <div className="col-sm-6 col-md-6 col-lg-5">
              <input type="text" className="input-style me-1" id="exampleInputLocalidad" placeholder="Localidad" />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-5">
              <input type="text" className="input-style" id="exampleInputProvincia" placeholder="Provincia" />
            </div>        
          </div>
          <div className="mb-3 col-sm-12 col-lg-10 mx-auto">           
            <input type="text" className="input-style" name="email" id="email" placeholder="Email" />            
          </div>
          <div className="pb-5 col-sm-12 col-lg-10 mx-auto">
            <input type="password" className="input-style" name="password" id="password" placeholder="Contraseña" />              
          </div>
          <div className="mx-auto mb-5">             
            <button className='boton-contacto px-5 py-2'>Registrarse</button>                
          </div>           
        </form>
      </>
  );
};

export default Register;