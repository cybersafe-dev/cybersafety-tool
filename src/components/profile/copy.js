import React from "react"
import useClipboard from "react-use-clipboard"
import "../../styling/app/share.css"

import { LanguageStore } from "../../providers/languageProvider"

const Copy = ({ uid }) => {
  const [isCopied, setCopied] = useClipboard(
    `https://cybersafetoolforschools.ie/survey/?id=${uid}`,
    {
      successDuration: 1000,
    }
  )
  const [irish] = React.useContext(LanguageStore)


  return (
    <>
      <button className="copy-btn" onClick={setCopied}>
        {irish ? "Cóipeáil" : "Copy"}
      </button>
      {!uid ? (
        <p className="copy-text">Loading...</p>
      ) : (
        <p className="copy-text">
          https://cybersafetoolforschools.ie/survey/?id={uid}{" "}
          {isCopied ? "✓" : ""}
        </p>
      )}
    </>
  )
}

export default Copy
