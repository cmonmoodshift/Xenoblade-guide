// ==============================================================
//  COLLECTOPAEDIA DATA
// ==============================================================
const collectData = [{
    area: 'Colony 9',
    items: [
        { name: 'Blue Chain', desc: 'Collectable from ether deposits in Colony 9 fields.' },
        { name: 'Gold Bug', desc: 'Collectable from ether deposits near grassy areas.' },
        { name: 'Green Bean', desc: 'Collectable from ether deposits in residential areas.' },
        { name: 'Red Sap', desc: 'Collectable from ether deposits near trees.' },
        { name: 'Yellow Fruit', desc: 'Collectable from ether deposits in the commercial district.' },
        { name: 'Black Liver', desc: 'Dropped by monsters in Colony 9 (e.g., Bunnivs).' },
        { name: 'White Stomach', desc: 'Dropped by monsters in Colony 9.' },
        { name: 'Pink Shell', desc: 'Collectable from ether deposits near the shore (Agora Shore).' },
        { name: 'Silver Spoon', desc: 'Dropped by monsters in Colony 9.' },
        { name: 'Rainbow Slug', desc: 'Rare collectable from ether deposits near water.' }
    ]
}, {
    area: 'Tephra Cave',
    items: [
        { name: 'Black Chips', desc: 'Collectable from ether deposits inside Tephra Cave.' },
        { name: 'Blue Crystal', desc: 'Collectable from ether deposits inside the cave.' },
        { name: 'Red Crystal', desc: 'Collectable from ether deposits inside the cave.' },
        { name: 'Green Crystal', desc: 'Collectable from ether deposits inside the cave.' },
        { name: 'Yellow Crystal', desc: 'Collectable from ether deposits inside the cave.' },
        { name: 'White Crystal', desc: 'Collectable from ether deposits inside the cave.' },
        { name: 'Glowing Orb', desc: 'Rare collectable from ether deposits in deep areas.' },
        { name: 'Fossilized Bone', desc: 'Collectable from ether deposits in fossil chambers.' },
        { name: 'Spider Web', desc: 'Dropped by Arachnos in the cave.' },
        { name: 'Bat Wing', desc: 'Dropped by bats in the cave.' }
    ]
}, {
    area: 'Bionis\' Leg',
    items: [
        { name: 'Blue Grass', desc: 'Collectable from ether deposits on the Leg.' },
        { name: 'Pink Grass', desc: 'Collectable from ether deposits on the Leg.' },
        { name: 'Yellow Grass', desc: 'Collectable from ether deposits on the Leg.' },
        { name: 'Red Grass', desc: 'Collectable from ether deposits on the Leg.' },
        { name: 'Green Grass', desc: 'Collectable from ether deposits on the Leg.' },
        { name: 'White Grass', desc: 'Collectable from ether deposits on the Leg.' },
        { name: 'Giant Egg', desc: 'Dropped by birds on the Leg.' },
        { name: 'Rabbit Fur', desc: 'Dropped by rabbits on the Leg.' },
        { name: 'Rhino Horn', desc: 'Dropped by rhinos on the Leg.' },
        { name: 'Treant Bark', desc: 'Dropped by Treants on the Leg.' }
    ]
}, {
    area: 'Colony 6',
    items: [
        { name: 'Blue Flower', desc: 'Collectable from ether deposits in Colony 6.' },
        { name: 'Pink Flower', desc: 'Collectable from ether deposits in Colony 6.' },
        { name: 'Yellow Flower', desc: 'Collectable from ether deposits in Colony 6.' },
        { name: 'Red Flower', desc: 'Collectable from ether deposits in Colony 6.' },
        { name: 'White Flower', desc: 'Collectable from ether deposits in Colony 6.' },
        { name: 'Green Flower', desc: 'Collectable from ether deposits in Colony 6.' },
        { name: 'Black Flower', desc: 'Collectable from ether deposits in Colony 6.' },
        { name: 'Golden Flower', desc: 'Rare collectable from ether deposits in Colony 6.' }
    ]
}, {
    area: 'Ether Mine',
    items: [
        { name: 'Blue Gem', desc: 'Collectable from ether deposits in the Ether Mine.' },
        { name: 'Red Gem', desc: 'Collectable from ether deposits in the Ether Mine.' },
        { name: 'Green Gem', desc: 'Collectable from ether deposits in the Ether Mine.' },
        { name: 'Yellow Gem', desc: 'Collectable from ether deposits in the Ether Mine.' },
        { name: 'White Gem', desc: 'Collectable from ether deposits in the Ether Mine.' },
        { name: 'Black Gem', desc: 'Collectable from ether deposits in the Ether Mine.' },
        { name: 'Crystal Shard', desc: 'Collectable from ether deposits in the Ether Mine.' },
        { name: 'Gold Nugget', desc: 'Rare collectable from ether deposits deep in the mine.' }
    ]
}, {
    area: 'Satorl Marsh',
    items: [
        { name: 'Blue Fungus', desc: 'Collectable from ether deposits in Satorl Marsh.' },
        { name: 'Red Fungus', desc: 'Collectable from ether deposits in Satorl Marsh.' },
        { name: 'Green Fungus', desc: 'Collectable from ether deposits in Satorl Marsh.' },
        { name: 'Yellow Fungus', desc: 'Collectable from ether deposits in Satorl Marsh.' },
        { name: 'White Fungus', desc: 'Collectable from ether deposits in Satorl Marsh.' },
        { name: 'Black Fungus', desc: 'Collectable from ether deposits in Satorl Marsh.' },
        { name: 'Glowing Moss', desc: 'Collectable from ether deposits in the marsh.' },
        { name: 'Giant Beetle', desc: 'Dropped by beetles in Satorl Marsh.' }
    ]
}, {
    area: 'Makna Forest',
    items: [
        { name: 'Blue Fruit', desc: 'Collectable from ether deposits in Makna Forest.' },
        { name: 'Red Fruit', desc: 'Collectable from ether deposits in Makna Forest.' },
        { name: 'Green Fruit', desc: 'Collectable from ether deposits in Makna Forest.' },
        { name: 'Yellow Fruit', desc: 'Collectable from ether deposits in Makna Forest.' },
        { name: 'White Fruit', desc: 'Collectable from ether deposits in Makna Forest.' },
        { name: 'Black Fruit', desc: 'Collectable from ether deposits in Makna Forest.' },
        { name: 'Golden Fruit', desc: 'Rare collectable from ether deposits in the forest.' },
        { name: 'Forest Berry', desc: 'Collectable from ether deposits in the forest.' },
        { name: 'Honey', desc: 'Dropped by bees in Makna Forest.' }
    ]
}, {
    area: 'Frontier Village',
    items: [
        { name: 'Nopon Feather', desc: 'Collectable from ether deposits in Frontier Village.' },
        { name: 'Nopon Cloth', desc: 'Collectable from ether deposits in Frontier Village.' },
        { name: 'Nopon Meat', desc: 'Collectable from ether deposits in Frontier Village.' },
        { name: 'Nopon Veggie', desc: 'Collectable from ether deposits in Frontier Village.' },
        { name: 'Nopon Fruit', desc: 'Collectable from ether deposits in Frontier Village.' },
        { name: 'Nopon Berry', desc: 'Collectable from ether deposits in Frontier Village.' },
        { name: 'Nopon Mushroom', desc: 'Collectable from ether deposits in Frontier Village.' },
        { name: 'Nopon Gold', desc: 'Rare collectable from ether deposits in the village.' }
    ]
}, {
    area: 'Eryth Sea',
    items: [
        { name: 'Blue Coral', desc: 'Collectable from ether deposits in Eryth Sea (underwater).' },
        { name: 'Red Coral', desc: 'Collectable from ether deposits in Eryth Sea.' },
        { name: 'Green Coral', desc: 'Collectable from ether deposits in Eryth Sea.' },
        { name: 'Yellow Coral', desc: 'Collectable from ether deposits in Eryth Sea.' },
        { name: 'White Coral', desc: 'Collectable from ether deposits in Eryth Sea.' },
        { name: 'Black Coral', desc: 'Collectable from ether deposits in Eryth Sea.' },
        { name: 'Pearl', desc: 'Rare collectable from ether deposits in Eryth Sea.' },
        { name: 'Seaweed', desc: 'Collectable from ether deposits near the shore.' }
    ]
}, {
    area: 'Alcamoth',
    items: [
        { name: 'High Entia Bread', desc: 'Collectable from ether deposits in Alcamoth.' },
        { name: 'High Entia Cheese', desc: 'Collectable from ether deposits in Alcamoth.' },
        { name: 'High Entia Wine', desc: 'Collectable from ether deposits in Alcamoth.' },
        { name: 'High Entia Meat', desc: 'Collectable from ether deposits in Alcamoth.' },
        { name: 'High Entia Veggie', desc: 'Collectable from ether deposits in Alcamoth.' },
        { name: 'High Entia Fruit', desc: 'Collectable from ether deposits in Alcamoth.' },
        { name: 'High Entia Jewel', desc: 'Rare collectable from ether deposits in Alcamoth.' },
        { name: 'Imperial Ring', desc: 'Rare collectable from ether deposits in Alcamoth.' }
    ]
}, {
    area: 'High Entia Tomb',
    items: [
        { name: 'Ancient Coin', desc: 'Collectable from ether deposits in the High Entia Tomb.' },
        { name: 'Ancient Stone', desc: 'Collectable from ether deposits in the tomb.' },
        { name: 'Ancient Fabric', desc: 'Collectable from ether deposits in the tomb.' },
        { name: 'Ancient Weapon', desc: 'Collectable from ether deposits in the tomb.' },
        { name: 'Ancient Armor', desc: 'Collectable from ether deposits in the tomb.' },
        { name: 'Ancient Jewel', desc: 'Collectable from ether deposits in the tomb.' },
        { name: 'Ancient Tablet', desc: 'Rare collectable from ether deposits in the tomb.' },
        { name: 'Ancient Crown', desc: 'Rare collectable from ether deposits in the tomb.' }
    ]
}, {
    area: 'Valak Mountain',
    items: [
        { name: 'Blue Ice', desc: 'Collectable from ether deposits on Valak Mountain.' },
        { name: 'Red Ice', desc: 'Collectable from ether deposits on Valak Mountain.' },
        { name: 'Green Ice', desc: 'Collectable from ether deposits on Valak Mountain.' },
        { name: 'Yellow Ice', desc: 'Collectable from ether deposits on Valak Mountain.' },
        { name: 'White Ice', desc: 'Collectable from ether deposits on Valak Mountain.' },
        { name: 'Black Ice', desc: 'Collectable from ether deposits on Valak Mountain.' },
        { name: 'Frozen Flower', desc: 'Collectable from ether deposits on Valak Mountain.' },
        { name: 'Ice Crystal', desc: 'Rare collectable from ether deposits on Valak Mountain.' }
    ]
}, {
    area: 'Sword Valley',
    items: [
        { name: 'Broken Sword', desc: 'Collectable from ether deposits in Sword Valley.' },
        { name: 'Broken Shield', desc: 'Collectable from ether deposits in Sword Valley.' },
        { name: 'Broken Armor', desc: 'Collectable from ether deposits in Sword Valley.' },
        { name: 'Mechon Parts', desc: 'Dropped by Mechon in Sword Valley.' },
        { name: 'Mechon Weapon', desc: 'Dropped by Mechon in Sword Valley.' },
        { name: 'Mechon Core', desc: 'Dropped by Mechon in Sword Valley.' },
        { name: 'Mechon Shell', desc: 'Rare drop from Mechon in Sword Valley.' },
        { name: 'Mechon Eye', desc: 'Rare drop from Mechon in Sword Valley.' }
    ]
}, {
    area: 'Galahad Fortress',
    items: [
        { name: 'Fortress Metal', desc: 'Collectable from ether deposits in Galahad Fortress.' },
        { name: 'Fortress Wire', desc: 'Collectable from ether deposits in Galahad Fortress.' },
        { name: 'Fortress Gear', desc: 'Collectable from ether deposits in Galahad Fortress.' },
        { name: 'Fortress Bolt', desc: 'Collectable from ether deposits in Galahad Fortress.' },
        { name: 'Fortress Spring', desc: 'Collectable from ether deposits in Galahad Fortress.' },
        { name: 'Fortress Circuit', desc: 'Collectable from ether deposits in Galahad Fortress.' },
        { name: 'Fortress Battery', desc: 'Collectable from ether deposits in Galahad Fortress.' },
        { name: 'Fortress Core', desc: 'Rare collectable from ether deposits in the fortress.' }
    ]
}, {
    area: 'Fallen Arm',
    items: [
        { name: 'Machina Gear', desc: 'Collectable from ether deposits on the Fallen Arm.' },
        { name: 'Machina Wire', desc: 'Collectable from ether deposits on the Fallen Arm.' },
        { name: 'Machina Bolt', desc: 'Collectable from ether deposits on the Fallen Arm.' },
        { name: 'Machina Spring', desc: 'Collectable from ether deposits on the Fallen Arm.' },
        { name: 'Machina Circuit', desc: 'Collectable from ether deposits on the Fallen Arm.' },
        { name: 'Machina Battery', desc: 'Collectable from ether deposits on the Fallen Arm.' },
        { name: 'Machina Core', desc: 'Rare collectable from ether deposits on the Fallen Arm.' },
        { name: 'Machina Jewel', desc: 'Rare collectable from ether deposits on the Fallen Arm.' }
    ]
}, {
    area: 'Mechonis Field',
    items: [
        { name: 'Mechonis Metal', desc: 'Collectable from ether deposits in Mechonis Field.' },
        { name: 'Mechonis Wire', desc: 'Collectable from ether deposits in Mechonis Field.' },
        { name: 'Mechonis Gear', desc: 'Collectable from ether deposits in Mechonis Field.' },
        { name: 'Mechonis Bolt', desc: 'Collectable from ether deposits in Mechonis Field.' },
        { name: 'Mechonis Spring', desc: 'Collectable from ether deposits in Mechonis Field.' },
        { name: 'Mechonis Circuit', desc: 'Collectable from ether deposits in Mechonis Field.' },
        { name: 'Mechonis Battery', desc: 'Collectable from ether deposits in Mechonis Field.' },
        { name: 'Mechonis Core', desc: 'Rare collectable from ether deposits in Mechonis Field.' }
    ]
}, {
    area: 'Central Factory',
    items: [
        { name: 'Factory Plate', desc: 'Collectable from ether deposits in the Central Factory.' },
        { name: 'Factory Pipe', desc: 'Collectable from ether deposits in the Central Factory.' },
        { name: 'Factory Wire', desc: 'Collectable from ether deposits in the Central Factory.' },
        { name: 'Factory Gear', desc: 'Collectable from ether deposits in the Central Factory.' },
        { name: 'Factory Bolt', desc: 'Collectable from ether deposits in the Central Factory.' },
        { name: 'Factory Spring', desc: 'Collectable from ether deposits in the Central Factory.' },
        { name: 'Factory Circuit', desc: 'Collectable from ether deposits in the Central Factory.' },
        { name: 'Factory Core', desc: 'Rare collectable from ether deposits in the Central Factory.' }
    ]
}, {
    area: 'Agniratha',
    items: [
        { name: 'Agniratha Gold', desc: 'Collectable from ether deposits in Agniratha.' },
        { name: 'Agniratha Silver', desc: 'Collectable from ether deposits in Agniratha.' },
        { name: 'Agniratha Bronze', desc: 'Collectable from ether deposits in Agniratha.' },
        { name: 'Agniratha Crystal', desc: 'Collectable from ether deposits in Agniratha.' },
        { name: 'Agniratha Stone', desc: 'Collectable from ether deposits in Agniratha.' },
        { name: 'Agniratha Cloth', desc: 'Collectable from ether deposits in Agniratha.' },
        { name: 'Agniratha Jewel', desc: 'Rare collectable from ether deposits in Agniratha.' },
        { name: 'Agniratha Crown', desc: 'Rare collectable from ether deposits in Agniratha.' }
    ]
}, {
    area: 'Bionis\' Interior',
    items: [
        { name: 'Bionis Flesh', desc: 'Collectable from ether deposits inside the Bionis.' },
        { name: 'Bionis Bone', desc: 'Collectable from ether deposits inside the Bionis.' },
        { name: 'Bionis Blood', desc: 'Collectable from ether deposits inside the Bionis.' },
        { name: 'Bionis Nerve', desc: 'Collectable from ether deposits inside the Bionis.' },
        { name: 'Bionis Heart', desc: 'Rare collectable from ether deposits deep inside.' },
        { name: 'Bionis Core', desc: 'Rare collectable from ether deposits deep inside.' }
    ]
}, {
    area: 'Prison Island',
    items: [
        { name: 'Prison Key', desc: 'Collectable from ether deposits on Prison Island.' },
        { name: 'Prison Stone', desc: 'Collectable from ether deposits on Prison Island.' },
        { name: 'Prison Cloth', desc: 'Collectable from ether deposits on Prison Island.' },
        { name: 'Prison Metal', desc: 'Collectable from ether deposits on Prison Island.' },
        { name: 'Prison Jewel', desc: 'Rare collectable from ether deposits on Prison Island.' },
        { name: 'Prison Crown', desc: 'Rare collectable from ether deposits on Prison Island.' }
    ]
}, {
    area: 'Other (Trading)',
    items: [
        { name: 'Love Source', desc: 'Obtained through trading with specific NPCs.' },
        { name: 'Mumkhar\'s Razor', desc: 'Obtained by overtrading with Kurralth during "Adventurers in Peril".' },
        { name: 'Monado Replica', desc: 'Obtained through crafting or trading.' },
        { name: 'Rare Flower', desc: 'Obtained through trading with certain Nopon.' },
        { name: 'Ancient Medallion', desc: 'Obtained through trading with High Entia NPCs.' },
        { name: 'Machina Core Chip', desc: 'Obtained through trading with Machina.' }
    ]
}];