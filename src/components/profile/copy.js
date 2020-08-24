import React from "react"
import useClipboard from "react-use-clipboard"
import "../../styling/app/share.css"

const Copy = () => {
  const [isCopied, setCopied] = useClipboard(
    "https://vigilant-austin-33c3c5.netlify.app/survey/",
    {
      successDuration: 1000,
    }
  )

  return (
    <>
      <button className="copy-btn" onClick={setCopied}>
        Copy
      </button>
      <p className="copy-text">
        https://vigilant-austin-33c3c5.netlify.app/survey/ {isCopied ? "✓" : ""}
      </p>
    </>
  )
}

export default Copy
