const { model, Schema }= require('mongoose')

const Message = model('Message',
    new Schema({
        author: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
    },
        {
        timestamps: true
        }
    )
)

module.exports = Message
