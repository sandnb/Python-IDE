import React from 'react'
import logo from '../Styles/code.gif'

function Header() {
  return (
    <div>
        <header>
            <h3>Python IDE</h3>
            <img src={logo} alt="" />
        </header>
    </div>
  )
}

export default Header