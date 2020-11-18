import React,{useState} from 'react';
import ReactDOM from 'react-dom'
import './view.css'
function View(){
    var send="hai";
    var list;
    var card;
    var y;
    var t;
    function validate(){
        window.location.pathname="/list";
    }
   // const [y,fun]=useState("");
    fetch('http://localhost:5000/view',{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify({send}),
            
        })
        .then(res=>res.json())
        .then(res=>{
            var list=[],card=[],x=[],y=[],m=[],z=[];
          // console.log(res.msg[1][0])
           for(let i=1;i<res.msg.length;i++){
               list[i-1]=res.msg[i][0].list;
               card[i-1]=res.msg[i][0].card;

               //console.log("listoo",list[i])
               //console.log("cardoo",card[i])
            }
            
           //list=res.msg[1][0].list;
           // card=res.msg[1][0].card;
           for(let i=0;i<res.msg.length-1;i++){
                x[i]=JSON.parse(list[i]);
                y[i]=JSON.parse(card[i]);
                console.log(x[i].listname);
                console.log(y[i].cardname);
                m[i]=x[i].listname;
                z[i]=y[i].cardname;
        }
            //var x=JSON.parse(list);
            //var y=JSON.parse(card);
            //console.log(x.listname);
           // console.log(y.cardname)
            //var m=x.listname;
            //var z=y.cardname;
            //console.log("card",z);
            //console.log("list",m)
            //var t=[1,2,3,4]
            const element=[];
        for(var i=0;i<res.msg.length-1;i++){
            console.log("i is",i);
            element.push(<div className="uyt">
                <div className="text"><h1>{m[i]}
                </h1></div><div className="text"><h1>{z[i]}</h1></div>
                <button className="newview" onClick={validate}>Add List</button>
            </div>)
            // const element = (
            //     <div >
            //         <div className="text"><h1>{m[i]}</h1></div>
            //         <div className="text"><h1>{z[i]}</h1></div>
            //     </div>
            // )
            // ReactDOM.render(element, document.getElementById('view'));
        }
        ReactDOM.render(element, document.getElementById('view'));
       
            


        })
        //console.log("t is",t);
    return(
        <div className="viewpage" id="view">
            
        </div>
    )
}
export default View