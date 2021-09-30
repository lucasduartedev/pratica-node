module.exports = (app) => {

    const mysql = require('mysql2')

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'node'
    })

    app.get('/', (req, res) => {
        res.render('index')
    })
    app.post('/', (req, res) => {
        res.send('POST Request')
    })
}