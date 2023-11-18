import { useState } from "react"

export function Container({ title, children }) {

const [hidden, setHidden] = useState(false)

const toggleContent = () => { 
    setHidden((c) => !c)
}
    return (
        <div className="container">
            <div onClick={toggleContent} style={{backgroundColor: "black",color:"green",cursor:"pointer", textAlign: "center"}}>{title}</div>
            <div className={!hidden ? "content" : "hidden-content"}>{children}</div>
        </div>
    )
}