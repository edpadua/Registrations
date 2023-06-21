import { useState } from 'react'
import LoginForm from './Components/LoginForm'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'


function App() {


  return (
    <>
      <NavBar />
      <div className='w-full  bg-grey-300'>
        <div className="font-bold text-5xl text-center pt-20 pb-20 bg-blue-500 text-white">
          <h1>Cadastro de candidato</h1>
        </div>
        <LoginForm />
      </div>
      <Footer />
    </>

  )
}

export default App
