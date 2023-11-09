import { useState } from "react"

function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    function text (el) {
        setUserName(el.target.value)
    }
    function passwordFunc (el) {
        setPassword(el.target.value)
    }
    function rememberMe (el) {
        setRemember(el.target.checked)
    }


    return (
        <>
            <input type="text" value={userName} onChange={text}/>
            <input type="password" value={password} onChange={passwordFunc}/>
            <input type="checkbox" value={remember} onClick={rememberMe}/>
        </>
    )
}

export default Login