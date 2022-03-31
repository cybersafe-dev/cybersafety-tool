var jsforce = require("jsforce")

exports.handler = (event, context, callback) => {
  // get the UID from the event to search SF, return if nonexistant
  const { uid } = JSON.parse(event.body)
  let response
  if (!uid) {
    response = {
      statusCode: 500,
      body: JSON.stringify("no UID to search with"),
    }
    callback(null, response)
  }

  // Create connection object for Salesforce
  var conn = new jsforce.Connection({
    oauth2: {
      clientId: process.env.SF_CLIENT_ID,
      clientSecret: process.env.SF_CLIENT_SECRET,
      redirectUri: process.env.SF_CALLBACK_URL,
    },
  })

  const username = process.env.SF_USERNAME
  const password = process.env.SF_PASSWORD + process.env.SF_SECURITY_TOKEN

  let d = new Date()
  let dateNow = d.toDateString()

  // log in to SF
  conn.login(username, password, function (err) {
    if (err) {
      console.error(err)
      response = {
        statusCode: 401,
        body: JSON.stringify("Could not log in"),
      }
      callback(null, response)
    }

    // query the SF org then update the progress field with text and timestamp
    conn
      .sobject("Lead")
      .find({ Tool_for_Schools_UID__c: uid })
      .update(
        {
          tool_for_schools_progress__c: `Report available: Submitted ${dateNow}`,
        },
        function (err, rets) {
          if (err) {
            console.error(err)
            response = {
              statusCode: 500,
              body: JSON.stringify("Could not update lead"),
            }
            callback(null, response)
          }

          console.log(rets)

          // Log out SF and return success
          conn.logout(function (err) {
            if (err) {
              console.error(err)
              response = {
                statusCode: 500,
                body: JSON.stringify("logout failed"),
              }
              callback(null, response)
            }

            // return success message and/or results
            response = {
              statusCode: 200,
              body: JSON.stringify(rets),
            }
            callback(null, response)
          })
        }
      )
  })
}
