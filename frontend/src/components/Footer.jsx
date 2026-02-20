import "./Footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      {/* Parte superior */}
      <div className="footer-top">
        <div className="footer-logo">
          <img src="/images/Logo.png" alt="Mangue Bytes Logo" />
          
        </div>

        <div className="footer-social">
          <a href="#">
            <img src="/images/instagramIcon.png" alt="Instagram" />
          </a>
          <a href="#">
            <img src="/images/linkedinIcon.png" alt="LinkedIn" />
          </a>
          <a href="#">
            <img src="/images/zap_preto.png" alt="WhatsApp" />
          </a>
        </div>
      </div>

      {/* Parte inferior */}
      <div className="footer-bottom">
        <div className="footer-links">
          <a href="#">Sobre nós</a>
          <a href="#">Planos</a>
          <a href="#">Contato</a>
        </div>

        <div className="footer-copy">
          © 2026 Manguebytes.
        </div>
      </div>
    </footer>
  )
}

export default Footer