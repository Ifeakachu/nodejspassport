const express = require('express');
const router = express.Router();
const User = require('../models/users')
router.get("/login", (req, res) => res.render('login'))

router.get('/register', (req, res) => res.render('register'))

module.exports = router