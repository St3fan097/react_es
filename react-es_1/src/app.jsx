import { Welcome } from "./welcome";


export function App() {
    return (
        <div>
            <Welcome name="Stefano"/>    
        </div>
    )
}


/*Se non specifico nesuuna prop name verrà visualizzato solo welcome o darà errore, 
per sicurezza ho impostato un valore predefinito (guest) così se non è specificato uscirà di default "Welcome, Guest!*/