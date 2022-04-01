const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001
const db = require('./db')

const { Legend } = require('./models')
const { Ability } = require('./models')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.use(express.static(`${__dirname}/client/build`))

app.get('/', (req, res) => {
    res.send('This is pain')
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

app.delete('/api/legend/:legendId/abilities/:abilityId', async (req, res) => {
    try {
        const { params: { legendId, abilityId } } = req;
        console.log(abilityId)
        await Ability.findByIdAndDelete(abilityId)
        const currentAbilities = await Ability.find({legend_id:legendId})
        return res.status(200).json({abilities:currentAbilities});
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

app.post('/api/legend/:legendId/abilities/', async (req, res) => {
    try {
        const { params: { legendId }, body } = req;
        console.log('Data', legendId, body)
        const abilityData = {
            ...body, 
            legend_id:legendId
        }
        const ability = await new Ability(abilityData);
        await ability.save();
        return res.status(200).send('Success');
      } catch (error) {
          return res.status(500).json({ error: error.message })
      }
})

app.put('/api/legend/:legendId/abilities/:abilityId', async (req, res) => {
    try {
        const { legendId, abilityId } = req.params 
        const abilityData = req.body;
        await Ability.updateOne({_id: abilityId }, abilityData)
        return res.status(200).send('Success');
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
   })

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})