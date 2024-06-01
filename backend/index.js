const express = require('express')
const {createTodo , updateTodo} = require("./types.js");
const { todo } = require('./db.js');




const app = express();

app.use(express.json())

app.listen(3000).then(()=>{
    console.log("App is listening port 3000")
})


app.post("/todo",async(req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : 'You send the wrong inputs'
        })
        return;
    }
    //put in mongoDB

    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed : false,
    })

    res.json({
        msg:"Todo created"
    })
});


app.get("/todo",async(req,res)=>{

    const todos = await todo.find({});

    if(!todos){
        res.status(500).json({
            msg:"todo is not in db "
        })
    }
     res.status(200).json({
        todos:todos
     })

});

app.put("/completed",async(req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
        return

    }

    await todo.update({
        _id:req.body.id
    },{
        completed: true
    })
   
    res.json({
        msg:"Todo marked as completed"
    })
    
});



