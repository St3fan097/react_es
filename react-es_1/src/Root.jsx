import { SWRConfig } from "swr"
import {App} from "./app"
import {BrowserRouter} from "react-router-dom"

const fetcher = (url) => fetch(url).then((response) => response.json());

export function Root (){

    return (
        <SWRConfig value={{fetcher}}>
        <BrowserRouter>
        <App/>
        </BrowserRouter>
        </SWRConfig>
    )
}