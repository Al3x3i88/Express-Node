const express = require('express')
const axios = require('axios')
const router = express.Router()

router.get('/', (req, res)=> {
    const title = 'Acerca de'
    res.render('index', {
        title: 'Index Page'})
})

router.get('/about', (req, res)=> {
    
    res.render('about')
})

router.get('/posts', async(req, res)=> {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    res.render('posts', {
        posts: response.data
    })
})

router.get('/dashboard', (req, res)=> {
    res.render('dashboard')
})

module.exports = router