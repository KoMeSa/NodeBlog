const express = require('express');
const path = require('path');
const app = express();


//import router
const home = require('./router/home.js');
const about = require('./router/about.js');
const services = require('./router/services');
const contact = require('./router/contact');


app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');
app.use (express.static(path.join(__dirname, "public")));



//render page
app.use(home);
app.use(about);
app.use(services);
app.use(contact);






app.listen(3000);