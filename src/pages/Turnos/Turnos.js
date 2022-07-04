import React, { useEffect , useState } from 'react'
import { useForm } from 'react-hook-form'
import Navbar from '../../componentest/Navbar/Navbar'
import Footer from '../../componentest/Footer/Foteer'
import './turnos.css'
import ImgMedicos from '../../Assets/Imagen medicos.png'
// import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css';


const Turnos = () => {

  const login =()=>{
    const usuarios = JSON.parse(localStorage.getItem('Usuario'))
    if(!usuarios){
      window.location.href='/login'
    }
  }

  useEffect(()=>{
    login()
  },[ ])


    const { register , handleSubmit } = useForm()
    
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
    
    const [medicos, setMedicos] = useState([])
    
    
    const getMedicos= async ()=>{
      const valorArea = document.getElementById ('valorArea').value
      console.log (valorArea)
      const res = await fetch('http://localhost:8000/medicos')
      const json = await res.json()
      const jsonMedicos = json.medicos
      let medicosFiltrados = jsonMedicos.filter (medFiltrados => medFiltrados.area === valorArea)
      setMedicos(medicosFiltrados)
    }
    
    
    const onClick = async (data)=>{
        const resp = await fetch('http://localhost:8000/turnos', {
          method: 'POST',
          body: JSON.stringify(data),
          headers:{
            'content-type': 'application/json'
          }
       })
     const json = await resp.json()
       alert(json.Message)
       window.location.href='/perfil'
   } 
    
    return (
      <> 
    <Navbar/>
  


    <section className='hero1 d-flex flex-column align-items-center justify-content-between d-lg-flex flex-lg-row align-items-lg-center justify-content-lg-evenly px-3'>
      <div className='hero-txt-container'>
        <h2 className='hero-txt'>Pagina de Turnos</h2>
        <form className='/#'>
         {/* <Calendar/>   */}
         <label className='fw-bold mt-2'>Seleccione el area de especialidad:</label>
          <select onClick={getMedicos} className='area-listado-select'{...register('area')} id="valorArea" >
           {
            areas.map(area=><option  classname='areas-listado' key={area._id}>{area.nombre}</option>)
           }
          </select>
          <label className='fw-bold mt-2'>Seleccione su medico_</label>
          <select className='area-listado-select'{...register('medico')} >
           {
            medicos.map(medico=><option  classname='areas-listado' key={medico._id}>{medico.nombre}</option>)
           }
          </select>
         <div>
            <label>Fecha: </label>
            <input type="date" {...register('fecha')} />
          </div>
          <div>
            <label>Hora: </label>
            <input type="text" {...register('hora')} />
          </div>
          <div>
            <label>Nombre del Paciente: </label>
            <input type="text" {...register('nombre')} />
          </div>
          <div>
            <label>Dni: </label>
            <input type="number" {...register('dni')}/>
          </div>
          <button onClick={handleSubmit(onClick)} className='boton-alta-de-areas'>Solicitar</button>
        </form>
      </div>
      <div className='hero-img-container'>
        <img src={ImgMedicos} alt="Medicos de la clinica" className='hero1-img' />
      </div>
    </section>
    <Footer/>
    </>
  )
}
  

export default Turnos