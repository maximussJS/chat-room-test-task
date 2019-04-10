const mongoose = require('mongoose')

const MONGO_URL = process.env.DATABASE_URL

mongoose.Promise = global.Promise
mongoose.set('useCreateIndex', true)

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true
})
    .then( () => console.log('Connected to MongoDB'))
    .catch( err => console.error('MongoDB Connection Error : ', err.toString()))

const db = mongoose.connection

db.on('error', err => console.error('MongoDB Error : ', err.toString()))
  .on('close', () => console.log('MongoDB closed'))
  .once('open', () => console.log('MongoDB Open'))

module.exports = db
