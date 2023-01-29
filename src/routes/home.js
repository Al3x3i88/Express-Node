const express = require('express')

const router = express.Router()

router.get('/', (req, res)=> {
    const title = 'Acerca de'
    res.render('index', {
        title: 'Index Page'})
})

router.get('/about', (req, res)=> {
    
    res.render('about')
})

router.get('/dashboard', (req, res)=> {
    res.render('dashboard')
})

module.exports = router