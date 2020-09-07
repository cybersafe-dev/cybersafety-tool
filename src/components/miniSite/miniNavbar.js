import React from "react"
import Logo from "../../images/logosvg.svg"
import "../../styling/app/mininavbar.css"
import { Link } from "gatsby"


const MiniNavbar = () => (
  <>
        <div className="navbar">
        <img src={Logo} alt="cybersafe logo" className="nav-logo"/>
        <div className="nav-links">

        <Link to="/#about" className="nav">About Us</Link>
        <Link to="/#cybersafety" className="nav">Cybersafety</Link>


        <Link to="/#cybersafeireland" className="nav">CyberSafeIreland</Link>
        <Link to="/#contact-us" className="nav">Contact Us</Link>
  
        <Link to="/app/signup" className="started-nav">Get Started</Link>
        </div>
        </div>
  </>
)

export default MiniNavbar
