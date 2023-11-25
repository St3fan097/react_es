
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
import { FilteredList } from "./FilteredList";




export function App() {

    const  {location,error,loading, getCurrentPosition } = useCurrentLocation()



    const [language, setLanguage] = useState("en")

    function switchLanguage(language) {
        setLanguage(language)
    }

    return (
        <Container title={<h1 style={{ margin: 0 }}>Pagina con dettagli</h1>}>
            <Welcome />
            <GithubUser  username="Stefano"/>
            <Counter initialValue={0}/>
            <LanguageContext.Provider value={language}>
                <Clock />
                <button onClick={() => { switchLanguage("en") }}>EN</button>
                <button onClick={() => { switchLanguage("it") }}>IT</button>
                <hr />
            </LanguageContext.Provider>
            <TodoList />
            <Login/>
        <div>
             {loading &&  <p>Loading</p>}
                {error && <p>Error</p>}
                {location && <p>{location.latitude}, {location.longitude}</p>}
                <button onClick={getCurrentPosition}>Position</button>
        </div>
        <FilteredList/>
        </Container>

    )
}
