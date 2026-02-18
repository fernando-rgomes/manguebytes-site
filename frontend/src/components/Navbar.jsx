function Navbar() {
  return (
    <nav className="navbar">
      
      {/* Logo */}
      <div className="logo">
        <img src='/images/Logo.png' alt="MangueBytes Logo"/>
      </div>

      {/* Menu */}
      <ul className="nav-links">
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#time">Time</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>

      <div className="nav-buttons">
        <button className="btn-login">Login</button>
        <button className="btn-register">Cadastre-se</button>
      </div>

    </nav>
  )
}

export default Navbar

