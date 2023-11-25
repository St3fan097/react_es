import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function GithubUserList() {
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://api.github.com/users")
            .then((response) => response.json())
            .then((data) => {
                setUserList(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h2>Github Users</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            <ul>
                {userList.map((user) => (
                    <li key={user.id}>
                        <Link to={`/users/${user.login}`}>{user.login}</Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    );
}