import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';
import { useApiError } from '../hooks/useApiError';
import { useForm } from '../hooks/useForm';
import logo from './img/logoag.png';

const Login = () => {
  const navigate = useNavigate();
  const { login, error: authError } = useAuth();
  const { error: apiError, handleError, clearError } = useApiError();
  const { formData, errors, handleInputChange, validateForm } = useForm({
    username: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    clearError();
    
    const validationRules = {
      username: { required: true },
      password: { required: true, minLength: 6 }
    };
    
    if (!validateForm(validationRules)) {
      return;
    }

    setLoading(true);
    console.log('Intentando login con:', formData.username);
    
    try {
      const response = await login(formData);
      console.log('Login exitoso:', response.data);
      
      setTimeout(() => {
        navigate('/');
      }, 1500);
    } catch (err) {
      console.error('Error en login:', err);
      handleError(err);
    } finally {
      setLoading(false);
    }
  };

  const goToRegister = () => {
    navigate('/register');
  };

  const errorMessage = authError || apiError;

  return (
    <section className="auth-form" style={{ backgroundColor: '#fff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="form-container" style={{ maxWidth: '400px', width: '100%', textAlign: 'center' }}>
        <img src={logo} alt="Logo" className="form-logo" style={{ width: '80px', marginBottom: '15px' }} />
        <h2 style={{ marginBottom: '20px' }}>SERVICIO DE MANTENIMIENTO INDUSTRIAL</h2>
        
        {errorMessage && (
          <div style={{ 
            backgroundColor: '#f8d7da', 
            color: '#721c24', 
            padding: '10px', 
            borderRadius: '4px', 
            marginBottom: '15px',
            fontSize: '14px'
          }}>
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <label>USUARIO</label>
          <input 
            type="text" 
            name="username"
            placeholder="Nombre de usuario" 
            value={formData.username}
            onChange={handleInputChange}
            disabled={loading}
            className={errors.username ? 'error' : ''}
          />
          {errors.username && <span className="error-text">{errors.username}</span>}

          <label>PASSWORD</label>
          <input 
            type="password" 
            name="password"
            placeholder="Contraseña" 
            value={formData.password}
            onChange={handleInputChange}
            disabled={loading}
            className={errors.password ? 'error' : ''}
          />
          {errors.password && <span className="error-text">{errors.password}</span>}

          <a href="#" className="forgot">¿Olvidaste tu contraseña?</a>

          <button 
            type="submit" 
            className="btn-submit" 
            style={{ marginTop: '15px' }}
            disabled={loading}
          >
            {loading ? 'INICIANDO SESIÓN...' : 'INICIAR SESIÓN'}
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