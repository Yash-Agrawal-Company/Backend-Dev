import http from 'http'
import express from 'express'
let port = 8080
let app = express()

app.use(express.json())
app.get("/",(req,res)=>{
    res.send(" homePage ")
})

app.post("/home",(req,res)=>{
    let {id,name} = req.body
    console.log(id,name);
    res.send(`${id} and  ${name}`)
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})