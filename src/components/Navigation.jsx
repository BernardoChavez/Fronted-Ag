import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';

const Navigation = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <a href="#servicios">Servicios que Ofrecemos</a>
      <a href="#nosotros">Acerca de Nosotros</a>
      <a href="#contacto">Contáctanos</a>
      {user ? (
        <>
          <span style={{ color: 'white', marginRight: '10px' }}>
            Bienvenido, {user.username}
          </span>
          <button 
            onClick={logout} 
            style={{
              background: 'none',
              border: '1px solid white',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Cerrar Sesión
          </button>
        </>
      ) : (
        <>
          <Link to="/login">Iniciar Sesión</Link>
          <Link to="/register" className="signup">Sign Up</Link>
        </>
      )}
    </nav>
  );
};

export default Navigation; 