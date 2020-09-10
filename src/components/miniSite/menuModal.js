import React from "react"
import { Link } from "gatsby"
import "../../styling/app/mininavbar.css"

const MenuModal = ({ toggleMenuModal, menuModalVisible }) => {
  return (
    <nav className="menu-modal-container">
      <button
        className="x-button"
        onClick={() => toggleMenuModal(!menuModalVisible)}
      >
        x
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
