import React from "react"
import Logo from "../../images/logosvg.svg"
import "../../styling/app/mininavbar.css"
import { Link } from "gatsby"
import { userStore } from "../../providers/userProvider"
import MiniNavbarMobile from "./miniNavbarMobile"

const MiniNavbar = () => {
  const [user] = React.useContext(userStore)

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
          <Link to="/#about" className="nav">
            About Us
          </Link>
          <Link to="/#cybersafety" className="nav">
            Cybersafety
          </Link>

          <Link to="/#cybersafeireland" className="nav">
            CyberSafeIreland
          </Link>
          <Link to="/#contact-us" className="nav">
            Contact Us
          </Link>
          {user ? (
            <Link to="/app/login" className="started-nav">
              Log in
            </Link>
          ) : (
            <Link to="/app/signup" className="started-nav">
              Get Started
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default MiniNavbar
