import React from "react";
//import { auth } from "../../firebase";
import useFirebase from "../../firebase"

import { Link } from "gatsby";

const PasswordReset = () => {
  const [email, setEmail] = React.useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = React.useState(false);
  const [error, setError] = React.useState(null);

  const firebase = useFirebase()

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    }
  };

  const sendResetEmail = (event) => {
    event.preventDefault();
    if (!firebase) return
    return firebase.auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailHasBeenSent(true);
        setTimeout(() => {
          setEmailHasBeenSent(false);
        }, 3000);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <article>
      <h1 className="">Reset your Password</h1>
      <div className="">
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
            placeholder="Input your email"
            onChange={onChangeHandler}
            className=""
          />
          <button
            className=""
            onClick={(event) => {
              sendResetEmail(event);
            }}
          >
            Send me a reset link
          </button>
        </form>

        <Link to="/app/login" className="">
          back to sign in page
        </Link>
      </div>
    </article>
  );
};

export default PasswordReset;
