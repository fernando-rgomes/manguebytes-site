import "./Plans.css"
const Plans = () => {
  const plans = [
    {
      name: "Essencial",
      description: "Para ONGs, Prefeituras e Projetos Locais",
      features: [
        "Até 150 km²/mês",
        "Relatórios Básicos",
        "Dashboard"
      ],
      price: "R$990",
    },
    {
      name: "Professional",
      description: "Para Empresas, Órgãos Estaduais e Consultorias",
      features: [
        "Até 230 km²/mês",
        "Históricos",
        "Alertas",
        "API"
      ],
      price: "R$4.490",
      highlight: true
    },
    {
      name: "Enterprise",
      description: "Para Grandes Projetos e Áreas Extensas",
      features: [
        "Área ampliada ou ilimitada",
        "SLA",
        "Suporte dedicado"
      ],
      price: "R$12.990",
    }
  ]

  return (
    <section className="plans-section">
      <h2 className="plans-title">Planos</h2>

      <div className="plans-grid">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`plan-card ${plan.highlight ? "highlight" : ""}`}
          >
            <h3>{plan.name}</h3>
            <p className="plan-description">{plan.description}</p>

            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>

            <div className="plan-price">
              {plan.price}
              <span>/mês</span>
            </div>

            <button className="plan-button">
              Assinar Plano
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Plans