import React from "react"
import useClipboard from "react-use-clipboard"
import "../../styling/app/share.css"

const Copy = ({ uid }) => {
  const [isCopied, setCopied] = useClipboard(
    `https://cybersafetoolforschools.netlify.app/survey/?id=${uid}`,
    {
      successDuration: 1000,
    }
  )

  return (
    <>
      <button className="copy-btn" onClick={setCopied}>
        Copy
      </button>
      {!uid ? (
        <p className="copy-text">Loading...</p>
      ) : (
        <p className="copy-text">
          https://cybersafetoolforschools.netlify.app/survey/?id={uid}{" "}
          {isCopied ? "✓" : ""}
        </p>
      )}
    </>
  )
}

export default Copy
