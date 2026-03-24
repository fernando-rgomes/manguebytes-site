import { useState, useEffect} from "react"
import TimeCard from "./TimeCard"
import "./Time.css"

const Time = () => {

 const [index, setIndex] = useState(0)

  const nextSlide = () => {
  setIndex((prevIndex) =>
    prevIndex === data.length - 3 ? 0 : prevIndex + 1
  )
}

const prevSlide = () => {
  setIndex((prevIndex) =>
    prevIndex === 0 ? data.length - 3 : prevIndex - 1
  )
}

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 3000) // 3000ms = 3 segundos (recomendado)

    return () => clearInterval(interval)
  }, [index])


  const data = [
    {
      id: 1,
      name: "João Miguel",
      img: "/images/ranger_vermelho.jpg",
      job: "CEO - Diretor Executivo",
      description: "Especialista em JavaScript e fã de Power Rangers.",
      socialIcons: [
        { type: "linkedin", icon: "/images/linkedinIcon.png", url: "#" },
        { type: "github", icon: "/images/githubIcon.png", url: "#" },
      ],
    },
    
    {
      id: 2,
      name: "Laísa Maria",
      img: "/images/maria.jpg",
      job: "PM - Gerente de Produto",
      description: "Focada em experiência e design centrado no usuário.",
      socialIcons: [
        { type: "linkedin", icon: "/images/linkedin.png", url: "#" },
      ],
    },

    {
      id: 3,
      name: "Fernando Ribeiro",
      img: "/images/foto_fernando.png",
      job: "CTO - Diretor de Tecnologia",
      description:
        "Fernando é cofundador e CTO, responsável por liderar a estratégia tecnológica e transformar a visão da empresa em soluções digitais escaláveis e seguras. Com forte base em Java no back-end, também atua no desenvolvimento Web com Node.js e React, integrando tecnologias modernas e Inteligência Artificial. No seu tempo livre, valoriza conexões humanas e jogos de videogame.",
      socialIcons: [
        { type: "linkedin", icon: "/images/linkedinIcon.png", url: "https://www.linkedin.com/in/fernando-rgomes1880/" },
        { type: "github", icon: "/images/githubIcon.png", url: "https://github.com/fernando-rgomes" },
        { type: "instagram", icon: "/images/instagramIcon.png", url: "https://www.instagram.com/fejunior.dev/" },
      ],
    },
    {
      id: 4,
      name: "Gabriela Porto",
      img: "/images/ranger_vermelho.jpg",
      job: "Tech Lead - Líder Técnico",
      description: "Especialista em JavaScript e fã de Power Rangers.",
      socialIcons: [
        { type: "linkedin", icon: "/images/linkedin.png", url: "#" },
        { type: "github", icon: "/images/github.png", url: "#" },
      ],
    },
    {
      id: 5,
      name: "Alexander Brasil",
      img: "/images/ranger_vermelho.jpg",
      job: "Engenheiro de Dados",
      description: "Especialista em JavaScript e fã de Power Rangers.",
      socialIcons: [
        { type: "linkedin", icon: "/images/linkedin.png", url: "#" },
        { type: "github", icon: "/images/github.png", url: "#" },
      ],
    },
    {
      id: 6,
      name: "Clara Rodrigues",
      img: "/images/ranger_vermelho.jpg",
      job: "Pesquisadora em Geoprocessamento",
      description: "Especialista em JavaScript e fã de Power Rangers.",
      socialIcons: [
        { type: "linkedin", icon: "/images/linkedin.png", url: "#" },
        { type: "github", icon: "/images/github.png", url: "#" },
      ],
    },
    {
      id: 7,
      name: "Kauã Santiago",
      img: "/images/ranger_vermelho.jpg",
      job: "UX/UI Designer",
      description: "Especialista em JavaScript e fã de Power Rangers.",
      socialIcons: [
        { type: "linkedin", icon: "/images/linkedin.png", url: "#" },
        { type: "github", icon: "/images/github.png", url: "#" },
      ],
    },
     {
      id: 8,
      name: "Márcia Xavier",
      img: "/images/ranger_vermelho.jpg",
      job: "UX/UI Designer",
      description: "Especialista em JavaScript e fã de Power Rangers.",
      socialIcons: [
        { type: "linkedin", icon: "/images/linkedin.png", url: "#" },
        { type: "github", icon: "/images/github.png", url: "#" },
      ],
    },
    {
      id: 9,
      name: "João Vitor Fernandes",
      img: "/images/ranger_vermelho.jpg",
      job: "Desenvolvedor Fullstack",
      description: "Especialista em JavaScript e fã de Power Rangers.",
      socialIcons: [
        { type: "linkedin", icon: "/images/linkedin.png", url: "#" },
        { type: "github", icon: "/images/github.png", url: "#" },
      ],
    },
  ]

  return (
    <section id="time">
    <div className="body-team">
      <div className="wrapper">
        <h2 className="team-title">Conheça nosso time</h2>

        <div className="carousel-container">

          <button className="arrow left" onClick={prevSlide}>
            ‹
          </button>

          <div
            className="carousel"
            style={{
              transform: `translateX(-${index * (100 / 3)}%)`
            }}
          >
            {data.map((member) => (
              <TimeCard key={member.id} member={member} />
            ))}
          </div>

          <button className="arrow right" onClick={nextSlide}>
            ›
          </button>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Time