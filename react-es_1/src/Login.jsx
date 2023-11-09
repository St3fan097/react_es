import { useState } from "react"

function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    function text(el) {
        setUserName(el.target.value)
    }
    function passwordFunc(el) {
        setPassword(el.target.value)
    }
    function rememberMe(el) {
        setRemember(el.target.checked)
    }

    function onLogin() {
        if (userName !== "" && password !== "" && remember) {
            userName, password, remember;
        }
    }

    function resetMe(el) {
        if (userName !== "" && password !== "" && remember) {
            setUserName("");
            setPassword("");
            setRemember(false);
        }
    }



    return (
        <>
            <input type="text" placeholder="Inserisci Username" value={userName} onChange={text} />
            <input type="password" placeholder="Password" value={password} onChange={passwordFunc} />
            <label style={{ width: "120px", display: "flex" }}> Remember me!
                <input type="checkbox" checked={remember} onClick={rememberMe} />
            </label>
            <hr></hr>
            <button onClick={onLogin} disabled={userName === "" || password === "" || remember == false}>Login</button>
            <button onClick={resetMe}>Reset</button>
        </>
    )
}

//funziona tutto ma non ho capito perchè nel browser ci sia un errore dove dice che login non è controllato

export default Login