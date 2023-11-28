import { useEffect, useState } from "react"
import useSWR from "swr"


const fetcher = url => fetch(url).then(response => response.json())

function useGithubUser(username){
    const { data, error } = useSWR(`https://api.github.com/users/${username}`, fetcher)

    return {
        data,
        loading: !data && !error,
        error,
    }
}

export function GithubUser() {
    const [username, setUsername] = useState("")
    const {data, loading, error } = useGithubUser(username)


    function insertName(event) {
        setUsername(event.target.value)
    }


    return (
        <>
            <input type="text" placeholder="Insert username" value={username} onChange={insertName} />
            {loading && <h1>Loading...</h1>}
            {error && <h1>User not found</h1>}
            {data && (
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

            )}
        </>
    )
}