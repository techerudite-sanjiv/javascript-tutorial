import React from 'react'
import { useCounter } from './customHooks'



const CustomHooks = () => {
 const [count, increment, decrement] = useCounter();

  return (
    <div>
        <h1>{count}</h1>
        <button  onClick={decrement}>decrease</button>
        <button onClick={increment}>increase</button>
    </div>
  )
}

export default CustomHooks