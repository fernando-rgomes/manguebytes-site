import { useState, useEffect} from "react"
import TimeCard from "./TimeCard"
import "./Time.css"

const Time = () => {

 const [index, setIndex] = useState(0)
 const [isPaused, setIsPaused] = useState(false)

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
  if (isPaused) return // trava o autoplay

  const interval = setInterval(() => {
    nextSlide()
  }, 5000) //5 segundos

  return () => clearInterval(interval)
}, [isPaused])


  const data = [
    {
      id: 1,
      name: "João Miguel",
      img: "/images/joaomiguel2.png",
      job: "CEO - Diretor Executivo",
      description: "Faço parte da liderança executiva da Manguebytes e também atuo no desenvolvimento de software. Tenho experiência em diversos projetos e, atualmente, lidero a evolução do Sistema do Mangue e contribuo em um projeto de IA com visão computacional. Unifico visão de negócio e execução técnica, com foco em entregas consistentes, qualidade, comunicação clara e crescimento do time.",
      socialIcons: [
        { type: "linkedin", icon: "/images/linkedinIcon.png", url: " https://www.linkedin.com/in/joao-miguel-santos-1589b0311" },
        { type: "github", icon: "/images/githubIcon.png", url: " https://github.com/ricoRecruta" },
        {type: "lattes", icon: "/images/lattesIcon.png", url: "https://lattes.cnpq.br/4316775552650596" },
        { type: "instagram", icon: "/images/instagramIcon.png", url: "https://www.instagram.com/jm.santos__/" },
      ],
    },
    
    {
      id: 2,
      name: "Laísa Maria",
      img: "/images/laisa.png",
      job: "PM - Gerente de Produto",
      description: "Sou Laísa Santos, técnica em Informática pelo IFRN e graduanda em Ciência da Computação na UFPB, movida por desafios que conectam tecnologia, estratégia e impacto real. Atuo como analista de processos de negócios e gestão de projetos, sempre unindo visão analítica e sensibilidade ao usuário. Como sócia administrativa da MangueBytes, transformo ideias em soluções digitais com propósito, inovação e foco em resultados.",
      socialIcons: [
        { type: "linkedin", icon: "/images/linkedinIcon.png", url: "https://www.linkedin.com/in/laisamarias/" },
        { type: "github", icon: "/images/githubIcon.png", url:"https://github.com/laisamarias" },
        {type: "lattes", icon: "/images/lattesIcon.png", url: "https://lattes.cnpq.br/9091363871803145" },
        { type: "instagram", icon: "/images/instagramIcon.png", url:"https://www.instagram.com/laisamarias_/"},
      ],
    },

    {
      id: 3,
      name: "Fernando Ribeiro",
      img: "/images/foto_fernando.png",
      job: "CTO - Diretor de Tecnologia",
      description:
        "Fernando é cofundador e CTO na MangueBytes, responsável por liderar a estratégia tecnológica e transformar a visão da empresa em soluções digitais escaláveis e seguras. Com forte base em Java no back-end, também atua no desenvolvimento Web com Node.js e React, integrando tecnologias modernas e Inteligência Artificial. No seu tempo livre, valoriza conexões humanas e jogos de videogame.",
      socialIcons: [
        { type: "linkedin", icon: "/images/linkedinIcon.png", url: "https://www.linkedin.com/in/fernando-rgomes1880/" },
        { type: "github", icon: "/images/githubIcon.png", url: "https://github.com/fernando-rgomes" },
        {type: "lattes", icon: "/images/lattesIcon.png", url: "http://lattes.cnpq.br/4639382367899560" },
        { type: "instagram", icon: "/images/instagramIcon.png", url: "https://www.instagram.com/fejunior.dev/" },
      ],
    },
    {
      id: 4,
      name: "Gabriela Porto",
      img: "/images/gabi.png",
      job: "Tech Lead - Líder Técnico",
      description: "Estudante de Ciência da Computação, com interesse atual na área de dados, atuando principalmente com Python e suas bibliotecas. Possuo experiências acadêmicas em projetos que envolvem análise e manipulação de dados, aplicando fundamentos computacionais de forma prática. Sou uma pessoa proativa, dedicada e em constante aprimoramento técnico, com foco no desenvolvimento de soluções orientadas a dados.",
      socialIcons: [
        { type: "linkedin", icon: "/images/linkedinIcon.png", url: "https://www.linkedin.com/in/gabrielaoliporto" },
        { type: "github", icon: "/images/githubIcon.png", url: "https://github.com/gankyuz" },
      ],
    },
    {
      id: 5,
      name: "Alexander Brasil",
      img: "/images/alex.jpeg",
      job: "Engenheiro de Dados",
      description: "Olá, meu nome é Alexander Brasil, tenho 20 anos e sou natural de João Pessoa, Paraíba. Atualmente estou concluindo a licenciatura em Ciência da Computação pela Universidade Federal da Paraíba (UFPB). Atuo como engenheiro de dados e desenvolvedor backend, também faço parte do time de análise de dados do MangueBytes, onde contribuo no desenvolvimento do projeto",
      socialIcons: [
        { type: "linkedin", icon: "/images/linkedinIcon.png", url: "https://www.linkedin.com/in/alexander-brasil-2b060129a" }
      ],
    },
    {
      id: 6,
      name: "Clara Rodrigues",
      img: "/images/mariaclara.png",
      job: "Pesquisadora em Geoprocessamento",
      description: "Pesquisadora em Geoprocessamento.",
      socialIcons: [
       
      ],
    },
    {
      id: 7,
      name: "Kauã Santiago",
      img: "/images/kaua.png",
      job: "UX/UI Designer",
      description: "Designer UX/UI",
      socialIcons: [
        { type: "linkedin", icon: "/images/linkedinIcon.png", url: "https://www.linkedin.com/in/kau%C3%A3-santiago-ab3941199/" },
        { type: "behance", icon: "/images/behance.png", url: "https://www.behance.net/KauaSantiago" },
        {type: "instagram", icon: "/images/instagramIcon.png", url: "https://www.instagram.com/kauassantiago/" }
      ],
    },
     {
      id: 8,
      name: "Márcia Xavier",
      img: "/images/marcia.png",
      job: "UX/UI Designer",
      description: "Designer em formação com olhar estratégico para o desenvolvimento de produtos físicos e digitais, acumulando experiência que abrange desde a modelagem 3D no Rhinoceros até a prototipagem de alta fidelidade no Figma. Foco em UX/UI e inovação para criar soluções que resolvam problemas reais de forma funcional, visando sempre entregar projetos que alinhem as necessidades do negócio ao bem-estar do usuário final.",
      socialIcons: [
        { type: "linkedin", icon: "/images/linkedinIcon.png", url: "https://www.linkedin.com/in/m%C3%A1rcia-eduarda-b24317176/" },
      ],
    },
    {
      id: 9,
      name: "João Vitor Fernandes",
      img: "/images/joaovitor.png",
      job: "Desenvolvedor Fullstack",
      description: "Desenvolvedor FullStack.",
      socialIcons: [
        { type: "linkedin", icon: "/images/linkedinIcon.png", url: "https://linkedin.com/in/jvfernrs" },
        { type: "github", icon: "/images/githubIcon.png", url: "https:github.com/floresdecarbono" },
        {type: "instagram", icon: "/images/instagramIcon.png", url: "https://instagram.com/jvfernrs"}
      ],
    },
    {
      id: 10,
      name: "Pedro Augusto",
      img: "/images/pa2.jpeg",
      job: "Desenvolvedor Fullstack",
      description: "Estudante de Ciência da Computação, com foco em desenvolvimento de software e resolução de problemas. Gosto de entender como as soluções funcionam por trás da lógica. Busco evolução constante, priorizando organização, aprendizado contínuo e desafios que estimulem tanto cresciemento técnico quanto pessoal.",
      socialIcons: [
        { type: "linkedin", icon: "/images/linkedinIcon.png", url: " https://www.linkedin.com/in/pedrolucenaof/" },
        {type: "lattes", icon: "/images/lattesIcon.png", url: "https://lattes.cnpq.br/9697825355757798" },
        { type: "instagram", icon: "/images/instagramIcon.png", url: "https://www.instagram.com/pedro.lucenaof/" }
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
              <TimeCard 
              key={member.id}
              member={member}
              setIsPaused={setIsPaused}
              />
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