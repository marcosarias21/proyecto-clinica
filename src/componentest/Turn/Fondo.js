import React from 'react'
import './fondo.css'
import ImgMedicos from '../../Assets/Imagen medicos.png'

const Fondo = () => {
  return (
    <section className='fondo d-flex flex-column align-items-center justify-content-between d-lg-flex flex-lg-row align-items-lg-center justify-content-lg-evenly px-3'>
      <div className='fondo-txt-container'>
      </div>
      <div className='hero-img-container'>
        <img src={ImgMedicos} alt="Medicos de la clinica" className='fondo-img' />
      </div>
    </section>
  )
}

export default Fondo