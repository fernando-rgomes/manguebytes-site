import { useState } from "react"

const TimeCard = ({ member }) => {
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
          <span>{member.job}</span>

          {member.socialIcons && (
            <div className="social-icons">
              {member.socialIcons.map((icon, index) => (
                <a key={index} href={icon.url} target="_blank" rel="noreferrer">
                  <img src={icon.icon} alt={icon.type} />
                </a>
              ))}
            </div>
          )}

          <button
            className="flip-button"
            onClick={() => setIsFlipped(true)}
          >
            Ver mais
          </button>
        </div>

        {/* BACK */}
        <div className="card-back">
          <p>{member.description}</p>

          <button
            className="flip-button"
            onClick={() => setIsFlipped(false)}
          >
            Voltar
          </button>
        </div>

      </div>
    </div>
  )
}

export default TimeCard