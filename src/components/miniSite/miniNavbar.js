import React from "react"
import Logo from "../../images/cybersafe-logo.png"
import "../../styling/organisation/mininavbar.css"
import { Link } from "gatsby"


const MiniNavbar = () => (
  <>
  <div className="navbar">
  <div className="nav-logo">
    <img src={Logo} alt="cybersafe logo" className="logo" />
</div>
<div className="nav-links">
        <Link to="/#about" className="nav">About Us</Link>
        <Link to="/#cybersafety" className="nav">Cybersafety</Link>
        <Link to="/#cybersafeireland" className="nav">CyberSafeIreland</Link>
        <Link to="/#contact-us" className="nav">Contact Us</Link>

        <Link to="/#get-started" className="started-nav">Get Started</Link>
    
      </div>
      </div>
  </>
)

export default MiniNavbar
