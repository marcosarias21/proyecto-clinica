import React, { useEffect } from 'react'
import { useState } from 'react'
import {useForm} from 'react-hook-form'
import {MdEdit,MdSave,MdDelete} from 'react-icons/md'



function MedicosConsultasCards (props) {
  const urlBE = process.env.REACT_APP_URL_BE
  const [editar, setEditar] = useState(false)

  const setEdit=()=>{
    setEditar(true)
  }

  const {register, handleSubmit} = useForm()

  const onClick = async (data)=>{
    const resp = await fetch(`${urlBE}/medicos`, {
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
    const del = await fetch(`${urlBE}/medicos`, {
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
    const res = await fetch(`${urlBE}/areas`)
    const json = await res.json()
    const jsonAreas = json.areas
    setAreas(jsonAreas)
  }

  useEffect(()=>{
    getAreas()
  }, [])// eslint-disable-line react-hooks/exhaustive-deps


  return (
    <>
      <tbody>
        <tr className='tabla-fila'>
          <td className='px-2 d-none d-md-table-cell'>
            <input type="text" value={props.id} readOnly="readonly" className='input-tablas-consultas' {...register('id')}/>
          </td>
          <td className='px-2'>
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
              <select className='area-listado-select'{...register('area')} >
                {
                  areas.map(area=><option  classname='areas-listado' key={area._id}>{area.nombre}</option>)
                }
              </select>
              :
              <input type="text" value={props.area} readOnly="readonly"  className='input-tablas-consultas'/>
            }
          </td>
          <td className='px-2'>
            <div>
              {
                editar?
                <button className='tablas-consultas-boton editar' onClick={handleSubmit(onClick)}><MdSave/></button>
                :
                <button className='tablas-consultas-boton editar' onClick={setEdit}><MdEdit/></button>
                }
                <button className='tablas-consultas-boton eliminar' onClick={handleSubmit(eliminar)}><MdDelete/></button>
            </div>
          </td>
        </tr>
      </tbody>
    </>
  )
}

export default MedicosConsultasCards