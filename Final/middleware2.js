const express= require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')


//req=> middleware => res
/*A middleware is basically a function that will the 
receive the Request and Response objects, just like 
your route Handlers do. As a third argument you have 
another function which you should call once your middleware 
code completed. This means you can wait for 
asynchronous database or network operations to 
finish before proceeding to the next step.


Middleware functions can perform the following tasks:

Execute any code.
Make changes to the request and the response objects.
End the request-response cycle.
Call the next middleware in the stack. */

app.use(morgan('tiny')) 

app.get('/', (req,res)=>{ //calling the middle ware
  res.send('home')
})

app.get('/about', (req,res)=>{
  res.send('about')
})

app.get('/api/products', (req,res)=>{
  res.send('products')
})
app.get('/api/items',(req,res)=>{
  console.log(req.user)
  res.send('items')
})
app.listen(5000,()=>{console.log('Server is listening on 5000')})