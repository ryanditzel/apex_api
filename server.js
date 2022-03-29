const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001
const db = require('./db')

const { Legend, Ability } = require('.models')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
    res.send('This is root!')
})

//code here
app.get('/api/legends', async (req, res) => {
    const allLegends = await Legend.find()
    console.log(`All legends should be here!`)
    res.json(allLegends);
})
app.get('/api/abilities', async (req, res) => {
    const allAbilities = await Ability.find()
    console.log(`All abilites should be present!`)
    res.json(allAbilities);
})

app.get('/api/legends/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) throw Error ("Not a valid MongoDB ObjectID!!!!!!!");

        const thisLegend = await Legend.findById(id);
        
        if (!thisLegend) throw Error ("OH NO! That Legend was not found.")

        console.log(`specific legend should arrive!`)
        res.json(thisLegend);
    } catch (e) {
        console.log(e)
        res.send(`There was AN ERROR!!!  ${e.message}`);
    }
})

app.get('/api/abilities/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) throw Error ("Not a valid MongoDB ObjectID!!!!!!!");

        const thisAbility = await Ride.findById(id);
        
        if (!thisAbility) throw Error ("OH NO! That Ability was not found.")

        console.log(`specific Ability should arrive!`)
        res.json(thisAbility);
    } catch (e) {
        console.log(e)
        res.send(`There was AN ERROR!!!  ${e.message}`);
    }
})

app.post('/api/legends/add-new', async (req, res) => {
    try {
        const legend = await new Legend(req.body);
        await legend.save();
        return res.status(201).json({
          legend,
        });
      } catch (error) {
          return res.status(500).json({ error: error.message })
      }
})

app.post('/api/abilities/add-new', async (req, res) => {
    try {
        const ability = await new Ability(req.body);
        await ability.save();
        return res.status(201).json({
          ability,
        });
      } catch (error) {
          return res.status(500).json({ error: error.message })
      }
})

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})