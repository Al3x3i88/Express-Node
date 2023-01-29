const express = require('express');
const morgan = require('morgan');

const PORT = process.env.PORT || 3000;

const app = express();
let products = [];

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

app.put('/products/:id',(req, res)=>{
    const newData = req.body;
    const productFound = products.find((product)=>{
        return product.id === parseInt(req.params.id)
    })
    if (!productFound) {
        return res.status(404).json({
            message: "Product Not Found",
        });
       
    }
    const newProducts = products.map(p=> p.id === parseInt(req.params.id) ? {...p, ...newData} : p)

    console.log(newProducts);

    res.json({
        message: 'Producto Actualizado Satisfactoriamente'
    }) 
})

app.delete('/products/:id',(req, res)=>{
    const productFound = products.filter((product)=>{
        return product.id !== parseInt(req.params.id)
    })
    if (!productFound) {
        return res.status(404).json({
            message: "Product Not Found"
        })
    }
    console.log(productFound );
    res.json(productFound)
})

app.get('/products/:id',(req, res)=>{
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