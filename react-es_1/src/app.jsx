
import { useState } from "react";
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";
import { TodoList } from "./TodoList";
import { Clock } from "./clock";
import { Counter } from "./counter";
import { Welcome } from "./welcome";
import { GithubUser } from "./GithubUser";
import Login from "./Login";
import { useCurrentLocation } from "./useCurrentLocation";
import { Link, Route, Routes } from "react-router-dom";
import { GithubUserList } from "./GithubUserList";
import { ShowGithubUser } from "./ShowGithubUser";






export function App() {

    const { location, error, loading, getCurrentPosition } = useCurrentLocation()



    const [language, setLanguage] = useState("en")

    function switchLanguage(language) {
        setLanguage(language)
    }

    return (
        <Container title={<h1 style={{ margin: 0 }}>Pagina con dettagli</h1>}>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/GithubUser">Login</Link></li>
                    <li><Link to="/clock">Clock</Link></li>
                    <li><Link to="/nothing">Verifica pagina non trovata</Link></li>
                    <li><Link to="/users">Elenco users</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Welcome name="Stefano"/>} />
                <Route path="/counter" element={<Counter initialValue={0} />} />
                <Route path="/GithubUser" element={<GithubUser username="Stefano"/>}/>
                <Route path="/users" element={<GithubUserList />} />
                <Route path="/users/:username" element={<ShowGithubUser />} />
                <Route path="*" element="Route not found"/>
            </Routes>
            <LanguageContext.Provider value={language}>
                <Clock />
                <button onClick={() => { switchLanguage("en") }}>EN</button>
                <button onClick={() => { switchLanguage("it") }}>IT</button>
                <hr />
            </LanguageContext.Provider>
            <TodoList />
            <Login />
            <div>
                {loading && <p>Loading</p>}
                {error && <p>Error</p>}
                {location && <p>{location.latitude}, {location.longitude}</p>}
                <button onClick={getCurrentPosition}>Position</button>
            </div>
        </Container>
    )
}
