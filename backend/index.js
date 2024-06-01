const express = require('express')
const {createTodo , updateTodo} = require("./types.js")




const app = express();

app.use(express.json())

app.listen(3000).then(()=>{
    console.log("App is listening port 3000")
})


app.post("/todo",(req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : 'You send the wrong inputs'
        })
        return;
    }
});


app.get("/todo",(req,res)=>{

});

app.put("/completed",(req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
    }
    return
});



