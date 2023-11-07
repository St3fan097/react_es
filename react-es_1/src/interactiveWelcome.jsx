import { useState } from "react"
import { Welcome } from "./welcome"

export function InteractiveWelcome() {

    const [imputValue, setInputValue] = useState("")

    function inputChange(event){
        setInputValue(event.target.value);
    }

    return (
        <div>
            <input value={imputValue} type="text" onChange={inputChange}/>
            <Welcome name={imputValue}/>
        </div>
    )
}