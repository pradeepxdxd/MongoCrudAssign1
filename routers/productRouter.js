const express = require('express');
const {insertInProduct, getAllProducts, getProductById, updateData, deleteProduct} = require('../controllers/products');
const router = express.Router();

router.get('/producthome', (req, res) => {
    res.render('producthome', {title : 'Product', style : 'producthome.css'});
})

router.get('/addProduct', (req, res) => {
    res.render('addProduct');
})

router.post('/product-data', insertInProduct);
router.get('/showdata', getAllProducts);
router.post('/update/:id', getProductById);
router.post('/update-data', updateData);
router.post('/delete/:id', deleteProduct);

module.exports = router;