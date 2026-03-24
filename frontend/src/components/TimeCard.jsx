import { useState } from "react"

const TimeCard = ({ member, setIsPaused }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="card">
      <div className={`card-inner ${isFlipped ? "flipped" : ""}`}>

        {/* FRONT */}
        <div className="card-front">
          <div className="img">
            <img src={member.img} alt={member.name} />
          </div>

          <h2>{member.name}</h2>
          <span className="job">{member.job}</span>
          <span className="subtitle">{member.subtitle}</span>

          {member.socialIcons && (
            <div className="social-icons">
              {member.socialIcons.map((icon, index) => (
                <a key={index}
                 href={icon.url} 
                 target="_blank" 
                 rel="noreferrer"
                 title= {icon.type} // mostra o nome da rede ao passar o mouse
                 >
                  <img src={icon.icon} alt={icon.type} />
                </a>
              ))}
            </div>
          )}

          <button
            className="flip-button"
            onClick={() => {
              setIsFlipped(true)
              setIsPaused(true) //pausa
            }}
          >
            Ver mais
          </button>
        </div>

        {/* BACK */}
        <div className="card-back">
          <p>{member.description}</p>

          <button
            className="flip-button"
            onClick={() =>  {
            setIsFlipped(false)
            setIsPaused(false) // volta o autoplay
            }}
          >
            Voltar
          </button>
        </div>

      </div>
    </div>
  )
}

export default TimeCard