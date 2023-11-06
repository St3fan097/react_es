export function MouseClicker({ name, src}) {
    function stampa(event) {
        console.log(event.target.name)
    }
    function stampaImg(event){
        console.log(event.target.src); // non ho capito perchè non trova l'immagine ma dovrebbe funzionare nel caso
    }
    return (
        <div>
            <button name={name} onClick={stampa}>
                <img src={src} alt="eye" onClick={stampaImg} /> 
                Clicca qui
            </button>
        </div>
    )
}