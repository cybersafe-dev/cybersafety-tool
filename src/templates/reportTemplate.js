// Replace numbered score with appropriate text string
export const applyStatus = number => {
  let status
  switch (number) {
    case 1:
      status = "CyberChampion"
      break
    case 2:
      status = "CyberSmart"
      break
    case 3:
      status = "CyberSmart"
      break
    case 4:
      status = "CyberAware"
      break
    case 5:
      status = "CyberAware"
      break
    default:
      status = "CyberAware"
  }
  return status
}

// Combine all individual score objects into a single object for each user type.
export const createReport = (allScores, schoolName) => {
  const userTypeArray = ["leaders", "teachers", "pupils"]
  const combinedScoresInArray = {
    leaders: {
      digitalknowledge: [],
      privacy: [],
      onlinelife: [],
      communication: [],
      criticalthinking: [],
      responsibleuse: [],
    },
    teachers: {
      digitalknowledge: [],
      privacy: [],
      onlinelife: [],
      communication: [],
      criticalthinking: [],
      responsibleuse: [],
    },
    pupils: {
      digitalknowledge: [],
      privacy: [],
      onlinelife: [],
      communication: [],
      criticalthinking: [],
      responsibleuse: [],
    },
  }

  userTypeArray.forEach(userType => {
    allScores[userType].forEach(submission => {
      combinedScoresInArray[userType].digitalknowledge.push(
        submission.digitalknowledge
      )
      combinedScoresInArray[userType].privacy.push(submission.privacy)
      combinedScoresInArray[userType].onlinelife.push(submission.onlinelife)
      combinedScoresInArray[userType].communication.push(
        submission.communication
      )
      combinedScoresInArray[userType].criticalthinking.push(
        submission.criticalthinking
      )
      combinedScoresInArray[userType].responsibleuse.push(
        submission.responsibleuse
      )
    })
  })

  const { leaders, teachers, pupils } = combinedScoresInArray

  // Get the mean avg of an array of numbers
  const getMean = array => {
    return Math.round(
      array.reduce((sum, value) => {
        return sum + value
      }, 0) / array.length
    )
  }

  // Average all summarised scores into a single overall score in text form
  const prospectiveMark = () => {
    const finalScores = []
    for (const scores in combinedScoresInArray.leaders) {
      finalScores.push(getMean(combinedScoresInArray.leaders[scores]))
    }
    for (const scores in combinedScoresInArray.teachers) {
      finalScores.push(getMean(combinedScoresInArray.teachers[scores]))
    }
    for (const scores in combinedScoresInArray.pupils) {
      finalScores.push(getMean(combinedScoresInArray.pupils[scores]))
    }
    return applyStatus(getMean(finalScores))
  }

  // Create worded report object for posting to DB
  const reportTemplate = {
    reportFor: schoolName,
    prospectiveMark: prospectiveMark(),
    leaders: {
      digitalknowledge: applyStatus(getMean(leaders.digitalknowledge)),
      privacy: applyStatus(getMean(leaders.privacy)),
      onlinelife: applyStatus(getMean(leaders.onlinelife)),
      criticalthinking: applyStatus(getMean(leaders.criticalthinking)),
      communication: applyStatus(getMean(leaders.communication)),
      responsibleuse: applyStatus(getMean(leaders.responsibleuse)),
    },
    teachers: {
      digitalknowledge: applyStatus(getMean(teachers.digitalknowledge)),
      privacy: applyStatus(getMean(teachers.privacy)),
      onlinelife: applyStatus(getMean(teachers.onlinelife)),
      criticalthinking: applyStatus(getMean(teachers.criticalthinking)),
      communication: applyStatus(getMean(teachers.communication)),
      responsibleuse: applyStatus(getMean(teachers.responsibleuse)),
    },
    pupils: {
      digitalknowledge: applyStatus(getMean(pupils.digitalknowledge)),
      privacy: applyStatus(getMean(pupils.privacy)),
      onlinelife: applyStatus(getMean(pupils.onlinelife)),
      criticalthinking: applyStatus(getMean(pupils.criticalthinking)),
      communication: applyStatus(getMean(pupils.communication)),
      responsibleuse: applyStatus(getMean(pupils.responsibleuse)),
    },
  }

  return reportTemplate
}
