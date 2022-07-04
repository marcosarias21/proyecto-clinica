import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import Perfil from './pages/Perfil/Perfil';
import Turnos from './pages/Turnos/Turnos';
import LogInAdmin from './pages/LogInAdmin/LogInAdmin';
import UsuariosConsultas from './pages/UsuariosConsultas/UsuariosConsultas';
import TurnosConsultas from './pages/TurnosConsultas/TurnosConsultas';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import AltaDeServicios from './pages/AltaDeServicios/AltaDeServicios';
import AltaDeMedicos from './pages/AltaDeMedicos/AltaDeMedicos';

function App() {
  return (
    <>
      <Routes>
        <Route path='/*' element={<ErrorPage/>}/>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/perfil' element={<Perfil />} />
        <Route path='/turnos' element={<Turnos />} />
        <Route path='/login-administracion' element={<LogInAdmin />} />
        <Route path='/usuarios-consultas' element={<UsuariosConsultas />} />
        <Route path='/turnos-consultas' element={<TurnosConsultas />} />
        <Route path='/areas-consultas' element={<AltaDeServicios />} />
        <Route path='/medicos-consultas' element={<AltaDeMedicos/>}/>
      </Routes>
    </>
  );
}

export default App;
