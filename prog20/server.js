const express = require('express')
const server = express()
const mongoose = require('mongoose')
server.use(express.static('public'))
mongoose.connect('här lägger du din connection-string')
const db = mongoose.connection
db.on('open', (err)=>{
    if(err)throw err
    console.log('connected to database')
})

// ni behöver skapa en mongoose schema för att det ska kunna spara

//

server.post('/register', (req, res)=>{
    const {name, email, password} = req.body
    const info = new User({
        name: name,
        email:email,
        password: password
    })
    info.save()

})
server.listen(process.env.PORT || 5000)
 