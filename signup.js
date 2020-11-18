import React, { useState } from 'react'
import './signup.css'
function Signup(){
    const [email,handleemail]=useState("");
    const [password,handlepassword]=useState("");
    const [repassword,handlerepassword]=useState("")

    function validate(e){
        e.preventDefault();
        
        fetch('http://localhost:5000/signup',{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify([{em:email,pas:password,rep:repassword}])
        })
        .then(res=>res.json())
        .then(res=>{
    
            console.log("response ",res.msg[0]);
        })
        window.location.pathname="/signin";
    }
    return(
        <div className='signup-container'>
            <form className='signup-box' onSubmit={validate}>
                <table>
                    <tr>
                        <td>Email</td>
                        <td>: <input type="text" value={email} onChange={e=>handleemail(e.target.value)} placeholder="enter your mail"/></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>: <input type="password" value={password} onChange={e=>handlepassword(e.target.value)} placeholder="password"/></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>: <input type="password" value={repassword} onChange={e=>handlerepassword(e.target.value)} placeholder="retype-password"/></td>
                    </tr>
                </table>
                <div className="submit-signup"> <input type="submit" value="Submit"/></div>
            </form>
        </div>
    )
}
export default Signup