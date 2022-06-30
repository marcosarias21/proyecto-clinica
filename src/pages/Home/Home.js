import React from 'react'
import About from '../../componentest/About/About'
import Areas from '../../componentest/Areas/Areas'
import Cards from '../../componentest/Cards/Cards'
import Contacto from '../../componentest/Contacto/Contacto'

import Footer from '../../componentest/Footer/Foteer'
import Hero from '../../componentest/Hero/Hero'
import Nabvar from '../../componentest/Navbar/Navbar'
import Whatsapp from '../../componentest/whatsapp/Whatsapp'

function Home() {
  return (
    <>
      <Nabvar/>
      <Hero/>
      <Whatsapp/>
      <About/>
      <Areas/>
      <Contacto/>
      <Cards/>
     
     
      <Footer/>
    </>
  )
}

export default Home