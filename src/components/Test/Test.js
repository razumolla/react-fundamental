import React, { useState } from 'react';

const Test = (props) => {
    // console.log(count);
    const [count, setCount] = useState(0);
    // const plus = () => setCount(count + 1)
    const minus = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    return (
        <div>
            <h1>This is Test </h1>
            <div className="count mt-5">
                <h1>Count:{count} </h1>
                <button onClick={() => setCount(count + 1)} className='ms-3 p-3'> + </button>
                <button onClick={minus} className='ms-3 p-3'> - </button>
            </div>
        </div>
    );
};

export default Test;