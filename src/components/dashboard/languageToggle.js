import React from 'react'
import "../../styling/survey/languageToggle.css"

import { LanguageStore } from "../../providers/languageProvider"

const LanguageToggle = () => {

const [irish, setIrish] = React.useContext(LanguageStore)

React.useEffect(() => {
    console.log("Irish?", irish)
}, [irish])

return (
<label className = "toggle-container">
    <p className="toggle-text">Aistrigh an suíomh go Gaeilge</p>
<input className="toggle-input" checked={irish} type="checkbox"  onChange={() => setIrish(!irish)}/>
<span className="slider"/>
</label>
)

}

export default LanguageToggle;