const mongoose = require('mongoose');
// mongoose.connect('mongodb://0.0.0.0/polling_system');
mongoose.connect('mongodb+srv://nandishmohanty:Mohanty1818@cluster0.vugqe6n.mongodb.net/?retryWrites=true&w=majority');


const db = mongoose.connection;
// If error print error message
db.on('error',console.error.bind(console, 'error in connectiong to database'));

// if success the print the message
db.once('open', ()=> {
    console.log("Successfully connected to database");
})

module.exports = db;