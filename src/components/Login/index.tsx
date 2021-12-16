import React from 'react';

export default function Login(): React.ReactElement {

    function entrar(){
        alert("Entrar2")
    }
    
    return(
        <>
            Email
            <input type="text" />

            Password
            <input type="password" />

            <button onClick={() => entrar()}> LOGin </button>
        </>
    )
}