import React from "react"
import { Link } from "gatsby"

import useFirebase from "../../firebase"
import SEO from "../seo"

import "../../styling/app/formPages.css"
import BgImg from "../../images/bg-gradient.svg"

import { LanguageStore } from "../../providers/languageProvider"

const PasswordReset = () => {
  const [email, setEmail] = React.useState("")
  const [emailHasBeenSent, setEmailHasBeenSent] = React.useState(false)
  const [error, setError] = React.useState(null)
  const [irish] = React.useContext(LanguageStore)

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
        setTimeout(() => {
          setError(null)
        }, 3000)
      })
  }
  return (
    <section className="page-container">
      <SEO title={irish ? "Pashfocal caillte" : "Lost Password"} />
      <h1 className="">{irish ? "Pashfocal caillte" : "Lost Password"}</h1>
      <p className="instruction">
        {irish
          ? "Cuir isteach an seoladh ríomhphoist a bhaineann le do chuntas scoile san áit chuí thíos chun ríomhphost a fháil chun do phasfhocal a athshocrú."
          : "Enter the email attached to your school account below to receive a password reset email."}
      </p>
      <img src={BgImg} alt="background design" className="bg-img-auth" />
      <form action="" className="central-form">
        {emailHasBeenSent && (
          <div className="">
            {irish
              ? "Táthar tar éis ríomphost a chur chugat chun do phasfhocal a athshocrú!"
              : "A password reset email has been sent to you!"}
          </div>
        )}

        <label htmlFor="userEmail" className="block">
          {irish ? "Ríomhphost:" : "Email:"}
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            value={email}
            placeholder={irish ? "Cuir isteach do ríomphost" : "Enter email"}
            onChange={onChangeHandler}
            className="login-input"
          />
        </label>
        {error !== null && <p className="error-message">{error}</p>}
        <button
          type="submit"
          className="login-btn"
          onClick={event => {
            sendResetEmail(event)
          }}
        >
          {irish ? "Cuir nasc athshocraithe chugam" : "Send me a reset link"}
        </button>
      </form>

      <div className="other-options">
        {irish ? (
          <p className="">
            Níl cuntas agat?{" "}
            <Link to="/app/signup" className="">
              Cláraigh anseo
            </Link>{" "}
          </p>
        ) : (
          <p className="">
            Don't have an account?{" "}
            <Link to="/app/signup" className="">
              Sign up here
            </Link>{" "}
          </p>
        )}
      </div>
    </section>
  )
}

export default PasswordReset
