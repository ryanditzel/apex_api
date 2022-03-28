const { model } = require('mongoose')
const RideSchema = require('./ability')
const ParkSchema = require('./legend')

const Ability = model('ability', RideSchema)
const Legend = model('legend', ParkSchema)

module.exports = {
    Ability,
    Legend
}