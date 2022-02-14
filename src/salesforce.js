export const addNewSalesforceLead = (
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
  urlencoded.append(process.env.GATSBY_SF_TOOL_STATUS_ID, `Conducting surveys from: ${dateNow}`)

  console.log(...urlencoded);

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
