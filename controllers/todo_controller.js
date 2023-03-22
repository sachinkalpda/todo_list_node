// adding todo and category models
const Todo = require('../models/todo');
const Category = require('../models/category');

// method for getting all todo and related category
module.exports.todo = async function(req,res){
    const category = await Category.find();
    const todo = await Todo.find().populate('category');
    
    return res.render('todo',{
        title: 'Todo',
        todo : todo,
        category: category
    });
}


//method to add a new task to todo
module.exports.addTodo = async function(req,res){
    const todo = new Todo({
        task: req.body.task,
        category: req.body.category,
        date: req.body.date
    });
    const result = await todo.save();
    console.log(result);
    return res.redirect('/');
}

// method to delete multiple todo's
module.exports.deleteTodo = async function(req,res){

    const allTodo = req.body.list;
    const result = await Todo.deleteMany({_id:allTodo});
    console.log(result);
    return res.redirect('/');
}