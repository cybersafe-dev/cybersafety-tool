export const createReport = allScores => {
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

  console.log({ combinedScoresInArray })

  const { leaders, teachers, pupils } = combinedScoresInArray

  const getMean = (array) => {
      return Math.round(array.reduce((sum, value) => {
        return sum + value
      }, 0) / array.length)
  }

  const reportTemplate = `
  # Report for this school  
  _Scores taken from mean average of all survey submissions_ 
  ## School Leaders  
  * Digital Knowledge: ${getMean(leaders.digitalknowledge)}
  * Privacy: ${getMean(leaders.privacy)}
  * Sharing: ${getMean(leaders.sharing)}
  * Critical Thinking: ${getMean(leaders.criticalthinking)}
  * Communication: ${getMean(leaders.communication)}
  * Responsible Use: ${getMean(leaders.responsibleuse)}
  
  ---

  ## Teachers 
  * Digital Knowledge: ${getMean(teachers.digitalknowledge)}
  * Privacy: ${getMean(teachers.privacy)}
  * Sharing: ${getMean(teachers.sharing)}
  * Critical Thinking: ${getMean(teachers.criticalthinking)}
  * Communication: ${getMean(teachers.communication)}
  * Responsible Use: ${getMean(teachers.responsibleuse)}
  
  ---

  ## Pupils  
  * Digital Knowledge: ${getMean(pupils.digitalknowledge)}
  * Privacy: ${getMean(pupils.privacy)}
  * Sharing: ${getMean(pupils.sharing)}
  * Critical Thinking: ${getMean(pupils.criticalthinking)}
  * Communication: ${getMean(pupils.communication)}
  * Responsible Use: ${getMean(pupils.responsibleuse)}
  
  ---

  Recommendations:
  `

  return reportTemplate
}



