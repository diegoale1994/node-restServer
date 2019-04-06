const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
require('./config/config');
app.use(bodyParser.urlencoded({ extended: false }))


// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/usuario'));

mongoose.connect('mongodb://localhost:27017/cafe', { useNewUrlParser: true }, (err, res) => {
    if (err) throw err;
    console.log("Base de datos Online");
});

app.listen(process.env.PORT, () => {
    console.log("iniciado");
})