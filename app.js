const express = require('express');
const path = require('path');
const app = express();

const mongoose = require('mongoose');
const keys = require('./config/keys.js')

const bodyParser = require('body-parser');
const session = require('express-session');
const multer = require('multer');
var  upload  = multer ( {  dest : 'public/uploads / ' } );   
const expressValidator = require('express-validator');
const logger = require('morgan');
var cookieParser = require('cookie-parser');


//conect to DB
const dbOption = {
     useNewUrlParser: true 
}
mongoose.connect(keys.dbUri, dbOption)
    .then(()=> console.log('mongoDB conected'))
    .catch(error => console.error(error));
    


//import router
const home = require('./router/home.js');
const about = require('./router/about.js');
const services = require('./router/services.js');
const contact = require('./router/contact.js');
const notFound = require('./router/not_found.js');



app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use (express.static(path.join(__dirname, "public")));







//render page
app.use(home);
app.use(about);
app.use(services);
app.use(contact);
app.use(notFound);










app.listen(3000);