const router = require('express').Router()

router.use('/api', require('./api'))

router.use('*', (req,res) => res.status(404).json({
    message: 'Not Found'
}))

module.exports = router
