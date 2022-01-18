import React from "react"
import Logo from "../../images/cybersafekids-logo.png"
import "../../styling/app/mininavbar.css"
import { Link } from "gatsby"
import { userStore } from "../../providers/userProvider"
import { LanguageStore } from "../../providers/languageProvider"
import LanguageToggle from "../../components/dashboard/languageToggle"
import MiniNavbarMobile from "./miniNavbarMobile"

const MiniNavbar = () => {
  const [user] = React.useContext(userStore)
  const [irish] = React.useContext(LanguageStore)

  const [isDesktop, setDesktop] = React.useState(false)

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setDesktop(window.innerWidth < 1000)
    }
    // eslint-disable-next-line
  }, [])

  const updateMedia = () => {
    if (typeof window !== "undefined") {
      setDesktop(window.innerWidth < 1000)
    }
  }

  React.useEffect(() => {
    window.addEventListener("resize", updateMedia)
    return () => window.removeEventListener("resize", updateMedia)
  })

  return isDesktop ? (
    <MiniNavbarMobile user={user} />
  ) : (
    <>
      <div className="navbar">
        <img src={Logo} alt="cybersafe logo" className="nav-logo" />
        <div className="nav-links">
          <Link to="/#tool" className="nav">
            {irish ? "An Uirlis" : "The Tool"}
          </Link>
          <Link to="/#awards" className="nav">
            {irish ? "Gradaim" : "Awards"}
          </Link>
          <Link to="/#levels" className="nav">
            {irish ? "Leibhéil" : "Levels"}
          </Link>
          <Link to="/#pricing" className="nav">
            {irish ? "Praghsáil" : "Pricing"}
          </Link>
          <Link to="/#about" className="nav">
            {irish ? "Eolas Fúinn" : "About Us"}
          </Link>
          <Link to="/#contact-us" className="nav">
            {irish ? "Teagmháil" : "Contact Us"}
          </Link>
          {user ? (
            <Link to="/app/login" className="started-nav">
              {irish ? "Logáil Isteach" : "Log in"}
            </Link>
          ) : (
            <Link to="/app/signup" className="started-nav">
              {irish ? "Cuir tús leis" : "Get Started"}
            </Link>
          )}
          <LanguageToggle />
        </div>
      </div>
    </>
  )
}

export default MiniNavbar
