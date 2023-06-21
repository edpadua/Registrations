import { useState } from 'react'
import LoginForm from './Components/LoginForm'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'


function App() {


  return (
    <>
      <NavBar/>
      <div className='bg-grey-300'>
        <LoginForm />
      </div>
      <Footer/>
    </>

  )
}

export default App
