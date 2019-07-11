const express = require('express');
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
const url = bodyParser.urlencoded({extended: false});

// require model post
const Post = require('../models/Post.model');




router.get('/add', (req, res)=>{
    res.render('add', {  
    });
});

router.post('/add', url, (req, res, next)=>{
    const nickName = req.body.nickName;
    const message = req.body.message;
    const comentDate = new Date();

    const addPost = new Post({
        autor: nickName,
        text: message,
        date: comentDate
    });

    // console.log(addPost);

    addPost.save()
        .then(addPost, ()=>{
            // console.log('Post is add');
            res.redirect('/');
        })
        .catch( (error) => console.log(error));
});





// router.post('/contact', url, (req, res)=>{
//     let nickName = req.body.nickName;
//     let message = req.body.message
//     console.log(`name: ${name}, password: ${password}`);
    
//  const post = new Post({
//     autor:  nickName,
//     text: message,
//     date: date
//  })

//  user.save()
//     .then((post)=>{
//         console.log('yeap!!!!!!!!!!!!')
//     })
//     // .catch((error)=>{
//     //     console.log(error)
//     // });
// });


 module.exports = router;