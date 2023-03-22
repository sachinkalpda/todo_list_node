// adding category model
const Category = require('../models/category');


// method for get all categories
module.exports.category = async function(req,res){
    const category = await Category.find();
    return res.render('category',{
        title: 'Todo|Category',
        category: category,
    })
}

// method for adding new category

module.exports.addCategory = async function(req,res){
    const category = new Category({
        'name': req.body.category
    });
    const result = await category.save();
    return res.redirect('back');
}

// method for delete multiple categories
module.exports.deleteCategory = async function(req,res){
    const allCategory = req.body.list;
    const result = await Category.deleteMany({_id:allCategory});
    return res.redirect('back'); 
}