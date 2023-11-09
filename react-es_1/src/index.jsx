import { App } from "./app";
import {createRoot} from "react-dom/client"

/* 
Versione integrale
const rootElement = document.getElementById("root")

const root = createRoot(rootElement)

root.render(<App/>) */


/* versione abbreviata  */
createRoot(document.getElementById("root")).render(<App/>)

