import React from 'react'
import About from '../../componentest/About/About'

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
     
     
      <Footer/>
    </>
  )
}

export default Home