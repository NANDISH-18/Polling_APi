const express = require('express');

const app = express();
const Port = process.env.PORT || 8000;
const db= require('./config/mongoose');

// const bodyParser = require('body-parser');
// app.use(bodyParser,bodyParser.urlencoded({extended:true}));
app.use(express.urlencoded());

// Routes
app.use('/',require('./routes/index'));



app.listen(Port, (err) => {
    if(err){
        console.log(err);
    }
    console.log(`server is running on port ${Port}`);
})