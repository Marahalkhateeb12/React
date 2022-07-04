import React, { useState } from 'react';

function Calculatort(props) {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);


    const [result, setResult] = useState();

    const num1Value = () => {
        setNum1(parseInt(document.getElementById('n1').value))
    }
    const num2Value = () => {
        setNum2(parseInt(document.getElementById('n2').value))
    }

    const handleInc = () => {
        setResult(num1 + num2)
    }
    const handleSub = () => {
        setResult(num1 - num2)
    }
    const handleMul = () => {
        setResult(num1 * num2)
    }
    const handleDiv = () => {
        setResult(num1 / num2)
    }

    return (
        <div>

            Number 1  <input type={Number} placeholder='num1' id='n1' onChange={num1Value}></input><br />
            Number 2  <input type={Number} placeholder='num2' id='n2' onChange={num2Value}></input><br />
            <br />

            <button onClick={handleInc} style={{ width: '50px' }}>
                +
            </button>
            <button onClick={handleSub} style={{ width: '50px' }}>
                -
            </button>
            <button onClick={handleMul} style={{  width: '50px' }}>
                *
            </button>
            <button onClick={handleDiv} style={{  width: '50px' }}>
                /
            </button>

            <p>The Result = <span style={{ color: 'red' }}>{result}</span></p>
        </div>
    );
}

export default Calculatort;

