import React , { useState , useContext , useEffect } from 'react';
import AuthContext from '../../context/auth'

export default function Login(): React.ReactElement {
    const [email , setEmail] = useState('');
    const [senha , setSenha] = useState('');
    const loginData = useContext(AuthContext);


    function entrar(){
        loginData.logIn(email , senha);
    }
    
    return(
        <>
            Email
            <input type="text" onChange={(e) => {
                e.preventDefault();
                setEmail(e.target.value);
                }}/>

            Password
            <input type="password" onChange={(e) => {
                e.preventDefault();
                setSenha(e.target.value);
            }}/>

            <button onClick={() => entrar()}> LOGin </button>
        </>
    )
}