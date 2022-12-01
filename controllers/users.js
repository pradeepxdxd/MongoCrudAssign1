const schema = require('../model/registerationSchema');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const insertData = (req, res) => {
    let {name, email, pass} = req.body;
    // const name_pattern = /^[a-zA-Z ]{2,30}$/;
    // const email_pattern = /^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
    // const password_pattern = /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/;
    
    const hash = bcrypt.hashSync(pass, saltRounds);
    schema.create({
        name : name,
        email : email,
        pass : hash
    }).then(data => {
        res.render('login');
    }).catch(err => {
        res.render("register", {condition : true, error: "User Already Registered" })
    })
}

async function getData(){
    try{
        const data = await schema.find();
        return data;
    }
    catch(error){
        console.log(error);
    }
}

async function loginData(req, res){
    let {email, pass} = req.body;
    let checkLog = await getData();
    checkLog.filter((ele)=>{
        if(ele.email == email && bcrypt.compareSync(pass, ele.pass)){
            res.render('producthome', {title : 'Product', name : ele.name});
        }
    })
    res.render('login', {flag : true, msg : 'Invalid email and password'});
}

module.exports = {insertData, loginData};