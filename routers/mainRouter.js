const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {title : 'Home', style:'index.css'});
})

module.exports = router;