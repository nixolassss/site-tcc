import { Link } from "react-router-dom"
import Header from "../components/header/Header"
import Footer from "../components/Footer"
import "./equipamentos.css"

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
              <img src="./src/img/arduino-.png" alt="" />
              <hr />
              <h2>Arduino Uno</h2>
              <p>Marca: Robocore</p>
              <p>R$129,00</p>
            </div>
          </section>
          <section className="second" >
            <div className="fogo">
              <img src="./src/img/fogo-sensor.png" alt="" />
              <hr />
              <h2>Sensor de Fogo</h2>
              <p>Marca: Robocore</p>
              <p>R$13,90</p>
            </div>
          </section>
          <section className="three">
            <div className="gas">
              <img src="./src/img/gas-.png" alt="" />
              <hr />
              <h2>Sensor de Gás</h2>
              <p>Marca: Robocore</p>
              <p>R$21,90</p>
            </div>
          </section>
          <section className="four">
            <div className="lcd">
              <img src="./src/img/lcd-.png" alt="" />
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
            <img src="./src/img/buzzer-.png" alt=""></img>
            <hr />
            <h2>Buzzer</h2>
            <p>Marca: RoboCore</p>
            <p>R$5,90</p>
          </div>
        </section>
        <section className="six">
          <div className="resistores">
            <img src="./src/img/jumpers.png" alt="" />
            <hr />
            <h2>Resistores</h2>
            <p>Marca: RoboCore</p>
            <p>R$0,75</p>
          </div>
        </section>
        <section className="seven">
          <div className="temperatura">
            <img src="./src/img/temperatura-.png" alt="" />
            <hr />
            <h2>Sensor de Temperatura</h2>
            <p>Marca: RoboCore</p>
            <p>R$18,50</p>
          </div>
        </section>
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

export default Equipamentos