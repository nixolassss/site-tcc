import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import "./registro.css"

export default function Registro() {
  return (
    <>
    <Header />
    <body>
    
       <form action="">
        <h1>Registro</h1>
            <section className="container-registro">
              <div className="nome">
              <label htmlFor="">Nome</label>
              <input type="text" placeholder='Nome completo'/>
              </div>
              <div className="data">
                <label htmlFor="">Data</label>
                <input type="text" placeholder='Data de nascimento'/>
              </div>
            </section>
            <section className="container2">
              <div className="email">
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Email' />
              </div>
              <div className="senha">
                <label htmlFor="">Senha</label>
                <input type="password" placeholder='Senha'/>
              </div>
            </section>
            <button>Criar</button>
       </form>

      
    </body>
    </>
  )
}
