const express = require('express')

const app = express();

app.use(express.json())

app.listen(3000).then(()=>{
    console.log("App is listening port 3000")
})


app.post("/todo",(req,res)=>{

});


app.get("/todo",(req,res)=>{

});

app.put("/completed",(req,res)=>{

});



