const mongoose = require("mongoose")


mongoose.connect("mongodb+srv://mahesh:mahesh@cluster0.gvjbcn1.mongodb.net/")

const todoSchema = mongoose.schema({
    title: String,
    descriotion :String,
    completed:Boolean,
})

const todo = mongoose.model("todos",todoSchema)

module.exports = {
    todo
};