import React from 'react'
import {useForm} from 'react-hook-form'
import { MdDelete } from 'react-icons/md'


function TurnosConsultasCards(props) {
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
    <tbody >
        <tr className='tabla-fila'>
          <td className='d-none'>
            <input type="text" value={props.id} readOnly="readonly" className='input-tablas-consultas' {...register('id')}/>
          </td>
          <td  className='px-2'>
            <input type="text" value={props.nombre} readOnly="readonly" className='input-tablas-consultas nombre' {...register('nombre')}/>
          </td>
          <td className='px-2 d-none d-lg-table-cell'>
            <input type="text" value={props.dni} readOnly="readonly"  className='input-tablas-consultas' {...register('dni')}/>
          </td>
          <td className='px-2 '>
            <input type="text" value={props.area} readOnly="readonly"  className='input-tablas-consultas' {...register('area')}/>
          </td>
          <td className='px-2 d-none d-lg-table-cell'>
            <input type="text" value={props.medico} readOnly="readonly"  className='input-tablas-consultas nombre' {...register('medico')}/>
          </td>
          <td className='px-2 d-none d-md-table-cell'>
            <input type="text" value={props.fecha} readOnly="readonly"  className='input-tablas-consultas' {...register('fecha')}/>
          </td>
          <td className='px-2 d-none d-md-table-cell'>
          <input type="text" value={`${props.hora} hrs`} readOnly="readonly"  className='input-tablas-consultas' {...register('hora')}/>
          </td>
          <td className='px-2'>
            <button className='tablas-consultas-boton eliminar' onClick={handleSubmit(eliminar)}><MdDelete/></button>
          </td>
        </tr>
      </tbody>
    </>
  )
}

export default TurnosConsultasCards