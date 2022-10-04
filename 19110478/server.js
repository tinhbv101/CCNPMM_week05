const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const PORT = 5000
const path = require('path')

const postRouters = require('./routes/routes.index')
const commentRouters = require('./routes/routes.comment')

app.engine('hbs', exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.json())

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
})

app.use('/', postRouters)
app.use('/comment', commentRouters)

app.listen(PORT)