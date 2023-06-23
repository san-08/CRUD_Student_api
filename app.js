const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/Studentdb'
const app = express()
 

mongoose.connect(url,{
    useNewUrlParser : true,
    useUnifiedTopology: true
})
const con = mongoose.connection

con.on('open', () => {
    console.log('conected..')
})

app.use(express.json())

//router
const studentRouter = require('./routers/students.js')
app.use('/students',studentRouter)

app.listen(300, () => {
    console.log('server started..')
})