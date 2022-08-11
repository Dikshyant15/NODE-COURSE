const express= require('express')
const app = express()
const {products} = require('./data')

app.get('/',(req,res)=>{
  res.send('<h2>Home Page</h2><a href="/api/products">products</a>')
})
app.get('/api/products',(req,res)=>{
  const newProducts=products.map((product)=>{
    const{id,name,image} = product
    return{id,name,image}
  })
  res.json(newProducts)
})
  
app.get('/api/products/:productID',(req,res)=>{
  /*console.log(req)
  console.log(req.params)*/
  const {productID} = req.params//gives string output 
  const singleProduct = products.find((product)=> product.id === Number(productID) )
if(!singleProduct ){
  return res.status(404).send('product doesnt exists')
}
  return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
  console.log(req.params)
  res.send('hello World')
})
app.listen(5000,()=>{console.log('Server is listening on 5000')})