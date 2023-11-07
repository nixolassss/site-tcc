import {Link} from "react-router-dom"
import Header from "../components/header/Header"
import Footer from "../components/Footer"
import "./home.css"
import video from "/video.png"
import fogo from "/fogo.svg"
import placa from "/placa.svg"
import sinal from "/sinal.svg"
import alvo from "/alvo 3.svg"
import Logo from "/Logo.svg"

function Home() {
  return (
    <>
    <Header/>
     <body>
      <section className='start'>
            <div className="start-info">
              <h1><span>Alarme</span> de incendio com arduino</h1>
              <p> Apresentamos a você o incrível Sensor de Arduino com Fogo e Gás, uma revolução no campo da detecção de incêndios. Projetado para fornecer tranquilidade e proteção, este projeto é uma solução inteligente e eficaz para monitorar e detectar rapidamente a presença de fogo e gás em qualquer ambiente</p>
               <Link to={"/bibliografia"}><button>Saiba mais</button></Link> 
            </div>
          </section>
          <section className='instrucao'>
              <div className="instrucao-info">
                  <h1>Funcionamento do projeto</h1>
                  <img src={video} alt="Vídeo do projeto"/>
              </div>
              <div className="objetivo">
                <h1>Objetivo do trabalho</h1>
                <p>Nosso objetivo é desenvolver e implementar um sistema de detecção de incêndio altamente eficiente e confiável, utilizando o Arduino como plataforma central. Através da integração de um sensor de fogo e gás especializado e um aplicativo inteligente, buscamos criar um dispositivo capaz de identificar a presença de chamas ou gás inflamável em tempo real.</p>
                <h2>Nosso diferencial</h2>
              </div>
          </section>
          <section className='diferenciais'>
                <div className="detector">
                  
                  <img src={fogo} alt="" />
                  <p>Detecção rápida e confiável de incêndios com tecnologia avançada e inteligente.</p>
                </div>
                <div className="integracao">
                  <img src={placa} alt="" />
                  <p>Com a integração de indicativos sonoros e visuais. </p>
                </div>
                <div className="interface">
                  <img src={sinal} alt="" />
                  <p>Interface intuitiva com visualização em tempo real dos sensores de Gás e Fogo.</p>
                </div>
          </section>
          <section>
            <div className="final">
              <img src={alvo} alt="" />
              <p><span className="Spanado">Publico alvo</span>
              <br />
              <br />
              Nosso sistema de alarme de incêndio com Arduino é direcionado a proprietários de residências, estabelecimentos comerciais e empresas que buscam uma solução confiável para prevenção e detecção de incêndios.</p>
            </div>
          </section>
          <Footer />
            <div className="warden">
              <img src={Logo} alt="" /> 
              <p>FireWarden</p>
            </div>
     </body>
    </>
  )
}

export default Home