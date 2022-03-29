const { model } = require('mongoose')
const AbilitySchema = require('./ability')
const LegendSchema = require('./legend')

const Ability = model('ability', AbilitySchema)
const Legend = model('legend', LegendSchema)

module.exports = {
    Ability,
    Legend
}