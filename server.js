/**
 * Created by sandgup3 on 10/12/2017.
 */

const path = require('path');
const express = require('express');
const app = express();

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

// app.set('view-engine','');

app.set('views',path.join(__dirname, 'views'));

app.get('/', function (req,res) {
    // res.send('index.js');
});
app.get('*', function (req,res) {
    res.send('This is a 404. Can not find resource...Sorry.');
});

app.listen(process.env.PORT || 3000, function () {
    console.log('listening');
});



