const { Router } = require('express');

const router = Router();

// route
router.get('/auth/user', (req, res) => {
    const headers = req.headers;
    const bearToken = req.headers['authorization'];

    console.log(headers);
    console.log(bearToken);
    res.json(headers);
});

module.exports = router;
