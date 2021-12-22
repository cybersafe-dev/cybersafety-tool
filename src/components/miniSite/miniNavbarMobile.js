import React from "react"
import { Link } from "gatsby"
import { LanguageStore } from "../../providers/languageProvider"

import Logo from "../../images/cybersafekids-logo.png"
import "../../styling/app/mininavbar.css"
import MenuModal from "./menuModal"
import menuBtn from "../../images/menu-icon.svg"

const MiniNavbarMobile = ({ user }) => {
  const [menuModalVisible, toggleMenuModal] = React.useState(false)
  const [irish] = React.useContext(LanguageStore)

  return (
    <nav className="mobile-navbar">
      {menuModalVisible && (
        <MenuModal
          toggleMenuModal={toggleMenuModal}
          menuModalVisible={menuModalVisible}
        />
      )}
      <img src={Logo} alt="CyberSafeKids Logo" className="nav-logo" />
      <div>
        {user ? (
          <Link to="/app/login" className="started-nav">
            {irish ? "Logáil Isteach" : "Log in"}
          </Link>
        ) : (
          <Link to="/app/signup" className="started-nav">
            {irish ? "Cuir tú leis" : "Get Started"}
          </Link>
        )}
      </div>
      <button className="burger-button" onClick={() => toggleMenuModal(!menuModalVisible)}>
        <img className="menu-toggle-button" src={menuBtn} alt="view menu" />
      </button>
    </nav>
  )
}

export default MiniNavbarMobile
