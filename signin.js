import React,{useState} from 'react';
import './signin.css';
function Signin(){
    

    const [email,handleemail]=useState("");
    const [password,handlepassword]=useState("");
    function validate(event){
        event.preventDefault();
        fetch('http://localhost:5000/signin',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify([{em:email,pa:password}]),
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res.msg1[0].em);
            
            var r=JSON.stringify(res.msg)
            var q=JSON.parse(r);
           var t=[]
           
           for(let i=0;i<res.msg.length;i++){
               t[i]=JSON.parse(q[i][0].signup)
               console.log("t is",t[i]);
           }
           var o=[]
           var p=[]
           for(let i=0;i<=res.msg.length;i++){
               o[i]=t[i][0].em;
               p[i]=t[i][0].rep;
               console.log(o[i]);
               console.log(p[i]);
               console.log(res.msg1[0].em)
               console.log(res.msg1[0].pa)
               console.log("-------------------")
               if(o[i]===res.msg1[0].em && p[i]===res.msg1[0].pa){
                   window.location.pathname="/create-and-view";
               }
               
           }
           //window.location.pathname="/signup";
           
         })
    }

    return(
        <div className="signin-conatiner">
            <div >
                <form className="signin-box" onSubmit={validate}>
                    <table>
                        <tr>
                            <td>
                                Email :
                            </td>
                            <td>
                                : <input type="text" value={email} onChange={e=>handleemail(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Password 
                            </td>
                            <td>
                                : <input type="password" value={password} onChange={e=>handlepassword(e.target.value)}/>
                            </td>
                        </tr>
                    </table>
                    <div className="submit-but">
                        <input type="submit" value="Submit"/>
                    </div>
                    
                </form>
               
            </div>
        </div>
    )
}
export default Signin