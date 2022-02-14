export const oldAddNewSalesforceLead = (
  firstName,
  lastName,
  email,
  company,
  rollNumber
) => {
  let d = new Date()
  let dateNow = d.toDateString()

  var urlencoded = new URLSearchParams()
  urlencoded.append("oid", process.env.GATSBY_SF_OID)
  urlencoded.append("retURL", "http://")
  urlencoded.append("first_name", firstName)
  urlencoded.append("last_name", lastName)
  urlencoded.append("email", email)
  urlencoded.append("company", company)
  urlencoded.append(process.env.GATSBY_SF_ROLL_NUMBER_ID, rollNumber)
  urlencoded.append("lead_source", "CYBERSAFE TOOL for SCHOOLS")
  urlencoded.append(
    process.env.GATSBY_SF_TOOL_STATUS_ID,
    `Conducting surveys from: ${dateNow}`
  )

  console.log(...urlencoded)

  fetch("https://webto.salesforce.com/servlet/servlet.WebToLead?", {
    body: urlencoded,
    method: "POST",
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
    },
  })
  // .then(res => {
  //   console.log(res)
  // })
  // .catch(error => {
  //   console.error(error)
  // })
}

// Web to Lead function
export const addNewSalesforceLead = (
  firstName,
  lastName,
  email,
  company,
  rollNumber
) => {

  let oid = process.env.GATSBY_SF_OID
  let rollNumberId = process.env.GATSBY_SF_ROLL_NUMBER_ID
  let toolStatusId = process.env.GATSBY_SF_TOOL_STATUS_ID

  const sfLead = {
    oid: oid,
    retURL: "http://",
    first_name: firstName,
    last_name: lastName,
    email: email,
    company: company,
    lead_source: "CYBERSAFE TOOL for SCHOOLS",
  }

  let d = new Date()
  let dateNow = d.toDateString()
  sfLead[rollNumberId] = rollNumber
  sfLead[toolStatusId] = `Conducting surveys from: ${dateNow}`

  console.log(sfLead)

  let customHiddenIframeName = "SF_WEB_TO_LEAD"
  if (!document.getElementById(customHiddenIframeName)) {
    let theiFrame = document.createElement("iframe")
    theiFrame.id = customHiddenIframeName
    theiFrame.name = customHiddenIframeName
    theiFrame.src = "about:blank"
    theiFrame.style.display = "none"
    document.body.appendChild(theiFrame)
  }
  let form = document.createElement("form")
  form.method = "POST"
  form.action = "https://webto.salesforce.com/servlet/servlet.WebToLead?"
  form.setAttribute("target", customHiddenIframeName)
  for (let dataPoint in sfLead) {
    let theInput = document.createElement("input")
    theInput.name = dataPoint
    theInput.value = sfLead[dataPoint]
    theInput.setAttribute("type", "hidden")
    form.appendChild(theInput)
  }
  document.body.appendChild(form)
  form.submit()
}
