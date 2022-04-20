const mongoose = require('mongoose');
const express =require("express");
const control = require('./controllers/controller');
const port = 3000;
const ejs = require("express-handlebars");
const app = express();
require("dotenv").config();
const uri = process.env.ATLAS_URI;
console.log(uri);
mongoose.connect(uri, {useUnifiedTopology: true}).then(() => console.log('successfully connected DB'));
mongoose.connection.on('error', (error) => console.log(`Error connecting: ${error.message}`));
    app.engine('.ejs', ejs.engine({defaultLayout: 'styles', extname: '.ejs',}));
    app.set('view engine', '.ejs');
    
    app.use(express.static("./public"));
    app.get("/home", control.Allbooks);
    app.get("/books/:number", control.SingleBooks);
    
    app.listen(3000);
    console.log(`The port where the server listens http://localhost:${port}/home`);


