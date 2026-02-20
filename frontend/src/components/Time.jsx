import { useState } from "react"
import TimeCard from "./TimeCard"
import "./Time.css"

const Time = () => {

 const [index, setIndex] = useState(0)

  const nextSlide = () => {
    if (index < data.length - 3) {
      setIndex(index + 1)
    }
  }

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1)
    }
  }

  const data = [
    {
      id: 1,
      name: "Jason Lee",
      img: "/images/ranger_vermelho.jpg",
      job: "Desenvolvedor",
      description: "Especialista em JavaScript e fã de Power Rangers.",
      socialIcons: [
        { type: "linkedin", icon: "/images/linkedin.png", url: "#" },
        { type: "github", icon: "/images/github.png", url: "#" },
      ],
    },
    {
      id: 2,
      name: "Fernando Ribeiro",
      img: "/images/foto_fernando.png",
      job: "Desenvolvedor Full Stack",
      description:
        "Apaixonado por inovação, ensino e desenvolvimento full-stack.",
      socialIcons: [
        { type: "linkedin", icon: "/images/linkedinIcon.png", url: "#" },
        { type: "github", icon: "/images/githubIcon.png", url: "#" },
        { type: "instagram", icon: "/images/instagramIcon.png", url: "#" },
      ],
    },
    {
      id: 3,
      name: "Maria Silva",
      img: "/images/maria.jpg",
      job: "UX Designer",
      description: "Focada em experiência e design centrado no usuário.",
      socialIcons: [
        { type: "linkedin", icon: "/images/linkedin.png", url: "#" },
      ],
    },
    {
      id: 4,
      name: "Jason Lee",
      img: "/images/ranger_vermelho.jpg",
      job: "Desenvolvedor",
      description: "Especialista em JavaScript e fã de Power Rangers.",
      socialIcons: [
        { type: "linkedin", icon: "/images/linkedin.png", url: "#" },
        { type: "github", icon: "/images/github.png", url: "#" },
      ],
    },
    {
      id: 5,
      name: "Jason Lee",
      img: "/images/ranger_vermelho.jpg",
      job: "Desenvolvedor",
      description: "Especialista em JavaScript e fã de Power Rangers.",
      socialIcons: [
        { type: "linkedin", icon: "/images/linkedin.png", url: "#" },
        { type: "github", icon: "/images/github.png", url: "#" },
      ],
    },
    {
      id: 6,
      name: "Jason Lee",
      img: "/images/ranger_vermelho.jpg",
      job: "Desenvolvedor",
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