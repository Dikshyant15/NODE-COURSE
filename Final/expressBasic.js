const express = require('express')//import 
const path= require('path')
const app = express()//invoke
app.use(express.static('./public')) //keep the static files here and middleware

/*app.get('/',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
})

adding the index file to te public folder 
which will then provide the paths for other files

ServerSideRendering:seting up the tempelates of css */

app.get('/about',(req,res)=>{
  res.status(200).send('About Page')
})

app.all('*',(req,res)=>{
  res.status(404).send('<h1>resource not found</h1>')
})
// app.get  reads data
// app.post insert data
// app.put update data
// app.delete delete data
// app.all covers all the req related verbs
// app.use middle ware 
// app.listen 

app.listen(5000,()=>{
  console.log('server listening on port 5000')
}) 