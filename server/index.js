const express = require('express')
const app = express()



// middlewares
app.use(express.json())


//port
let port = 5000;



// server
app.listen(port,()=>{
    console.log("listening on port 5000")
})