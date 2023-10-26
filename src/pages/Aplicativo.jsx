import Footer from "../components/Footer"
import Header from "../components/header/Header"
import "./aplicativo.css"

export default function Aplicativo() {
  return (
    <>
    <Header />
    <body>
        <section className="cont">
            <div className="apli-cont">
                <p>Baixe nosso aplicativo e esteja sempre um passo à frente das chamas!</p>
                <img className="celulares" src="./src/img/Celulares.png" alt="" />
                <img className="app" src="./src/img/appstore.png" alt="" />
                <img className="google" src="./src/img/googleplay.png" alt="" />
            </div>
        </section>
        <Footer />
        <div className="warden">
          <img src="./src/img/Logo.svg" alt="" />
          <p>FireWarden</p>
        </div>
    </body>
    </>
  )
}
