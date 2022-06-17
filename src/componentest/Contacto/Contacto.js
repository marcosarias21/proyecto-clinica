import React from 'react'
import './contacto.css'
import {useRef, useState} from 'react'
import emailjs from 'emailjs-com'

function Contacto() {
  const formRef = useRef()
  const [done, setDone]=useState(false)


  const handleSubmit=(e)=>{
    e.preventDefault()
    emailjs.sendForm('service_bb7g22d','template_ys8faga', formRef.current,'B1uRBfC8-1pdK2_-r')
    setDone(true)
    const formulario =document.getElementById('formulario')
    formulario.reset()
  }

  return (
    <section className='contacto container my-4'>
      <h2 className='titulo-contacto'>Contacto</h2>
      <div className='formulario-contenedor'>
        <form className='formulario-contacto' ref={formRef} onSubmit={handleSubmit} id='formulario'>
          <label className='label-contacto'>Nombre completo:</label>
          <input type="text"  required placeholder='Nombre completo' name='user_name' className='input-contacto'/>
          <label className='label-contacto'>Direccion de mail:</label>
          <input type="email"  required placeholder='Direccion de mail' name='user_email' className='input-contacto'/>
          <label className='label-contacto'>Asunto:</label>
          <input type="text" required placeholder='Asunto' name='user_subject' className='input-contacto' />
          <label className='label-contacto'>Mensaje:</label>
          <textarea type="text" required placeholder='Mensaje' name='message' className='textarea-contacto' rows="5"></textarea>
          <button className='boton-contacto'>Enviar mensaje</button>
          {done && <p className='exito-contacto mb-0'>Mensaje enviado con exito!</p>}
        </form>
      </div>
    </section>
  )
}

export default Contacto