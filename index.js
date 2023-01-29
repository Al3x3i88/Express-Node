const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.post('/user', (req, res)=>{
    console.log(req.body);
    res.send(' Nuevo usuario creado')
}) 

app.use((req, res)=>{
    res.status(404).send('No se encontro tu pagina')
})
app.listen(PORT, ()=>{

    console.log(`Server on port ${PORT}`);
})