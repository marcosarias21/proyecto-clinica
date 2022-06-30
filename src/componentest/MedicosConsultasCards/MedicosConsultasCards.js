import React, { useEffect } from 'react'
import { useState } from 'react'
import {useForm} from 'react-hook-form'


function MedicosConsultasCards (props) {
  const [editar, setEditar] = useState(false)

  const setEdit=()=>{
    setEditar(true)
  }

  const {register, handleSubmit} = useForm()

  const onClick = async (data)=>{
    const resp = await fetch('http://localhost:8000/medicos', {
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
    const del = await fetch('http://localhost:8000/medicos', {
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
    <section className='card-areas-consultas'>
      <label>ID</label>
      <input type="text" value={props.id} readOnly="readonly" className='input-areas-consultas' {...register('id')}/>
      <label>Medico/a</label>
      {
        editar?
        <input type="text" className='input-areas-consultas' {...register('nombre')}/>
        :
        <input type="text" value={props.nombre} readOnly="readonly" className='input-areas-consultas'/>
      }
      <label>Area de especialidad</label>
      {
        editar?
        <select className='area-listado-select'{...register('area')} >
          {
            areas.map(area=><option  classname='areas-listado' key={area._id}>{area.nombre}</option>)
          }
        </select>
        :
        <input type="text" value={props.area} readOnly="readonly"  className='input-areas-consultas'/>
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

export default MedicosConsultasCards