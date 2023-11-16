function Colors({ color }) {

    return (
        <li>
            <h4>{color.name}</h4>
        </li>
    )
}



export function Color() {

    const color =
        [
            { id: 1, name: "red" },
            { id: 2, name: "black" },
            { id: 3, name: "yellow" },
            { id: 4, name: "blue" },
            { id: 5, name: "green" },
        ]

    return (
        <ul>
            {color.map((color) => (
                <Colors key={color.id} color={color} />
            ))}
        </ul>
    )
}