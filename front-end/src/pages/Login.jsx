import React from "react"
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="flex items-center">
        <div className="gap-4 max-w-96 mx-auto flex flex-col items-center w-full ">
          <h1 className="font-bold text-3xl">Faça seu login</h1>

          <form className="flex flex-col gap-2">
            <input 
              type="email" 
              className="border-gray-300  py-2 px-4 rounded-full w-full"
              placeholder="Digite seu e-mail"
            />
            <input 
              type="password" 
              className="border-gray-300  py-2 px-4 rounded-full w-full"
              placeholder="Digite sua senha"
            
            />
            <button className="border-gray-300  py-2 px-4 rounded-full w-full cursor-pointer bg-primary-400 text-white font-bold">
              Login
            </button>
          </form>

          <p>Ainda não tem uma conta?<Link to='/register' className="underline font-semibold">Registre-se aqui</Link> </p>
        </div>
      </section>
  )
}

export default Login;