import "./bibliografia.css"
import Header from "../components/header/Header"
import Footer from "../components/Footer"
import Logo from "/Logo.svg"

export default function Bibliografia() {
  return (
    <>
        <body>
        <Header />
            <div className="h1zin">
                <h1>Bibliografia</h1>
            </div>
            <section className="container">
                <div className="box">
                    <h1>Origem</h1>
                    <p>O projeto FireWarden foi desenvolvido com o propósito de prevenir, detectar e proteger, uma vez que muitas vidas são perdidas devido a incêndios, e muitas pessoas acabam perdendo suas casas.</p>
                </div>
                <div className="box">
                    <h1>Artigo</h1>
                    <p>Nós pesquisamos artigos para começar a nossa ideia e adquirir um melhor entendimento sobre o projeto, explorando o funcionamento de um sistema de alarme de incêndio e seus componentes.</p>
                </div>
                <div className="box">
                    <h1>Referências</h1>
                    <p>Para obter informações, utilizamos alguns vídeos que explicavam o funcionamento do Arduino, as etapas para fazer o projeto funcionar de maneira ideal e como utilizar o aplicativo relacionado.</p>
                </div>
            </section>

            
            <Footer/>
            <div className="warden">
          <img src={Logo} alt="" />
          <p>FireWarden</p>
        </div>
        </body>
    </>
  )
}
