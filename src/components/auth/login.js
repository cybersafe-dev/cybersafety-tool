import React from "react"
import { Link, navigate } from "gatsby"

import useFirebase from "../../firebase"
import { userStore } from "../../providers/userProvider"
import Seo from "../seo"

import "../../styling/app/formPages.css"
import BgImg from "../../images/bg-gradient.svg"

const Login = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [error, setError] = React.useState(null)
  const [user] = React.useContext(userStore)
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
      .then(() => {
        navigate("/app")
      })
      .catch(error => {
        setError(error.message)
        console.error("Error signing in with password and email", error)
        // setTimeout(() => {
        //   setError(null)
        // }, 3000);
      })
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
      <Seo title="Log In" />
      <h1 className="text-center">Log In</h1>
      <p className="instruction">
        Please log in below to see your school dashboard.
      </p>
      <img src={BgImg} alt="background design" className="bg-img-auth" />
      <form className="central-form">
        <label htmlFor="userEmail" className="block">
          Email:
          <input
            type="email"
            className="login-input"
            name="userEmail"
            value={email}
            placeholder="Enter email"
            id="userEmail"
            onChange={event => onChangeHandler(event)}
          />
        </label>

        <label htmlFor="userPassword" className="block">
          Password:
          <input
            type="password"
            className="login-input"
            name="userPassword"
            value={password}
            placeholder="Enter Password"
            id="userPassword"
            onChange={event => onChangeHandler(event)}
          />
        </label>
        {error !== null && <p className="error-message">{error}</p>}
        <button
          type="submit"
          className="login-btn"
          onClick={event => {
            signInWithEmailAndPasswordHandler(event, email, password)
          }}
        >
          Log in
        </button>
      </form>{" "}
      <div className="other-options">
        <p className="">
          Don't have an account?{" "}
          <Link to="/app/signup" className="">
            Sign up here
          </Link>{" "}
          <br />{" "}
          <Link to="/app/passwordreset" className="">
            Lost your password?
          </Link>
        </p>
      </div>
    </section>
  )
}

export default Login
