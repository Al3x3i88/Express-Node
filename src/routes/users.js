const express = require('express')

const router = express.Router()

router.get('/username', (req, res)=>{
    res.send('Username route')
})

router.get('/profile', (req, res)=>{
    res.send('Profile Page')
})

module.exports = router