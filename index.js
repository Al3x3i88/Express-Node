const express = require('express');

const PORT = process.env.PORT || 3000;

var app = express();

// app.use('/', express.static('static'))
app.get('/', (req, res)=>{
    // res.sendFile('./static/index.html', {
    //     root: __dirname
    // })
    res.send('Hello World')
})

app.get('/about', (req, res)=>{
   res.send('Acerca de...')
})

app.get('/clima', (req, res)=>{
    res.send('El clima esta hermoso')
})

app.use((req, res)=>{
    res.status(404).send('No se encontro tu pagina')
})
app.listen(PORT, ()=>{

    console.log(`Server on port ${PORT}`);
})