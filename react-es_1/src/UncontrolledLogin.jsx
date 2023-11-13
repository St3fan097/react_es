export function UncontrolledLogin () {

    function handleFormSubmit (event){
        event.preventDefault();
        const formData = new FormData(event.target)

        const data = {
            username: formData.get("username"),
            password: formData.get("password"),
            session: formData.get("session") === "on" ? true : false
        }
                                                    /* con formData è più sintetico il codice, è più comprensibile ed è supportato da molti browser
                                                    ma si possono fare solo richieste post ed è meno reattivo*/
        console.log(data)
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input name="username" type="text"/>
            <input name="password" type="password"/>
            <input name="session" type="checkbox"/>
            <button>Login</button>
            <button type="reset">Reset</button>
        </form>
    )
}