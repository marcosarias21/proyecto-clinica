import React from 'react'
import { useState } from 'react'
import {useForm} from 'react-hook-form'
import {MdEdit,MdSave,MdDelete} from 'react-icons/md'
import './usuariosConsultasCards.css'


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
    <>
      <tbody >
        <tr className='tabla-fila'>
          <td className='d-none'>
            <input type="text" value={props.id} readOnly="readonly" className='input-tablas-consultas' {...register('id')}/>
          </td>
          <td  className='px-2'>
            {
            editar?
            <input type="text" className='input-tablas-consultas nombre' {...register('nombre')}/>
            :
            <input type="text" value={props.nombre} readOnly="readonly" className='input-tablas-consultas nombre'/>
            }
          </td>
          <td className='px-2'>
            {
            editar?
            <input type="text" className='input-tablas-consultas' {...register('dni')}/>
            :
            <input type="text" value={props.dni} readOnly="readonly"  className='input-tablas-consultas'/>
            }
          </td>
          <td className='px-2 d-none d-lg-table-cell'>
            {
            editar?
            <input type="text" className='input-tablas-consultas' {...register('fecha')}/>
            :
            <input type="text" value={props.fecha} readOnly="readonly"  className='input-tablas-consultas'/>
            }
          </td>
          <td className='px-2 d-none d-lg-table-cell'>
            {
            editar?
            <input type="text" className='input-tablas-consultas' {...register('provincia')}/>
            :
            <input type="text" value={props.provincia} readOnly="readonly"  className='input-tablas-consultas'/>
            }
          </td>
          <td className='px-2 d-none d-md-table-cell'>
            {
            editar?
            <input type="text" className='input-tablas-consultas email' {...register('email')}/>
            :
            <input type="text" value={props.email} readOnly="readonly"  className='input-tablas-consultas email'/>
            }
          </td>
          <td className='px-2'>
            {
              editar?
              <button className='tablas-consultas-boton editar' onClick={handleSubmit(onClick)}><MdSave/></button>
              :
              <button className='tablas-consultas-boton editar' onClick={setEdit}><MdEdit/></button>
            }
            <button className='tablas-consultas-boton eliminar' onClick={handleSubmit(eliminar)}><MdDelete/></button>
          </td>
        </tr>
      </tbody>
    </>
  )
}

export default UsuariosConsultasCards