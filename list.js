import React,{useState} from 'react';
function List(){
const [listname,handlelist]=useState("")
function validate(event){
    event.preventDefault();
    fetch('http://localhost:5000/list-store',{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify({listname}),
            
        })
        .then(res=>res.json())
        .then(res=>
            {
                console.log("back from server",res)
            })
            window.location.pathname="/card";
    }
    return(
        <div className='list-container'>
            <form onSubmit={validate}>
                <input type='text' value={listname} onChange={e=>handlelist(e.target.value)} placeholder='Add New List'/>
                <input type='submit' value="Submit" />
            </form>
        </div>
    )
}
export default List