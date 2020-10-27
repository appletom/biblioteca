require("dotenv").config();

const express = require('express');
const app = express();

const routesMain = require("./routes/main");
app.use('/', routesMain);
const routesHeartbeat = require('./routes/heartbeat');
app.use('/', routesHearbeat);
const routesBooks = require('./routes/books');
app.use('/', routesBooks);


const bodyParser = require('body-parser');
app.use(bodyParser.json());

const session = require('express-session');

const fetch = require('node-fetch');

//adds middleware to load html, css and js files
app.use("/", express.static(__dirname + "/public"));
app.use("/css", express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));



app.listen(3001, () => {
    console.log(server is running);
})