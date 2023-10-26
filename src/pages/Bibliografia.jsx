import "./bibliografia.css"
import Header from "../components/header/Header"
import Footer from "../components/Footer"

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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis placeat reiciendis maxime. Ut dolores ipsam labore delectus quidem corrupti eius voluptate voluptates, provident non beatae rem cupiditate, eum dignissimos reiciendis.</p>
                </div>
                <div className="box">
                    <h1>Artigo</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis placeat reiciendis maxime. Ut dolores ipsam labore delectus quidem corrupti eius voluptate voluptates, provident non beatae rem cupiditate, eum dignissimos reiciendis.</p>
                </div>
                <div className="box">
                    <h1>Referências</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis placeat reiciendis maxime. Ut dolores ipsam labore delectus quidem corrupti eius voluptate voluptates, provident non beatae rem cupiditate, eum dignissimos reiciendis.</p>
                </div>
            </section>

            
            <Footer/>
            <div className="warden">
          <img src="./src/img/Logo.svg" alt="" />
          <p>FireWarden</p>
        </div>
        </body>
    </>
  )
}
