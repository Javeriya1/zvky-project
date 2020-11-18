
import React from 'react';
import './board.css';
function Board(){
    return(
        <div className="board-container1">
            <h4>Board Name</h4>
            <div className='board-container' id="boardid">
                <button className="addlistbutton">Add New List</button>
            </div>
        </div>  
    )
}
export default Board;