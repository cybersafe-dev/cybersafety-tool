import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

var firebaseConfig = {
  apiKey: "AIzaSyC_-5zXDsEaB_yyBariq0cnrhvZPBaedDc",
  authDomain: "fir-auth-test-43ec6.firebaseapp.com",
  databaseURL: "https://fir-auth-test-43ec6.firebaseio.com",
  projectId: "fir-auth-test-43ec6",
  storageBucket: "fir-auth-test-43ec6.appspot.com",
  messagingSenderId: "540475601492",
  appId: "1:540475601492:web:1c1301a9b10453c74673c1",
  measurementId: "G-4HXR0QMRCR",
}

let instance = null

// Initialize Firebase if window is defined
export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance
    instance = firebase.initializeApp(firebaseConfig)
    return instance
  }
  return null
}

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return
  const userRef = firebase.firestore().doc(`users/${user.uid}`)
  const snapshot = await userRef.get()
  if (!snapshot.exists) {
    const { email } = user
    try {
      await userRef.set({
        email,
        ...additionalData,
      })
    } catch (error) {
      console.error("Error creating user document", error)
    }
  }
  return getUserDocument(user.uid)
}

export const getUserDocument = async uid => {
  if (!uid) return null
  try {
    const userDocument = await firebase.firestore().doc(`users/${uid}`).get()

    return {
      uid,
      ...userDocument.data(),
    }
  } catch (error) {
    console.error("Error fetching user", error)
  }
}

export const updateScores = async (schoolId, myScores) => {
  if (!schoolId || !myScores) return null
  let thisSchool
  const schoolRef = firebase
    .firestore()
    .collection("users")
    .where("schoolId", "==", schoolId)
    schoolRef.get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        thisSchool = doc.data()
      })
      console.log("data to update", thisSchool)
    })
  .catch(error => {
    console.error("Error fetching this school's data", error)
    return(error.message)
  })
}
