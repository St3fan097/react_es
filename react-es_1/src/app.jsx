
import { useState } from "react";
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";
import { TodoList } from "./TodoList";
import { Clock } from "./clock";
import { Counter } from "./counter";
import { Welcome } from "./welcome";




export function App() {


    const [language, setLanguage] = useState("en")

    function switchLanguage(language) {
        setLanguage(language)
    }

    return (
        <Container title={<h1 style={{ margin: 0 }}>Pagina con dettagli</h1>}>
            <Welcome />
            <Counter valoreIniziale={0} incremento={1} />
            <LanguageContext.Provider value={language}>
                <Clock />
                <button onClick={() => { switchLanguage("en") }}>EN</button>
                <button onClick={() => { switchLanguage("it") }}>IT</button>
                <hr />
            </LanguageContext.Provider>
            <TodoList />
        </Container>
    )
}
