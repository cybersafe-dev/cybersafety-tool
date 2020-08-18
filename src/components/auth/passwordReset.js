import React from "react"
import { Link } from "gatsby"

import useFirebase from "../../firebase"

import "../../styling/app/formPages.css"
import BgImg from "../../images/bg-gradient.svg"

const PasswordReset = () => {
  const [email, setEmail] = React.useState("")
  const [emailHasBeenSent, setEmailHasBeenSent] = React.useState(false)
  const [error, setError] = React.useState(null)

  const firebase = useFirebase()

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget

    if (name === "userEmail") {
      setEmail(value)
    }
  }

  const sendResetEmail = event => {
    event.preventDefault()
    if (!firebase) return
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailHasBeenSent(true)
        setTimeout(() => {
          setEmailHasBeenSent(false)
        }, 3000)
      })
      .catch(error => {
        setError(error.message)
      })
  }
  return (
    <section className="page-container">
      <h1 className="">Lost Password</h1>
      <p className="instruction">
        Enter the email attached to your school account below to receive a
        password reset email
      </p>
      <img src={BgImg} alt="background design" className="bg-img1" />
      <form action="">
        {emailHasBeenSent && (
          <div className="">An email has been sent to you!</div>
        )}

        {error !== null && <div className="">{error}</div>}

        <label htmlFor="userEmail" className="">
          Email:
        </label>
        <input
          type="email"
          name="userEmail"
          id="userEmail"
          value={email}
          placeholder="Enter your email"
          onChange={onChangeHandler}
          className=""
        />

        <button
          className=""
          onClick={event => {
            sendResetEmail(event)
          }}
        >
          Send me a reset link
        </button>
      </form>

      <div className="other-options">
        <p className="">
          Don't have an account?{" "}
          <Link to="/app/signup" className="">
            Sign up here
          </Link>{" "}
        </p>
      </div>
    </section>
  )
}

export default PasswordReset
