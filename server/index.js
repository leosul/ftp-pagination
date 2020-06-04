const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const ftpRouter = require('./routers/ftpRouter')

const app = express()
app.use(bodyParser.json())

app.set('port', process.env.PORT || 3001)

const router = new express.Router()

console.log(__dirname)

router.use('/', ftpRouter)

app.use('/api', cors(), router)
app.use('/api/*', cors(), router)

const buildPath = path.join(__dirname, '..', 'build')
app.use(express.static(buildPath))

app.get('/*', function(req, res) {
    res.sendFile(path.join(buildPath, 'index.html'))
})

app.listen(app.get('port'), () => {
    console.log('listening on port: ', app.get('port'))
})

module.exports = app