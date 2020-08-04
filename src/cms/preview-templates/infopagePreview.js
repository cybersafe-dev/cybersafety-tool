import React from "react"
import PropTypes from "prop-types"
import Header from "../../components/header/header"

const infopagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    console.log({ data })
    return (
      <>
        <Header />
        <h1>{data.title}</h1>
        <p>{data.body.paragraph1}</p>
        <p>{data.body.paragraph2}</p>
        <p>{data.body.paragraph3}</p>
      </>
    )
  } else {
    return <div>Loading...</div>
  }
}

infopagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default infopagePreview
