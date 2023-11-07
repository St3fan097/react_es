
import { Age } from './age';

export function Welcome({name, age}) {
    return (
        <div>
            <strong>Welcome, {name || "Guest"}!</strong>
            <p><Age age={age}/></p>
        </div>
    )
}