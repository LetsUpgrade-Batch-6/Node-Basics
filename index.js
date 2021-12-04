
  const express = require ("express")
  const app = express()
  const port = 3000

// get apis
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/login/', function (req, res) {
  res.send('Welcome to login page')
})
app.get('/admin/', function (req, res) {
  res.send('Welcome to admin page')
})
// post apis
app.post('/', function (req, res) {
  res.send('Hello World post')
})
app.post('/login/', function (req, res) {
  res.send('Welcome to login page post')
})
app.post('/admin/', function (req, res) {
  res.send('Welcome to admin page post')
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