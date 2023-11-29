import { useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

function useGithubUser() {
    const [username, setUsername] = useState("");
    const [inputValue, setInputValue] = useState("");
    const { data, error, mutate } = useSWR(username ? `https://api.github.com/users/${username}` : null, fetcher);

    const fetchData = () => {
        if (inputValue !== null) {
            setUsername(inputValue);
            mutate();
        }
    };

    return {
        user: data,
        loading: inputValue !== "" && (!data && !error),
        isError: error,
        inputValue,
        setInputValue,
        fetchData,
    };
}

export function GithubUser() {
    const { user, loading, isError, inputValue, setInputValue, fetchData } = useGithubUser();



    return (
        <>
            <input type="text" placeholder="Insert username" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={fetchData}>Genera</button>
            {loading && <h1>Loading...</h1>}
            {isError && <h1>User not found</h1>}
            {user && (
                <div>
                    <h1>"Username: "{user.name}</h1>
                    <h2>"His logged like "{user.login}</h2>
                    <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
                </div>
            )}
        </>
    );
}
