import React from "react"
import { Link } from "react-router-dom"
import { auth } from "../firebase"
import { store } from "../../providers/userProvider"

const Signup = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [error, setError] = React.useState(null)
  //eslint-disable-next-line
  const [user, displayName, setDisplayName] = React.useContext(store)
  const createUserWithEmailAndPasswordHandler = async (
    event,
    email,
    password
  ) => {
    event.preventDefault()

    //const { user } = await auth.createUserWithEmailAndPassword(
    await auth
      .createUserWithEmailAndPassword(email, password)
      //generateUserDocument(user, { displayName, testField });
      .catch(error => {
        setError(error.message)
      })
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
    <article>
      <h1 className="">Sign Up</h1>
      <div className="">
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
        {/* <p className="text-center my-3">or</p>
        <button
          onClick={() => {
            try {
              signInWithGoogle();
            } catch (error) {
              console.error("Error signing in with Google", error);
            }
          }}
          className="red-button"
        >
          Sign In with Google
        </button> */}
        <p className="">
          Already have an account?{" "}
          <Link to="/app/login" className="">
            Sign in here
          </Link>{" "}
        </p>
      </div>
    </article>
  )
}

export default Signup
