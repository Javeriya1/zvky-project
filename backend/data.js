const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const { json } = require('express');
var create;
var list;
var card;
var sistoree;
var sistorep;
var f;
app.use(express.json());
app.use(cors());

app.post('/signin',(req,res)=>{
    console.log("signin body",req.body[0].em);
    sistoree=req.body[0].em;
    sistorep=req.body[0].em;
    console.log("email",sistoree);
    console.log("password",sistorep);
   
    var read1=JSON.parse(fs.readFileSync('store.json','utf8'));
    var read=fs.readFileSync('store.json','utf8')

    console.log("email",sistoree);
    console.log("password",sistorep);
    var read=JSON.parse(fs.readFileSync('store.json','utf8'));
    var l=[]
    
    for(var i=0;i<read.length;i++){
        l[i]=JSON.parse(read[i][0].signup);
        console.log("l is",l[i][0].em);
        if(l[i][0].em===sistoree && l[i][0].pas===sistorep){
            f=i;
            console.log("f is",f);
        }
    }
    res.send({
        msg:read1,
        msg1:req.body
    })
})

app.post('/signup',(req,res)=>{
    const signup=JSON.stringify(req.body);
    //console.log("signup",signup);

    fs.readFile('./store.json','utf8',function(err,data){
        console.log("data",data);
        if(err)
        console.log(err);
        else{
            const file=JSON.parse(data)
            console.log(file);
            file.push([{signup}]);

            const json=JSON.stringify(file);
            fs.writeFile('./store.json',json,'utf8',function(err){
                if(err)
                console.log(err);
                else
                console.log("every thing went well");
            })
        }
      
    })
        var read=JSON.parse(fs.readFileSync('store.json','utf8'));
        var readi=JSON.parse(read[3])
        console.log(readi);
        console.log("read",read);
        res.send({
        
            msg:readi
        })
})

app.post('/card-store',(req,res)=>{
    console.log(JSON.stringify(req.body));
    card=JSON.stringify(req.body);

    var read=fs.readFileSync('store.json','utf8')

    console.log("email",sistoree);
    console.log("password",sistorep);
    var read=JSON.parse(fs.readFileSync('store.json','utf8'));
    var l=[]
    
    for(var i=0;i<read.length;i++){
        l[i]=JSON.parse(read[i][0].signup);
        console.log("l is",l[i][0].em);
        console.log("email is",typeof(l[i][0].pas));
        console.log("email1",typeof(sistoree))
        console.log("password",typeof(l[i][0].pas))
        console.log("password1",typeof(sistorep))
        console.log(l[i][0].em==sistoree && l[i][0].pas==sistorep)
        if(l[i][0].em==sistoree && l[i][0].pas==sistorep){
            f=i;
            console.log("f is",f);
        }
    }
   //console.log("example",l[1][0].em);

    
    fs.readFile('./store.json','utf8',function(err,data){
        
        console.log("data",data);
        if(err)
        console.log(err);
        else{
            const file=JSON.parse(data)
            console.log(file[f])
            
            const r=file[f]
            console.log("file system is big process",file[f][1])
            console.log("r value is",r);
            r.push([{create,list,card}]);

            const json=JSON.stringify(file);
            console.log("json",json);
            fs.writeFile('./store.json',json,'utf8',function(err){
                if(err)
                console.log(err);
                else
                console.log("every thing went well");
            })
          
        }
      
    })
    res.send({
        
            msg:read,
    })
})

app.post('/list-store',(req,res)=>{
    console.log(JSON.stringify(req.body));
    list=JSON.stringify(req.body);
    res.send({
            msg:req.body,
    })
})

app.post('/create',(req,res)=>{
    console.log(JSON.stringify(req.body));
    create=JSON.stringify(req.body);
    res.send({
            msg:req.body,
    })
})
app.post('/view',(req,res)=>{
    console.log(req.body)
    var read=JSON.parse(fs.readFileSync('store.json','utf8'));
    console.log(read[f]);
    res.send({
        msg:read[f]
    })
    
})
app.listen(5000);