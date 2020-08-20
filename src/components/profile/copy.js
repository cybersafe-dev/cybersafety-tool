import React from "react"
import ReactDOM from "react-dom"
import { CopyToClipboard } from "react-copy-to-clipboard"

import "../../styling/app/share.css"

export default class Copy extends React.Component {
  state = {
    value: "",
    copied: false,
  }
  onChange = ({ target: { value } }) => {
    this.setState({ value, copied: true })
  }
  onClick = ({ target: { value } }) => {}
  onCopy = () => {
    this.setState({ copied: true })
  }

  render() {
    return (
      <div>
        <CopyToClipboard
          text={this.state.value}
          onCopy={() => this.setState({ copied: true })}
        >
          <button className="copy-btn">Copy</button>
        </CopyToClipboard>
        {this.state.copied ? (
          <span className="copy-message">Copied!</span>
        ) : null}
        <p
          className="copy-text"
          value={`https://vigilant-austin-33c3c5.netlify.app/survey/`}
          onChange={({ target: { value } }) =>
            this.setState({ value, copied: false })
          }
        >
          https://vigilant-austin-33c3c5.netlify.app/survey/
        </p>
      </div>
    )
  }
}
