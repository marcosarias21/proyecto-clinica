import React from 'react'
import { useState , useEffect} from 'react'

function Perfil() {
  const [usuario, setUsuario] = useState({})
  const getUser = () => {
    const user = localStorage.getItem("Usuario")
    const userObj = JSON.parse(user)
    setUsuario(userObj.user)
    console.log(usuario)
    console.log(userObj)
    
  }
  
  useEffect(() => {
    getUser()    
  })
  

  return (
    <div>DNI: {usuario?.dni} </div>
  )
}

export default Perfil