const express = require('express')

const router = express.Router()

router.all('/about', (req, res)=> {
    res.render('index')
})

router.all('/dashboard', (req, res)=> {
    res.send('dashboard page')
})

module.exports = router