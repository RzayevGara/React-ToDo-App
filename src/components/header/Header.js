import React from 'react'
import TodoLogo from "../../images/todo logo.png"
import Logo from "./Logo"
import Today from "./Today"
import "../../sass/pages/header.sass"

function Header() {
  
  return (
    <div className="header">
        <Logo logo={TodoLogo}/>
        <Today/>
    </div>
  )
}

export default Header