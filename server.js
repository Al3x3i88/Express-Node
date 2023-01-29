const express = require('express');
const morgan = require('morgan');

const PORT = process.env.PORT || 3000;

const app = express();
const products = [];

app.use(morgan('dev'))
app.use(express.json())

app.get('/products',(req, res)=>{
    res.json(products)
})

app.post('/products',(req, res)=>{
    const newProduct = {...req.body, id: products.length + 1}
    products.push(newProduct)
    res.send(newProduct)
})

app.put('/products',(req, res)=>{
    res.send('Actualizando productos')
})

app.delete('/products',(req, res)=>{
    res.send('Eliminando productos')
})

app.get('/products/:id',(req, res)=>{
    console.log(req.params.id);
    const productFound = products.find((product)=>{
        return product.id === parseInt(req.params.id)
    })
    if (!productFound) {
        return res.status(404).json({
            message: "Product Not Found"
        })
    }
    console.log(productFound );
    res.json(productFound)
})

app.use((req, res)=>{
    res.status(404).send('No se encontro tu pagina')
})

app.listen(PORT, ()=>{
     console.log(`Server on port ${PORT}`);
})