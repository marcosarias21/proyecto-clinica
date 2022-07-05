import React from 'react'
import { useState } from 'react'
import {useForm} from 'react-hook-form'


function UsuariosConsultasCards(props) {
  const urlBE = process.env.REACT_APP_URL_BE
  const [editar, setEditar] = useState(false)

  const setEdit=()=>{
    setEditar(true)
  }

  const {register, handleSubmit} = useForm()

  const onClick = async (data)=>{
    const resp = await fetch(`${urlBE}/register`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers:{
        'content-type': 'application/json'
      }
    })
    const json = await resp.json()
    setEditar(false)
    alert(json.message)
    window.location.reload()
  }

  const eliminar = async(data)=>{
    const del = await fetch(`${urlBE}/register`, {
      method: 'DELETE',
      body: JSON.stringify(data),
      headers:{
        'content-type': 'application/json'
      }
    })
    const json = await del.json()
    alert(json.message)
    window.location.reload()
  }

  return (
    <section className='card-areas-consultas'>
      <label>ID</label>
      <input type="text" value={props.id} readOnly="readonly" className='input-areas-consultas' {...register('id')}/>
      <label>Nombre</label>
        {
          editar?
          <input type="text" className='input-areas-consultas' {...register('nombre')}/>
          :
          <input type="text" value={props.nombre} readOnly="readonly" className='input-areas-consultas'/>
        }
      <label>DNI</label>
        {
          editar?
          <input type="text" className='input-areas-consultas' {...register('dni')}/>
          :
          <input type="text" value={props.dni} readOnly="readonly"  className='input-areas-consultas'/>
        }
        <label>Fecha de nacimiento</label>
        {
          editar?
          <input type="text" className='input-areas-consultas' {...register('fecha')}/>
          :
          <input type="text" value={props.fecha} readOnly="readonly"  className='input-areas-consultas'/>
        }
      <label>Dirección</label>
        {
          editar?
          <input type="text" className='input-areas-consultas' {...register('direccion')}/>
          :
          <input type="text" value={props.direccion} readOnly="readonly"  className='input-areas-consultas'/>
        }
      <label>Localidad</label>
        {
          editar?
          <input type="text" className='input-areas-consultas' {...register('localidad')}/>
          :
          <input type="text" value={props.localidad} readOnly="readonly"  className='input-areas-consultas'/>
        }
      <label>Provincia</label>
        {
          editar?
          <input type="text" className='input-areas-consultas' {...register('provincia')}/>
          :
          <input type="text" value={props.provincia} readOnly="readonly"  className='input-areas-consultas'/>
        }
      <label>Email</label>
        {
          editar?
          <input type="text" className='input-areas-consultas' {...register('email')}/>
          :
          <input type="text" value={props.email} readOnly="readonly"  className='input-areas-consultas'/>
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

export default UsuariosConsultasCards