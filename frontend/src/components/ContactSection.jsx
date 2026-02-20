import React from "react"
import "./Contact.css"

const ContactSection = () => {
  return (
    <section id="Contato" className="contact-section">
      <div className="contact-wrapper">

        <h2 className="contact-title">CONTATE-NOS</h2>

        {/* Blocos superiores */}
        <div className="contact-top">

          <a
            href="https://wa.me/5599999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-box"
          >
            
            <div className="zap">
                <span className="icon"><img src="/images/zap_preto.png"></img></span>
              <strong>Fale conosco pelo WhatsApp</strong>
              <p>Atendimento rápido e direto</p>
            </div>
          </a>

          <div className="contact-box">
            <strong>E-mail</strong>
            <p>manguebytes@gmail.com</p>
          </div>

        </div>

        {/* Conteúdo principal */}
        <div className="contact-content">

          {/* Ilustração */}
          <div className="contact-illustration">
            <img
              src="./images/contact.jpg"
              alt="MangueBytes contato"
            />
          </div>

          {/* Formulário */}
          <form className="contact-form">

            <div className="form-row">
              <div className="form-group">
                <label>Nome</label>
                <input type="text" placeholder="Digite seu nome" />
              </div>

              <div className="form-group">
                <label>Telefone</label>
                <input type="text" placeholder="Digite seu telefone" />
              </div>
            </div>

            <div className="form-group">
              <label>E-mail</label>
              <input type="email" placeholder="Digite seu e-mail" />
            </div>

            <div className="form-group">
              <label>Assunto</label>
              <input type="text" placeholder="Digite o assunto" />
            </div>

            <div className="form-group">
              <label>Mensagem</label>
              <textarea
                rows="4"
                placeholder="Conte como podemos ajudar"
              ></textarea>
            </div>

            <div className="checkbox-group">
              <input type="checkbox" />
              <span>
                Ao enviar meus dados, estou ciente quanto ao tratamento das
                informações conforme nossa <a href="#">Política de Privacidade</a>.
              </span>
            </div>

            <button type="submit" className="contact-button">
              Enviar
            </button>

          </form>

        </div>
      </div>
    </section>
  )
}

export default ContactSection