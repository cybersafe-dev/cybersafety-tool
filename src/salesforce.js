export const addNewSalesforceLead = (
  firstName,
  lastName,
  email,
  company,
  rollNumber
) => {
  var urlencoded = new URLSearchParams()
  // This id will need to come from the client's SF org web to lead generator
  urlencoded.append("oid", process.env.GATSBY_SF_OID)
  urlencoded.append("retURL", "http://")
  urlencoded.append("first_name", firstName)
  urlencoded.append("last_name", lastName)
  urlencoded.append("email", email)
  urlencoded.append("company", company)
  // This id will need to come from the client's SF org web to lead generator
  // urlencoded.append("00N4K000003FxTE", rollNumber) test value
  urlencoded.append("00N1i000002IJKt", rollNumber)

  // console.log(...urlencoded);

  fetch("https://webto.salesforce.com/servlet/servlet.WebToLead?", {
    body: urlencoded,
    method: "POST",
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
    },
  })
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      console.error(error)
    })
}
