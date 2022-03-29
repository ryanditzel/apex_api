const db = require('../db')
const { Legend, Ability } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const ash = await new Legend ({
        name: 'Ash',
        description: `Born in the unforgiving Frontier, Dr. Ashleigh Reid - still very much a human - learned early that the only person who was going to look out for her was herself. One day, she was hired by a mercenary group for a delicate job: steal an experimental fuel source being researched in the Outlands city of Olympus. It was the perfect job for Reid, who infiltrated and psychologically manipulated the researchers for years. When the lab self-destructed, she died And didn’t. Her brain was put in a simulacrum shell, but in the process, she lost years of memories, and the trauma of her “death” caused her personality to fracture. Ash is the embodiment of the cold, perfectionistic, power-hungry side of Dr. Reid. But behind that confident facade, something sinister is simmering. After an encounter with Horizon that overrides Ash’s simulacrum programming, the framework that kept the vulnerable--yet intelligent--Leigh personality dormant has begun to crack. Ash joins the Games to prove she has transcended all humanity. Leigh’s determined to prove her wrong.`,
        tag_line: 'Incisive Instigator',
        img: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/ash/apex-grid-tile-legends-ash.png.adapt.crop16x9.1023w.png',
    })
    ash.save();

    const bangalore = await new Legend({
        name: "Bangalore",
        description: "Born into a military family where she, her parents, and her four older brothers all served with the IMC, Bangalore has been an exceptional soldier her whole life. Dedicated to the IMC cause, she was top of her class at the IMC Military Academy and the only cadet who could take apart a Peacekeeper, equip it with a Precision Choke hop-up, and put it back together in under twenty seconds – blindfolded. In the months following the Battle at Gridiron, the IMS Hestia, with Anita and brother Jackson on board, was attacked by unknown assailants. A bomb on the outer hull blew out a chunk of the ship… but not before Jackson shielded her, sacrificing his own life to save hers. Anita watched helplessly, as Jackson was sucked out into the vacuum of space. After crashing on a Syndicate planet, Anita looked for both work, and the brother she refused to believe had died, so they could begin the decades-long trip back home. Now, she fights to raise money in the Apex Games, in the hopes of finding a pilot willing to take the epic trip back home to reunite with what remains of her family.",
        tag_line: "Professional Soldier",
        img: "https://image.pngaaa.com/376/1988376-middle.png"
    })
    bangalore.save();

    const bloodhound = await new Legend ({
        name: "Bloodhound",
        description: "Bloodhound is known across the Outlands as one of the greatest game hunters the Frontier has ever seen. The child of two engineers stationed at the New Dawn industrial plant on Talos, Bloodhound was taken in by their uncle Artur after a meltdown destroyed the facility and killed both their parents. Artur taught them the Old Ways, a belief system that focuses on the glory of nature and rejects modern technology. Yet Bloodhound was constantly drawn to technological marvels, and ultimately used both new and old methods to take down a Goliath that preyed on the people of their village, forever changing their life’s path. Bloodhound’s unparalleled tracking skills are a boon to any team they join, helping them root out hidden opponents and track enemy movements. Calling on Earth’s Old Norse Gods to guide them, Bloodhound believes that destiny is a path that has already been laid out, eventually carrying all to their death. But with that knowledge comes strength, because until that day comes, Bloodhound knows they can’t be stopped.",
        tag_line: "Technological Tracker",
        img: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-bloodhound.png.adapt.crop16x9.1023w.png"
    })
    bloodhound.save();

    const caustic = await new Legend({
        name: "Caustic",
        description: "Alexander Nox used to be one of the brightest scientists in the employ of Humbert Labs, the Frontier’s leading manufacturer of pesticide gases. Nox worked day and night developing new formulas for the glut of pesticides needed to protect the crops that sustained the Outlands. But he soon realized that progress was being hampered by his testing methods. He needed to test on more than just inert tissue: he needed living subjects. As he toiled in secret, Nox began to see the beauty in his creations and their ability to destroy anything they touched. But the head of Humbert Labs soon discovered his gruesome experiments, and their confrontation ended with the lab in flames. Now, competing under the name Caustic, he puts his gaseous creations to work in the Apex Games and observes their effects with great interest.",
        tag_line: "Toxic Trapper",
        img: "https://www.pngfind.com/pngs/m/253-2534460_we-are-here-to-give-best-tips-for.png"
    })
    caustic.save();

    const crypto = await new Legend ({
        name: "Crypto",
        description: "Crypto specializes in secrets. A brilliant hacker and encryption expert, he uses aerial drones to spy on his opponents in the Apex Arena without being seen. He also has a secret of his own: his name is Tae Joon Park, and he joined the Apex Games to find the people who framed him for murder. An orphan abandoned at a young age, Tae Joon escaped a life of squalor by becoming a computer engineer for the Mercenary Syndicate, along with his foster sister, Mila Alexander. One day, Tae Joon and Mila stumbled upon an algorithm that could predict the result of any Apex Games match, hidden away in the Games’ own computer systems. That caught the attention of the wrong people - the next day, Mila disappeared, and Tae Joon was forced to into hiding after he was framed for her murder. He’s now joined the Games to clear his name - because sometimes the spotlight is the best place to hide.",
        tag_line: "Surveillance Expert",
        img: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-crypto.png.adapt.crop16x9.1023w.png"
    })
    crypto.save();

    const fuse = await new Legend({
        name: "Fuse",
        description: "Ladies’ man, man’s man, and all-round manly man, Fuse is a one man wrecking crew... and he knows it. Fuse exudes joy; he’s a laid-back explosives enthusiast who’s damn near covered in things that go BOOM. Fuse doesn’t lack confidence, but he often lacks a plan. He’s a blow-up-first ask-questions-later kinda guy, who’s always looking for a good scrap. Fuse grew up on Salvo--a brutal planet ruled by a rotating collection of misfit warlords bent on mayhem, murder, and good times. For most of his life, he worked as a mercenary alongside his childhood friend, Maggie. But while she aspired to become one of Salvo’s most powerful warlords, Fuse felt the pull of the arena. Fuse found his calling late in life fighting in Salvo’s bloodsport: the Bonecage. He proved to be the best, most charismatic and beloved gladiator on the planet. But he itched to join the grandest stage of them all: the Apex Games. While Salvo remained a part of Independent Space that dream was impossible, but once they joined the Syndicate, his chance arrived. It came at a price, however -- Maggie wouldn’t let him go without a fight.",
        tag_line: "Bombastic Explosives Expert",
        img: "https://liquipedia.net/commons/images/thumb/b/b1/Fuse_Banner.png/600px-Fuse_Banner.png"
    })
    fuse.save();

    const gibraltar = await new Legend ({
        name: "Gibraltar",
        description: "Gibraltar is a gentle giant with a wild side. The son of two SARAS (Search and Rescue Association of Solace) volunteers, he has always been skilled at getting others out of dangerous situations that are common in the Outlands. However, he only began to understand the value of protecting others when he and his boyfriend stole his father’s motorcycle, took it on a joyride, and got trapped by a deadly mudslide. His parents saved them, and his father lost an arm in the process. Gibraltar has never forgotten that sacrifice and has devoted his life to helping those in need. The Apex Games didn’t change that, but they changed what it meant. Many of Gibraltar’s friends and colleagues have competed in the Games for extra money, fame, and glory over the years, and some never came home. Gibraltar joined to keep them safe and, for the first time, his skills as a rescuer and his rebellious nature worked together. He’s now become an icon in the Apex Games, putting himself in the line of fire to protect his squad and send his opponents running for cover.",
        tag_line: "Shielded Fortress",
        img: "https://static.wikia.nocookie.net/titanfall/images/9/9a/AL_Gibraltar_Portrait.png/revision/latest?cb=20200515150512"
    })
    gibraltar.save();

    const horizon = await new Legend({
        name: "Horizon",
        description: "Almost a century ago, the Outlands were dangling on the edge of a cataclysmic energy crisis. Dr. Mary Somers, a charmingly eccentric astrophysicist, was hired to find a solution. Mary moved her family to the scientific research station on Olympus and set to work. With the help of her apprentice, Dr. Reid, Mary discovered Branthium - an element she was convinced could be the key to limitless energy. But Branthium can be found only on the accretion disk of a black hole, so Mary and Dr. Reid departed on a dangerous mission to prove her theory right. Mary promised her son Newton she’d return safe and sound. But Dr. Reid betrayed her, stealing the Branthium and sending her shuttle into the black hole’s orbit. Using her wits, Mary modified her robotic vacuum companion N.E.W.T. to escape. But time moves differently on the outskirts of a black hole, and she was 87 years too late. Now Mary is determined to fund her research to find a way to go back in time and be with her son. She joins the Apex Games as Horizon, master of gravity, just in time for the next season to debut on Olympus--where her old life once was and where she had promised to return.",
        tag_line: "Gravitational Manipulator",
        img: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/10/horizon/apex-grid-tile-legends-horizon.png.adapt.crop16x9.1023w.png"
    })
    horizon.save();

    const lifeline = await new Legend({
        name: "Lifeline",
        description: "Ajay Che, aka Lifeline, isn’t someone you would expect to find in the Apex Games. The child of wealthy war profiteers, she left home when she learned of the damage her family had caused and enlisted in the Frontier Corps, a humanitarian organization that aids Frontier communities in need. She’s since devoted her life to helping others and joined the Apex Games to fund the Frontier Corps with her winnings. Since no one in the Games is innocent — they all know what they signed up for — and every one of her victories means help for those in need, Lifeline has no problem engaging in the popular bloodsport. Or so she tells herself. She may seem sarcastic and callous, but deep down she wants to help people and make the world a better place. If that means taking a few people down in the process, so be it.",
        tag_line: "Combat Medic",
        img: "https://static.wikia.nocookie.net/titanfall/images/2/22/AL_Lifeline_Portrait.png/revision/latest?cb=20200515151002"
    })
    lifeline.save();

    const loba = await new Legend({
        name: "Loba",
        description: "When Loba was nine, she looked on as simulacrum hitman Revenant killed her family. Left with nothing, Loba survived by picking pockets. As her skills improved, Loba used every tool at her disposal to lift herself from the gutter. Everything changed when she broke into a supposedly impenetrable facility and got her hands on the Jump Drive tech stored inside. With her new teleportation bracelet, the most secure and unattainable items were within her reach. So was her dream of living the high life. Rumors spread across the Outlands: if you wanted something valuable -and well guarded- Loba’s who you go to. She was almost able to put her past behind her. But when Revenant joined the Games, her past catapulted into her future. Desperate to find a way to kill him, she sabotaged a facility full of Revenant bodies, bringing Skull Town and Thunderdome crashing down in the process. However, she learned it was just one of many such factories hidden across the Frontier. Now, she’s joined the Games to find a way to end him for good. It doesn’t hurt that the Arenas are brimming with treasures just waiting to be plucked. Revenge will come, if fortune favors her. In the meantime, some shiny things have caught her eye.",
        tag_line: "Translocating Thief",
        img: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/05/apex-grid-tile-legends-loba.png.adapt.crop16x9.1023w.png"
    })
    loba.save();

    const mad_maggie = await new Legend({
        name: "Mad Maggie",
        description: "Margaret Kōhere - the woman who would one day be known as Mad Maggie - grew up in one of the dustiest, dullest corners of Salvo without any family to speak of. She was fortunate, then, to meet a kindred chaotic spirit: an adventurous young boy named Walter Fitzroy. The two were inseparable, and in their teenage years, they became mercenaries. Eventually this duo grew into the Cracked Talon - a powerful mercenary operation. It was here she earned her nom de guerre: Mad Maggie. But when rival warlord Sandringham Kelly signed a treaty with the Syndicate, Maggie’s hopes for an independent Salvo were ruined, and Fuse abandoned her for the Games, leaving Maggie very mad indeed… By sabotaging Fuse’s entrance into the Apex games, Maggie planned to expose how weak the Syndicate was, in hopes it would spark rebellion on Salvo. Fuse would assemble a team to take down Maggie… only for the pair to have a heart to heart where they came to accept each other’s choices: Fuse will always follow the fun, and Maggie will always follow the cause. It seemed as though Maggie fell to her death after that exchange...But she was apprehended by the Syndicate, and sentenced to fight to the death in the Apex Games. So she will: just not hers.",
        tag_line: "Rebel Warlord",
        img: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/mad-maggie/apex-grid-tile-legends-maggie.png.adapt.crop16x9.1023w.png"
    })
    mad_maggie.save();

    const mirage = await new Legend({
        name: "Mirage",
        description: "Mirage is the kind of guy who likes to stand out. The youngest of four brothers, he perfected the art of fooling around to get attention. The one thing he took seriously was Holo-Pilot technology: introduced to the illusion-creating tech by his engineer mother, he poured over the mechanisms and learned all he could about them. Even when his brothers went MIA during the Frontier War, Mirage and his mother continued to develop holo devices, and the work brought them closer. While working as a bartender to make ends meet, Mirage heard amazing stories from his patrons about the Apex Games and the wealth and glory that came with victory. As good as both of those sounded, he knew he couldn’t risk leaving his mother childless – until she gave him a set of customized holo devices and told him to follow his dream. Mirage is now the life of the Apex Games, outwitting opponents and charming audiences across the Outlands.",
        tag_line: "Holographic Trickster",
        img: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-mirage.png.adapt.crop16x9.1023w.png"
    })
    mirage.save();

    const octane = await new Legend({
        name: "Octane",
        description: "One day, Octavio Silva was bored. In fact, he was bored most days. Son of the preoccupied CEO of Silva Pharmaceuticals and wanting for nothing in life, he entertained himself by performing death-defying stunts and posting holovids of them for his fans to gawk over. So, this day, he decided to set the course record for a nearby Gauntlet by launching himself across the finish line – using a grenade. As he lay in triage hours later, the doctors informed him that the damage done to his legs meant his daredevil days were over. That didn’t sit well with Octavio, who turned to an old friend for help: Ajay Che, who he guilted into forging an order to replace his legs with bionic ones. Suddenly able to repair his limbs at a moment’s notice, Octavio decided petty online stunts weren’t enough: the ultimate adrenaline rush, the Apex Games, was calling. Now, he’s going to become an Apex Champion doing the most incredible, death-defying moves anyone’s ever seen. Maybe in the arena, he won’t be so bored.",
        tag_line: "High-Speed Daredevil",
        img: "https://www.vhv.rs/dpng/d/582-5827654_octane-apex-legends-png-transparent-png.png"
    })
    octane.save();

    const pathfinder = await new Legend({
        name: "Pathfinder",
        description: "Pathfinder is the picture of optimism, despite his circumstances. A MRVN (Mobile Robotic Versatile eNtity) modified to specialize in location scouting and surveying, he booted up decades ago in an abandoned warehouse with no idea who created him or why. With only his MRVN designation to hint at his identity, Pathfinder eventually set off in search of his creator. Pathfinder has learned much in his travels since then (like how to make a mean Eastern Leviathan Stew) but hasn’t come any closer to finding his creator. Still, he’s never given up hope, and has joined the Apex Games to gain a following--and hopefully draw the attention of his maker. In the meantime, he remains enthusiastic and helpful, always ready to make new friends (then shoot them).",
        tag_line: "Forward Scout",
        img: "https://www.pikpng.com/pngl/m/253-2534529_we-are-here-to-give-best-tips-for.png"
    })
    pathfinder.save();

    const rampart = await new Legend({
        name: "Rampart",
        description: "Rampart is a blue-collar, private business owner who just needs a big gun and a backpack full of scrap metal to get by in the dangerous, wild west world of the Outlands. Before opening her popular modding shop on Gaea, Ramya Parekh (Rampart for short) made a name for herself in the underground gauntlet circuit. Parekh climbed to the top showcasing pure skill using her custom-modded gear. She began taking jobs from smugglers, Syndicate members, and everyone in between. Some say it ain’t great unless it’s got “Rampart” written on it. Parekh never shied away from letting people know how great she was, or better yet, how bad they were. Maybe that’s what led a group of assailants to ambush her at her shop one night. Her business burned down and she was left with nothing -- except an Apex Card. For Parekh, the Apex card is more than just an invitation to compete - it's a sign that she may have lost her shop, but she didn't lose what built it. Like her motto says, she's the kind of person who can always turn crap into gold.",
        tag_line: "Amped Modder",
        img: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/08/rampart/apex-grid-tile-legends-rampart.png.adapt.crop16x9.1023w.png"
    })
    rampart.save();

    const revenant = await new Legend({
        name: "Revenant",
        description: "Revenant used to be human. He used to be the greatest hitman the Mercenary Syndicate ever had. He used to look in the mirror and see his human face looking back. But time changes everything, and when his programming finally failed, he saw what he had become at the hands of the Mercenary Syndicate and Hammond Robotics: a walking nightmare of steel and vestigial flesh. His masters resurrected him as a simulacrum, snatching him from death’s embrace again and again and programming him to forget. He swore he would hunt down every last person who did this to him, but more than two centuries have passed, and they're all gone… or so he thought. The return of Hammond Robotics to the Outlands has renewed his thirst for vengeance, and he won’t stop until anybody connected to Hammond is dead. Of course, he doesn’t mind eviscerating a few of the Legends along the way. He used to need a reason to kill… but he’s not that man anymore.",
        tag_line: "Synthetic Nightmare",
        img: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/02/apex-legend-revenant-grid-tile.png.adapt.crop16x9.1023w.png"
    })
    revenant.save();

    const seer = await new Legend({
        name: "Seer",
        description: "Before his birth, it was foretold that Seer would bring pain and suffering to the world--and the night he was born, a meteor barreled across the sky and struck his world’s moon. It was considered a bad omen, and when the pale blue eyes of Obi Edolasim opened, his community saw a cursed child. His parents did not; they loved him unconditionally because they saw the true empathic, creative soul of their son. They even supported him when he was drawn to the theatricality of the Arenas, where he could express himself fully. At first, the crowds felt unsure of him. But over time, with each victory, the power inside him grew, and with it, his strength in the Arena. And as his reputation began to precede him, a strange thing happened… The people in the crowd who were downtrodden, outcast, and forgotten—they saw themselves in Seer. Soon, throngs of people would come out just to see him fight—cheering Seer on as their champion. Now, this legend from the Arenas is making his way to the Apex Games and there isn’t a single soul who hasn’t already heard his name. The boy born under a bad omen and a terrible myth has taken this tale and created an even greater legend. He is Seer— an icon of the shunned, the unaccepted, and the unabashedly original.",
        tag_line: "Ambush Artist",
        img: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2021/07/seer-assets/apex-grid-tile-legends-seer.png.adapt.crop16x9.1023w.png"
    })
    seer.save();
    
    const valkyrie = await new Legend({
        name: "Valkyrie",
        description: "Bold, brash, fiery and fierce, Kairi Imahara isn’t above greasing palms and bending the law. When she was a child, she stole a Titan. It belonged to her dad: callsign Viper. She wanted to be just like him when she grew up. But the next day he left on a mission and never returned. In some ways, she still followed in his footsteps: it wasn't a Titan, but her ship offered a decent living. Her personal life, however, was anything but. During the day, she smuggled precious cargo, and at night, went shot for shot with the outlaws and mercs in the bars. But even though she had her ladies, her liquor, and her love of the sky, she was still obsessed with finding the man who’d put her father in harm’s way: his commander, Kuben Blisk. She tracked Blisk down, prepared to kill him. But he spoke of her father with respect -- and challenged her to be better. She shot him anyway. But not to kill. Knowing she could get to him was enough. Well, that, and the Apex Games card she took from Blisk’s grasp. Using the intact flight core from Viper’s Northstar, she built a sleek new jetpack that honored her father’s memory. And that was when Kairi could finally soar on her own… and in a version of her dad’s Titan, that ended up being hers after all.",
        tag_line: "Winged Avenger",
        img: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2021/04/apex-grid-tile-legends-valkyrie.png.adapt.crop16x9.1023w.png"
    })
    valkyrie.save();

    const wattson = await new Legend({
        name: "Wattson",
        description: "Natalie “Wattson” Paquette is a familiar face in the Apex Games, though for a different reason than most. Daughter of the Games’ lead electrical engineer, she studied his manuals to stay close to him, and discovered her calling at a young age. Though she could be completely distracted one moment and hyper-focused the next, electricity grounded her – its ordered, predictable flow made sense in a way the rest of the world didn’t. She devoured every book she could on the subject, and eventually became such a skilled engineer that she was commissioned to build the Apex Games’ Modified Containment Ring. Unfortunately, her father died the day it was revealed, leaving her alone. At her lowest moment, a group of competitors invited her to return to the arena with them, assuring her she would always have a home. She now fights alongside her friends in the arena she helped build, destroying incoming missiles, recharging shields, creating fences, and using her pylon to silence fights that get too loud. Nobody knows the arena better than Wattson – anyone who underestimates her is in for a shock.",
        tag_line: "Static Defender",
        img: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-wattson.png.adapt.crop16x9.1023w.png"
    })
    wattson.save();

    const wraith = await new Legend({
        name: "Wraith",
        description: "Wraith is a whirlwind fighter, able to execute deadly attacks and manipulate spacetime by opening rifts in the fabric of reality — but those abilities came at a price. Years ago, she woke up in an IMC detention facility with no memory of who she was. Senior Science Pilot Renee Blasey, who volunteered as guinea pig for her own experiments... whose partner betrayed her and locked her away… no longer existed. All that was left was a timid girl, frightened by a cacophony of voices in her head, until another version of herself appeared and taught her to listen to the voices. Following her lead, Wraith found the strength to break free from her prison and escape into a different reality - this reality. Finally free, but still robbed of her memories, Wraith continues her quest to learn more about who she was before the experiments. With so many of the Apex Games held on old IMC bases, Wraith now competes so she can access the mysterious facilities and learn more about who she was. She remains a fixture of the Apex Games, and with every match she gets closer to the truth...",
        tag_line: "Interdimensional Skirmisher",
        img: "https://liquipedia.net/commons/images/0/0e/Wraith_apex.png"
    })
    wraith.save();

    const abilities = [
        {   legend_id: ash._id,
            tactical: `Arc Snare`,
            passive: `Marked For Death`,
            ultimate: `Phase Breach`
        },
        {   legend_id: bangalore._id,
            tactical: `Smoke Launcher`,
            passive: `Double Time`,
            ultimate: `Rolling Thunder.`
        },
        {   legend_id: bloodhound._id,
            tactical: `Eye of the Allfather`,
            passive: `Tracker`,
            ultimate: `Beast of the Hunt`
        },
        {   legend_id: caustic._id,
            tactical: `Nox Gas Trap`,
            passive: `Nox Vision`,
            ultimate: `Nox Gas Grenade`
        },
        {   legend_id: crypto._id,
            tactical: `Surveillance Drone`,
            passive: `Neurolink`,
            ultimate: `Drone EMP`
        },
        {   legend_id: fuse._id,
            tactical: `Knuckle Cluster`,
            passive: `Grenadier`,
            ultimate: `The Motherlode`
        },
        {   legend_id: gibraltar._id,
            tactical: `Dome of Protection`,
            passive: `Gun Shield`,
            ultimate: `Defensive Bombardment`
        },
        {   legend_id: horizon._id,
            tactical: `Gravity Lift`,
            passive: `Spacewalk`,
            ultimate: `Black Hole`
        },
        {   legend_id: lifeline._id,
            tactical: `D.O.C. Heal Drone`,
            passive: `Combat Medic`,
            ultimate: `Care Package`
        },
        {   legend_id: loba._id,
            tactical: `Burglar’s Best Friend`,
            passive: `Eye for Quality`,
            ultimate: `Black Market Boutique`
        },
        {   legend_id: mad_maggie._id,
            tactical: `Riot Drill`,
            passive: `Warlord's Ire`,
            ultimate: `Wrecking Ball`
        },
        {   legend_id: mirage._id,
            tactical: `Psyche Out`,
            passive: `Now You See Me . . .`,
            ultimate: `	Life of the Party`
        },
        {   legend_id: octane._id,
            tactical: `Stim`,
            passive: `Swift Mend`,
            ultimate: `Launch Pad`
        },
        {   legend_id: pathfinder._id,
            tactical: `Grappling Hook`,
            passive: `Insider Knowledge`,
            ultimate: `Zipline Gun`
        },
        {   legend_id: rampart._id,
            tactical: `Amped Cover`,
            passive: `Modded Loader`,
            ultimate: `Emplaced Minigun “Sheila”`
        },
        {   legend_id: revenant._id,
            tactical: `Silence`,
            passive: `Stalker`,
            ultimate: `Death Totem`
        },
        {   legend_id: seer._id,
            tactical: `Focus of Attention`,
            passive: `Heart Seeker`,
            ultimate: `Exhibit`
        },
        {   legend_id: valkyrie._id,
            tactical: `Missile Swarm`,
            passive: `VTOL Jets`,
            ultimate: `Skyward Dive`
        },
        {   legend_id: wattson._id,
            tactical: `Perimeter Security`,
            passive: `Spark of Genius`,
            ultimate: `Interception Pylon`
        },
        {   legend_id: wraith._id,
            tactical: `Into the Void`,
            passive: `Voices from the Void`,
            ultimate: `Dimensional Rift`
        }
    ]
    
        await Ability.insertMany(abilities)
        console.log(`Abilities created`)
    }
    


const run = async () => {
    await main()
    db.close()
}
    
run()