import { useState } from 'react'
import LoginForm from './Components/LoginForm'
import NavBar from './Components/NavBar'


function App() {


  return (
    <>
      <NavBar/>
      <div className='h-screen bg-grey-300'>
        <LoginForm />
      </div>
    </>

  )
}

export default App
