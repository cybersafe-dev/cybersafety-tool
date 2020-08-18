import React from "react"
import { Link, navigate } from "gatsby"

import useFirebase from "../../firebase"
import { store } from "../../providers/userProvider"

import "../../styling/app/formPages.css"
import BgImg from "../../images/bg-gradient.svg"

const Login = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [error, setError] = React.useState(null)
  const [user] = React.useContext(store)
  if (user) {
    navigate("/app")
  }

  const firebase = useFirebase()

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault()
    if (!firebase) return
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        setError(error.message)
        console.error("Error signing in with password and email", error)
      })
    navigate("/app")
  }

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget

    if (name === "userEmail") {
      setEmail(value)
    } else if (name === "userPassword") {
      setPassword(value)
    }
  }

  return (
    <section className="page-container">
      <h1 className="text-center">Log In</h1>
      <p className="instruction">
        Please log in below to see your school dashboard.
      </p>
      <img src={BgImg} alt="background design" className="bg-img1" />
      {error !== null && <div className="">{error}</div>}

      <form className="central-form">
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
          placeholder="Your Password"
          id="userPassword"
          onChange={event => onChangeHandler(event)}
        />

        <button
          className=""
          onClick={event => {
            signInWithEmailAndPasswordHandler(event, email, password)
          }}
        >
          Log in
        </button>
      </form>

      <div className="other-options">
        <p className="">
          Don't have an account?{" "}
          <Link to="/app/signup" className="">
            Sign up here
          </Link>{" "}
          <br />{" "}
          <Link to="/app/passwordreset" className="">
            Forgot Password?
          </Link>
        </p>
      </div>
    </section>
  )
}

export default Login
