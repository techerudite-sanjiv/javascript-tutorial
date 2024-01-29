import React, { useEffect, useState } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import cookies from 'js-cookie';


const clientId="634089137618-pp3pg6g5a68fgetl65rllcie16nf998b.apps.googleusercontent.com"

const GoogleLoginPage = () => {

    const [userDetails, setUserDetails] = useState(null);

    const responseMessage = (response) => {
        setUserDetails(response)
    };
    const errorMessage = (error) => {
        console.log(error);
    };

      useEffect(() => {

        cookies.set('user', JSON.stringify(userDetails) );
       }, [userDetails])

    return (
        <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage}  width={400}/>

            <br />
        </div>
    )
}

export default GoogleLoginPage