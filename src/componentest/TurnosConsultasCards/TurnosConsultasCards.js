import React from 'react'
import {useForm} from 'react-hook-form'


function TurnosConsultasCards(props) {
  const {register, handleSubmit} = useForm()

  const eliminar = async(data)=>{
    const del = await fetch('http://localhost:8000/turnos', {
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
      <input type="text" value={props.nombre} readOnly="readonly" className='input-areas-consultas' {...register('nombre')}/>
      <label>DNI</label>
      <input type="text" value={props.dni} readOnly="readonly"  className='input-areas-consultas' {...register('dni')}/>
      <label>Area del turno</label>
      <input type="text" value={props.area} readOnly="readonly"  className='input-areas-consultas' {...register('area')}/>
      <label>Medico</label>
      <input type="text" value={props.medico} readOnly="readonly"  className='input-areas-consultas' {...register('medico')}/>
      <label>Fecha del turno</label>
      <input type="text" value={props.fecha} readOnly="readonly"  className='input-areas-consultas' {...register('fecha')}/>
      <label>Hora del turno</label>
      <input type="text" value={props.hora} readOnly="readonly"  className='input-areas-consultas' {...register('hora')}/>
      <div>
        <button className='areas-consultas-boton eliminar' onClick={handleSubmit(eliminar)}>Eliminar</button>
      </div>
    </section>
  )
}

export default TurnosConsultasCards