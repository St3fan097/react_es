export function Welcome({ name, age }) {
    return (
        <div>
            <p>Welcome, {name || "Guest"}!</p>
            <p>Your age is {age}</p>
        </div>
    )
}