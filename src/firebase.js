import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

var firebaseConfig = {
  apiKey: process.env.GATSBY_FIREBASE_APIKEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.GATSBY_FIREBASE_DATABASEURL,
  projectId: process.env.GATSBY_FIREBASE_PROJECTID,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.GATSBY_FIREBASE_APPID,
  measurementId: process.env.GATSBY_FIREBASE_MEASUREMENTID,
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
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
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

// Delete a user document from the admin account
export const deleteUserAccount = async uid => {
  if (!uid) return "uid error"
  try {
    await firebase.firestore().collection("users").doc(uid).delete()
    return "deleted"
  } catch (error) {
    console.error("Error removing document: ", error)
    return "deletion error"
  }
}

// Archive a school's current report and score details
export const archiveCurrent = async (uid, archiveData) => {
  if (!uid) return "uid error"
  try {
    const schoolRef = firebase.firestore().collection("users").doc(uid)
    schoolRef.update({
      archive: firebase.firestore.FieldValue.arrayUnion(archiveData),
    })
    return "success"
  } catch (error) {
    console.error("Error archiving data: ", error)
    return "archive error"
  }
}

// Return a school to a 'refreshed' state
export const refreshSchool = async (uid) => {
  if (!uid) return "uid error"
  try {
    await firebase.firestore().collection("users").doc(uid).update({
      report: false,
      reportSubmitted: "",
      reportSent: false,
      scores: {
        leaders: [],
        teachers: [],
        pupils: [],
      },
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    return "refreshed"
  } catch (error) {
    console.error("Error refreshing tool progress")
    return "error"
  }
}
