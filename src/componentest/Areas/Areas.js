import "../Areas/areas.css"
import React from 'react'
import cirugia from "../../Assets/especialidades/cirujia.jpeg"
import guardia from "../../Assets/especialidades/guardia.jpg"
import internacion from "../../Assets/especialidades/internacion.jpg"
import nutricion from "../../Assets/especialidades/nutricion.png"
import obstetricia from "../../Assets/especialidades/ginecologia.jpg"
import pediatria from "../../Assets/especialidades/pediatria.jpg"

const Areas = () => {
  return (
    <div id="areas">
      <section class="bg-white py-4">
        <div class="container pb-4">
          <h1 class="text-center text-black text-bolder my-2 display-2 pb-4 py-3">Especialidades</h1>
          <div class="row " id="galleryAmenisties" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <div class="col-12  col-lg-4 col-md-4 col-sm-6  contenedorA">
              <img class="w-100" src={cirugia} alt="Cabalgatas" data-bs-target="#carouselExampleA"
                data-bs-slide-to="0"/>

                </div>
            <div class="col-12  col-lg-4 col-md-4 col-sm-6 contenedorA">
              <img class="w-100" src={guardia} alt="Nuestros Desayunos"
                data-bs-target="#carouselExampleA" data-bs-slide-to="1"/>
            </div>
            <div class="col-12  col-lg-4 col-md-4 col-sm-6  contenedorA">
              <img class="w-100" src={internacion} alt="Charlas &amp; cursos prácticos de cocina"
                data-bs-target="#carouselExampleA" data-bs-slide-to="2"/>
            </div>
            <div class="col-12  col-lg-4 col-md-4 col-sm-6  contenedorA">
              <img class="w-100" src={nutricion} alt="Avistaje de flora y fauna"
                data-bs-target="#carouselExampleA" data-bs-slide-to="3"/>
            </div>
            <div class="col-12  col-lg-4 col-md-4 col-sm-6  contenedorA">
              <img class="w-100" src={obstetricia} alt="Capilla de la cabañas magnolia"
                data-bs-target="#carouselExampleA" data-bs-slide-to="4"/>
            </div>
            <div class="col-12  col-lg-4 col-md-4 col-sm-6 contenedorA">
              <img class="w-100" src={pediatria} alt="Caminatas por los alrededores de las Cabañas"
                data-bs-target="#carouselExampleA" data-bs-slide-to="5" />
            </div>
           
          </div>







          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg ">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalToggleLabel">Clinica Rolling Code</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div id="carouselExampleA" class="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                    <ol class="carousel-indicators">
                      <li data-bs-target="#carouselExampleA" data-bs-slide-to="0" class="active"></li>
                      <li data-bs-target="#carouselExampleA" data-bs-slide-to="1"></li>
                      <li data-bs-target="#carouselExampleA" data-bs-slide-to="2"></li>
                      <li data-bs-target="#carouselExampleA" data-bs-slide-to="3"></li>
                      <li data-bs-target="#carouselExampleA" data-bs-slide-to="4"></li>
                      <li data-bs-target="#carouselExampleA" data-bs-slide-to="5"></li>
                      <li data-bs-target="#carouselExampleA" data-bs-slide-to="6"></li>
                      <li data-bs-target="#carouselExampleA" data-bs-slide-to="7"></li>
                      <li data-bs-target="#carouselExampleA" data-bs-slide-to="8"></li>
                    </ol>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img class="d-block w-100" src={cirugia} alt="Cabalgatas"/>
                        <h5 class="modal-title" id="exampleModalToggleLabel">.</h5>
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src={guardia}
                          alt=""/>
                        <h5 class="modal-title" id="exampleModalToggleLabel">Guardia</h5>
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src={internacion}
                          alt="" />
                        <h5 class="modal-title" id="exampleModalToggleLabel">Sala de internacion</h5>
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src={nutricion} alt=""/>
                        <h5 class="modal-title" id="exampleModalToggleLabel">Nutricion</h5>
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src={obstetricia} alt="" />
                        <h5 class="modal-title" id="exampleModalToggleLabel">Ginecologia y obstetricia</h5>
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src={pediatria}
                          alt=""/>
                        <h5 class="modal-title" id="exampleModalToggleLabel">Pediatria</h5>
                      </div>
                      
                     
                      
                    </div>
                    
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Areas