import React from "react"
import { Link, navigate } from "gatsby"
import useFirebase from "../../firebase"
import { addNewSalesforceLead } from "../../salesforce"
import { countyList } from "../../templates/countyList"

import { userStore } from "../../providers/userProvider"
import SEO from "../seo"

import "../../styling/app/formPages.css"
import BgImg from "../../images/bg-gradient.svg"

const Signup = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [error, setError] = React.useState(null)
  const [honeypot, setHoneypot] = React.useState("")
  const [
    user,
    schoolName,
    setSchoolName,
    county,
    setCounty,
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
    if (honeypot) return false
    if (!rollNumber) {
      setRollNumber(Math.floor(Math.random() * 100000) + 1)
    }
    if (!firstName || !lastName || !schoolName || !pupilCount || !county) {
      setError("Please fill in all the form fields with asterisks")
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
    // For testing web to lead without creating a user...
    // await addNewSalesforceLead(firstName, lastName, email, schoolName, rollNumber)
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (data) => {
        const { uid } = data.user
        await addNewSalesforceLead(
          firstName,
          lastName,
          email,
          schoolName,
          rollNumber,
          uid
        )
      })
      .then(() => {
        if (user.schoolName) {
          navigate("/app")
        } else {
          setError("Processing...")
        }
      })
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
    } else if (name === "schoolName") {
      setSchoolName(value)
    } else if (name === "county") {
      setCounty(value)
    } else if (name === "pupilCount") {
      setPupilCount(value)
    } else if (name === "firstName") {
      setFirstName(value)
    } else if (name === "lastName") {
      setLastName(value)
    } else if (name === "rollNumber") {
      setRollNumber(value)
    } else if (name === "honeypot") {
      setHoneypot(value)
    }
  }

  return (
    <section className="page-container-long-form">
      <SEO title="Sign Up" />
      <h1 className="">Sign Up</h1>
      <p className="instruction">
        Please fill in the form below to create a school admin account for our
        self-assessment tool
      </p>
      <img src={BgImg} alt="background design" className="bg-img-auth" />
      <form className="central-form">
        <label htmlFor="firstName" className="block">
          <p className="form-label">
            <span className="asterisk">*</span> Your first name:
          </p>
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
          <p className="form-label">
            <span className="asterisk">*</span> Your last name:
          </p>
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
          <p className="form-label">
            <span className="asterisk">*</span> Your School's name:
          </p>
          <input
            type="text"
            className="login-input"
            name="schoolName"
            value={schoolName}
            placeholder="e.g. St. Philip's National School"
            id="schoolName"
            onChange={event => onChangeHandler(event)}
          />
        </label>

        <label htmlFor="county" className="block">
          <p className="form-label">
            <span className="asterisk">*</span> Your School's county:
          </p>
          <select
            className="login-input"
            name="county"
            id="county"
            value={county}
            onChange={event => onChangeHandler(event)}
          >
            <option value="">Select a County</option>
            {countyList.map((countyName, i) => {
              return (
                <option key={i} value={countyName}>
                  {countyName}
                </option>
              )
            })}
          </select>
        </label>

        <label htmlFor="rollNumber" className="block">
          <p className="form-label">
            Your School's Roll Number (if not applicable, please leave blank):
          </p>
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
          <p className="form-label">
            {" "}
            <span className="asterisk">*</span> The number of pupils at your
            school:
          </p>
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
          <p className="form-label">
            <span className="asterisk">*</span> Your school/work email address:
          </p>
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
          <p className="form-label">
            <span className="asterisk">*</span> A secure password:
          </p>
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

        <input
          onChange={event => onChangeHandler(event)}
          id="honeypot1"
          name="honeypot"
          type="hidden"
          value="honeypot"
        />
        <input
          onChange={event => onChangeHandler(event)}
          id="honeypot2"
          name="honeypot"
          style={{ display: "none" }}
          value="honeypot"
        />

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
