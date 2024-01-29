import React, { useState } from "react";

const TextCounter = () => {

    //useState can have a callback function
    // const [counter, setCounter] = useState(()=>0);
   
    const [counter, setCounter] = useState(0);
    const [data, setData] = useState("");

    console.log(data, "hey i am data ")

    const increase = () => {
        setCounter(counter + 1)
    }
    const decrease = () => {
        setCounter(counter - 1)
    }

    return (
        <div>


            <h2>{counter}</h2>
            <button onClick={decrease}>-</button>  &nbsp;
            <button onClick={increase}>+</button>

            <br /> <br /> <br />

            <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
            <p>{data}</p>

        </div>
    );
};

export default TextCounter;
