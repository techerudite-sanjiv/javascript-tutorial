import React, { useEffect, useState } from 'react'

const Example1 = () => {

    const [status, setStatus] = useState(false)
    const [count, setCount] = useState(0)


    console.log(status);

    useEffect(() => {
        let timer;
        if (status) {
            timer = setInterval(() => {
                setCount((prev) => prev + 1)
            }, 1000);

            return () => clearInterval(timer)
        }

       
    }, [status])



    console.log(count);

    const handleCounter = (value) => {
        if(value=="start"){
            setStatus(true)
        }
        if(value=="pause"){
            setStatus(false)
        }
        if(value=="reset"){
            setCount(0)
            setStatus(false)
        }
    }


    return (
        <div>

            <h1> {count} </h1>
            <button onClick={()=>handleCounter("start")} >start</button>
            <button onClick={()=>handleCounter("pause")}>pause</button>
            <button onClick={()=>handleCounter("reset")} >reset</button>

        </div>
    )
}

export default Example1