import React from "react"
import getFirebase from "./firebase"

const useFirebase = () => {
  const [instance, setInstance] = React.useState(null)

  React.useEffect(() => {
    setInstance(getFirebase())
  }, [])
  return instance
}

export default useFirebase
