import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import "./login.css"
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
    <Header />
    <body>
      <form action="" className='formi'>
        <h1>Login</h1>
       
        <div>
          <label htmlFor="usuario">Usuário</label>
          <input type="text" id='usuario'placeholder='Digite o Usuário' />
        </div>
        <div>
        <label htmlFor="senha">Senha</label>
          <input type="password" id='senha'placeholder='Digite a Senha' />
        </div>
        <button>Entrar</button>
       <Link to={"/registro"}><button>Registrar</button></Link>
      </form>
    </body>
    </>
  )
}
