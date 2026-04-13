import "../styles/Home.css"

function Home() {
  return (
    <div>

      {/* NAVBAR */}
      <div className="navbar">
        <div className="logo">💈 Barbería Efraín</div>

        <div className="menu">
          <button>Inicio</button>
          <button>Servicios</button>
          <button>Agendar</button>
          <button className="profile">Oscar</button>
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="overlay"></div>

        <div className="hero-content">
          <h1>
            Tu Estilo,<br />
            <span className="highlight">Nuestra Pasión</span>
          </h1>

          <p>
            Barbería profesional con los mejores estilos clásicos y modernos
          </p>

          <div className="buttons">
            <button className="primary-btn">Agendar Cita</button>
            <button className="secondary-btn">Ver Servicios</button>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="services">
        <h2>Nuestros Servicios</h2>

        <div className="services-grid">
          <div className="card">
            <h3>Corte Clásico</h3>
            <p>Estilo tradicional con acabado profesional.</p>
          </div>

          <div className="card">
            <h3>Corte Moderno</h3>
            <p>Diseños actuales y personalizados.</p>
          </div>

          <div className="card">
            <h3>Barba</h3>
            <p>Perfilado y cuidado de barba.</p>
          </div>
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section className="about">
        <h2>Sobre Nosotros</h2>
        <p>
          En Barbería Efraín ofrecemos la mejor experiencia en cortes de cabello,
          combinando tradición y modernidad con barberos expertos.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Barbería Efraín - Todos los derechos reservados</p>
      </footer>

    </div>
  )
}

export default Home