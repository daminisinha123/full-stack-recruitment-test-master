const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const cors = require('cors');
// const data = require('../public/flights.json')
const app = express();
const port = 4000;
app.use(cors)

app.use(express.static(path.join(__dirname, 'public')));

app.get('/flightsearch', function (req, res) {
    // res.header('Content-Type', 'application/json')
    res.send(path.join(__dirname, 'public', 'flights.json'));
    console.log("got request");
    res.end();
});


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });


app.listen(port, () => console.log(`Example app listening on port ${port}!`))





