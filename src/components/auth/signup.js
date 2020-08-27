import React from "react"
import { Link, navigate } from "gatsby"
import useFirebase from "../../firebase"

import { userStore } from "../../providers/userProvider"

import "../../styling/app/formPages.css"
import BgImg from "../../images/bg-gradient.svg"

const Signup = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [error, setError] = React.useState(null)
  const [
    user,
    schoolName,
    setSchoolName,
    pupilCount,
    setPupilCount,
  ] = React.useContext(userStore)
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
    } else if (name === "schoolName") {
      setSchoolName(value)
    } else if (name === "pupilCount") {
      setPupilCount(value)
    }
  }

  return (
    <section className="page-container">
      <h1 className="">Sign Up</h1>
      <p className="instruction">
        Please fill in the form below to create a school admin account for our
        self-assessment tool
      </p>
      <img src={BgImg} alt="background design" className="bg-img-auth" />
      {error !== null && <div className="">{error}</div>}
      <form className="central-form">
        <label htmlFor="schoolName" className="block">
          Your School's name and county:
          <input
            type="text"
            className="login-input"
            name="schoolName"
            value={schoolName}
            placeholder="e.g. St. Patrick's, Dublin"
            id="schoolName"
            onChange={event => onChangeHandler(event)}
          />
        </label>

        <label htmlFor="pupilCount" className="block">
          The number of pupils at your school:
          <input
            type="text"
            className="login-input"
            name="pupilCount"
            value={pupilCount}
            placeholder="e.g. 1500"
            id="pupilCount"
            onChange={event => onChangeHandler(event)}
          />
        </label>

        <label htmlFor="userEmail" className="block">
          Your school/work email address:
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
          A secure password:
          <input
            type="password"
            className="login-input"
            name="userPassword"
            value={password}
            placeholder="Enter password"
            id="userPassword"
            onChange={event => onChangeHandler(event)}
          />
        </label>
        <button
          type="submit"
          className="login-btn"
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
