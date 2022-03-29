// const db = require('../db')
// const Legend = require('../models')
// const Ability = require('../models')

// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// const main = async () => {

// //ABILITIES CREATION:

// const ash = await Legend.find({ name: `Ash`})


// const abilities = [
//     {   legend: ash[0]._id,
//         tactical: `Arc Snare`,
//         passive: `Marked For Death`,
//         ultimate: `Phase Breach`
//     },
//     // {   legend: bangalore._id,
//     //     tactical: `Smoke Launcher`,
//     //     passive: `Double Time`,
//     //     ultimate: `Rolling Thunder.`
//     // },
//     // {   legend: bloodhound._id,
//     //     tactical: `Eye of the Allfather`,
//     //     passive: `Tracker`,
//     //     ultimate: `Beast of the Hunt`
//     // },
//     // {   legend: caustic._id,
//     //     tactical: `Nox Gas Trap`,
//     //     passive: `Nox Vision`,
//     //     ultimate: `Nox Gas Grenade`
//     // },
//     // {   legend: crypto._id,
//     //     tactical: `Surveillance Drone`,
//     //     passive: `Neurolink`,
//     //     ultimate: `Drone EMP`
//     // },
//     // {   legend: fuse._id,
//     //     tactical: `Knuckle Cluster`,
//     //     passive: `Grenadier`,
//     //     ultimate: `The Motherlode`
//     // },
//     // {   legend: gibraltar._id,
//     //     tactical: `Dome of Protection`,
//     //     passive: `Gun Shield`,
//     //     ultimate: `Defensive Bombardment`
//     // },
//     // {   legend: horizon._id,
//     //     tactical: `Gravity Lift`,
//     //     passive: `Spacewalk`,
//     //     ultimate: `Black Hole`
//     // },
//     // {   legend: lifeline._id,
//     //     tactical: `D.O.C. Heal Drone`,
//     //     passive: `Combat Medic`,
//     //     ultimate: `Care Package`
//     // },
//     // {   legend: loba._id,
//     //     tactical: `Burglar’s Best Friend`,
//     //     passive: `Eye for Quality`,
//     //     ultimate: `Black Market Boutique`
//     // },
//     // {   legend: mad_maggie._id,
//     //     tactical: `Riot Drill`,
//     //     passive: `Warlord's Ire`,
//     //     ultimate: `Wrecking Ball`
//     // },
//     // {   legend: mirage._id,
//     //     tactical: `Psyche Out`,
//     //     passive: `Now You See Me . . .`,
//     //     ultimate: `	Life of the Party`
//     // },
//     // {   legend: octane._id,
//     //     tactical: `Stim`,
//     //     passive: `Swift Mend`,
//     //     ultimate: `Launch Pad`
//     // },
//     // {   legend: pathfinder._id,
//     //     tactical: `Grappling Hook`,
//     //     passive: `Insider Knowledge`,
//     //     ultimate: `Zipline Gun`
//     // },
//     // {   legend: rampart._id,
//     //     tactical: `Amped Cover`,
//     //     passive: `Modded Loader`,
//     //     ultimate: `Emplaced Minigun “Sheila”`
//     // },
//     // {   legend: revenant._id,
//     //     tactical: `Silence`,
//     //     passive: `Stalker`,
//     //     ultimate: `Death Totem`
//     // },
//     // {   legend: seer._id,
//     //     tactical: `Focus of Attention`,
//     //     passive: `Heart Seeker`,
//     //     ultimate: `Exhibit`
//     // },
//     // {   legend: valkyrie._id,
//     //     tactical: `Missile Swarm`,
//     //     passive: `VTOL Jets`,
//     //     ultimate: `Skyward Dive`
//     // },
//     // {   legend: wattson._id,
//     //     tactical: `Perimeter Security`,
//     //     passive: `Spark of Genius`,
//     //     ultimate: `Interception Pylon`
//     // },
//     // {   legend: wraith._id,
//     //     tactical: `Into the Void`,
//     //     passive: `Voices from the Void`,
//     //     ultimate: `Dimensional Rift`
//     // }
// ]

// await Ability.insertMany(abilities)
//     console.log('Abilities Created')
// }

// const run = async () => {
//     await main()
//     db.close()
// }

// run()