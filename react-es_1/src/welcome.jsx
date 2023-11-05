
/* import { Age } from './age'; */

export function Welcome({name, age}) {
    return (
        <div>
            <strong>Welcome, {name || "Guest"}!</strong>
            {age > 18 ? <p>Your age is {age}</p> : <p>You are very young!</p>}

        </div>
    )
}