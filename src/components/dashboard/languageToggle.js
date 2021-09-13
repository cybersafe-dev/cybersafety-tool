import React from 'react'
import "../../styling/survey/languageToggle.css"


const Toggle = ({onChange}) => 
<label className = "toggle-container">
<input type="checkbox"  onChange={onChange}/>
<span className="slider"/>
</label>

export default Toggle;