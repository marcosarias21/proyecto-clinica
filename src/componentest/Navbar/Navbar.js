import React from 'react';
import Boton1 from '../Boton1/Boton1';
import './navbar.css';

const Nabvar = () => {
    return (
        <div>
          <nav class="navbar fixed-top top-0 navbar-expand-lg navbar-dark p-md-3">
            <div class="container-fluid">
              <a class="navbar-brand text-dark" href="index.html">Clinica Rolling Code</a>
              <button
                class="navbar-toggler text-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link text-dark active" aria-current="page" href="/#"
                      >Nosotros</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-dark active" href="/#">Especializaciones</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-dark active" href="/404">Noticias</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-dark active" href="#contacto">Contacto</a>
                  </li>
                  <form class="d-flex">
                    <Boton1 link="../../pages/Turnos/Turnos.js" name="Turnos" />
                  </form>
                  <form class="d-flex">
                    <Boton1 href="../../pages/Turnos/Turnos.js" name="Iniciar Sesion" />
                  </form>
                </ul>
              </div>
            </div>
          </nav>
        </div>
    );
};

export default Nabvar;