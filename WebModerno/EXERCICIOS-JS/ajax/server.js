const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/teste', (req, res) => res.send('OK'))

const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './upload') //Define uma pasta
  },
  filename: function (req, file, callback) {
    callback(null, `${date.now()}_${file.originalname}`) //Define o nome do arquivo
  }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
  upload(req, res, err => {
    if (err) {
      return res.end('Ocorreu um erro.')
    }

    res.end('Recebido com sucesso.')
  })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
  //req.body
  //req.query
  //req.params
  
  const par = parseInt(req.query.numero) % 2 === 0 //Formula simples para saber se é par ou impar
  res.send({
      resultado: par ? 'par' : 'impar'
  })
})

app.listen(5500, () => console.log('Executando'))