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

    function onLogin() {
        if (userName !== "" && password !== "") {
            userName, password, remember;
        }
    }



    return (
        <>
            <input type="text" placeholder="Inserisci Username" value={userName} onChange={text}/>
            <input type="password" placeholder="Password" value={password} onChange={passwordFunc}/>
            <label style={{ width: "120px", display: "flex"}}> Remember me!
            <input type="checkbox" value={remember} onClick={rememberMe}/>
            </label>
            <hr></hr>
            <button onClick={onLogin} disabled={userName === "" || password === "" || remember == false}>Login</button>
        </>
    )
}

export default Login