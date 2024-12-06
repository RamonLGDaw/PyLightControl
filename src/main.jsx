import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css'; // Importa Tailwind CSS


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>  {/* Asegúrate de envolver el App con BrowserRouter */}
    <App />
  </BrowserRouter>
);