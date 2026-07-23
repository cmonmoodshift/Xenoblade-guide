// ==============================================================
//  UNIQUE MONSTER DATA
// ==============================================================
const uniqueData = [{
    area: 'Colony 9',
    monsters: [
        { name: 'Breezy Zolos', desc: 'Lv. 12 — South of Anti-Air Battery 2.' },
        { name: 'Clinger Floria', desc: 'Lv. 15 — Agora Shore, near the beach.' },
        { name: 'Wandering Brog', desc: 'Lv. 16 — Near the Tephra Cave entrance.' },
        { name: 'Audacious Vang', desc: 'Lv. 16 — North of the colony, near the gate.' },
        { name: 'Stormy Zolos', desc: 'Lv. 18 — Near the Ether Light deposit.' }
    ]
}, {
    area: 'Tephra Cave',
    monsters: [
        { name: 'Archsaver Torta', desc: 'Lv. 25 — Glowing Cave, near the light source.' },
        { name: 'Dark Vang', desc: 'Lv. 20 — Central Pit area.' },
        { name: 'Green Feris', desc: 'Lv. 22 — Fossil Chamber.' },
        { name: 'Scarlen', desc: 'Lv. 23 — Near the Spider Nest.' },
        { name: 'Slobos', desc: 'Lv. 24 — Secret Area: Hidden Stairway.' }
    ]
}, {
    area: 'Bionis\' Leg',
    monsters: [
        { name: 'Territorial Rotbart', desc: 'Lv. 81 — Near Raguel Lake (Superboss).', superboss: true },
        { name: 'Jolly Zolos', desc: 'Lv. 28 — Near Viliera Hill.' },
        { name: 'Hagai', desc: 'Lv. 30 — Near the Sororal Statues.' },
        { name: 'Mobile Artillery', desc: 'Lv. 32 — Near Spiral Valley.' },
        { name: 'Sedna', desc: 'Lv. 34 — Near the bridge crossing.' },
        { name: 'Gluttonous Gogol', desc: 'Lv. 35 — Near the entrance from Colony 6.' }
    ]
}, {
    area: 'Colony 6 & Ether Mine',
    monsters: [
        { name: 'Blizzard Bunnitz', desc: 'Lv. 18 — Near the Colony 6 entrance.' },
        { name: 'Poisonous Volff', desc: 'Lv. 20 — Colony 6 residential area.' },
        { name: 'Dark Nebula', desc: 'Lv. 22 — Ether Mine entrance.' },
        { name: 'Quarry Bunniv', desc: 'Lv. 24 — Ether Mine excavation site.' },
        { name: 'Refrigerated Vang', desc: 'Lv. 26 — Near the Ether Pump Station.' },
        { name: 'Unwavering Antonov', desc: 'Lv. 28 — Deep in the Ether Mine.' }
    ]
}, {
    area: 'Satorl Marsh',
    monsters: [
        { name: 'Despotic Arsene', desc: 'Lv. 105 — Near the Altar (Superboss).', superboss: true },
        { name: 'Indomitable Dolmar', desc: 'Lv. 25 — Near the Sororal Statues.' },
        { name: 'Indignant Hode', desc: 'Lv. 27 — Near the Altar.' },
        { name: 'Lazy Feris', desc: 'Lv. 29 — Near the Shimmering Swamp.' },
        { name: 'Majestic Mordred', desc: 'Lv. 31 — Near Zakoh Bay.' },
        { name: 'Spiteful Hode', desc: 'Lv. 33 — Near the bridge.' }
    ]
}, {
    area: 'Makna Forest',
    monsters: [
        { name: 'Cervantes', desc: 'Lv. 34 — Near the Great Makna Falls.' },
        { name: 'Chat Noir', desc: 'Lv. 36 — Near Lovers\' Lookout.' },
        { name: 'Dragonia', desc: 'Lv. 38 — Near the Ether Plant.' },
        { name: 'Florence', desc: 'Lv. 40 — Near the King Tree (Secret Area).' },
        { name: 'Hovering Elias', desc: 'Lv. 42 — Along the Makna Path.' },
        { name: 'Infernal Crock', desc: 'Lv. 44 — Near the water.' }
    ]
}, {
    area: 'Eryth Sea',
    monsters: [
        { name: 'Alcyone', desc: 'Lv. 44 — Near Sealed Island.' },
        { name: 'Caligula', desc: 'Lv. 46 — Near the Hovering Reefs.' },
        { name: 'Hode of War', desc: 'Lv. 48 — Near the Eryth Lighthouse.' },
        { name: 'Persephone', desc: 'Lv. 50 — Near the shore.' },
        { name: 'Serene Hode', desc: 'Lv. 52 — Near the central island.' }
    ]
}, {
    area: 'High Entia Tomb',
    monsters: [
        { name: 'Ancient Driver', desc: 'Lv. 45 — Near the Tomb Entrance.' },
        { name: 'Guardian Deos', desc: 'Lv. 47 — Near the Ether Chamber.' },
        { name: 'Solitary Deos', desc: 'Lv. 49 — Near the Sealed Room.' },
        { name: 'Tomb Guardian', desc: 'Lv. 51 — Near the end of the tomb.' }
    ]
}, {
    area: 'Valak Mountain',
    monsters: [
        { name: 'Final Marcus', desc: 'Lv. 65 — Near Zaktus camp.' },
        { name: 'Blizzard Belgazas', desc: 'Lv. 108 — Near the Ice Cave (Superboss).', superboss: true },
        { name: 'Avalanche Abaasy', desc: 'Lv. 120 — Near the summit (Superboss).', superboss: true },
        { name: 'Furious Rhogul', desc: 'Lv. 52 — Near the Frozen Falls.' },
        { name: 'Glacial Eks', desc: 'Lv. 54 — Near the camp.' },
        { name: 'Ice Brawn', desc: 'Lv. 56 — Near the Secret Hot Spring.' },
        { name: 'Mephistopheles', desc: 'Lv. 58 — Near the summit.' },
        { name: 'Soothed Eks', desc: 'Lv. 60 — Near the entrance.' }
    ]
}, {
    area: 'Sword Valley',
    monsters: [
        { name: 'Ancient Machine', desc: 'Lv. 58 — Near the Sword Valley Entrance.' },
        { name: 'Demonic Zekar', desc: 'Lv. 60 — Near Dunban\'s Camp.' },
        { name: 'Faced Mechon', desc: 'Lv. 62 — Central Valley.' },
        { name: 'Fierce Ganbark', desc: 'Lv. 64 — Near the Mechon Factory (Secret Area).' },
        { name: 'Fortress Mechon', desc: 'Lv. 66 — Near the end of the valley.' }
    ]
}, {
    area: 'Galahad Fortress',
    monsters: [
        { name: 'Assassin', desc: 'Lv. 62 — Near the Fortress Entrance.' },
        { name: 'Berserker', desc: 'Lv. 64 — Central Corridor.' },
        { name: 'Guardian Mechon', desc: 'Lv. 66 — Near the Command Room.' },
        { name: 'Reckless Sator', desc: 'Lv. 68 — Near the end of the fortress.' }
    ]
}, {
    area: 'Fallen Arm',
    monsters: [
        { name: 'Ancient Daedala', desc: 'Lv. 105 — Near the Disturbed Waters (Superboss).', superboss: true },
        { name: 'Assassin Sniper', desc: 'Lv. 68 — Near the Machina Refuge.' },
        { name: 'Deadly Clam', desc: 'Lv. 70 — Near the Disturbed Waters.' },
        { name: 'Driven Feris', desc: 'Lv. 72 — Near the Secluded Island.' },
        { name: 'Masterful Nebula', desc: 'Lv. 74 — Near the beach.' }
    ]
}, {
    area: 'Mechonis Field',
    monsters: [
        { name: 'Drakon', desc: 'Lv. 66 — Near the Field Entrance.' },
        { name: 'Golem', desc: 'Lv. 68 — Near the Main Lift.' },
        { name: 'Guardian', desc: 'Lv. 70 — Near the Observation Platform.' },
        { name: 'Hazard', desc: 'Lv. 72 — Near the Hidden Control Room.' },
        { name: 'Iron Box', desc: 'Lv. 74 — Near the end of the field.' }
    ]
}, {
    area: 'Central Factory',
    monsters: [
        { name: 'Decimator', desc: 'Lv. 72 — Near the Factory Entrance.' },
        { name: 'Doom', desc: 'Lv. 74 — Assembly Line.' },
        { name: 'General', desc: 'Lv. 76 — Core Control.' },
        { name: 'Spiteful Gald', desc: 'Lv. 78 — Near the end of the factory.' }
    ]
}, {
    area: 'Agniratha',
    monsters: [
        { name: 'Agniratha Guardian', desc: 'Lv. 74 — Near the Agniratha Gate.' },
        { name: 'Emperor', desc: 'Lv. 76 — Central Plaza.' },
        { name: 'Imperial Mechon', desc: 'Lv. 78 — Near the Imperial Tower.' },
        { name: 'Mephisto', desc: 'Lv. 80 — Near the end of the city.' }
    ]
}, {
    area: 'Bionis\' Interior',
    monsters: [
        { name: 'Disciple', desc: 'Lv. 78 — Near the Inner Passage.' },
        { name: 'Guardian Deos', desc: 'Lv. 80 — Near the Heart of the Bionis.' },
        { name: 'Sovereign', desc: 'Lv. 82 — Near the end of the interior.' }
    ]
}, {
    area: 'Prison Island',
    monsters: [
        { name: 'Nightmare', desc: 'Lv. 76 — Near the Prison Entrance.' },
        { name: 'Phantom', desc: 'Lv. 78 — Central Prison.' },
        { name: 'Guardian', desc: 'Lv. 80 — Near the Observatory.' },
        { name: 'Demon', desc: 'Lv. 82 — Near the end of the island.' }
    ]
}];