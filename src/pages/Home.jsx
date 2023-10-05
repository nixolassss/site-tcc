import {Link} from "react-router-dom"
import Header from "../components/header/Header"
import Footer from "../components/Footer"
import "./home.css"

function Home() {
  return (
    <>
    <Header/>
     <body>
      <section className='start'>
            <div className="start-info">
              <h1><span>Alarme</span> de incendio com arduino</h1>
              <p> Apresentamos a você o incrível Sensor de Arduino com Fogo, uma revolução no campo da detecção de incêndios. Projetado para fornecer tranquilidade e proteção, este sensor é uma solução inteligente e eficaz para monitorar e detectar rapidamente a presença de fogo em qualquer ambiente</p>
                <button>Saiba mais</button>
            </div>
          </section>
          <section className='instrucao'>
              <div className="instrucao-info">
                  <h1>Instruções e Introdução</h1>
                  <img src="./img/video.png" alt="Vídeo do projeto"/>
              </div>
              <div className="objetivo">
                <h1>Objetivo do trabalho</h1>
                <p>Nosso objetivo é desenvolver e implementar um sistema de detecção de incêndio altamente eficiente e confiável, utilizando o Arduino como plataforma central. Através da integração de um sensor de fogo especializado e algoritmos inteligentes, buscamos criar um dispositivo capaz de identificar a presença de chamas ou altas temperaturas em tempo real.</p>
                <h2>Nosso diferenciais</h2>
              </div>
          </section>
          <section className='diferenciais'>
                <div className="detector">
                  
                  <img src="./img/fogo.svg" alt="" />
                  <p>Detecção rápida e confiável de incêndios com tecnologia avançada e inteligente.</p>
                </div>
                <div className="integracao">
                  <img src="./img/placa.svg" alt="" />
                  <p>Integração com sistemas de segurança para monitoramento e resposta eficientes.</p>
                </div>
                <div className="interface">
                  <img src="./img/sinal.svg" alt="" />
                  <p>Interface intuitiva com visualização em tempo real dos sensores de fumaça e calor.</p>
                </div>
          </section>
          <section>
            <div className="final">
              <img src="./img/alvo 3.svg" alt="" />
              <p>Nosso sistema de alarme de incêndio com Arduino é direcionado a proprietários de residências, estabelecimentos comerciais e empresas que buscam uma solução confiável para prevenção e detecção de incêndios.</p>
            </div>
          </section>
          <Footer />
            <div className="warden">
              <img src="./img/Logo.svg" alt="" /> 
              <p>FireWarden</p>
            </div>
     </body>
    </>
  )
}

export default Home