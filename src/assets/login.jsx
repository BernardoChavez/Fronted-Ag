import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './img/logoag.png';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulación de inicio de sesión sin validación
    navigate('/');
  };

  const goToRegister = () => {
    navigate('/register');
  };

  return (
    <section className="auth-form" style={{ backgroundColor: '#fff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="form-container" style={{ maxWidth: '400px', width: '100%', textAlign: 'center' }}>
        <img src={logo} alt="Logo" className="form-logo" style={{ width: '80px', marginBottom: '15px' }} />
        <h2 style={{ marginBottom: '20px' }}>SERVICIO DE MANTENIMIENTO INDUSTRIAL</h2>
        <form>
          <label>EMAIL</label>
          <input type="email" placeholder="Correo electrónico" />

          <label>PASSWORD</label>
          <input type="password" placeholder="Contraseña" />

          <a href="#" className="forgot">¿Olvidaste tu contraseña?</a>

          <button type="button" onClick={handleLogin} className="btn-submit" style={{ marginTop: '15px' }}>
            INICIAR SESIÓN
          </button>
        </form>

        <p style={{ marginTop: '20px' }}>
          ¿No tienes una cuenta?{' '}
          <button onClick={goToRegister} style={{ background: 'none', border: 'none', color: '#007bff', cursor: 'pointer', textDecoration: 'underline' }}>
            Regístrate
          </button>
        </p>
      </div>
    </section>
  );
};

export default Login;