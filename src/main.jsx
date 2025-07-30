import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './assets/index.css';
import Footer from './assets/footer.jsx';
import Login from './assets/login.jsx';
import Register from './assets/register.jsx';

// Imágenes
import logo from './assets/img/logoag.png';
import logo1 from './assets/img/logo1.png';
import banner from './assets/img/banner.png';
import principal from './assets/img/principal.png';
import testimonio1 from './assets/img/testimonios/chef.jpg';
import testimonio2 from './assets/img/testimonios/chefpan.jpeg';

// Carrusel imágenes
import img1 from './assets/img/cocina/cocina.png';
import img2 from './assets/img/cocina/freidora.jpg';
import img3 from './assets/img/cocina/horno.png';
import img4 from './assets/img/cocina/licuadora.png';

import frio1 from './assets/img/frio/compresor.jpg';
import frio2 from './assets/img/frio/frigo.png';
import frio3 from './assets/img/frio/gas.jpg';
import frio4 from './assets/img/frio/preventivo.jpg';

import sold1 from './assets/img/tig/creacion.png';
import sold2 from './assets/img/tig/sanitario.jpg';
import sold3 from './assets/img/tig/soldadura.jpg';

const Home = () => {
  const [indexCocina, setIndexCocina] = React.useState(0);
  const [indexFrio, setIndexFrio] = React.useState(0);
  const [indexSoldadura, setIndexSoldadura] = React.useState(0);

  const cocinaImgs = [img1, img2, img3, img4];
  const frioImgs = [frio1, frio2, frio3, frio4];
  const soldaduraImgs = [sold1, sold2, sold3];

  // Carruseles
  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndexCocina((prev) => (prev + 1) % cocinaImgs.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndexFrio((prev) => (prev + 1) % frioImgs.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndexSoldadura((prev) => (prev + 1) % soldaduraImgs.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Encabezado */}
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo AG Mantenimiento" />
          <h1>Mantenimiento industrial</h1>
        </div>
        <nav className="navbar">
          <a href="#servicios">Servicios que Ofrecemos</a>
          <a href="#nosotros">Acerca de Nosotros</a>
          <a href="#contacto">Contáctanos</a>
          <Link to="/login">Iniciar Sesión</Link>
          <Link to="/register" className="signup">Sign Up</Link>
        </nav>
      </header>

      {/* HERO */}
      <section 
        className="hero" 
        onClick={() => window.open('https://api.whatsapp.com/send?phone=+59170000000&text=Hola, quiero solicitar un servicio', '_blank')}
      >
        <img src={banner} className="hero-bg" alt="Técnico trabajando" />
      </section>

      {/* Bienvenida */}
      <main className="contenido">
        <div className="texto">
          <h2>Bienvenido a AG Mantenimiento</h2>
          <p>
            Somos una empresa especializada en el mantenimiento industrial de maquinaria para la industria gastronómica.
            Con años de experiencia, brindamos soluciones eficientes, seguras y adaptadas a las necesidades de tu empresa.
            Reparamos, diseñamos y fabricamos equipos industriales para cocinas, garantizando funcionamiento óptimo y durabilidad.
          </p>
        </div>
        <div className="imagen">
          <img src={principal} alt="Mecánico reparando máquina industrial" />
        </div>
      </main>

      {/* Servicios */}
      <section className="servicios" id="servicios">
        <h2>SERVICIOS QUE OFRECEMOS</h2>

        {/* Cocina */}
        <div className="servicio-bloque">
          <h3>Mantenimiento de Maquinaria de Cocina</h3>
          <div className="servicios-lista">
            <span>Hornos industriales</span>
            <span>Licuadoras industriales</span>
            <span>Peladoras de papa</span>
            <span>Freidoras y otros equipos</span>
          </div>
          <div className="carrusel">
            {cocinaImgs.map((img, index) => {
              let position = '';
              if (index === indexCocina) position = 'active';
              else if (index === (indexCocina - 1 + cocinaImgs.length) % cocinaImgs.length) position = 'prev';
              else if (index === (indexCocina + 1) % cocinaImgs.length) position = 'next';
              else position = 'hidden';

              return <img key={index} src={img} alt="Cocina" className={`carrusel-img ${position}`} />;
            })}
          </div>
        </div>

        {/* Frío */}
        <div className="servicio-bloque">
          <h3>Mantenimiento de Equipos del Sector Frío</h3>
          <div className="servicios-lista">
            <span>Congeladores industriales</span>
            <span>Vitrinas refrigeradas</span>
            <span>Cámaras frigoríficas</span>
            <span>Refrigeradores comerciales</span>
          </div>
          <div className="carrusel">
            {frioImgs.map((img, index) => {
              let position = '';
              if (index === indexFrio) position = 'active';
              else if (index === (indexFrio - 1 + frioImgs.length) % frioImgs.length) position = 'prev';
              else if (index === (indexFrio + 1) % frioImgs.length) position = 'next';
              else position = 'hidden';

              return <img key={index} src={img} alt="Frío" className={`carrusel-img ${position}`} />;
            })}
          </div>
        </div>

        {/* Soldadura */}
        <div className="servicio-bloque">
          <h3>Servicio de Soldadura TIG</h3>
          <div className="servicios-lista">
            <span>Soldadura en acero inoxidable</span>
            <span>Diseño y fabricación personalizada</span>
            <span>Reparaciones estructurales</span>
            <span>Acabados de alta precisión</span>
          </div>
          <div className="carrusel">
            {soldaduraImgs.map((img, index) => {
              let position = '';
              if (index === indexSoldadura) position = 'active';
              else if (index === (indexSoldadura - 1 + soldaduraImgs.length) % soldaduraImgs.length) position = 'prev';
              else if (index === (indexSoldadura + 1) % soldaduraImgs.length) position = 'next';
              else position = 'hidden';

              return <img key={index} src={img} alt="Soldadura" className={`carrusel-img ${position}`} />;
            })}
          </div>
        </div>
      </section>

      {/* Nosotros */}
      <section className="nosotros" id="nosotros">
        <h2>¿QUIENES SOMOS?</h2>
        <p>En <strong>AG Mantenimiento</strong> comenzamos con una idea clara: brindar un servicio técnico confiable,
    especializado y enfocado en el rubro gastronómico. Desde entonces, hemos crecido gracias a la confianza
    de nuestros clientes, convirtiéndonos en aliados estratégicos de restaurantes, hoteles, fábricas de alimentos
    y empresas de catering. Contamos con un equipo multidisciplinario formado por técnicos mecánicos, soldadores
    certificados y especialistas en frío y gas. Creemos en la mejora continua y en la atención al detalle.
    </p>
        <div className="nosotros-detalle">
          <div className="valores">
            <h3>Nuestros valores:</h3>
            <ul>
              <li>– Compromiso con la calidad</li>
              <li>– Responsabilidad en cada trabajo</li>
              <li>– Innovación técnica</li>
            </ul>
          </div>
          <div className="nosotros-logo">
            <img src={logo1} alt="Logo AG Mantenimiento" />
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="testimonios">
        <h2>TESTIMONIOS</h2>
        <div className="testimonio">
          <div className="testimonio-texto">
            <p><strong>“Hace años trabajamos con ellos. Nunca fallan. Nos hacen mantenimiento preventivo mensual y nuestros equipos funcionan perfecto.”</strong></p>
            <p>— Gabriela Hurtado</p>
          </div>
          <img src={testimonio1} alt="Gabriela Hurtado" />
        </div>
        <div className="divider-enfatizada"></div>
        <div className="testimonio">
          <div className="testimonio-texto">
            <p><strong>“Nos diseñaron un horno a medida que ha mejorado nuestra producción. Excelente acabado y servicio postventa.”</strong></p>
            <p>— Luis Rojas</p>
          </div>
          <img src={testimonio2} alt="Luis Rojas" />
        </div>
        <div className="divider-enfatizada"></div>
      </section>

      <Footer />
    </>
  );
};

// RENDER CON RUTAS
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);