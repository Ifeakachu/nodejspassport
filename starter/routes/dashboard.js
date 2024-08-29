const express = require('express');
const router = express.Router();

router.get('/homepage', (req, res) => res.render("HomePage!!"))
router.get('/about', (req, res) => res.render("About"))

module.exports = router