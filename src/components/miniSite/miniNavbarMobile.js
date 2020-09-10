import React from "react"
import { Link } from "gatsby"
import Logo from "../../images/logosvg.svg"
import "../../styling/app/mininavbar.css"
import MenuModal from "./menuModal"
import menuBtn from "../../images/menu-icon.svg"

const MiniNavbarMobile = ({ user }) => {
  const [menuModalVisible, toggleMenuModal] = React.useState(false)

  return (
    <nav className="mobile-navbar">
      {menuModalVisible && (
        <MenuModal
          toggleMenuModal={toggleMenuModal}
          menuModalVisible={menuModalVisible}
        />
      )}
      <img src={Logo} alt="CyberSafeIreland Logo" className="nav-logo" />
      <div>
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
      <button className="burger-button" onClick={() => toggleMenuModal(!menuModalVisible)}>
        <img className="menu-toggle-button" src={menuBtn} alt="view menu" />
      </button>
    </nav>
  )
}

export default MiniNavbarMobile
