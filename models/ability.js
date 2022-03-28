const { ObjectId } = require('bson')
const { Schema } = require('mongoose')

const Ability = new Schema (
    {
        legend_id: { type: ObjectId, required: true},
        name: { type: String, required: true},
        description: { type: String, required: true },
        type: { type: String, required: true },
    }, 
    {timestamps: true}
)

module.exports = Ability