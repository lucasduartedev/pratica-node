
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Página principal')
})

app.post('/', (req, res) => {
    res.send('POST Request')
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
