const express = require('express')
const app = express()
const {add,getAll,deleteone,update} =require("./handlers/handlers.js")
const path=require("path")
const cors=require("cors")
app.use(cors())
app.use(express.static(path.join(__dirname,"../client/public")))

// middlewares
app.use(express.json())


//port
let port = 5000;


app.get("/cohorts",getAll)
app.post("/cohorts",add)
app.delete("/cohorts/:id",deleteone)
app.put("/cohorts/:id",update)
// server
app.listen(port,()=>{
    console.log("listening on port 5000")
})