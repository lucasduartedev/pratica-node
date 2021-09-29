var app = require('./config/server')

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    res.send('POST Request')
})

app.listen(3000, () => {
    console.log(`Servidor rodando na porta 3000`)
})
