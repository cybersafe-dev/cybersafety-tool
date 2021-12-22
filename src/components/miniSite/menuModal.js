import React from "react"
import { Link } from "gatsby"
import "../../styling/app/mininavbar.css"
import xBtn from "../../images/x-icon.svg"
import { LanguageStore } from "../../providers/languageProvider"
import LanguageToggle from "../dashboard/languageToggle"

const MenuModal = ({ toggleMenuModal, menuModalVisible }) => {
  const [irish] = React.useContext(LanguageStore)

  return (
    <nav className="menu-modal-container">
      <button
        className="x-button"
        onClick={() => toggleMenuModal(!menuModalVisible)}
      >
        <img className="menu-toggle-button" src={xBtn} alt="close menu" />
      </button>
     
      <Link to="/#tool" className="modal-link" onClick={() => toggleMenuModal(!menuModalVisible)}>
        {irish ? "An Uirlis" : "The Tool"}
      </Link>
      <Link to="/#awards" className="modal-link" onClick={() => toggleMenuModal(!menuModalVisible)}>
      {irish ? "Gradaim" : "Awards"}
      </Link>
      <Link to="/#levels" className="modal-link" onClick={() => toggleMenuModal(!menuModalVisible)}>
        {irish ? "Leibhéil" : "Levels"}
      </Link>
      <Link to="/#pricing" className="modal-link" onClick={() => toggleMenuModal(!menuModalVisible)}>
        {irish ? "Praghsáil" : "Pricing"}
      </Link>
      <Link to="/#about" className="modal-link" onClick={() => toggleMenuModal(!menuModalVisible)}>
        {irish ? "Eolas Fúinn" : "About Us"}
      </Link>
      <Link to="/#contact-us" className="modal-link" onClick={() => toggleMenuModal(!menuModalVisible)}>
        {irish ? "Teagmháil" : "Contact Us"}
      </Link>
      <LanguageToggle usage={"mobile navbar"} />
    </nav>
  )
}

export default MenuModal
