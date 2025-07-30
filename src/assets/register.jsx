import React from "react";
import { Link } from "react-router-dom";
import logo from "./img/logoag.png";

const Register = () => {
  return (
    <section className="auth-form" style={{ background: "#fff", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="form-container">
        <img src={logo} alt="Logo" className="form-logo" />
        <h2>SERVICIO DE MANTENIMIENTO INDUSTRIAL</h2>
        <form>
          <label>USERNAME</label>
          <input type="text" placeholder="Nombre de usuario" required />

          <label>TELÉFONO</label>
          <input type="tel" placeholder="Teléfono" required />

          <label>EMAIL</label>
          <input type="email" placeholder="Correo electrónico" required />

          <label>CONTRASEÑA</label>
          <input type="password" placeholder="Contraseña" required />

          <button type="submit" className="btn-submit">REGISTRARSE</button>
        </form>
        <p style={{ marginTop: "15px" }}>
          ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </div>
    </section>
  );
};

export default Register;