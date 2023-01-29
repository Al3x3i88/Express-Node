const express = require('express')

const router = express.Router()

router.all('/about', (req, res)=> {
    res.send('about page')
})

router.all('/dashboard', (req, res)=> {
    res.send('dashboard page')
})

module.exports = router