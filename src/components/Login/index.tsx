import React from 'react';

export default function Login(): React.ReactElement {

    
    return(
        <>
            Email
            <input type="text" />

            Password
            <input type="password" />

            <button onClick={() => alert("Entrar")}> LOGin </button>
        </>
    )
}