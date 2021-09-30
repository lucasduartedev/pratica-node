module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('index')
    })
    app.post('/', (req, res) => {
        res.send('POST Request')
    })
}