import { Welcome } from "./welcome";


export function App() {
    return (
        <div>
            <Welcome name={<strong>Stefano</strong>} age={26}/>    
        </div>
    )
}