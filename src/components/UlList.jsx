import {add ,multiply ,subtract, divide} from "./calculator"

function UlList() {
    return (
        
        <ul>
            <li>{add(2 , 2)}</li>
            <li>{multiply(2 , 2)}</li>
            <li>{subtract(2 , 2)}</li>
            <li>{divide(2 , 2)}</li>
        </ul>
        
    )
}

export default UlList