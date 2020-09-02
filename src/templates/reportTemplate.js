export const applyStatus = number => {
  let status
  switch (number) {
    case 1:
      status = "Gold"
      break
    case 2:
      status = "Silver"
      break
    case 3:
      status = "Bronze"
      break
    case 4:
      status = "Completed"
      break
    case 5:
      status = "Completed"
      break
    default:
      status = "completed"
  }
  return status
}

export const createReport = (allScores, schoolName) => {
  const userTypeArray = ["leaders", "teachers", "pupils"]
  const combinedScoresInArray = {
    leaders: {
      digitalknowledge: [],
      privacy: [],
      sharing: [],
      communication: [],
      criticalthinking: [],
      responsibleuse: [],
    },
    teachers: {
      digitalknowledge: [],
      privacy: [],
      sharing: [],
      communication: [],
      criticalthinking: [],
      responsibleuse: [],
    },
    pupils: {
      digitalknowledge: [],
      privacy: [],
      sharing: [],
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
      combinedScoresInArray[userType].sharing.push(submission.sharing)
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

  const getMean = array => {
    return Math.round(
      array.reduce((sum, value) => {
        return sum + value
      }, 0) / array.length
    )
  }

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

  // const reportTemplate = `
  // # Report for ${schoolName}
  // _Scores taken from mean average of all survey submissions_
  // ## School Leaders
  // * Digital Knowledge: ${getMean(leaders.digitalknowledge)}
  // * Privacy: ${getMean(leaders.privacy)}
  // * Sharing: ${getMean(leaders.sharing)}
  // * Critical Thinking: ${getMean(leaders.criticalthinking)}
  // * Communication: ${getMean(leaders.communication)}
  // * Responsible Use: ${getMean(leaders.responsibleuse)}

  // ---

  // ## Teachers
  // * Digital Knowledge: ${getMean(teachers.digitalknowledge)}
  // * Privacy: ${getMean(teachers.privacy)}
  // * Sharing: ${getMean(teachers.sharing)}
  // * Critical Thinking: ${getMean(teachers.criticalthinking)}
  // * Communication: ${getMean(teachers.communication)}
  // * Responsible Use: ${getMean(teachers.responsibleuse)}

  // ---

  // ## Pupils
  // * Digital Knowledge: ${getMean(pupils.digitalknowledge)}
  // * Privacy: ${getMean(pupils.privacy)}
  // * Sharing: ${getMean(pupils.sharing)}
  // * Critical Thinking: ${getMean(pupils.criticalthinking)}
  // * Communication: ${getMean(pupils.communication)}
  // * Responsible Use: ${getMean(pupils.responsibleuse)}

  // ---

  // Recommendations:
  // `

  const reportTemplate = {
    reportFor: `Final Report for ${schoolName}`,
    prospectiveMark: prospectiveMark(), 
    leaders: {
      digitalknowledge: applyStatus(getMean(leaders.digitalknowledge)),
      privacy: applyStatus(getMean(leaders.privacy)),
      sharing: applyStatus(getMean(leaders.sharing)),
      criticalthinking: applyStatus(getMean(leaders.criticalthinking)),
      communication: applyStatus(getMean(leaders.communication)),
      responsibleuse: applyStatus(getMean(leaders.responsibleuse)),
    },
    teachers: {
      digitalknowledge: applyStatus(getMean(teachers.digitalknowledge)),
      privacy: applyStatus(getMean(teachers.privacy)),
      sharing: applyStatus(getMean(teachers.sharing)),
      criticalthinking: applyStatus(getMean(teachers.criticalthinking)),
      communication: applyStatus(getMean(teachers.communication)),
      responsibleuse: applyStatus(getMean(teachers.responsibleuse)),
    },
    pupils: {
      digitalknowledge: applyStatus(getMean(pupils.digitalknowledge)),
      privacy: applyStatus(getMean(pupils.privacy)),
      sharing: applyStatus(getMean(pupils.sharing)),
      criticalthinking: applyStatus(getMean(pupils.criticalthinking)),
      communication: applyStatus(getMean(pupils.communication)),
      responsibleuse: applyStatus(getMean(pupils.responsibleuse)),
    },
  }

  return reportTemplate
}
