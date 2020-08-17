import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyC_-5zXDsEaB_yyBariq0cnrhvZPBaedDc",
    authDomain: "fir-auth-test-43ec6.firebaseapp.com",
    databaseURL: "https://fir-auth-test-43ec6.firebaseio.com",
    projectId: "fir-auth-test-43ec6",
    storageBucket: "fir-auth-test-43ec6.appspot.com",
    messagingSenderId: "540475601492",
    appId: "1:540475601492:web:1c1301a9b10453c74673c1",
    measurementId: "G-4HXR0QMRCR"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// export const signInWithGoogle = () => {
//   auth.signInWithPopup(provider);
// };

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email } = user;
    try {
      await userRef.set({
        email,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};