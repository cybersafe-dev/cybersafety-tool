import React from "react"
import { Link, navigate } from "gatsby"
// import { signInWithGoogle } from "../../firebase";
import useFirebase from "../../firebase"
import { store } from "../../providers/userProvider"

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
    firebase.auth().signInWithEmailAndPassword(email, password).catch(error => {
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
    <article>
      <h1 className="text-center">Sign In</h1>
      {error !== null && <div className="">{error}</div>}

      <form className="central-form">
        <div className="">
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
        </div>
        <div className="">
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
        </div>

        <button
          className=""
          onClick={event => {
            signInWithEmailAndPasswordHandler(event, email, password)
          }}
        >
          Sign in
        </button>
      </form>

      <p className="text-center my-3">
        Don't have an account?{" "}
        <Link to="/app/signup" className="">
          Sign up here
        </Link>{" "}
        <br />{" "}
        <Link to="/app/passwordreset" className="">
          Forgot Password?
        </Link>
      </p>
    </article>
  )
}

export default Login
