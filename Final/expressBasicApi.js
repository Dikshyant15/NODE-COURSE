const express= require('express')
const app = express()

const {products} = require('./data')
app.get('/',(req,res)=>{
  res.json(products)/*sends a respnse with the correct content type that is the 
  parameter converted to a JSON string using JSON.stringify(). */
})

app.listen(5000,()=>{console.log('Server is listening on 5000')})