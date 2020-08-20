import React from "react"
import ReactDOM from "react-dom"
import { CopyToClipboard } from "react-copy-to-clipboard"

import "../../styling/app/share.css"

export default class Copy extends React.Component {
  state = {
    value: "",
    copied: false,
  }

  render() {
    return (
      <div>
        <p
          value={`https://vigilant-austin-33c3c5.netlify.app/survey/`}
          onChange={({ target: { value } }) =>
            this.setState({ value, copied: false })
          }
        >
          https://vigilant-austin-33c3c5.netlify.app/survey/
        </p>

        <CopyToClipboard
          text={this.state.value}
          onCopy={() => this.setState({ copied: true })}
        >
          <button className="copy-btn">Copy</button>
        </CopyToClipboard>

        {this.state.copied ? (
          <span style={{ color: "red" }}>Copied.</span>
        ) : null}
      </div>
    )
  }
}
