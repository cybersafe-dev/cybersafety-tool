import React from "react"
import { Link, navigate } from "gatsby"
import useFirebase from "../../firebase"

import { store } from "../../providers/userProvider"

import "../../styling/app/formPages.css"

const Signup = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [error, setError] = React.useState(null)
  const [user, displayName, setDisplayName] = React.useContext(store)
  if (user) {
    navigate("/app")
  }
  const firebase = useFirebase()

  const createUserWithEmailAndPasswordHandler = async (
    event,
    email,
    password
  ) => {
    event.preventDefault()
    if (!firebase) return

    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        setError(error.message)
      })
    navigate("/app")
  }

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget

    if (name === "userEmail") {
      setEmail(value)
    } else if (name === "userPassword") {
      setPassword(value)
    } else if (name === "displayName") {
      setDisplayName(value)
    }
  }

  return (
      <section className="page-container">
        <h1 className="">Sign Up</h1>
        <p className="instruction">Please fill in the form below to create a school admin account for our self-assessment tool</p>
        {error !== null && <div className="">{error}</div>}
        <form className="">
          <label htmlFor="displayName" className="block">
            Username:
          </label>
          <input
            type="text"
            className=""
            name="displayName"
            value={displayName}
            placeholder="Handle"
            id="displayName"
            onChange={event => onChangeHandler(event)}
          />
          <label htmlFor="userEmail" className="block">
            Email:
          </label>
          <input
            type="email"
            className=""
            name="userEmail"
            value={email}
            placeholder="e.g. x@y.com"
            id="userEmail"
            onChange={event => onChangeHandler(event)}
          />
          <label htmlFor="userPassword" className="block">
            Password:
          </label>
          <input
            type="password"
            className=""
            name="userPassword"
            value={password}
            placeholder="Password"
            id="userPassword"
            onChange={event => onChangeHandler(event)}
          />
          <button
            className=""
            onClick={event => {
              createUserWithEmailAndPasswordHandler(event, email, password)
            }}
          >
            Sign up
          </button>
        </form>
        <div className="other-options">
          <p className="">
            Already have a school account?{" "}
            <Link to="/app/login" className="">
              Log in
            </Link>{" "}
          </p>
        </div>
      </section>
  )
}

export default Signup
