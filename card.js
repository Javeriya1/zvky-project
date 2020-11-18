import React,{useState} from 'react';
function Card(){
    const [cardname,handlecard]=useState("");
    function validate(event){
        event.preventDefault();
        fetch('http://localhost:5000/card-store',{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify({cardname}),
            
        })
        .then(res=>res.json())
        .then(res=>
            {
                console.log("back from server",res)
            })
            window.location.pathname='/view';

    }
    return(
        <div className="card-container">
            <h1>card</h1>
            <form onSubmit={validate}>
            
                 <textarea id="w3review" name="w3review" rows="4" cols="50" value={cardname} onChange={e=>handlecard(e.target.value)}/>
                 <input type="submit" value="Submit"/>
            </form>
            
        </div>
    )
}
export default Card