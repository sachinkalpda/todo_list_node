const express = require('express');

const router = express.Router();

const todoController = require('../controllers/todo_controller');
const categoryController = require('../controllers/category_controller');

// routes for todo


// route to show all todos 
router.get('/',todoController.todo);

// route to add new task
router.post('/add-todo',todoController.addTodo);

// route to delete multiple tasks
router.post('/delete-todo',todoController.deleteTodo);




// category routes


// route for showing all categories
router.get('/category',categoryController.category);

// route to add new category
router.post('/add-category',categoryController.addCategory);


// route to delete mulitple categories
router.post('/delete-category',categoryController.deleteCategory);





module.exports = router;