import React from "react"
import { Link } from "gatsby"
import "../../styling/app/mininavbar.css"
import xBtn from "../../images/x-icon.svg"

const MenuModal = ({ toggleMenuModal, menuModalVisible }) => {
  return (
    <nav className="menu-modal-container">
      <button
        className="x-button"
        onClick={() => toggleMenuModal(!menuModalVisible)}
      >
        <img className="menu-toggle-button" src={xBtn} alt="close menu" />
      </button>
      <Link to="/#about" className="modal-link" onClick={() => toggleMenuModal(!menuModalVisible)}>
        About Us
      </Link>
      <Link to="/#cybersafety" className="modal-link" onClick={() => toggleMenuModal(!menuModalVisible)}>
        Cybersafety
      </Link>

      <Link to="/#cybersafeireland" className="modal-link" onClick={() => toggleMenuModal(!menuModalVisible)}>
        CyberSafeIreland
      </Link>
      <Link to="/#contact-us" className="modal-link" onClick={() => toggleMenuModal(!menuModalVisible)}>
        Contact Us
      </Link>
      
    </nav>
  )
}

export default MenuModal
