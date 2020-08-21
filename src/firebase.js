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

// export const updateScores = async (schoolId, userType, myScores) => {
//   if (!schoolId || !userType || !myScores) return "error"
//   let thisSchool
//   const schoolRef = firebase
//     .firestore()
//     .collection("users")
//     .where("schoolId", "==", schoolId)
//   schoolRef
//     .get()
//     .then(async querySnapshot => {
//       querySnapshot.forEach(doc => {
//         thisSchool = doc.data()
//       })
//       delete myScores.test
//       console.log("data used for adding to db", schoolId, userType, myScores)
//       console.log("data to update scores with", thisSchool.scores)
//       await thisSchool.scores[userType].push(myScores)
//       console.log("after push new scores array to send", thisSchool)
//       await schoolRef
//         .update({ scores: thisSchool })
//         .then(() => {
//           return "updated"
//         })
//         .catch(error => {
//           console.error("Error updating database", error)
//           return "update error"
//         })
//     })
//     .catch(error => {
//       console.error("Error fetching this school's data", error)
//       return "fetch error"
//     })
// }

export const updateScores = async (schoolId, userType, myScores) => {
  if (!schoolId || !userType || !myScores) return "error"
  firebase
    .firestore()
    .collection("users")
    .where("schoolId", "==", schoolId)
    .limit(1)
    .get()
    .then(async querySnapshot => {
      const thisSchool = querySnapshot.docs[0]
      delete myScores.test
      const scoresObj = thisSchool.data().scores
      scoresObj[userType].push(myScores)
      await thisSchool.ref
        .update({ scores: scoresObj })
      return "updated"
    })
    .catch(error => {
      console.error("Error fetching this school's data", error)
      return "fetch error"
    })
}
