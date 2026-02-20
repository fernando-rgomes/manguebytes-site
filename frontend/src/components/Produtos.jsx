import { useState } from "react"
import "./Produtos.css"

function Produtos() {
  const [slide, setSlide] = useState(0)

  return (
    <section id="produtos" className="produtos">

      <div className="slider">

        <div 
          className="slides"
          style={{ transform: `translateX(-${slide * 100}%)` }}
        >

          {/* Slide 1 - Dispositivo IoT */}
          <div className="slide">
            <div className="slide-content">
              <div className="text">
                <h2>Dispositivo IoT</h2>
                <p>
                  Equipamento desenvolvido para monitoramento
                  ambiental inteligente, permitindo coleta de dados
                  em tempo real com alta precisão e autonomia.
                </p>
                <button>Saiba mais</button>
              </div>

              <div className="image">
                <img src="./images/iot_dispositivo.png" alt="Dispositivo IoT" />
              </div>
            </div>
          </div>

          {/* Slide 2 - BIOSAT */}
          <div className="slide">
            <div className="slide-content">
              <div className="text">
                <h2>Plataforma BIOSAT Mangue</h2>
                <p>
                  Sistema inteligente para análise geoespacial,
                  visualização estratégica e gestão de dados
                  ambientais integrados.
                </p>
                <button>Saiba mais</button>
              </div>

              <div className="image-2">
                <img src="./images/Mockup_laptop.png" alt="BIOSAT" />
              </div>
            </div>
          </div>

        </div>

        {/* Bolinhas */}
        <div className="dots">
          <span 
            className={slide === 0 ? "dot active" : "dot"}
            onClick={() => setSlide(0)}
          ></span>
          <span 
            className={slide === 1 ? "dot active" : "dot"}
            onClick={() => setSlide(1)}
          ></span>
        </div>

      </div>

    </section>
  )
}

export default Produtos
