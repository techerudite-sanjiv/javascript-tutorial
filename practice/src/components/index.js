import React, { useRef } from 'react'
import {firestore} from "../firebase"
import {addDoc, collection} from "@firebase/firestore"

const FormPage = () => {
    const messageRef=useRef() 
    const ref = collection (firestore,"messgae")

    const handleSubmit= async(e)=>{
        e.preventDefault();

        let data={
            message:messageRef.current.value
        }

        try {
            addDoc(ref,data)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>

            <form onSubmit={handleSubmit}>
                <label htmlFor="">Enter Message</label>
                <input type="text" name="" ref={messageRef} />
                <button>Submit Data</button>
            </form>

        </div>
    )
}

export default FormPage