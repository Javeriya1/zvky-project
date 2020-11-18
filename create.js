import React,{useState} from 'react';
import './create.css';


function Create(){
    const [boardname,handleBoard]=useState("");    
    function validate(event){
            event.preventDefault();
            fetch('http://localhost:5000/create',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({boardname}),
        })
            .then(res=>res.json())
            .then(res=>{
                console.log("res",res);
            })
           window.location.pathname='/list'; 
}
    return(
        <div className="create-container">
            <div className="create-box">
                

                <h3>New Board</h3>
                <form onSubmit={validate}>
                    <input type="text" value={boardname} onChange={e=>handleBoard(e.target.value)} placeholder="Board Name"/><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    )
}
export default Create;