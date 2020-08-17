import React, { createContext, useState } from "react";
import { auth, generateUserDocument } from "../firebase";

export const store = createContext(null);

const UserProvider = (props) => {
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState("");

 // React.useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      const user = await generateUserDocument(userAuth, {displayName});
      setUser(user);
      //setUserState({ user })
      //setDisplayName("")
    });
    // eslint-disable-next-line
 // }, [displayName]);

  //const { user } = userState;
  return (
    <store.Provider value={[user, displayName, setDisplayName]}>
      {props.children}
    </store.Provider>
  );
};

export default UserProvider;