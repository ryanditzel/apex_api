const db = require('../db')
const { Legend, Ability } = require('..models')

const findAllLegends = async () => {
    const legends = await Legend.find()
    console.log( 'Legends: ', legends)
}

const findAllAbilities = async () => {
    const abilities = await Ability.find()
    console.log( 'Abilities: ', abilities)
}

const run = async () => {
    try {

    } catch (error) {
        console.log(error)
    } finally {
        await db.close()
    }
}