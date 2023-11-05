import { AlertClock } from "./alertClock";



export function App() {
  const mostraAvviso = (messaggio) => {
    alert(messaggio);
  };

    return (
        <div>
        <AlertClock avviso={mostraAvviso} />  
        </div>
    )
}
