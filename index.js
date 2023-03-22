// getting express library
const express = require('express');
const port = 8000;

const app = express();

// using body parser for requests
app.use(express.urlencoded());

// using routes file for routing
app.use('/',require('./routes'));

// using assets folder for styles and other files
app.use(express.static('./assets'));

// using connection file from config
const db = require('./config/mongoose');


// setting up view engine and views folder
app.set('view engine','ejs');
app.set('views','./views');


// to running the server
app.listen(port,function(err){
    if(err){
        console.log("Error",err);
        return;
    }
    console.log("Server is Running on port : ",port);
})

