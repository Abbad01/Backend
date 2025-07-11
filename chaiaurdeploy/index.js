const express = require('express')
const app = express()
require('dotenv').config()
const port=4000;

console.log(process.env)

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login',(req, res)=>{
    res.send("You are  on login page");
})

app.get('/user',(req, res)=>{
    res.send("<h1>you are on user page</h1>");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 