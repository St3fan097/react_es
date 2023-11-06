export function MouseClicker({name}) {
    function stampa(event) {
        console.log(event.target.name);
        
    }
    return (
        <div>
            <button name={name} onClick={stampa}>Clicca qui</button>
        </div>
    )
}