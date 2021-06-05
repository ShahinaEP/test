const express = require('express')
const mongoose = require('mongoose')
const firstRouter = require('./api/routes/firstroutes')
require('dotenv').config()
const app = express();

app.use(express.json())

app.use('/api/first', firstRouter)

app.get('/',(req, res) =>{
    res.send('<h3> Hello my small project</h3>');
})

//App port
const port = process.env.PORT||3454;
app.listen(port,()=>{
    console.log(`Small project is running on ${port} port`);
})
