
/* import { Age } from './age'; */

export function Welcome({name, age}) {
    return (
        <div>
            <strong>Welcome, {name || "Guest"}!</strong>
            <p>Your age is {age}</p>
            {age > 18 && <p>Your age is {age}</p>}
            {age !== undefined && <p>Your age is {age}</p>}
            {(age > 18 && age < 65) && <p>Your age is {age}</p>}
            {age > 18 && name === "Stefano" && <p>Your age is {age}</p>}   {/*al posto di John ho messo il mio nome */}
        </div>
    )
}