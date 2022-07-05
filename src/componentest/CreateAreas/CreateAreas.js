import React from 'react'
import {useForm} from 'react-hook-form'
import './createAreas.css'

function CreateAreas() {
  const urlBE = process.env.REACT_APP_URL_BE
  const {register, handleSubmit } = useForm()

  const onClick = async (data)=>{
    const nombreInput = document.getElementById('input-nombre')
    const imagenInput = document.getElementById('input-imagen')
    if(data.nombre===''|| data.imagen===''){
      alert('Debe completar ambos campos')
      nombreInput.value= ''
      imagenInput.value= ''  
      return
    }else{
      const resp = await fetch(`${urlBE}/areas`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
          'content-type': 'application/json'
        }
      })
      const json = await resp.json()
      console.log(json)
      alert(`Area ${data.nombre} creada con exito!`)
      nombreInput.value= ''
      imagenInput.value= ''
      window.location.reload()  
    }
  }

  return (
    <section className='container'>
    <div className='alta-de-areas'>
      <h2 className='titulo-alta-de-areas'>Alta de Areas/Especilizaciones</h2>
      <form className='formulario-alta-de-areas'>
        <input type="text" placeholder='Ingrese Area/Especializacion nueva' {...register('nombre')}  className='input-alta-de-areas' id='input-nombre'/>
        <input type="text" placeholder='Ingrese URL de la imagen de portada' {...register('imagen')} className='input-alta-de-areas' id='input-imagen'/>
        <button onClick={handleSubmit(onClick)} className='boton-alta-de-areas'>Agregar</button>
      </form>
    </div>
    </section>
  )
}

export default CreateAreas