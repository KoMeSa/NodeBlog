const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('./config/mongo.js');


//import router
const home = require('./router/home.js');
const about = require('./router/about.js');
const services = require('./router/services.js');
const contact = require('./router/contact.js');
const notFound = require('./router/not_fond.js');


app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');
app.use (express.static(path.join(__dirname, "public")));



//render page
app.use(home);
app.use(about);
app.use(services);
app.use(contact);
app.use(notFound);







app.listen(3000);