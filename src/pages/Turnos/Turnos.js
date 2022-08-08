import React, { useEffect , useState } from 'react'
import { useForm } from 'react-hook-form'
import Navbar from '../../componentest/Navbar/Navbar'
import Footer from '../../componentest/Footer/Foteer'
import './turnos.css'
import ImgMedicos from '../../Assets/Imagen medicos.png'




const Turnos = () => {
  const urlBE = process.env.REACT_APP_URL_BE

  const login =()=>{
    const usuarios = JSON.parse(localStorage.getItem('Usuario'))
    if(!usuarios){
      window.location.href='/login'
    }
  }

  useEffect(()=>{
    login()
  },[ ])


    const { register , handleSubmit, formState: {errors} } = useForm()
    
    const [areas, setAreas] = useState([])
    
    const getAreas= async ()=>{
      const res = await fetch(`${urlBE}/areas`)
      const json = await res.json()
      const jsonAreas = json.areas
      setAreas(jsonAreas)
    }
    useEffect(()=>{
      getAreas()
    }, [ ])// eslint-disable-line react-hooks/exhaustive-deps
    
    const [medicos, setMedicos] = useState([])
    
    
    const getMedicos= async ()=>{
      const valorArea = document.getElementById ('valorArea').value      
      const res = await fetch(`${urlBE}/medicos`)
      const json = await res.json()
      const jsonMedicos = json.medicos
      let medicosFiltrados = jsonMedicos.filter (medFiltrados => medFiltrados.area === valorArea)
      setMedicos(medicosFiltrados)
    }
    
    
    const onClick = async (data)=>{
        const resp = await fetch(`${urlBE}/turnos`, {
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
   const fecha =()=>{
    let date = new Date()
    let day = date.getDate() +1
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    
    if(month < 10 && day < 10){
      document.getElementById('fechaMinima').min =`0${day}/0${month}/${year}`
      console.log(`0${day}/0${month}/${year}`)
    }else if(month < 10 && day >= 10){
      document.getElementById('fechaMinima').min =`${day}/0${month}/${year}`
    }else{
      document.getElementById('fechaMinima').min =`${day}/${month}/${year}`
    }
   }
   useEffect(()=>{
    fecha()
  },[])

    
    return (
      <> 
    <Navbar/>
    <section className='hero1 d-flex flex-column align-items-center justify-content-between d-lg-flex flex-lg-row align-items-lg-center justify-content-lg-evenly px-3 pt-5 mt-5 pt-md-5 pt-lg-3 mt-lg-0'>
      <div className='hero-txt-container'>
        <h2 className='fw-bold'>Pagina de turnos</h2>
        <form className='/#'>
         <label className='fw-bold mt-2'>Seleccione el area de especialidad:</label>
          <select onClick={getMedicos} className='area-listado-select'{...register('area')} id="valorArea" >
           {
            areas.map(area=><option  className='areas-listado' key={area._id}>{area.nombre}</option>)
           }
          </select>
          <label className='fw-bold mt-2'>Seleccione su medico_</label>
          <select className='area-listado-select'{...register('medico')} >
           {
            medicos.map(medico=><option  className='areas-listado' key={medico._id}>{medico.nombre}</option>)
           }
          </select>
         <div className='mb-3'>
            <label className='me-2 fw-bold'>Fecha</label>
            <input className='input-style-registe' type="date" id='fechaMinima' min={''} {...register('fecha', {required:true} )}  />
            {errors.fecha?.type === 'required' && <span className='text-danger ms-2'>Este campo es obligatorio </span>}
          </div>
          <div className='mb-3'>
            <label className='me-2 fw-bold'>Hora</label>
            <input className='input-style-registe' type="time" {...register('hora', {required:true} )}/>
            {errors.hora?.type === 'required' && <span className='text-danger ms-2'>Este campo es obligatorio </span>}
          </div>
          <div className='mb-3'>
            <label className='me-2 fw-bold'>Nombre del Paciente</label>
            <input className='input-style-registe' type="text" {...register('nombre', {required:true} )} />
            {errors.nombre?.type === 'required' && <span className='text-danger ms-2'>Este campo es obligatorio </span>}
          </div>
          <div className='mb-3'>
            <label className='me-2 fw-bold'>Dni</label>
            <input className='input-style-registe' type="number" {...register('dni', {required:true} )} />
            {errors.dni?.type === 'required' && <span className='text-danger ms-2'>Este campo es obligatorio </span>}
          </div>
          <button onClick={handleSubmit(onClick)} className='boton-alta-de-areas'>Solicitar</button>
        </form>
      </div>
      <div className='hero-img-container d-none d-lg-flex'>
        <img src={ImgMedicos} alt="Medicos de la clinica" className='hero1-img' />
      </div>
    </section>
    <Footer/>
    </>
  )
}
  

export default Turnos