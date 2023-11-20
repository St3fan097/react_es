import { useEffect, useState } from "react"

export function GithubUser({ username }) {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        setError(null)
        fetch(`https://api.github.com/users/${username}`)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setLoading(false)
                setData(json)

                data.avatar_url
            })
            .catch(error => setError(error))
            .finally(() => {
                setLoading(false)
            })
    }, [username])


    return (
        <>
            <div>
                {loading && <h1>Loading...</h1>}
                {error && <h1>User not found</h1>}
                {data && <div><h1>"Username: "{data.name}</h1>
                <h2>"His logged like "{data.login}</h2>
                <img src={data.avatar_url} alt="Ste's avatar"/></div>}
            </div>
        </>
    )
}