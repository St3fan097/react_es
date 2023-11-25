export function Welcome({ name }) {
    return (
        <div className="welcome">
            <strong>Welcome, {name || "Guest"}!</strong>
        </div>
    )
}