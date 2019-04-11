const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
require('./config/config');
app.use(bodyParser.urlencoded({ extended: false }))


// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/index'));

mongoose.connect(process.env.URLDB, (err, res) => {
    if (err) throw err;
    console.log("Base de datos Online");
});

app.listen(process.env.PORT, () => {
    console.log("iniciado");
})