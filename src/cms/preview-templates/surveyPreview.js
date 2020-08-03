import React from "react"
import PropTypes from "prop-types"

const surveyPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    console.log({ data })
    return (
      <article>
        <h1>{data.title}</h1>
        <div>
          <h2>School Leaders</h2>

          <h3>Digital Knowledge</h3>
          {data.leaders.digitalknowledge.map(question => (
            <div key={question.statement}>
              <p>{question.statement}</p>
              <div>
                {question.responses ? question.responses.map(response => (
                  <ul>
                    <li key={response.answer}>{response.answer}</li>
                  </ul>
                )) : null}
              </div>
            </div>
          ))}
          <h3>Privacy</h3>
          {data.leaders.privacy.map(question => (
            <div key={question.statement}>
              <p>{question.statement}</p>
              <div>
              {question.responses ? question.responses.map(response => (
                  <ul>
                    <li key={response.answer}>{response.answer}</li>
                  </ul>
                )) : null}
                </div>
            </div>
          ))}
          <h3>Sharing</h3>
          {data.leaders.sharing.map(question => (
            <div key={question.statement}>
              <p>{question.statement}</p>
              <div>
              {question.responses ? question.responses.map(response => (
                  <ul>
                    <li key={response.answer}>{response.answer}</li>
                  </ul>
                )) : null}
                </div>
            </div>
          ))}
          <h3>Communication</h3>
          {data.leaders.communication.map(question => (
            <div key={question.statement}>
              <p>{question.statement}</p>
              <div>
              {question.responses ? question.responses.map(response => (
                  <ul>
                    <li key={response.answer}>{response.answer}</li>
                  </ul>
                )) : null}
                </div>
            </div>
          ))}
          <h3>Critical Thinking</h3>
          {data.leaders.criticalthinking.map(question => (
            <div key={question.statement}>
              <p>{question.statement}</p>
              <div>
              {question.responses ? question.responses.map(response => (
                  <ul>
                    <li key={response.answer}>{response.answer}</li>
                  </ul>
                )) : null}
                </div>
            </div>
          ))}
          <h3>Responsible Use</h3>
          {data.leaders.responsibleuse.map(question => (
            <div key={question.statement}>
              <p>{question.statement}</p>
              <div>
              {question.responses ? question.responses.map(response => (
                  <ul>
                    <li key={response.answer}>{response.answer}</li>
                  </ul>
                )) : null}
                </div>
            </div>
          ))}
        </div>
        <div>
          <h2>Teachers</h2>

          <h3>Digital Knowledge</h3>
          {data.teachers.digitalknowledge.map(question => (
            <div key={question.statement}>
              <p>{question.statement}</p>
              <div>
              {question.responses ? question.responses.map(response => (
                  <ul>
                    <li key={response.answer}>{response.answer}</li>
                  </ul>
                )) : null}
                </div>
            </div>
          ))}
          <h3>Privacy</h3>
          {data.teachers.privacy.map(question => (
            <div key={question.statement}>
              <p>{question.statement}</p>
              <div>
              {question.responses ? question.responses.map(response => (
                  <ul>
                    <li key={response.answer}>{response.answer}</li>
                  </ul>
                )) : null}
                </div>
            </div>
          ))}
          <h3>Sharing</h3>
          {data.teachers.sharing.map(question => (
            <div key={question.statement}>
              <p>{question.statement}</p>
              <div>
              {question.responses ? question.responses.map(response => (
                  <ul>
                    <li key={response.answer}>{response.answer}</li>
                  </ul>
                )) : null}
                </div>
            </div>
          ))}
          <h3>Communication</h3>
          {data.teachers.communication.map(question => (
            <div key={question.statement}>
              <p>{question.statement}</p>
              <div>
              {question.responses ? question.responses.map(response => (
                  <ul>
                    <li key={response.answer}>{response.answer}</li>
                  </ul>
                )) : null}
                </div>
            </div>
          ))}
          <h3>Critical Thinking</h3>
          {data.teachers.criticalthinking.map(question => (
            <div key={question.statement}>
              <p>{question.statement}</p>
              <div>
              {question.responses ? question.responses.map(response => (
                  <ul>
                    <li key={response.answer}>{response.answer}</li>
                  </ul>
                )) : null}
                </div>
            </div>
          ))}
          <h3>Responsible Use</h3>
          {data.teachers.responsibleuse.map(question => (
            <div key={question.statement}>
              <p>{question.statement}</p>
              <div>
              {question.responses ? question.responses.map(response => (
                  <ul>
                    <li key={response.answer}>{response.answer}</li>
                  </ul>
                )) : null}
                </div>
            </div>
          ))}
        </div>
        <div>
          <h2>Pupils</h2>

          <h3>Digital Knowledge</h3>
          {data.pupils.digitalknowledge.map(question => (
            <div key={question.statement}>
              <p>{question.statement}</p>
              <div>
              {question.responses ? question.responses.map(response => (
                  <ul>
                    <li key={response.answer}>{response.answer}</li>
                  </ul>
                )) : null}
                </div>
            </div>
          ))}
          <h3>Privacy</h3>
          {data.pupils.privacy.map(question => (
            <div key={question.statement}>
              <p>{question.statement}</p>
              <div>
              {question.responses ? question.responses.map(response => (
                  <ul>
                    <li key={response.answer}>{response.answer}</li>
                  </ul>
                )) : null}
                </div>
            </div>
          ))}
          <h3>Sharing</h3>
          {data.pupils.sharing.map(question => (
            <div key={question.statement}>
              <p>{question.statement}</p>
              <div>
              {question.responses ? question.responses.map(response => (
                  <ul>
                    <li key={response.answer}>{response.answer}</li>
                  </ul>
                )) : null}
                </div>
            </div>
          ))}
          <h3>Communication</h3>
          {data.pupils.communication.map(question => (
            <div key={question.statement}>
              <p>{question.statement}</p>
              <div>
              {question.responses ? question.responses.map(response => (
                  <ul>
                    <li key={response.answer}>{response.answer}</li>
                  </ul>
                )) : null}
                </div>
            </div>
          ))}
          <h3>Critical Thinking</h3>
          {data.pupils.criticalthinking.map(question => (
            <div key={question.statement}>
              <p>{question.statement}</p>
              <div>
              {question.responses ? question.responses.map(response => (
                  <ul>
                    <li key={response.answer}>{response.answer}</li>
                  </ul>
                )) : null}
                </div>
            </div>
          ))}
          <h3>Responsible Use</h3>
          {data.pupils.responsibleuse.map(question => (
            <div key={question.statement}>
              <p>{question.statement}</p>
              <div>
              {question.responses ? question.responses.map(response => (
                  <ul>
                    <li key={response.answer}>{response.answer}</li>
                  </ul>
                )) : null}
                </div>
            </div>
          ))}
        </div>
      </article>
    )
  } else {
    return <div>Loading...</div>
  }
}

surveyPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default surveyPreview
