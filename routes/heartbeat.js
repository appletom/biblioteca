const express = require('express');
const routerHeartbeat = express.Router();

router.get('/heartbeat', (req, res) => {
    res.json({
        is: "working"
    })
})

module.exports = routerHeartbeat