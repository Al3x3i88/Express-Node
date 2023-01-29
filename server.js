const express = require('express');
const morgan = require('morgan');
const path = require('path')

// const PORT = process.env.PORT || 3000;

const app = express();

const HomeRoutes = require('./src/routes/home')
const UserRoutes = require('./src/routes/users')

//setting
app.set('case sentitive routing', true)
app.set('appName', 'Express Course')
app.set('port', 3000)

//middlewares
app.use(morgan('dev'))
app.use(express.json())

app.use(HomeRoutes)
app.use(UserRoutes)

//Routes
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use((req, res)=>{
    res.status(404).send('No se encontro su pagina')
})

// app.listen(PORT, ()=>{
//      console.log(`Server on port ${PORT}`);
// })

app.listen(app.get('port'))
console.log(`Server ${app.get('appName')} on port ${app.get('port')}`);