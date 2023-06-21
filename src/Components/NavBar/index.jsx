import React from 'react'

import { FaCode } from "react-icons/fa"

function NavBar() {
  return (
   <nav className="bg-zinc-950 top-0 left-0 right-0 w-full h-24 px-20 pt-8">
      <FaCode style={{ fontSize: '30px', color: "#ffffff" }}/>
   </nav>
  )
}

export default NavBar
