const mongoose = require('mongoose');

// creating DB
mongoose.connect('mongodb://localhost:27017/Abhidaynmic', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection! succesful");
}).catch((error) => {
    console.log(error);
})