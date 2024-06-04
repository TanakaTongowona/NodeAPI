require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/productRoute');
const errorMiddleware = require('./middleware/errorMiddleware')
const cors = require('cors')

const app = express()

const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL
const FRONTEND = process.env.FRONTEND

var corsOptions = {
    origin: FRONTEND,
    optionsSuccessStatus: 200 // some legacy browsers 
}


app.use(cors(corsOptions))
app.use(express.json())

//routes
app.use('/api/products', productRoute);

app.get('/' , (req, res)=>{
   res.send('Hello  API' )
})


app.get('/blog' , (req, res)=>{
    res.send('Hello Blogmy name is Tanaka')

})


app.use(errorMiddleware);

//connect to the Database
mongoose.connect(MONGO_URL) 
.then(() =>{
    console.log('connected to MongoDB')
    app.listen(PORT, ()=>{
        console.log('Node API app is running on port ${PORT}')
    });
            
}).catch((error ) => {
    console.log(error)
})