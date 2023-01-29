const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

// app.use(express.text())
// app.use(express.json())
// app.use(express.urlencoded({extended: false}))

app.use((req, res, next)=>{
    console.log(`Route: ${req.url} Metodo: ${req.method}`);
    next()
})

app.get('/profile',(req, res)=>{
    res.send('profile page')
})

app.get('/hello/:username', (req, res)=>{
    console.log(req.params.username);
    console.log(typeof req.params.username);
    res.send(`Hello ${req.params.username}` )
}) 

app.get('/search',(req, res)=>{
    if(req.query.q === 'javascript books') {
        res.send('Lista de libros de JavaScript')
    } else {
        res.send('Pagina normal')
    }
})

app.get('/nombre/:nombre/age/:age', (req, res)=>{
    console.log(req.params);
    res.send(`El usuario ${req.params.nombre} tiene ${req.params.age} annos` )
}) 

// Middleware

app.use((req, res, next)=>{
    if (req.query.login === "alex@gmail.com") {
        next()        
    } else {
        res.send("No Autorizado")
    }
})

app.get('/dashboard',(req, res)=>{
    res.send('Dashboard page')
})

app.use((req, res)=>{
    res.status(404).send('No se encontro tu pagina')
})
app.listen(PORT, ()=>{
     console.log(`Server on port ${PORT}`);
})