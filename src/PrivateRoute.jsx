import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const token = localStorage.getItem('token');  // Obtener el token desde localStorage

  if (!token) {
    // Si no hay token, redirigir al login
    return <Navigate to="/" />;
  }

  // Si hay token, permitir el acceso a la ruta protegida
  return children;
}

export default PrivateRoute;
