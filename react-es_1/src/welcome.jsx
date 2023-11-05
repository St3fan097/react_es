
import { Age } from './age';

export function Welcome({name}) {
    return (
        <div>
            <strong>Welcome, {name || "Guest"}!</strong>
            <p><Age age={26}/></p>
        </div>
    )
}