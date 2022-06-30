import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'
import './createMedicos.css'

function CreateMedicos() {
  const {register, handleSubmit } = useForm()

  const onClick = async (data)=>{
    if (data.nombre===''|| data.areas==='') {
      alert('Debe completras ambos campos')
    } else {
          const resp = await fetch('http://localhost:8000/medicos', {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'content-type': 'application/json'
      }
    })
    const json = await resp.json()
    alert(json.message)
    window.location.reload()
    }
  }
  const [areas, setAreas] = useState([])


  const getAreas= async ()=>{
    const res = await fetch('http://localhost:8000/areas')
    const json = await res.json()
    const jsonAreas = json.areas
    setAreas(jsonAreas)
  }

  useEffect(()=>{
    getAreas()
  }, [ ])

  return (
    <section className='container'>
    <div className='alta-de-areas'>
      <h2 className='titulo-alta-de-areas'>Alta de Medicos</h2>
      <form className='formulario-alta-de-areas'>
        <input type="text" placeholder='Ingrese nombre completo del medico/a a agregar' {...register('nombre')}  className='input-alta-de-areas' id='input-nombre' required/>
        <label className='fw-bold mt-2'>Seleccione el area de especialidad</label>
        <select className='area-listado-select'{...register('area')} >
          {
            areas.map(area=><option  classname='areas-listado' key={area._id}>{area.nombre}</option>)
          }
        </select>
        <button onClick={handleSubmit(onClick)} className='boton-alta-de-areas'>Agregar</button>
      </form>
    </div>
    </section>
  )

}

export default CreateMedicos