export function AlertClock({avviso}) {
    function generaDate() {
        const ora = new Date()
        avviso(`Sono le ${ora.toLocaleTimeString()}`)
    }

    return (
        <div>
            <p>Che ore sono?</p>
            <button onClick={generaDate}>Clicca qui!</button>
        </div>
    )
}