function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">
        <div className="hero-logo">
          <img src="./images/logo_hero.png"/>
        </div>

        <h1>
          Soluções Inteligentes para <br />
          <span className="highlight">Monitoramento Ambiental</span>
        </h1>

        <p>
          A MangueBytes desenvolve tecnologia geoespacial, IoT e análise de dados
          para transformar informação ambiental em decisões estratégicas.
        </p>

        <button className="hero-button">
          Conheça o Ecossistema Mangue
        </button>
      </div>

      {/* Espaço para futuras ilustrações */}
      <div className="hero-decor hero-left"></div>
      <div className="hero-decor hero-right"></div>

    </section>
  )
}

export default Hero
