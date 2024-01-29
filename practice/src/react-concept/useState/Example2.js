import React, { useState } from "react";

const Example = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const [submit,setSubmit]=useState(false)
  const [message,setMessage]=useState(false)

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(user.name && user.email){
        setSubmit(true)
    }
  setMessage("Please enter the field")
    return

  }
  return (
    <div>
     
     <form onSubmit={handleSubmit}>
        <input type="text" value={user.name} onChange={(e)=>setUser({...user, name:e.target.value})}/> <br />    <br />  
        <input type="email" value={user.email} onChange={(e)=>setUser({...user, email:e.target.value})}/>  <br /> <br />
        <button type="submit">Submit</button>
        <p>{user.name} {user.email}</p>
        <p>{message}</p>
     </form>
    </div>
  );
};

export default Example;
