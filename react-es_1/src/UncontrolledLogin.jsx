export function UncontrolledLogin () {

    function handleFormSubmit (event){
        event.preventDefault();
        const username = event.target.elements.namedItem("username").value
        const password = event.target.elements.namedItem("password").value
        const session = event.target.elements.namedItem("session").checked

        const data = {
            username,
            password,
            session
        }

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