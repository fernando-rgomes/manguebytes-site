import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Servicos from './components/Servicos'
import Footer from './components/Footer'
import Produtos from "./components/Produtos"
import Time from './components/Time'
import NewsSection from './components/NewsSection'
import ContactSection from './components/ContactSection'
import Plans from './components/Plans'


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sobre />
      <Servicos />
      <Plans />
      <Produtos />
      <Time />
      <NewsSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
