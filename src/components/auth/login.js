import React from "react"
import { Link, navigate } from "gatsby"

import useFirebase from "../../firebase"
import { userStore } from "../../providers/userProvider"
import { LanguageStore } from "../../providers/languageProvider"
import SEO from "../seo"
import LanguageToggle from "../../components/dashboard/languageToggle"

import "../../styling/app/formPages.css"
import BgImg from "../../images/bg-gradient.svg"

const Login = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [error, setError] = React.useState(null)
  const [user] = React.useContext(userStore)
  const [irish] = React.useContext(LanguageStore)

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
        setTimeout(() => {
          setError(null)
        }, 3000)
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
      <SEO title={irish ? "Logáil isteach" : "Log In"} />
      <h1 className="text-center">{irish ? "Logáil isteach" : "Log In"}</h1>
      <LanguageToggle />
      <p className="instruction">
        {irish
          ? "Lógáil isteach thíos chun deais do scoile a fheiceáil"
          : "Please log in below to see your school dashboard."}
      </p>
      <img src={BgImg} alt="background design" className="bg-img-auth" />
      <form className="central-form">
        <label htmlFor="userEmail" className="block">
          {irish ? "Ríomhphost:" : "Email:"}
          <input
            type="email"
            className="login-input"
            name="userEmail"
            value={email}
            placeholder={irish ? "Cuir isteach do ríomphost" : "Enter email"}
            id="userEmail"
            onChange={event => onChangeHandler(event)}
          />
        </label>

        <label htmlFor="userPassword" className="block">
          {irish ? "Pasfhocal:" : "Password:"}
          <input
            type="password"
            className="login-input"
            name="userPassword"
            value={password}
            placeholder={irish ? "Cuir isteach do phasfhocal" : "Enter Password"}
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
          {irish ? "Logáil isteach" : "Log In"}
        </button>
      </form>{" "}
      <div className="other-options">
        {irish ? (
          <p className="">
            Níl cuntas agat?{" "}
            <Link to="/app/signup" className="">
              Cláraigh anseo
            </Link>{" "}
            <br />{" "}
            <Link to="/app/passwordreset" className="">
              Pasfhocal dearmadta agat?{" "}
            </Link>
          </p>
        ) : (
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
        )}
      </div>
    </section>
  )
}

export default Login
