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
    return res.status(404).send('prouct doesnt exists')
}
  return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
  console.log(req.params)
  res.send('hello World')
})

app.get('/api/v1/query', (req,res)=>{
  /*The query parameter is the variable whose value is passed in 
  the URL in the form of key-value pair at the end of the URL after
   a question mark (?).
   ?search: search for value 
   limit tells the amount of data to be searched
  For example, www.geeksforgeeks.org?name=abc where, ‘name’ is the 
  key of query parameter whose value is ‘abc’. */
  //console.log(req.query);
  const {search,limit} = req.query
  let sortedProducts = [...products]
  if(search){
    sortedProducts = sortedProducts.filter((product)=>{
      return product.name.startsWith(search)
    })
  }
  if(limit){
    sortedProducts = sortedProducts.slice(0,Number(limit))
  }
  if(sortedProducts.length<1){
    //res.status(200).send('no products matched your search conditions')
    return res.status(200).json({succes:true,data:[]})
  }
  res.status(200).json(sortedProducts)
})//always use return statement to minimize the header response errors in conditions
app.listen(5000,()=>{console.log('Server is listening on 5000')})