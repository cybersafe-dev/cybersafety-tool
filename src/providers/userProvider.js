import React, { createContext, useState } from "react";
import { generateUserDocument } from "../firebase";
import useFirebase from "../useFirebase"

export const store = createContext(null);

const UserProvider = (props) => {
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const firebase = useFirebase()

 React.useEffect(() => {
     if (!firebase) return

    return firebase.auth().onAuthStateChanged(async (userAuth) => {
      const user = await generateUserDocument(userAuth, {displayName});
      setUser(user);
      //setUserState({ user })
      //setDisplayName("")
    });
    // eslint-disable-next-line
 }, [displayName, firebase]);

 React.useEffect(() => {
     console.log("user in provider", user)
 }, [user])

  //const { user } = userState;
  return (
    <store.Provider value={[user, displayName, setDisplayName]}>
      {props.children}
    </store.Provider>
  );
};

export default UserProvider;