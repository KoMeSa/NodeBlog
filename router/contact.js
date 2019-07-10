const express = require('express');
const path = require('path');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const url = bodyParser.urlencoded({extended: false});
const User = require('../models/users.js');



// const bill = new User({
//     name: 'bill',
//     password: '2222'
// })

// bill.save().then(()=>console.log("yeap"));


// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));





router.get('/contact', (req, res)=>{
    res.render('contact', {
        
    });
});

router.post('/contact', url, (req, res)=>{
    let name = req.body.name;
    let password = req.body.password;
    console.log(`name: ${name}, password: ${password}`);
    
 const user = new User({
    name:  name,
    password: password
 })

 user.save()
    .then((user)=>{
        res.render('contact', { 
            answer: 'You are registered'
        });
 })
})





module.exports = router;