const express = require ("express");
const app = express();
const port = 4000;
const hostname = 'localhost'
app.get('/',(req,res)=>{
   res.send('this is home page')
})

app.listen(port,()=>{
    console.log(`thisserver is running on ${hostname}:${port}`)
})