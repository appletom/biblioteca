const express = require('express');
const app = express();

//adds middleware to load html, css and js files
app.use("/", express.static(__dirname + "/public"));
app.use("/css", express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));


app.get('/heartbeat', (req, res) => {
    res.json({
        is: "working"
    })
});


app.listen(3001, () => {
    console.log(server is running);
})