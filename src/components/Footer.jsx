import "./footer.css"
import seta from "/seta.svg"

function Footer() {
  return (
    <>
    <footer>
       <div className="footer_content">
        <div className="produto">
            <h1>Produto</h1>
            <ul>
                <li>Arduino uno</li>
                <li>Sensores</li>
                <li>Módulo relé</li>
                <li>Buzzer</li>
                <li>Leds</li>
                <li>Resistores</li>
                <li>Cabos</li>
            </ul>
        </div>
        <div className="recursos">
            <h1>Recursos</h1>
            <ul>
                <li>Aplicativo</li>
                <li>Manual</li>
            </ul>
        </div>
        <div className="empresa">
            <h1>Empresa</h1>
            <ul>
                <li>Sobre nos</li>
                <li>Suporte</li>
            </ul>
        </div>
        <div className="noticias">
            <h1>Notícias</h1>
            <input type="email" placeholder="Email" />
            <button>Inscreva-se</button>
        </div>
       </div>
       
    </footer>
    </>
  )
}

export default Footer