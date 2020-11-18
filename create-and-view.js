import React from 'react';
import './create-and-view.css'
import { Button } from 'react-bootstrap';
function validate(){
    window.location.pathname="/create";
}
function valid(){
    window.location.pathname="/view";
}

function CreateView(){
    return(
        <div className="createview-container">
            <Button className="btn" onClick={validate} variant="primary">Create</Button>
            <Button className="btn btn-2" onClick={valid} variant="info">View</Button>
        </div>
    )
}
export default CreateView