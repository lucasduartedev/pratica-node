const mysql_conn = require("../config/mysql_conn")

module.exports = (app) => {

    const conn = mysql_conn()

    app.get('/', (req, res) => {
        res.render('index')
    })
    app.post('/', (req, res) => {
        res.send('POST Request')
    })

    // Tora para teste do banco de dados
    app.get('/test', (req, res) => {
        conn.query('SELECT * FROM table_test', (error, result) => {
            res.render('test', {dados: result})
        })
    })
}
