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

    function onLogin(event) {
        event.preventDefault();
        if (userName !== "" && password !== "" && remember) {
            console.log("Login riuscito!", userName, password, remember);
        }
        setUserName("");
        setPassword("");
        setRemember(false);
    }

    function resetMe() {
        if (userName !== "" && password !== "" && remember) {
            setUserName("");
            setPassword("");
            setRemember(false);
        }
    }

    return (
        <>
            <form onSubmit={onLogin}>
                <input type="text" placeholder="Inserisci Username" value={userName} onChange={text} />
                <input type="password" placeholder="Password" value={password} onChange={passwordFunc} />
                <label style={{ width: "120px", display: "flex" }}> Remember me!
                    <input type="checkbox" checked={remember} onChange={rememberMe} />
                </label>
                <hr></hr>
                <button type="submit" disabled={userName === "" || password === "" || remember == false}>Login</button>
                <button onClick={resetMe}>Reset</button>
            </form>
        </>
    )
}

export default Login