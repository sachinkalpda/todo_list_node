// adding library
const mongoose = require('mongoose');


// creating schema form category
const categorySchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    }
});

// creating model for category
const Category = mongoose.model('Category',categorySchema);

module.exports = Category;