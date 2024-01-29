import React from 'react'
import { useFetch } from './customHooks'

const FetchApi = () => {

    const [data]=useFetch();


  return (
    <div>

        {data?.map((item)=>{
            return(
                <div>
                    <h5>{item.title}</h5>
                    <p>{item.body}</p>
                </div>
            )
        })
    }
    </div>
  )
}

export default FetchApi