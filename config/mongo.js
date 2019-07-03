const mongoose = require('mongoose');

const dbUri = 'mongodb+srv://komesa777:@krt28091993777@cluster0-phcea.mongodb.net/test?retryWrites=true&w=majority';

let dbOption = {

     useNewUrlParser: true 

}

mongoose.connect(dbUri, dbOption);

mongoose.connection.on('connected', ()=>{
    console.info(`Connected ${dbUri}`);
});

mongoose.connection.on('error', ()=>{
    console.info("error");
});


module.exports = mongoose;