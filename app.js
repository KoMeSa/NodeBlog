const express = require('express');
const path = require('path');
const app = express();


//import router
const home = require('./router/home.js');


app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');
app.use (express.static(path.join(__dirname, "public")));


app.use(home);






app.listen(3000);