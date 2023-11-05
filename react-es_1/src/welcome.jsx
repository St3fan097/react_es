export function Welcome({ name, age }) {
    return (
        <div>
            <strong>Welcome, {name || "Guest"}!</strong>
            <p>Your age is {age}</p>
        </div>
    )
}