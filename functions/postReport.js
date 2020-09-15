var nforce = require("nforce")

exports.handler = async (event, context) => {
  // bring id and data to post into function
  const { rollNumber } = await JSON.parse(event.body)

  if (!rollNumber) return {
    statusCode: 404,
    body: "user to update not found",
    headers: {
      "Access-Control-Allow-Methods": "*",
    },
  }

  // create the connection with the Salesforce connected app
  var org = nforce.createConnection({
    clientId: process.env.SF_CLIENT_ID,
    clientSecret: process.env.SF_CLIENT_SECRET,
    redirectUri: process.env.SF_CALLBACK_URL,
    mode: "single",
  })

  // authenticate and return OAuth token
  org.authenticate(
    {
      username: process.env.SF_USERNAME,
      password: process.env.SF_PASSWORD + process.env.SF_SECURITY_TOKEN,
    },
    function (err, resp) {
      if (!err) {
        console.log("Successfully logged in!")

        // execute the query by Roll Number (custom unique id)
        var q =
          "SELECT Id, Name, Company, roll_number__c, tool_for_schools_progress__c FROM Lead WHERE roll_number__c=" +
          "'" +
          rollNumber +
          "'"
        org.query({ query: q }, function (err, resp) {
          if (!err && resp.records) {
            const useId = resp.records[0]._fields.id
            
            // use id of SF record to update the Lead object
            var act = nforce.createSObject("Lead", {
              Id: useId,
              tool_for_schools_progress__c: "Surveys completed...report available",
            })

            org.update({ sobject: act }, function (err, resp) {
              if (err) {
                console.error("--> unable to update Lead")
                console.error("--> " + JSON.stringify(err))
                return 500
              } else {
                console.log("--> Lead updated")
                status = 200
              }
            })
          }
        })
      }
    }
  )
  return {
    statusCode: 200,
    body: "updated",
    headers: {
      "Access-Control-Allow-Methods": "*",
    },
  }
}
