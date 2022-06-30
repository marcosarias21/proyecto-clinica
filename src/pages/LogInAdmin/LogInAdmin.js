import React from "react";
import yo from "../../Assets/Imagen medicos.png";
import Contacto from "../../componentest/Contacto/Contacto";
import Nabvar from "../../componentest/Navbar/Navbar";

import "../../pages/LogInAdmin/loginAdmin.css";

const LogInAdmin = () => {
  return (
    <div>
      <Nabvar />

      <div className="L">
        <div className="L-left">
          <div className="L-bg"></div>
          <div className="L-form">
            <form>
              <input
                type="text"
                placeholder="NOMBRE DE USUARIO"
                name="user_name"
              />
              <input type="text" placeholder="E-MAIL" name="user_email" />
              <input type="text" placeholder="D-N-I" name="user_email" />
              <input
                type="text"
                placeholder="FECHA DE NACIMIENTO"
                name="user_email"
              />
              <input type="text" placeholder="DIRECCION" name="user_email" />
              <input type="text" placeholder="PROVINCIA" name="user_email" />
              <input type="text" placeholder="TELEFONO" name="user_email" />
            </form>
            <button className="L-button">EDITAR</button>
          </div>
        </div>

        <div className="L-right">
          <div className="L-img-container">
            <img src={yo} alt="" className="L-img" />
          </div>
        </div>
      </div>
      <Contacto />
    </div>
  );
};

export default LogInAdmin;
