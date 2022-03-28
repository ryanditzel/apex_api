const { Schema } = require('mongoose')

const Legend = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        tag_line: { type: String, required: true },
        ability: { type: String, required: true },
    },
    {timestamps: true}
)

module.exports = Legend