const router = require('express').Router()
const { isEmail } = require('../../utils/helpers')
const Message = require('../../database/models/message')
const { success, failure, serverError } = require('../../utils/responses')

/**
 * @api {get} /api/messages/list/:page GET
 * @apiGroup GET ARRAY OF MESSAGES
 * @apiDescription Return an Array of Message objects
 * @apiVersion 1.0.0
 * @apiName Test task
 * @apiPermission public
 * @apiParam {int} page                Page of message (>= 0)
 * @apiError {String} message          Input error message.
 * @apiError {Boolean} Success         False.
 * @apiSuccess {Boolean} success       True.
 * @apiSuccess {String} message        OK.
 * @apiSuccess {String} data           Array of Message objects.
 * @apiUse ServerError
 */
router.get('/list/:page', async (req,res) => {
    try {
        const page = req.params.page ? parseInt(req.params.page, 10) : 0
        if(page < 0) return res.status(400).json(failure('Invalid page'))
        const itemsOnPage = process.env.ITEMS ? parseInt(process.env.ITEMS, 10) : 10
        const messages = await Message
            .find()
            .skip(page * itemsOnPage)
            .limit(itemsOnPage)
        if(!messages) return res.status(200).json(success('No messages'))
        return res.status(200).json(success('OK', messages))
    }
    catch (err) {
        console.error('GET /api/messages/list Error : ', err)
        return res.status(500).json(serverError())
    }
})

/**
 * @api {get} /api/messages/single/:id GET
 * @apiGroup GET MESSAGE
 * @apiDescription Return Message object by Id
 * @apiVersion 1.0.0
 * @apiName Test task
 * @apiPermission public
 * @apiParam {int} id                  Message Id.
 * @apiError {String} message          Input error message.
 * @apiError {Boolean} Success         False.
 * @apiSuccess {Boolean} success       True.
 * @apiSuccess {String} message        OK.
 * @apiSuccess {String} data           Message object.
 * @apiUse ServerError
 */
router.get('/single/:id', async (req, res) => {
    try {
        const id = req.params.id
        if(!id) return res.status(400).json(failure('Id is required'))
        const msg = await Message.findById(id)
        if(!msg) return res.status(200).json(failure('Invalid id'))
        return res.status(200).json(success('OK', msg))
    }
    catch (err) {
        console.error('GET /api/messages/single Error : ', err)
        return res.status(500).json(serverError())
    }
})

/**
 * @api {post} /api/messages/ POST
 * @apiGroup CREATE MESSAGE
 * @apiDescription Create new message
 * @apiVersion 1.0.0
 * @apiName Test task
 * @apiPermission public
 * @apiParam {String} email            Author email.
 * @apiParam {String} text             Message text.
 * @apiError {String} message          Input error message.
 * @apiError {Boolean} Success         False.
 * @apiSuccess {Boolean} success       True.
 * @apiSuccess {String} message        Created.
 * @apiSuccess {String} data           Message id.
 * @apiUse ServerError
 */
router.post('/', async (req, res) => {
    try {
        const { email, text } = req.body
        if(!email) return res.status(400).json(failure('Email field is required!'))
        if(!isEmail(email)) return res.status(400).json('Invalid email')
        if(!text) return res.status(400).json(failure('Text field is required!'))
        if (text.length < 0) return res.status(400).json(failure('Text length is too small'))
        if(text.length > 100) return res.status(400).json(failure('Text length is too big!'))
        const msg = await Message.create({
            author: email,
            text: text
        })
        return res.status(201).json(success('Created!',  msg._id ))
    }
    catch (err) {
        console.error('POST /api/messages/ Error : ', err)
        return res.status(500).json(serverError())
    }
})

module.exports = router
