import React, { useState } from 'react';

function StateExample(props) {

    const [num, setNum] = useState(props.num);
const handleInc=() => {
    setNum(num +1)
}

    return (
        <div>
            <h1>You've clicked <span style={{color:'red'}}>{num} </span>times!</h1>

            <p>The number of times you have clicked
                is <span style={{color:'red'}}> {num % 2 === 0 ? 'even' : 'odd'}</span>!</p>

            <button onClick={handleInc}>
                Click me
            </button>
        </div>
    );
}

export default StateExample;

