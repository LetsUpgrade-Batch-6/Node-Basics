
  const express = require ("express")
  const app = express()
  const port = 3000

app.get('/', function (req, res) {
  res.send('Hello World, Hey Youtube')
})

app.listen(port, ()=>{console.log("My project is running ...")})

// function displayMessage(){
//   console.log("My project is running ...")
// }






// const express = require('express')
// const app = express()
 
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
 
// app.listen(3000)