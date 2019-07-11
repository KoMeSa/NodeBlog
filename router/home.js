const express = require('express');
const path = require('path');
const router = express.Router();
const Posts = require('../models/Post.model.js');



router.get('/', (req, res, next)=>{
    Posts.find({}).sort({"date": -1})
        .then(posts =>{
            // console.log(posts);
            res.render('home', {
                posts: posts
            })
        });
});






// router.get('/', async (req, res)=>{
//     const posts = await Posts.find({});
//     res.status(200).json(posts);

// });


// router.post('/', async (req, res)=>{
//     const postData = {
//         title: req.body.title,
//         text: req.body.text
//     };


//     const post = new Posts(postData)
//         await post.save();
//         res.status(201).json(post);
// })

// router.delete('/:id', async (req, res)=>{
//   await  Posts.remove({_id: req.params.id});
//   res.status(200).json({
//       massege: "Remove"
//   })
    
// })

module.exports = router;