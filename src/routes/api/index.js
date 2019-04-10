const router = require('express').Router()
const { join } = require('path')

router.get('/', (req, res) => res.sendFile(join(__dirname, 'index.html')))

router.use('/messages', require('./messages'))

module.exports = router
