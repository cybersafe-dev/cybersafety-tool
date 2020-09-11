import React from "react"
import Logo from "../../images/cybersafe-logo.png"
import "./header.css"

const Header = () => (
  <header className="app-header">
    <img src={Logo} alt="cybersafe logo" className="logo" />
  </header>
)

export default Header
