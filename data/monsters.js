// ==============================================================
//  MONSTER DATA — All Regular Monsters by Area
//  Source: Xenoblade Wiki, Game8, StrategyWiki
//  Areas: Colony 9 → Prison Island
// ==============================================================
const monsterData = [{
    area: 'Colony 9',
    monsters: [
        { name: 'Bunniv', level: '1-4', locations: ['Near Colony Gate', 'Tephra Hill'], drops: ['Bunniv Fur', 'Bunniv Meat', 'Yellow Fruit', 'Rabbit Diodes'] },
        { name: 'Brog', level: '3-5', locations: ['Near Tephra Cave Entrance', 'Tephra Hill'], drops: ['Brog Oil', 'Brog Meat', 'Brog Horn', 'Green Bean'] },
        { name: 'Flamii', level: '2-4', locations: ['Agora Shore', 'Cliff Lake'], drops: ['Flamii Feather', 'Flamii Egg', 'Yolkless Flamii Egg', 'Pink Shell'] },
        { name: 'Vang', level: '5-8', locations: ['Military District', 'Outlook Park'], drops: ['Vang Tooth', 'Vang Claw', 'Vang Hide', 'Red Sap'] },
        { name: 'Krabble', level: '4-6', locations: ['Cliff Lake', 'Agora Shore', 'Anti-Air Battery 1'], drops: ['Krabble Shell', 'Krabble Meat', 'Krabble Leg', 'Blue Chain'] },
        { name: 'Piranhax', level: '6-9', locations: ['Agora Shore', 'Cliff Lake'], drops: ['Piranhax Fin', 'Piranhax Scale', 'Piranhax Meat', 'Gold Bug'] },
        { name: 'Antol', level: '8-11', locations: ['Anti-Air Battery 1', 'Cliff Lake'], drops: ['Antol Shell', 'Antol Jaw', 'Antol Antenna', 'Small Scale'] },
        { name: 'Skeeter', level: '9-12', locations: ['Tephra Cave Entrance area', 'Cliff Lake'], drops: ['Skeeter Wing', 'Skeeter Eye', 'Black Nectar', 'Small Shell'] },
        { name: 'Armu', level: '3-5', locations: ['Agora Shore'], drops: ['Armu Milk', 'Armu Meat', 'Armu Hide', 'White Stomach'] }
    ]
}, {
    area: 'Tephra Cave',
    monsters: [
        { name: 'Arachno', level: '10-14', locations: ['Glowing Cave', 'Spider Nest', 'Arachno Feeding Lair'], drops: ['Arachno Web', 'Arachno Leg', 'Arachno Silk', 'Spider Web'] },
        { name: 'Bunniv', level: '9-12', locations: ['Cave Entrance', 'Tephra Cavern'], drops: ['Bunniv Fur', 'Bunniv Meat', 'Blue Crystal'] },
        { name: 'Brog', level: '11-14', locations: ['Forgotten Cave', 'Central Pit'], drops: ['Brog Oil', 'Brog Horn', 'Singing Brog Oil', 'Red Crystal'] },
        { name: 'Vang', level: '12-16', locations: ['Central Pit', 'Bone Corridor', 'Mag Mell Ruins'], drops: ['Vang Tooth', 'Vang Hide', 'Dark Vang Claw', 'Green Crystal'] },
        { name: 'Flamii', level: '10-13', locations: ['Glowing Cave', 'Ether Light'], drops: ['Flamii Feather', 'Tephra Flamii Egg', 'Yellow Crystal'] },
        { name: 'Skeeter', level: '13-16', locations: ['Fossil Chamber', 'Bone Corridor'], drops: ['Skeeter Wing', 'Black Nectar', 'White Crystal'] },
        { name: 'Krabble', level: '12-15', locations: ['Tephra Cavern', 'Hidden Warehouse'], drops: ['Krabble Shell', 'Krabble Leg', 'Glowing Orb'] },
        { name: 'Bat', level: '8-11', locations: ['Cave Entrance', 'Tephra Cavern'], drops: ['Bat Wing', 'Bat Fang', 'Fossilized Bone'] }
    ]
}, {
    area: 'Bionis\' Leg',
    monsters: [
        { name: 'Bunniv', level: '14-17', locations: ['Near Refugee Camp', 'Gaur Plain'], drops: ['Bunniv Fur', 'Bunniv Meat', 'Rabbit Diodes'] },
        { name: 'Brog', level: '15-18', locations: ['Tranquil Grotto', 'Kisk Cave', 'Raguel Lake'], drops: ['Brog Oil', 'Brog Horn', 'Blue Grass'] },
        { name: 'Vang', level: '16-20', locations: ['Rho Oasis', 'Gaur Plain'], drops: ['Vang Tooth', 'Vang Claw', 'Pink Grass'] },
        { name: 'Krabble', level: '14-17', locations: ['Raguel Lake', 'Viliera Hill'], drops: ['Krabble Shell', 'Krabble Leg', 'Yellow Grass'] },
        { name: 'Flamii', level: '13-16', locations: ['Raguel Lake', 'Kamos Guidepost'], drops: ['Flamii Feather', 'Flamii Egg', 'Red Grass'] },
        { name: 'Volff', level: '18-22', locations: ['Volff Lair', 'Gaur Plain', 'Spiral Valley'], drops: ['Volff Hide', 'Volff Fang', 'Volff Meat', 'Green Grass'] },
        { name: 'Gogol', level: '20-24', locations: ['Spiral Valley', 'Bask Cave Passage', 'Ragrinar Canyon'], drops: ['Gogol Meat', 'Gogol Tooth', 'Gogol Hide', 'White Grass'] },
        { name: 'Tirkin', level: '17-21', locations: ['Tirkin Headquarters', 'Spiral Valley'], drops: ['Tirkin Feather', 'Tirkin Meat', 'Tirkin Talon', 'Giant Egg'] },
        { name: 'Ferrus', level: '19-23', locations: ['Daksha Shrine', 'Crevasse Waterfall'], drops: ['Ferrus Horn', 'Ferrus Hide', 'Ferrus Meat', 'Rhino Horn'] },
        { name: 'Hox', level: '16-19', locations: ['Maguel Road', 'Raguel Bridge'], drops: ['Hox Fur', 'Hox Meat', 'Hox Horn', 'Rabbit Fur'] },
        { name: 'Rhogul', level: '22-26', locations: ['Traveller\'s Rest', 'Kasharpa Falls'], drops: ['Rhogul Feather', 'Rhogul Meat', 'Rhogul Talon'] },
        { name: 'Arachno', level: '21-25', locations: ['Kisk Cave', 'Windy Cave'], drops: ['Arachno Web', 'Arachno Silk'] },
        { name: 'Skeeter', level: '18-22', locations: ['Raguel Lake', 'Viliera Hill'], drops: ['Skeeter Wing', 'Black Nectar'] },
        { name: 'Treant', level: '24-28', locations: ['Tranquil Grotto', 'Kisk Cave'], drops: ['Treant Bark', 'Treant Sap', 'Treant Branch', 'Treant Bark'] }
    ]
}, {
    area: 'Colony 6',
    monsters: [
        { name: 'Bunniv', level: '24-28', locations: ['Colony 6 Entrance', 'Supply Road'], drops: ['Bunniv Fur', 'Bunniv Meat'] },
        { name: 'Vang', level: '26-30', locations: ['Residential District', 'Freight Road'], drops: ['Vang Tooth', 'Vang Claw'] },
        { name: 'Krabble', level: '25-29', locations: ['Drainage Outlet', 'Splintered Path'], drops: ['Krabble Shell', 'Krabble Leg'] },
        { name: 'Volff', level: '28-32', locations: ['Watchpoint Junction', 'Misty Path'], drops: ['Volff Hide', 'Volff Fang'] },
        { name: 'Hox', level: '24-27', locations: ['Colony 6 Entrance', 'Supply Road'], drops: ['Hox Fur', 'Hox Meat'] },
        { name: 'Gogol', level: '30-34', locations: ['Freight Road', 'Misty Path'], drops: ['Gogol Meat', 'Gogol Tooth'] },
        { name: 'Skeeter', level: '27-31', locations: ['Drainage Outlet', 'Splintered Path'], drops: ['Skeeter Wing'] },
        { name: 'Arachno', level: '29-33', locations: ['Pod Depot', 'Freight Elevator'], drops: ['Arachno Web', 'Arachno Silk'] },
        { name: 'Tirkin', level: '31-35', locations: ['Watchpoint Junction', 'Misty Path'], drops: ['Tirkin Feather', 'Tirkin Meat'] }
    ]
}, {
    area: 'Ether Mine',
    monsters: [
        { name: 'Bunniv', level: '28-32', locations: ['Ether Mine Entrance', 'Mining Base'], drops: ['Bunniv Fur', 'Blue Gem'] },
        { name: 'Krabble', level: '30-34', locations: ['Test Pit 1', 'Test Pit 2', 'Excavation Site'], drops: ['Krabble Shell', 'Red Gem'] },
        { name: 'Vang', level: '32-36', locations: ['Central Pit - Level 1', 'Central Pit - Level 2'], drops: ['Vang Tooth', 'Green Gem'] },
        { name: 'Skeeter', level: '29-33', locations: ['Mining Base', 'Storage Depot'], drops: ['Skeeter Wing', 'Yellow Gem'] },
        { name: 'Nebula', level: '34-38', locations: ['Ether Pump Station', 'Glowmoss Lake', 'Central Pit - Base Level'], drops: ['Nebula Core', 'Nebula Membrane', 'White Gem'] },
        { name: 'Gogol', level: '36-40', locations: ['Regulation Piston', 'Personnel Lift 3'], drops: ['Gogol Meat', 'Gogol Tooth'] },
        { name: 'Brog', level: '30-34', locations: ['Test Pit 3', 'Test Pit 4'], drops: ['Brog Oil', 'Brog Horn'] }
    ]
}, {
    area: 'Satorl Marsh',
    monsters: [
        { name: 'Hode', level: '32-36', locations: ['Shimmering Swamp', 'Lacus Swamp', 'Altar of Fate'], drops: ['Hode Feather', 'Hode Meat', 'Hode Talon', 'Blue Fungus'] },
        { name: 'Igna', level: '34-38', locations: ['Igna Territory', 'Barren Moor', 'Exile Fortress'], drops: ['Igna Scale', 'Igna Meat', 'Igna Horn', 'Red Fungus'] },
        { name: 'Krabble', level: '30-34', locations: ['Poison Swamp', 'Zakoh Bay'], drops: ['Krabble Shell', 'Krabble Leg', 'Green Fungus'] },
        { name: 'Brog', level: '31-35', locations: ['Basin Cave', 'Dark Swamp'], drops: ['Brog Oil', 'Brog Horn', 'Yellow Fungus'] },
        { name: 'Ferrus', level: '36-40', locations: ['Zaldania Waterfall', 'Crown Tree'], drops: ['Ferrus Horn', 'Ferrus Hide', 'Ferrus Meat', 'White Fungus'] },
        { name: 'Nebula', level: '38-42', locations: ['Glowing Obelisk', 'Silent Obelisk'], drops: ['Nebula Core', 'Nebula Membrane', 'Black Fungus'] },
        { name: 'Vang', level: '33-37', locations: ['Statue Summit', 'Sororal Statues'], drops: ['Vang Tooth', 'Vang Hide', 'Glowing Moss'] },
        { name: 'Volff', level: '35-39', locations: ['Oath Sanctuary', 'Place of Judgement'], drops: ['Volff Hide', 'Volff Fang'] },
        { name: 'Tirkin', level: '37-41', locations: ['Nopon Refuge', 'Soter Ruins'], drops: ['Tirkin Feather', 'Tirkin Meat'] }
    ]
}, {
    area: 'Makna Forest',
    monsters: [
        { name: 'Dinobeast', level: '40-44', locations: ['Dinosaur Nest', 'Great Makna Falls'], drops: ['Dinosaur Bone', 'Dinosaur Meat', 'Dinosaur Hide', 'Blue Fruit'] },
        { name: 'Krabble', level: '38-42', locations: ['Makna Path', 'Twisted Tree Gate'], drops: ['Krabble Shell', 'Krabble Leg', 'Red Fruit'] },
        { name: 'Bunniv', level: '37-41', locations: ['Lakeside', 'Agni Tablet'], drops: ['Bunniv Fur', 'Bunniv Meat', 'Green Fruit'] },
        { name: 'Brog', level: '39-43', locations: ['Lovers\' Lookout', 'Hidden Cave'], drops: ['Brog Oil', 'Brog Horn', 'Yellow Fruit'] },
        { name: 'Igna', level: '41-45', locations: ['Divine Sanctuary', 'Ether Plant'], drops: ['Igna Scale', 'Igna Meat', 'Igna Horn', 'White Fruit'] },
        { name: 'Volff', level: '42-46', locations: ['King Tree', 'Pod Landing Site'], drops: ['Volff Hide', 'Volff Fang', 'Black Fruit'] },
        { name: 'Hox', level: '38-42', locations: ['Makna Path', 'Ether Deposit'], drops: ['Hox Fur', 'Hox Meat', 'Hox Horn', 'Golden Fruit'] },
        { name: 'Skeeter', level: '40-44', locations: ['Waterfall Cave', 'Great Makna Falls'], drops: ['Skeeter Wing', 'Forest Berry'] },
        { name: 'Ferrus', level: '44-48', locations: ['Divine Sanctuary', 'Ether Plant'], drops: ['Ferrus Horn', 'Ferrus Hide', 'Honey'] },
        { name: 'Vang', level: '43-47', locations: ['King Tree', 'Pod Landing Site'], drops: ['Vang Tooth', 'Vang Hide'] }
    ]
}, {
    area: 'Frontier Village Area',
    monsters: [
        { name: 'Nopon', level: '35-40', locations: ['Frontier Village (friendly)', 'Central Bazaar'], drops: ['Nopon Feather', 'Nopon Cloth', 'Nopon Gold'] }
    ]
}, {
    area: 'Eryth Sea',
    monsters: [
        { name: 'Hode', level: '44-48', locations: ['Anu Shore', 'Kromar Coast', 'Hode Refuge'], drops: ['Hode Feather', 'Hode Meat', 'Blue Coral'] },
        { name: 'Krabble', level: '42-46', locations: ['Latael Shore', 'Secluded Island'], drops: ['Krabble Shell', 'Krabble Leg', 'Red Coral'] },
        { name: 'Igna', level: '46-50', locations: ['Hovering Reef 1-5', 'Sleeping Dragon Isle'], drops: ['Igna Scale', 'Igna Meat', 'Green Coral'] },
        { name: 'Ferrus', level: '48-52', locations: ['Showdown Cliff', 'Ether Crystal Deposit'], drops: ['Ferrus Horn', 'Ferrus Hide', 'Yellow Coral'] },
        { name: 'Brog', level: '43-47', locations: ['Bionis\' Occipital', 'Faras Cave'], drops: ['Brog Oil', 'Brog Horn', 'White Coral'] },
        { name: 'Nebula', level: '50-54', locations: ['Central Seal Island', 'Soltnar Seal Island'], drops: ['Nebula Core', 'Nebula Membrane', 'Black Coral'] },
        { name: 'Volff', level: '45-49', locations: ['Khatorl Seal Island', 'Ether Plant'], drops: ['Volff Hide', 'Volff Fang', 'Pearl'] },
        { name: 'Skeeter', level: '44-48', locations: ['Syrath Lighthouse', 'Latael Shore'], drops: ['Skeeter Wing', 'Seaweed'] },
        { name: 'Dinobeast', level: '52-56', locations: ['Hovering Reef 6-10', 'Secluded Island'], drops: ['Dinosaur Bone', 'Dinosaur Meat'] }
    ]
}, {
    area: 'Alcamoth',
    monsters: [
        { name: 'High Entia', level: '48-52', locations: ['Residential Area', 'Park', 'Main Plaza'], drops: ['High Entia Bread', 'High Entia Cheese', 'High Entia Wine', 'High Entia Jewel'] },
        { name: 'Nebula', level: '50-54', locations: ['Observatory', 'Archives'], drops: ['Nebula Core', 'Nebula Membrane', 'Imperial Ring'] },
        { name: 'Guardian', level: '52-56', locations: ['Imperial Palace', 'Imperial Guard Post'], drops: ['Guardian Armor', 'Guardian Sword'] }
    ]
}, {
    area: 'High Entia Tomb',
    monsters: [
        { name: 'Skeeter', level: '48-52', locations: ['Tomb Entrance', 'Corridor of Silence'], drops: ['Skeeter Wing', 'Ancient Coin'] },
        { name: 'Arachno', level: '50-54', locations: ['Chamber of Offerings', 'Crypt of the Ancients'], drops: ['Arachno Web', 'Arachno Silk', 'Ancient Stone'] },
        { name: 'Vang', level: '52-56', locations: ['Tomb of Kings', 'Ether Chamber'], drops: ['Vang Tooth', 'Vang Hide', 'Ancient Fabric'] },
        { name: 'Nebula', level: '54-58', locations: ['Sealed Room', 'Hidden Passage'], drops: ['Nebula Core', 'Nebula Membrane', 'Ancient Weapon'] },
        { name: 'Brog', level: '49-53', locations: ['Corridor of Silence', 'Chamber of Offerings'], drops: ['Brog Oil', 'Brog Horn', 'Ancient Jewel'] }
    ]
}, {
    area: 'Valak Mountain',
    monsters: [
        { name: 'Rhogul', level: '54-58', locations: ['Zokhed Pass', 'Serik Waterfall', 'Frozen Falls'], drops: ['Rhogul Feather', 'Rhogul Meat', 'Rhogul Talon', 'Blue Ice'] },
        { name: 'Eks', level: '56-60', locations: ['Crystal Cave', 'Ice Cave', 'Mechonis Wound'], drops: ['Eks Tooth', 'Eks Hide', 'Eks Meat', 'Red Ice'] },
        { name: 'Krabble', level: '52-56', locations: ['Frozen Lake', 'Mountain Path'], drops: ['Krabble Shell', 'Krabble Leg', 'Green Ice'] },
        { name: 'Brog', level: '53-57', locations: ['Hollow Bone', 'Bafalgar Pedestal'], drops: ['Brog Oil', 'Brog Horn', 'Yellow Ice'] },
        { name: 'Volff', level: '58-62', locations: ['Three Sage Summit', 'Nopon Camp'], drops: ['Volff Hide', 'Volff Fang', 'White Ice'] },
        { name: 'Nebula', level: '60-64', locations: ['Secret Hot Spring', 'Harict Chapel'], drops: ['Nebula Core', 'Nebula Membrane', 'Black Ice'] },
        { name: 'Skeeter', level: '55-59', locations: ['Zaktus', 'Frozen Falls'], drops: ['Skeeter Wing', 'Frozen Flower'] },
        { name: 'Ferrus', level: '62-66', locations: ['Crystal Cave', 'Ice Cave'], drops: ['Ferrus Horn', 'Ferrus Hide', 'Ice Crystal'] }
    ]
}, {
    area: 'Sword Valley',
    monsters: [
        { name: 'Mechon (M50)', level: '58-62', locations: ['Sword Valley Entrance', 'Central Valley'], drops: ['Mechon Parts', 'Mechon Weapon', 'Mechon Core', 'Broken Sword'] },
        { name: 'Mechon (M51)', level: '60-64', locations: ['Dunban\'s Camp', 'Valley Overlook'], drops: ['Mechon Parts', 'Mechon Shell', 'Mechon Eye', 'Broken Shield'] },
        { name: 'Mechon (M52)', level: '62-66', locations: ['Central Valley', 'Mechon Factory'], drops: ['Mechon Parts', 'Mechon Weapon', 'Mechon Core', 'Broken Armor'] },
        { name: 'Mechon (M53)', level: '64-68', locations: ['Fortress Approach', 'Mechon Wreckage'], drops: ['Mechon Parts', 'Mechon Shell', 'Mechon Eye'] },
        { name: 'Mechon (M54)', level: '66-70', locations: ['Central Valley', 'Mechon Factory'], drops: ['Mechon Parts', 'Mechon Weapon', 'Mechon Core'] }
    ]
}, {
    area: 'Galahad Fortress',
    monsters: [
        { name: 'Mechon (M55)', level: '62-66', locations: ['Fortress Entrance', 'Central Corridor'], drops: ['Mechon Parts', 'Mechon Weapon', 'Fortress Metal'] },
        { name: 'Mechon (M56)', level: '64-68', locations: ['Defense Tower', 'Fortress Ramparts'], drops: ['Mechon Parts', 'Mechon Shell', 'Fortress Wire'] },
        { name: 'Mechon (M57)', level: '66-70', locations: ['Mechon Hangar', 'Command Room'], drops: ['Mechon Parts', 'Mechon Core', 'Fortress Gear'] },
        { name: 'Mechon (M58)', level: '68-72', locations: ['Central Corridor', 'Command Room'], drops: ['Mechon Parts', 'Mechon Weapon', 'Fortress Bolt'] },
        { name: 'Mechon (M59)', level: '70-74', locations: ['Defense Tower', 'Fortress Ramparts'], drops: ['Mechon Parts', 'Mechon Shell', 'Fortress Spring'] }
    ]
}, {
    area: 'Fallen Arm',
    monsters: [
        { name: 'Krabble', level: '66-70', locations: ['Refuge Beach', 'Disturbed Waters'], drops: ['Krabble Shell', 'Krabble Leg', 'Machina Gear'] },
        { name: 'Volff', level: '68-72', locations: ['Arm Overlook', 'Ruined City'], drops: ['Volff Hide', 'Volff Fang', 'Machina Wire'] },
        { name: 'Brog', level: '65-69', locations: ['Hidden Cave', 'Secluded Island'], drops: ['Brog Oil', 'Brog Horn', 'Machina Bolt'] },
        { name: 'Skeeter', level: '67-71', locations: ['Machina Refuge', 'Ruined City'], drops: ['Skeeter Wing', 'Machina Spring'] },
        { name: 'Nebula', level: '70-74', locations: ['Disturbed Waters', 'Secluded Island'], drops: ['Nebula Core', 'Nebula Membrane', 'Machina Circuit'] },
        { name: 'Ferrus', level: '72-76', locations: ['Arm Overlook', 'Hidden Cave'], drops: ['Ferrus Horn', 'Ferrus Hide', 'Machina Battery'] }
    ]
}, {
    area: 'Mechonis Field',
    monsters: [
        { name: 'Mechon (M60)', level: '68-72', locations: ['Field Entrance', 'Field Path'], drops: ['Mechon Parts', 'Mechon Weapon', 'Mechonis Metal'] },
        { name: 'Mechon (M61)', level: '70-74', locations: ['Main Lift', 'Gear Chamber'], drops: ['Mechon Parts', 'Mechon Shell', 'Mechonis Wire'] },
        { name: 'Mechon (M62)', level: '72-76', locations: ['Observation Platform', 'Piston Passage'], drops: ['Mechon Parts', 'Mechon Core', 'Mechonis Gear'] },
        { name: 'Mechon (M63)', level: '74-78', locations: ['Hidden Control Room', 'Mechonis Core Access'], drops: ['Mechon Parts', 'Mechon Weapon', 'Mechonis Bolt'] },
        { name: 'Mechon (M64)', level: '76-80', locations: ['Field Path', 'Gear Chamber'], drops: ['Mechon Parts', 'Mechon Shell', 'Mechonis Spring'] }
    ]
}, {
    area: 'Central Factory',
    monsters: [
        { name: 'Mechon (M65)', level: '72-76', locations: ['Factory Entrance', 'Factory Floor'], drops: ['Mechon Parts', 'Mechon Weapon', 'Factory Plate'] },
        { name: 'Mechon (M66)', level: '74-78', locations: ['Assembly Line', 'Conveyor Path'], drops: ['Mechon Parts', 'Mechon Shell', 'Factory Pipe'] },
        { name: 'Mechon (M67)', level: '76-80', locations: ['Core Control', 'Control Room'], drops: ['Mechon Parts', 'Mechon Core', 'Factory Wire'] },
        { name: 'Mechon (M68)', level: '78-82', locations: ['Factory Floor', 'Assembly Line'], drops: ['Mechon Parts', 'Mechon Weapon', 'Factory Gear'] }
    ]
}, {
    area: 'Agniratha',
    monsters: [
        { name: 'Mechon (M69)', level: '74-78', locations: ['Agniratha Gate', 'Central Plaza'], drops: ['Mechon Parts', 'Mechon Weapon', 'Agniratha Gold'] },
        { name: 'Mechon (M70)', level: '76-80', locations: ['Residential District', 'Mechon Workshop'], drops: ['Mechon Parts', 'Mechon Shell', 'Agniratha Silver'] },
        { name: 'Mechon (M71)', level: '78-82', locations: ['Imperial Tower', 'Palace Gardens'], drops: ['Mechon Parts', 'Mechon Core', 'Agniratha Bronze'] },
        { name: 'Mechon (M72)', level: '80-84', locations: ['Central Plaza', 'Imperial Tower'], drops: ['Mechon Parts', 'Mechon Weapon', 'Agniratha Crystal'] },
        { name: 'High Entia Ghost', level: '76-80', locations: ['Residential District', 'Palace Gardens'], drops: ['Agniratha Stone', 'Agniratha Cloth'] }
    ]
}, {
    area: 'Bionis\' Interior',
    monsters: [
        { name: 'Skeeter', level: '78-82', locations: ['Inner Passage', 'Flesh Corridor'], drops: ['Skeeter Wing', 'Bionis Flesh'] },
        { name: 'Arachno', level: '80-84', locations: ['Bone Bridge', 'Core Chamber'], drops: ['Arachno Web', 'Arachno Silk', 'Bionis Bone'] },
        { name: 'Nebula', level: '82-86', locations: ['Heart of the Bionis', 'Core Chamber'], drops: ['Nebula Core', 'Nebula Membrane', 'Bionis Blood'] },
        { name: 'Brog', level: '79-83', locations: ['Flesh Corridor', 'Inner Passage'], drops: ['Brog Oil', 'Brog Horn', 'Bionis Nerve'] },
        { name: 'Gogol', level: '84-88', locations: ['Heart of the Bionis', 'Core Chamber'], drops: ['Gogol Meat', 'Gogol Tooth', 'Bionis Heart'] }
    ]
}, {
    area: 'Prison Island',
    monsters: [
        { name: 'Skeeter', level: '76-80', locations: ['Prison Entrance', 'Prison Courtyard'], drops: ['Skeeter Wing', 'Prison Key'] },
        { name: 'Arachno', level: '78-82', locations: ['Central Prison', 'Guard Quarters'], drops: ['Arachno Web', 'Arachno Silk', 'Prison Stone'] },
        { name: 'Vang', level: '80-84', locations: ['Solitary Cells', 'Observatory'], drops: ['Vang Tooth', 'Vang Hide', 'Prison Cloth'] },
        { name: 'Nebula', level: '82-86', locations: ['Central Prison', 'Observatory'], drops: ['Nebula Core', 'Nebula Membrane', 'Prison Metal'] },
        { name: 'Ghost', level: '78-82', locations: ['Prison Courtyard', 'Guard Quarters'], drops: ['Prison Jewel', 'Prison Crown'] }
    ]
}];
