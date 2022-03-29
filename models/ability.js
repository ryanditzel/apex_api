const { ObjectId } = require('bson')
const { Schema } = require('mongoose')

const Ability = new Schema (
    {
        legend_id: { type: ObjectId, required: true },
        tactical: { type: String, required: true },
        passive: { type: String, required: true },
        ultimate: { type: String, required: true },
    }, 
    {timestamps: true}
)

module.exports = Ability