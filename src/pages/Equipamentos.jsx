import { Link } from "react-router-dom"
import Header from "../components/header/Header"
import Footer from "../components/Footer"
import "./equipamentos.css"
import arduino from "/arduino-.png"
import fogo_sensor from "/fogo-sensor.png"
import gas from "/gas-.png"
import lcd from "/lcd-.png"
import buzzer from "/buzzer-.png"
import jumpers from "/jumpers.png"
import temperatura from "/temperatura-.png"
import Logo from "/Logo.svg"
import hc from "/hc.png"

function Equipamentos() {
  return (
    <>
      <Header />
      <body>
        <section className="inicio">
        <h1>Equipamentos utilizados</h1>
        </section>
        <section className="primeiros">
          <section className="first" >
            <div className="arduino">
              <img src={arduino} alt="" />
              <hr />
              <h2>Arduino Uno</h2>
              <p>Marca: Robocore</p>
              <p>R$129,00</p>
            </div>
          </section>
          <section className="second" >
            <div className="fogo">
              <img src={fogo_sensor} alt="" />
              <hr />
              <h2>Sensor de Fogo</h2>
              <p>Marca: Robocore</p>
              <p>R$13,90</p>
            </div>
          </section>
          <section className="three">
            <div className="gas">
              <img src={gas} alt="" />
              <hr />
              <h2>Sensor de Gás</h2>
              <p>Marca: Robocore</p>
              <p>R$21,90</p>
            </div>
          </section>
          <section className="four">
            <div className="lcd">
              <img src={lcd} alt="" />
              <hr />
              <h2>Display LCD 16x2</h2>
              <p>Marca: Robocore</p>
              <p>R$34,90</p>
            </div>
          </section>
        </section>
        <section className="segundos">

       
        <section className="five">
          <div className="buzzer">
            <img src={buzzer} alt=""></img>
            <hr />
            <h2>Buzzer</h2>
            <p>Marca: RoboCore</p>
            <p>R$5,90</p>
          </div>
        </section>
        <section className="six">
          <div className="resistores">
            <img src={hc} alt="" />
            <hr />
            <h2>HC-05</h2>
            <p>Marca: RoboCore</p>
            <p>R$39,90</p>
          </div>
        </section>
        <section className="seven">
          <div className="temperatura">
            <img src={temperatura} alt="" />
            <hr />
            <h2>Sensor de Temperatura</h2>
            <p>Marca: RoboCore</p>
            <p>R$18,50</p>
          </div>
        </section>
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

export default Equipamentos