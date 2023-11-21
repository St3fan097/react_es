import { useEffect, useState } from "react"

function useGithubUser () {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [username, setUsername] = useState("")
    const [usernameInput, setUsernameInput] = useState("")

    useEffect(() => {

        if (!username) {
            return;
        }
        setLoading(true)
        setError(null)

        fetch(`https://api.github.com/users/${username}`)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setLoading(false)
                setData((prevData) => [...prevData, json])

            })
            .catch((error) => setError(error))
            .finally(() => {
                setLoading(false)
            })
    }, [username])

    function insertName(event) {
        setUsernameInput(event.target.value)
    }

    function fetchData() {
        setUsername(usernameInput);
    }
    return{
        data, loading, error, username, usernameInput, insertName , fetchData
    }
}

export function GithubUser() {
    const { data, loading, error, username, usernameInput, insertName, fetchData } = useGithubUser()


    return (
        <>
            <input type="text" placeholder="Insert username" value={usernameInput} onChange={insertName} />
            <button onClick={fetchData}>Genera</button>
            {loading && <h1>Loading...</h1>}
            {error && <h1>User not found</h1>}
            <ul>
                {data.map((user, index) => (
                    <li key={index}>
                        <div>
                            <h1>"Username: "{user.name}</h1>
                            <h2>"His logged like "{user.login}</h2>
                            <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}