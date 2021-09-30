const app = require('./config/server')

const homeRoute = require('./routes/home')(app)

app.listen(3000, () => {
    console.log(`Servidor rodando na porta 3000`)
})
