import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from '../hooks/useForm';
import { useApiError } from '../hooks/useApiError';
import { register } from '../api/authApi';
import logo from "./img/logoag.png";

const Register = () => {
  const navigate = useNavigate();
  const { error, handleError, clearError } = useApiError();
  const { formData, errors, handleInputChange, validateForm } = useForm({
    username: '',
    email: '',
    telefono: '',
    direccion: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    
    const validationRules = {
      username: { required: true },
      email: { required: true, email: true },
      telefono: { required: true },
      direccion: { required: true },
      password: { required: true, minLength: 6 }
    };
    
    if (!validateForm(validationRules)) {
      return;
    }

    setLoading(true);
    try {
      await register(formData);
      // Redirigir al login después del registro exitoso
      navigate('/login');
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-form" style={{ background: "#fff", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="form-container">
        <img src={logo} alt="Logo" className="form-logo" />
        <h2>SERVICIO DE MANTENIMIENTO INDUSTRIAL</h2>
        
        {error && (
          <div style={{ 
            backgroundColor: '#f8d7da', 
            color: '#721c24', 
            padding: '10px', 
            borderRadius: '4px', 
            marginBottom: '15px',
            fontSize: '14px'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleRegister}>
          <label>USERNAME</label>
          <input 
            type="text" 
            name="username"
            placeholder="Nombre de usuario" 
            value={formData.username}
            onChange={handleInputChange}
            disabled={loading}
            className={errors.username ? 'error' : ''}
            required 
          />
          {errors.username && <span className="error-text">{errors.username}</span>}

          <label>EMAIL</label>
          <input 
            type="email" 
            name="email"
            placeholder="Correo electrónico" 
            value={formData.email}
            onChange={handleInputChange}
            disabled={loading}
            className={errors.email ? 'error' : ''}
            required 
          />
          {errors.email && <span className="error-text">{errors.email}</span>}

          <label>TELÉFONO</label>
          <input 
            type="tel" 
            name="telefono"
            placeholder="Teléfono" 
            value={formData.telefono}
            onChange={handleInputChange}
            disabled={loading}
            className={errors.telefono ? 'error' : ''}
            required 
          />
          {errors.telefono && <span className="error-text">{errors.telefono}</span>}

          <label>DIRECCIÓN</label>
          <input 
            type="text" 
            name="direccion"
            placeholder="Dirección" 
            value={formData.direccion}
            onChange={handleInputChange}
            disabled={loading}
            className={errors.direccion ? 'error' : ''}
            required 
          />
          {errors.direccion && <span className="error-text">{errors.direccion}</span>}

          <label>CONTRASEÑA</label>
          <input 
            type="password" 
            name="password"
            placeholder="Contraseña" 
            value={formData.password}
            onChange={handleInputChange}
            disabled={loading}
            className={errors.password ? 'error' : ''}
            required 
          />
          {errors.password && <span className="error-text">{errors.password}</span>}

          <button 
            type="submit" 
            className="btn-submit"
            disabled={loading}
          >
            {loading ? 'REGISTRANDO...' : 'REGISTRARSE'}
          </button>
        </form>
        <p style={{ marginTop: "15px" }}>
          ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </div>
    </section>
  );
};

export default Register;