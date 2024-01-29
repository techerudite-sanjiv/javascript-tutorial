import React, { useEffect } from 'react'

const Abc = () => {

    const url="https://jsonplaceholder.typicode.com/posts"

 


    async function  handleClick() {
        const response = await fetch(url);
        const post = await response.json();
        console.log(post,"i am datra")
    }


  return (
    <div>
        

        <button onClick={()=>handleClick()}>Fetch Api</button>


    </div>
  )
}

export default Abc