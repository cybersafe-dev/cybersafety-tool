import React from "react"
import { Link, navigate } from "gatsby"
import useFirebase from "../../firebase"
import { addNewSalesforceLead } from "../../salesforce"

import { userStore } from "../../providers/userProvider"
import { LanguageStore } from "../../providers/languageProvider"
import LanguageToggle from "../../components/dashboard/languageToggle"

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
    pupilCount,
    setPupilCount,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    rollNumber,
    setRollNumber,
  ] = React.useContext(userStore)
  const [irish] = React.useContext(LanguageStore)

  if (user) {
    navigate("/app")
  }

  const firebase = useFirebase()

  const validateSignupForm = () => {
    if (honeypot) return false
    if (!rollNumber) {
      setRollNumber(Math.floor(Math.random() * 100000) + 1)
    }
    if (!firstName || !lastName || !schoolName || !pupilCount) {
      setError("Please fill in all the form fields with asterisks")
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
    // For testing web to lead without creating a user...
    //await addNewSalesforceLead(firstName, lastName, email, schoolName, rollNumber)
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async () => {
        await addNewSalesforceLead(
          firstName,
          lastName,
          email,
          schoolName,
          rollNumber
        )
      })
      .then(() => navigate("/app"))
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
      <SEO title={irish ? "Cláraigh" : "Sign Up"} />
      <h1 className="">{irish ? "Cláraigh" : "Sign Up"}</h1>
      <LanguageToggle />
      <p className="instruction">
        {irish
          ? "Líon amach an fhoirm thíos le do thoil chun cuntas riarthóra a chruthú le haghaidh ár n-uirlis fhéinmheasaithe."
          : "Please fill in the form below to create a school admin account for our self-assessment tool."}
      </p>
      <img src={BgImg} alt="background design" className="bg-img-auth" />
      <form className="central-form">
        <label htmlFor="firstName" className="block">
          <p className="form-label">
            <span className="asterisk">*</span>{" "}
            {irish ? "D'ainm:" : "Your first name:"}
          </p>
          <input
            type="text"
            className="login-input"
            name="firstName"
            value={firstName}
            placeholder={irish ? "D'ainm" : "Enter first name"}
            id="firstName"
            onChange={event => onChangeHandler(event)}
          />
        </label>

        <label htmlFor="lastName" className="block">
          <p className="form-label">
            <span className="asterisk">*</span>{" "}
            {irish ? "Do shloinne:" : "Your last name:"}
          </p>
          <input
            type="text"
            className="login-input"
            name="lastName"
            value={lastName}
            placeholder={irish ? "Do shloinne" : "Enter last name"}
            id="lastName"
            onChange={event => onChangeHandler(event)}
          />
        </label>

        <label htmlFor="schoolName" className="block">
          <p className="form-label">
            <span className="asterisk">*</span>{" "}
            {irish
              ? "Ainm agus contae do scoile:"
              : "Your School's name and county:"}
          </p>
          <input
            type="text"
            className="login-input"
            name="schoolName"
            value={schoolName}
            placeholder="e.g. St. Philip's National School, Co. Dublin"
            id="schoolName"
            onChange={event => onChangeHandler(event)}
          />
        </label>

        <label htmlFor="rollNumber" className="block">
          <p className="form-label">
            {irish
              ? "Uimhir Rolla do Scoile (mura mbaineann sé seo le do scoil, fág bán é le do thoil):"
              : "Your School's Roll Number (if not applicable, please leave blank):"}
          </p>
          <input
            type="text"
            className="login-input"
            name="rollNumber"
            value={rollNumber}
            placeholder={irish ? "Uimhir Rolla do Scoile" : "Enter Roll Number"}
            id="rollNumber"
            onChange={event => onChangeHandler(event)}
          />
        </label>

        <label htmlFor="pupilCount" className="block">
          <p className="form-label">
            {" "}
            <span className="asterisk">*</span>{" "}
            {irish
              ? "Líon na ndaltaí i do scoil:"
              : "The number of pupils at your school:"}
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
            <span className="asterisk">*</span>{" "}
            {irish
              ? "Do sheoladh ríomphoist scoile/áit oibre"
              : "Your school/work email address:"}
          </p>
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
          <p className="form-label">
            <span className="asterisk">*</span>{" "}
            {irish ? "Pasfhocal slán" : "A secure password:"}
          </p>
          <input
            type="password"
            className="login-input"
            name="userPassword"
            value={password}
            placeholder={
              irish ? "Cuir isteach do phasfhocal" : "Enter password"
            }
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
          {irish ? "Cláraigh" : "Sign Up"}
        </button>
      </form>

      <div className="other-options">
        {irish ? (
          <p className="">
            Cuntas scoile agat cheana féin?{" "}
            <Link to="/app/login" className="">
              Logáil isteach
            </Link>{" "}
          </p>
        ) : (
          <p className="">
            Already have a school account?{" "}
            <Link to="/app/login" className="">
              Log in
            </Link>{" "}
          </p>
        )}
      </div>
    </section>
  )
}

export default Signup
