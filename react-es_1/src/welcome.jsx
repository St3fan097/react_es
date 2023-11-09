
import { Age } from './age';

export function Welcome({name, age}) {
    return (
        <div>
            <strong>Welcome, {name || "Guest"}!</strong>
            <Age age={age}/>
            {age > 18 && <Age age={age}/>}
            {age !== undefined && <Age age={age}/>}
            {(age > 18 && age < 65) && <Age age={age}/>}
            {age > 18 && name === "Stefano" && <Age age={age}/>}   
        </div>
    )
}

//ora dovrebbe essere giusto, mancava il prop drilling///