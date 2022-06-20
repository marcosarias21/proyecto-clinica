import './App.css';
import Hero from './componentest/Hero/Hero';
import Contacto from './componentest/Contacto/Contacto';
import Footer from './componentest/Footer/Foteer';
import Hero from './componentest/Hero/Hero';
import Nabvar from './componentest/Navbar/Navbar';
import Whatsapp from './componentest/whatsapp/Whatsapp';
function App() {
  return (
    <>
      <Nabvar/>
      <Hero/>
      <Whatsapp/>
      <Contacto/>
      <Footer/>
    </>
  );
}

export default App;
