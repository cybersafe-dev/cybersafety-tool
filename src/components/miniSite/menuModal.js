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
     
      <Link to="/#tool" className="modal-link" onClick={() => toggleMenuModal(!menuModalVisible)}>
        The Tool
      </Link>
      <Link to="/#awards" className="modal-link" onClick={() => toggleMenuModal(!menuModalVisible)}>
        Awards
      </Link>
      <Link to="/#levels" className="modal-link" onClick={() => toggleMenuModal(!menuModalVisible)}>
        Levels
      </Link>
      <Link to="/#pricing" className="modal-link" onClick={() => toggleMenuModal(!menuModalVisible)}>
        Pricing
      </Link>
      <Link to="/#about" className="modal-link" onClick={() => toggleMenuModal(!menuModalVisible)}>
        About Us
      </Link>
      <Link to="/#contact-us" className="modal-link" onClick={() => toggleMenuModal(!menuModalVisible)}>
        Contact Us
      </Link>
    </nav>
  )
}

export default MenuModal
