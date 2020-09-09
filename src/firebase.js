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

// Create a new user document if there is none for that email address already
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

// Get the authenticated user's document from database
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

// Add a single survey score to the database after checking that the quota isnt already filled.
export const updateScores = async (schoolId, userType, myScores) => {
  if (!schoolId || !userType || !myScores) return "error"
  const schoolRef = firebase.firestore().collection("users").doc(schoolId)
  let updateStatusMessage = schoolRef
    .get()
    .then(async doc => {
      const thisSchool = doc.data()
      delete myScores.test
      myScores.timestamp = Date.now()
      let currentQuota
      switch (userType) {
        case "leaders":
          currentQuota = thisSchool.quota.leadersQuota
          break
        case "teachers":
          currentQuota = thisSchool.quota.teachersQuota
          break
        case "pupils":
          currentQuota = thisSchool.quota.pupilsQuota
          break
        default:
          currentQuota = 100
      }
      if (currentQuota > thisSchool.scores[userType].length) {
        const scoresObj = thisSchool.scores
        scoresObj[userType].push(myScores)
        await schoolRef.update({ scores: scoresObj })
        return "updated"
      } else {
        return "quota filled"
      }
    })
    .catch(error => {
      console.error("Error updating this school's data", error)
      return "error"
    })
  return updateStatusMessage
}

// Submit a final averaged report of scores to the database with a timestamp
export const postReportToDb = async (uid, report) => {
  if (!uid || !report) return "error"
  try {
    await firebase.firestore().collection("users").doc(uid).update({
      report: report,
      reportSubmitted: firebase.firestore.FieldValue.serverTimestamp(),
    })
    return "updated"
  } catch (error) {
    console.error("Error submitting final report to db")
    return "error"
  }
}

// Update the reportSent value to whatever bool in a schools DB doc via their UID 
export const updateReportSentValue = (uid, bool) => {
  try {
    firebase.firestore().collection("users").doc(uid).update({
      reportSent: bool,
    })
  } catch (error) {
    console.error(error)
  }
}

// KEEP THIS IN CASE WE NEED IT AGAIN LATER!!!
// export const updateScores = async (schoolId, userType, myScores) => {
//   if (!schoolId || !userType || !myScores) return "error"
//   firebase
//     .firestore()
//     .collection("users")
//     .where("schoolId", "==", schoolId)
//     .limit(1)
//     .get()
//     .then(async querySnapshot => {
//       const thisSchool = querySnapshot.docs[0]
//       delete myScores.test
//       const scoresObj = thisSchool.data().scores
//       scoresObj[userType].push(myScores)
//       await thisSchool.ref
//         .update({ scores: scoresObj })
//     })
//     .catch(error => {
//       console.error("Error fetching this school's data", error)
//       return "error"
//     })
//     return "updated"
// }
