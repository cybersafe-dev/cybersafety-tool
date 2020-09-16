import React from "react"
import PropTypes from "prop-types"
import "../../../components/layout/layout.css"
import "./surveyPreview.css"

const SurveyPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS()

  const [leaders, setLeaders] = React.useState(false)
  const [teachers, setTeachers] = React.useState(false)
  const [pupils, setPupils] = React.useState(false)
  const [dk, setDk] = React.useState(false)
  const [p, setP] = React.useState(false)
  const [s, setS] = React.useState(false)
  const [c, setC] = React.useState(false)
  const [ct, setCt] = React.useState(false)
  const [ru, setRu] = React.useState(false)

  if (data) {
    return (
      <article>
        <h1>{data.title}</h1>
        <div className="user-title">
          <h2>School Leaders</h2>
          <button onClick={() => setLeaders(!leaders)}>&#9660;</button>
        </div>
        <div style={{ display: leaders ? "block" : "none" }}>
          <div className="category">
            <button onClick={() => setDk(!dk)}>&#9660;</button>
            <h3>Digital Knowledge</h3>
          </div>
          <div style={{ display: dk ? "block" : "none" }}>
            {data.leaders.digitalknowledge.map(question => (
              <div key={question.statement}>
                <p>{question.statement}</p>
                <div>
                  <ul>
                    {question.responses
                      ? question.responses.map(response => (
                          <li key={response.answer}>{response.answer}</li>
                        ))
                      : null}
                  </ul>
                  <hr />
                </div>
              </div>
            ))}
          </div>
          <div className="category">
            <button onClick={() => setP(!p)}>&#9660;</button>
            <h3>Privacy</h3>
          </div>
          <div style={{ display: p ? "block" : "none" }}>
            {data.leaders.privacy.map(question => (
              <div key={question.statement}>
                <p>{question.statement}</p>
                <div>
                  <ul>
                    {question.responses
                      ? question.responses.map(response => (
                          <li key={response.answer}>{response.answer}</li>
                        ))
                      : null}
                  </ul>
                  <hr />
                </div>
              </div>
            ))}
          </div>
          <div className="category">
            <button onClick={() => setS(!s)}>&#9660;</button>
            <h3>Online Life</h3>
          </div>
          <div style={{ display: s ? "block" : "none" }}>
            {data.leaders.onlinelife.map(question => (
              <div key={question.statement}>
                <p>{question.statement}</p>
                <div>
                  <ul>
                    {question.responses
                      ? question.responses.map(response => (
                          <li key={response.answer}>{response.answer}</li>
                        ))
                      : null}
                  </ul>
                  <hr />
                </div>
              </div>
            ))}
          </div>
          <div className="category">
            <button onClick={() => setC(!c)}>&#9660;</button>
            <h3>Communication</h3>
          </div>
          <div style={{ display: c ? "block" : "none" }}>
            {data.leaders.communication.map(question => (
              <div key={question.statement}>
                <p>{question.statement}</p>
                <div>
                  <ul>
                    {question.responses
                      ? question.responses.map(response => (
                          <li key={response.answer}>{response.answer}</li>
                        ))
                      : null}
                  </ul>
                  <hr />
                </div>
              </div>
            ))}
          </div>
          <div className="category">
            <button onClick={() => setCt(!ct)}>&#9660;</button>
            <h3>Critical Thinking</h3>
          </div>
          <div style={{ display: ct ? "block" : "none" }}>
            {data.leaders.criticalthinking.map(question => (
              <div key={question.statement}>
                <p>{question.statement}</p>
                <div>
                  <ul>
                    {question.responses
                      ? question.responses.map(response => (
                          <li key={response.answer}>{response.answer}</li>
                        ))
                      : null}
                  </ul>
                  <hr />
                </div>
              </div>
            ))}
          </div>
          <div className="category">
            <button onClick={() => setRu(!ru)}>&#9660;</button>
            <h3>Responsible Use</h3>
          </div>
          <div style={{ display: ru ? "block" : "none" }}>
            {data.leaders.responsibleuse.map(question => (
              <div key={question.statement}>
                <p>{question.statement}</p>
                <div>
                  <ul>
                    {question.responses
                      ? question.responses.map(response => (
                          <li key={response.answer}>{response.answer}</li>
                        ))
                      : null}
                  </ul>
                  <hr />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="user-title">
          <h2>Teachers</h2>
          <button onClick={() => setTeachers(!teachers)}>&#9660;</button>
        </div>
        <div style={{ display: teachers ? "block" : "none" }}>
          <div className="category">
            <button onClick={() => setDk(!dk)}>&#9660;</button>
            <h3>Digital Knowledge</h3>
          </div>
          <div style={{ display: dk ? "block" : "none" }}>
            {data.teachers.digitalknowledge.map(question => (
              <div key={question.statement}>
                <p>{question.statement}</p>
                <div>
                  <ul>
                    {question.responses
                      ? question.responses.map(response => (
                          <li key={response.answer}>{response.answer}</li>
                        ))
                      : null}
                  </ul>
                  <hr />
                </div>
              </div>
            ))}
          </div>
          <div className="category">
            <button onClick={() => setP(!p)}>&#9660;</button>
            <h3>Privacy</h3>
          </div>
          <div style={{ display: p ? "block" : "none" }}>
            {data.teachers.privacy.map(question => (
              <div key={question.statement}>
                <p>{question.statement}</p>
                <div>
                  <ul>
                    {question.responses
                      ? question.responses.map(response => (
                          <li key={response.answer}>{response.answer}</li>
                        ))
                      : null}
                  </ul>
                  <hr />
                </div>
              </div>
            ))}
          </div>
          <div className="category">
            <button onClick={() => setS(!s)}>&#9660;</button>
            <h3>Online Life</h3>
          </div>
          <div style={{ display: s ? "block" : "none" }}>
            {data.teachers.onlinelife.map(question => (
              <div key={question.statement}>
                <p>{question.statement}</p>
                <div>
                  <ul>
                    {question.responses
                      ? question.responses.map(response => (
                          <li key={response.answer}>{response.answer}</li>
                        ))
                      : null}
                  </ul>
                  <hr />
                </div>
              </div>
            ))}
          </div>
          <div className="category">
            <button onClick={() => setC(!c)}>&#9660;</button>
            <h3>Communication</h3>
          </div>
          <div style={{ display: c ? "block" : "none" }}>
            {data.teachers.communication.map(question => (
              <div key={question.statement}>
                <p>{question.statement}</p>
                <div>
                  <ul>
                    {question.responses
                      ? question.responses.map(response => (
                          <li key={response.answer}>{response.answer}</li>
                        ))
                      : null}
                  </ul>
                  <hr />
                </div>
              </div>
            ))}
          </div>
          <div className="category">
            <button onClick={() => setCt(!ct)}>&#9660;</button>
            <h3>Critical Thinking</h3>
          </div>
          <div style={{ display: ct ? "block" : "none" }}>
            {data.teachers.criticalthinking.map(question => (
              <div key={question.statement}>
                <p>{question.statement}</p>
                <div>
                  <ul>
                    {question.responses
                      ? question.responses.map(response => (
                          <li key={response.answer}>{response.answer}</li>
                        ))
                      : null}
                  </ul>
                  <hr />
                </div>
              </div>
            ))}
          </div>
          <div className="category">
            <button onClick={() => setRu(!ru)}>&#9660;</button>
            <h3>Responsible Use</h3>
          </div>
          <div style={{ display: ru ? "block" : "none" }}>
            {data.teachers.responsibleuse.map(question => (
              <div key={question.statement}>
                <p>{question.statement}</p>
                <div>
                  <ul>
                    {question.responses
                      ? question.responses.map(response => (
                          <li key={response.answer}>{response.answer}</li>
                        ))
                      : null}
                  </ul>
                  <hr />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="user-title">
          <h2>Pupils</h2>
          <button onClick={() => setPupils(!pupils)}>&#9660;</button>
        </div>
        <div style={{ display: pupils ? "block" : "none" }}>
          <div className="category">
            <button onClick={() => setDk(!dk)}>&#9660;</button>
            <h3>Digital Knowledge</h3>
          </div>
          <div style={{ display: dk ? "block" : "none" }}>
            {data.pupils.digitalknowledge.map(question => (
              <div key={question.statement}>
                <p>{question.statement}</p>
                <div>
                  <ul>
                    {question.responses
                      ? question.responses.map(response => (
                          <li key={response.answer}>{response.answer}</li>
                        ))
                      : null}
                  </ul>
                  <hr />
                </div>
              </div>
            ))}
          </div>
          <div className="category">
            <button onClick={() => setP(!p)}>&#9660;</button>
            <h3>Privacy</h3>
          </div>
          <div style={{ display: p ? "block" : "none" }}>
            {data.pupils.privacy.map(question => (
              <div key={question.statement}>
                <p>{question.statement}</p>
                <div>
                  <ul>
                    {question.responses
                      ? question.responses.map(response => (
                          <li key={response.answer}>{response.answer}</li>
                        ))
                      : null}
                  </ul>
                  <hr />
                </div>
              </div>
            ))}
          </div>
          <div className="category">
            <button onClick={() => setS(!s)}>&#9660;</button>
            <h3>Online Life</h3>
          </div>
          <div style={{ display: s ? "block" : "none" }}>
            {data.pupils.onlinelife.map(question => (
              <div key={question.statement}>
                <p>{question.statement}</p>
                <div>
                  <ul>
                    {question.responses
                      ? question.responses.map(response => (
                          <li key={response.answer}>{response.answer}</li>
                        ))
                      : null}
                  </ul>
                  <hr />
                </div>
              </div>
            ))}
          </div>
          <div className="category">
            <button onClick={() => setC(!c)}>&#9660;</button>
            <h3>Communication</h3>
          </div>
          <div style={{ display: c ? "block" : "none" }}>
            {data.pupils.communication.map(question => (
              <div key={question.statement}>
                <p>{question.statement}</p>
                <div>
                  <ul>
                    {question.responses
                      ? question.responses.map(response => (
                          <li key={response.answer}>{response.answer}</li>
                        ))
                      : null}
                  </ul>
                  <hr />
                </div>
              </div>
            ))}
          </div>
          <div className="category">
            <button onClick={() => setCt(!ct)}>&#9660;</button>
            <h3>Critical Thinking</h3>
          </div>
          <div style={{ display: ct ? "block" : "none" }}>
            {data.pupils.criticalthinking.map(question => (
              <div key={question.statement}>
                <p>{question.statement}</p>
                <div>
                  <ul>
                    {question.responses
                      ? question.responses.map(response => (
                          <li key={response.answer}>{response.answer}</li>
                        ))
                      : null}
                  </ul>
                  <hr />
                </div>
              </div>
            ))}
          </div>
          <div className="category">
            <button onClick={() => setRu(!ru)}>&#9660;</button>
            <h3>Responsible Use</h3>
          </div>
          <div style={{ display: ru ? "block" : "none" }}>
            {data.pupils.responsibleuse.map(question => (
              <div key={question.statement}>
                <p>{question.statement}</p>
                <div>
                  <ul>
                    {question.responses
                      ? question.responses.map(response => (
                          <li key={response.answer}>{response.answer}</li>
                        ))
                      : null}
                  </ul>
                  <hr />
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    )
  } else {
    return <div>Loading...</div>
  }
}

SurveyPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default SurveyPreview
