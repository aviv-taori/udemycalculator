import * as Calculator from "./calculator"

function UlList() {
    return (
        
        <ul>
            <li>{Calculator.add(2 , 2)}</li>
            <li>{Calculator.multiply(2 , 2)}</li>
            <li>{Calculator.subtract(2 , 2)}</li>
            <li>{Calculator.divide(2 , 2)}</li>
        </ul>
        
    )
}

export default UlList