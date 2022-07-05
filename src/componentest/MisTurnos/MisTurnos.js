import "./misturnos.css"


import React, { useEffect, useState } from 'react'
import MisTurnosCards from "../MisTurnosCards/MisTurnosCards"

const MisTurnos = () => {
  const urlBE = process.env.REACT_APP_URL_BE
  const [turnosAsig, setturnosAsig] = useState(false)
  const [data , getdata] = useState([])


  const inicio = async ()=>{
      const usuario = JSON.parse(localStorage.getItem('Usuario'))
      const dni = usuario.user.dni
      const res = await fetch(`${urlBE}/turnos`)
      const json = await res.json()
      const turnos =json.turnos
      let turnosfiltrados = turnos.filter(item=> item.dni == dni)
      getdata(turnosfiltrados)
      if(!turnosfiltrados || (turnosfiltrados.length<=0)){
      setturnosAsig(false)
      }else{
        setturnosAsig(true)
      }
    }
  
  useEffect(()=>{
    inicio()
  },[])

  return (
    <div className="container" >
      <h3 className="fw-bold">Mis Turnos</h3>
      <div className="misturnos">
      <div className="turnos">
        <div className="wrapper">
        { turnosAsig?
          data.map(item=><MisTurnosCards key={item._id} id={item._id} area={item.area} medico={item.medico} fecha={item.fecha} />) 
          :
         <h2>No tienes turnos asignados</h2>
        }
        </div>
      </div >
      <div className="padre">

      <a href="/turnos" class="btn-primary">Nuevo Turno</a>
      </div>
      
    </div>


    </div>
  )
}

export default MisTurnos