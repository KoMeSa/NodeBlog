const express = require('express');
const path = require('path');
const router = express.Router();



router.get('/services', (req, res)=>{
    res.render('services', {
        
    });
});


module.exports = router;