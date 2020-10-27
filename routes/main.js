const express = require('express');

const routerMain = express.Router();

router.get('/home', (req, res) => {
    res.json({
        location: "home"
    })
});

module.exports = routerMain;
