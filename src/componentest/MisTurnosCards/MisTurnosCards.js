import React from 'react'
import {useForm} from 'react-hook-form'
import './misTurnosCards.css'

function MisTurnosCards(props) {
  const urlBE = process.env.REACT_APP_URL_BE
  const {register, handleSubmit} = useForm()

  const eliminar = async(data)=>{
    const del = await fetch(`${urlBE}/turnos`, {
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
    <>
    <div className='d-flex w-100 justify-content-between align-items-center flex-wrap'>
        <input className='input-turnos-perfil' {...register('id')} value={props.id}/>
        <p className='m-0'>Area: {props.area}</p>
        <p className='m-0'>Doctor/a: {props.medico}</p>
        <p className='m-0'>Fecha: {props.fecha}</p>
        <button onClick={handleSubmit(eliminar)} class="btn-prim">cancelar</button>
    </div>
    </>
  )
}

export default MisTurnosCards