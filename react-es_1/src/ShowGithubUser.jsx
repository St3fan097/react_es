import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function ShowGithubUser() {
    const { username } = useParams();
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then((response) => response.json())
            .then((data) => {
                setUserData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, [username]);

    return (
        <div>
            <h2>{userData.login}'s Profile</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {!loading && !error && (
                <ul>
                    <div>
                        <h1>"User: "{userData.name}</h1>
                        <h2>"His logged like "{userData.login}</h2>
                        <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
                    </div>
                </ul>
    )
}
        </div >
    );
}