import React from "react"
import useClipboard from "react-use-clipboard"
import "../../styling/app/share.css"

const Copy = ({ uid }) => {
  const [isCopied, setCopied] = useClipboard(
    `http://cybersafetoolforschools.ie/survey/?id=${uid}`,
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
          http://cybersafetoolforschools.ie/survey/?id={uid}{" "}
          {isCopied ? "✓" : ""}
        </p>
      )}
    </>
  )
}

export default Copy
