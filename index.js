const express = require('express')
const app = express()

var bodyParser = require('body-parser')
var cors = require('cors')

var jsonParser = bodyParser.json()

var urlencodeParser = bodyParser.urlencoded({ extended: false })

const port = 3000

app.use(cors())
app.use(jsonParser)
app.use(urlencodeParser)

app.get('/', (req, res) => {
  res.json('Hello World!')
})

app.post('/login', (req, res) => {

  const username = 'Nizam'
  const password = '12345678'

  if(req.body.username != username && req.body.password != password){
    res.json({status:"Error", message:"Username and Password required!"})
  }

  if(req.body.username != username){
    res.json({status:"Error", message:"sorry username not found!"})
  }

  if(req.body.password != password){
    res.json({status:"Error", message: "wrong password!"})
  }
  
  res.json({
    status:"success"})
}
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})