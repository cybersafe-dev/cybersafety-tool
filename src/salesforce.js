export const addNewSalesforceLead = (e, ...formFields) => {
    e.preventDefault();
    var urlencoded = new URLSearchParams();
    urlencoded.append("oid", "00D4K0000018ITl");
    urlencoded.append("retURL", "http://");
    urlencoded.append("first_name", formFields.first_name);
    urlencoded.append("last_name", formFields.last_name);
    urlencoded.append("email", formFields.email);
    urlencoded.append("company", formFields.company);

    // console.log(...urlencoded);

    fetch("https://webto.salesforce.com/servlet/servlet.WebToLead?", {
      body: urlencoded,
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }