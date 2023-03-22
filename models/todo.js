// adding library
const mongoose = require('mongoose');

// creating schema for todo
const todoSchema = mongoose.Schema({
    task : {
        type: String,
        required: true
    },
    category : {
        type: [{type:mongoose.Schema.Types.ObjectId, ref:'Category'}],
        required: true,
    },
    date:{
        type: String,
        required: true
    }

});

// creating model for todo

const Todo = mongoose.model('Todo',todoSchema);

module.exports = Todo;