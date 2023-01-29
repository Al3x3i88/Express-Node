const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/products', (req, res)=>{
    res.send('Lista de productos')
})

app.post('/products', (req, res)=>{
    res.send('Creando Productos')
})

app.put('/products', (req, res)=>{
    res.send('Actualizando productos')
})

app.delete('/products', (req, res)=>{
    res.send('Eliminando un producto')
})

app.patch('/products', (req, res)=>{
    res.send('Actualizando una parte de productos')
})

app.use((req, res)=>{
    res.status(404).send('No se encontro tu pagina')
})
app.listen(PORT, ()=>{

    console.log(`Server on port ${PORT}`);
})