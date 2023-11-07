import Footer from "../components/Footer"
import Header from "../components/header/Header"
import "./aplicativo.css"

import celulares from "/Celulares.png"
import appstore from "/appstore.png"
import googleplay from "/googleplay.png"
import Logo from "/Logo.svg"

export default function Aplicativo() {
  return (
    <>
    <Header />
    <body>
        <section className="cont">
            <div className="apli-cont">
                <p>Baixe nosso aplicativo e esteja sempre um passo à frente das chamas!</p>
                <img className="celulares" src={celulares} alt="" />
                <img className="app" src={appstore} alt="" href="https://apps.apple.com/br/app/mit-app-inventor/id1422709355"/>
                <img className="google" src={googleplay} alt="" />
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
