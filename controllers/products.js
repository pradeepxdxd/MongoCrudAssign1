const proSchema = require('../model/productSchema');

const insertInProduct = (req, res) => {
    let data = req.body;
    let insert = new proSchema(data);
    insert.save((err, result) => {
        if(err) throw err;
        else {
            res.render('addProduct', {flag : true, msg : "Data Added Successfully"});
        }
    })
}

async function getAllProducts(req, res){
    const data = await proSchema.find();
    res.render('showdata', {products : data});
}

async function getProductById(req, res){
    const id = req.params.id;
    console.log("id............", id);
    const product = await proSchema.findById(id);
    res.render('update', {data : product});
}

function updateData(req, res){
    let pid = req.body.id;
    let data = req.body;
    proSchema.updateOne({_id:pid}, {$set:data}, (err) => {
        if(err) throw err;
        else res.redirect('/product/showdata');
    })
}

async function deleteProduct(req, res){
    let id = req.params.id;
    proSchema.deleteOne({_id:id}, err => {
        if (err) throw err;
        else res.redirect('/product/showdata');
    })
}

module.exports = {
    insertInProduct, getAllProducts, updateData, getProductById, deleteProduct
}