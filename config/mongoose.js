// require library
const mongoose = require('mongoose');


// connection to database
mongoose.connect('mongodb://localhost:27017/todo_db');



const db = mongoose.connection;

// on erorr
db.on('error',console.error.bind('error','Error Connecting to Database'));


// on success
db.once('open',function(){
    console.log('Successfully Connect To Database');
});