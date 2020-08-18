import React from "react";
import { navigate } from "gatsby"
import { store } from "../../providers/userProvider";
//import { auth } from "../firebase";
import useFirebase from "../../firebase"


const Profile = () => {
  const [user] = React.useContext(store);
  const { displayName, email } = user;

  const firebase = useFirebase()

  const signOutApp = () => {
    if (!firebase) return
    firebase.auth().signOut();
    navigate("/app/login")
  }

  return (
    <div className="">
      <div className="">
        <h2 className="">{displayName}</h2>
        <h3 className="">{email}</h3>
      </div>
      <button
        className=""
        onClick={signOutApp}
      >
        Sign out
      </button>
    </div>
  );
};
export default Profile