const express = require('express');
const {insertData, loginData} = require('../controllers/users');
const router = express.Router();

router.get('/register', (req, res) => {
    res.render('register', {title : 'Sign Up'});
})
router.get('/login', (req, res) => {
    let auth = req.query.msg ? true : false;
    if (auth) {
        return res.render("login", { error: 'Invalid username or password' });
    }
    else {
        return res.render("login", {title : 'Login'});
    }
})

router.post('/reg-data', insertData);
router.post('/login-data', loginData);

module.exports = router;