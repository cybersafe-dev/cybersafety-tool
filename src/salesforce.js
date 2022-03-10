// Web to Lead function
export const addNewSalesforceLead = (
  firstName,
  lastName,
  email,
  company,
  rollNumber,
  toolUid
) => {
  // Return if using a particular email format that suggests we don't want a new lead
  if (email.split("@")[1] === "test.ie") {
    return null
  }

  // Pull custom SF field ids from env
  let oid = process.env.GATSBY_SF_OID
  let rollNumberId = process.env.GATSBY_SF_ROLL_NUMBER_ID
  let toolStatusId = process.env.GATSBY_SF_TOOL_STATUS_ID
  let toolUidId = process.env.GATSBY_SF_UID_ID

  // Create lead template
  const sfLead = {
    oid: oid,
    retURL: "http://",
    first_name: firstName,
    last_name: lastName,
    email: email,
    company: company,
    lead_source: "CYBERSAFE TOOL for SCHOOLS",
  }

  // set custom fields into template object
  let d = new Date()
  let dateNow = d.toDateString()
  sfLead[rollNumberId] = rollNumber
  sfLead[toolStatusId] = `Conducting surveys from: ${dateNow}`
  sfLead[toolUidId] = toolUid

  // Create a hidden iframe as the form target as we don't want to navigate in this function
  let customHiddenIframeName = "SF_WEB_TO_LEAD"
  if (!document.getElementById(customHiddenIframeName)) {
    let theiFrame = document.createElement("iframe")
    theiFrame.id = customHiddenIframeName
    theiFrame.name = customHiddenIframeName
    theiFrame.src = "about:blank"
    theiFrame.style.display = "none"
    document.body.appendChild(theiFrame)
  }

  // Create a hidden form from the template and submit to SF web-to-lead
  let form = document.createElement("form")
  form.method = "POST"
  form.action = "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
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
