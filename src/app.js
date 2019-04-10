const { join } = require('path')
const { config } = require('dotenv')

config({
    path: join(__dirname, '..', '.env')
})

const db = require('./database')
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const { json, urlencoded } = require('body-parser')

const app = express()

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000

app.use(cors())
app.use(helmet())
app.use(json())
app.use(
    urlencoded({
        extended: true
    })
)

app.use('/', express.static(join(__dirname, '..', 'docs')))

app.use(require('./routes'))

app.listen(port, () => console.log('Listening on port : ', port))

process.once('SIGINT', async () => {
    await db.close()
    console.log('\nCtrl+C Server Stopped')
    process.exit(0)
})
