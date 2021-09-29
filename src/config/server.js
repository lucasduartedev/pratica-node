
const express = require('express')
const app = express()

// Config path of views
app.set('views', __dirname + '../views');
// Config default view engine
app.set('view engine', 'ejs')

module.exports  = app
