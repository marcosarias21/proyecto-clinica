import React from 'react'
import { useState } from 'react'
import './areasConsultasCard.css'
import {useForm} from 'react-hook-form'


function AreasConsultasCards(props) {
  const [editar, setEditar] = useState(false)

  const setEdit=()=>{
    setEditar(true)
  }

  const {register, handleSubmit} = useForm()

  const onClick = async (data)=>{
    const resp = await fetch('http://localhost:8000/areas', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers:{
        'content-type': 'application/json'
      }
    })
    const json = await resp.json()
    setEditar(false)
    alert(`Area ${json.areaEditada.nombre} editada correctamente`)
    window.location.reload()
  }

  const eliminar = async(data)=>{
    const del = await fetch('http://localhost:8000/areas', {
      method: 'DELETE',
      body: JSON.stringify(data),
      headers:{
        'content-type': 'application/json'
      }
    })
    const json = await del.json()
    console.log(json.message)
    alert(`Area ${json.areaEliminada.nombre} eliminada`)
    window.location.reload()
  }


  return (
    <section className='card-areas-consultas'>
      <label>ID</label>
      <input type="text" value={props.id} readOnly="readonly" className='input-areas-consultas' {...register('id')}/>
      <label>Areas/Especialización</label>
      {
        editar?
        <input type="text" className='input-areas-consultas' {...register('nombre')}/>
        :
        <input type="text" value={props.nombre} readOnly="readonly" className='input-areas-consultas'/>
      }
      <label>URL de la imagen de portada</label>
      {
        editar?
        <input type="text" className='input-areas-consultas' {...register('imagen')}/>
        :
        <input type="text" value={props.imagen} readOnly="readonly"  className='input-areas-consultas'/>
      }
      <div>
        {
          editar?
          <button className='areas-consultas-boton editar' onClick={handleSubmit(onClick)}>Guardar</button>
          :
          <button className='areas-consultas-boton editar' onClick={setEdit}>Editar</button>
        }
        <button className='areas-consultas-boton eliminar' onClick={handleSubmit(eliminar)}>Eliminar</button>
      </div>
    </section>
  )
}

export default AreasConsultasCards