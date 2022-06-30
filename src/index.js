const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const route = require("./routes/route")
app.use("/", route)

const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://Ritikesh21:Gyanav_123@cluster0.fg4arro.mongodb.net/open-to-intern",{
    useNewUrlParser : true
})
.then(() => {console.log("MongoDb is Connected")})
.catch(err => console.log(err))

app.listen(port, ()=>{
    console.log("Connected to Port " + port.toString())
})