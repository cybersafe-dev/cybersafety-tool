export const addNewSalesforceLead = (
  firstName,
  lastName,
  email,
  company,
  rollNumber
) => {
  //e.preventDefault()
  var urlencoded = new URLSearchParams()
  urlencoded.append("oid", "00D4K0000018ITl")
  urlencoded.append("retURL", "http://")
  urlencoded.append("first_name", firstName)
  urlencoded.append("last_name", lastName)
  urlencoded.append("email", email)
  urlencoded.append("company", company)
  urlencoded.append("00N4K000003FxTE", rollNumber)

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
