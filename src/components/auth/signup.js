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
    firstName,
    setFirstName,
    lastName,
    setLastName,
    rollNumber,
    setRollNumber,
  ] = React.useContext(userStore)

  if (user) {
    navigate("/app")
  }

  const firebase = useFirebase()

  const validateSignupForm = () => {
    if (!schoolName || !pupilCount) {
      setError("Please fill in all the form fields")
      setTimeout(() => {
        setError(null)
      }, 3000)
      return false
    }
    return true
  }

  const createUserWithEmailAndPasswordHandler = async (
    event,
    email,
    password
  ) => {
    event.preventDefault()
    if (!firebase) return
    const validated = await validateSignupForm()
    if (!validated) return
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigate("/app")
      })
      .catch(error => {
        setError(error.message)
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
    } else if (name === "schoolName") {
      setSchoolName(value)
    } else if (name === "pupilCount") {
      setPupilCount(value)
    } else if (name === "firstName") {
      setFirstName(value)
    } else if (name === "lastName")  {
      setLastName(value)
    } else if (name === "rollNumber") {
      setRollNumber(value)
    }
  }

  return (
    <section className="page-container-long-form">
      <h1 className="">Sign Up</h1>
      <p className="instruction">
        Please fill in the form below to create a school admin account for our
        self-assessment tool
      </p>
      <img src={BgImg} alt="background design" className="bg-img-auth" />
      <form className="central-form">
        <label htmlFor="firstName" className="block">
          Your first name:
          <input
            type="text"
            className="login-input"
            name="firstName"
            value={firstName}
            placeholder="Enter first name"
            id="firstName"
            onChange={event => onChangeHandler(event)}
          />
        </label>

        <label htmlFor="lastName" className="block">
          Your last name:
          <input
            type="text"
            className="login-input"
            name="lastName"
            value={lastName}
            placeholder="Enter last name"
            id="lastName"
            onChange={event => onChangeHandler(event)}
          />
        </label>

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

        <label htmlFor="rollNumber" className="block">
          Your School's Roll Number (if not applicable leave blank):
          <input
            type="text"
            className="login-input"
            name="rollNumber"
            value={rollNumber}
            placeholder="Enter Roll Number"
            id="rollNumber"
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
            placeholder="e.g. 150"
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

        {error !== null && <p className="error-message">{error}</p>}

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
