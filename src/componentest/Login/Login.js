import React from 'react';
import './login.css'
import Logotipo from '../../Assets/Logotipo.png'

const Login = () => {
  return (
    <section class="bg-hero">
      <div class="img-container">
        <img class="img-tamaño" src={Logotipo} alt="logotipo.png" />
      </div>
      <div class="formulario-contenedor">
        <form class= "form-class formulario-estilo d-flex flex-column">
            <h1 class="text-center fs-3 py-3">Login</h1>                    
            <input type="text" class="input-style my-3" name="email" id="email" placeholder="Email" />   
            <input type="password" class="input-style my-3" name="password" id="password" placeholder="Contraseña" />           
            <button class="boton-contacto my-5">Loguearse</button>                
        </form>      
      </div>  
    </section>  
  );
};

export default Login;