const express = require('express');

const PORT = process.env.PORT || 3000;

var app = express();

// app.use('/', express.static('static'))
app.get('/', (req, res)=>{
    res.sendFile('./static/index.html', {
        root: __dirname
    })
})

app.listen(PORT, ()=>{

    console.log(`Server on port ${PORT}`);
})