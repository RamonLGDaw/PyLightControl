import React from 'react';
import { NavLink, useNavigate, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  // CSS de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.js'; // No minificado
import './App.css';  // Asegúrate de tener tus estilos
import Control from './Control';
import Programming from './Programming';
import Random from './Random';
import Login from './Login'; 
import PrivateRoute from './PrivateRoute'; 

function App() {
  const navigate = useNavigate();

  // Función para manejar el logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Eliminar el token del localStorage
    navigate('/'); // Redirigir al login
  };

  return (
    <div>
      {/* Barra de Navegación con React Router */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">PyLightControl</NavLink>
          <button
            className="navbar-toggler" 
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menú desplegable con Bootstrap */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto"> {/* Alineamos los elementos a la derecha */}
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/control"
                  onClick={() => document.getElementById('navbarNav').classList.remove('show')}
                >
                  Control
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/programming"
                  onClick={() => document.getElementById('navbarNav').classList.remove('show')}
                >
                  Program
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/random"
                  onClick={() => document.getElementById('navbarNav').classList.remove('show')}
                >
                  Random
                </NavLink>
              </li>
            </ul>
            {/* Botón de Logout */}
            <button
              className="btn btn-secondary"
              onClick={() => {
                handleLogout();
                document.getElementById('navbarNav').classList.remove('show'); // Cerrar el menú al hacer logout
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Rutas */}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/control" element={<PrivateRoute><Control /></PrivateRoute>} />
          <Route path="/programming" element={<PrivateRoute><Programming /></PrivateRoute>} />
          <Route path="/random" element={<PrivateRoute><Random /></PrivateRoute>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

