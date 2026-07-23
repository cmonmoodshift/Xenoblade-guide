// ==============================================================
//  QUEST DATA
// ==============================================================
const questData = [{
    area: 'Colony 9',
    quests: [
        { name: 'Monster Quest 1', desc: 'Defeat 5 Bunnivs near the colony gates.', missable: false },
        { name: 'Monster Quest 2', desc: 'Defeat 5 Vangs in the military district.', missable: false },
        { name: 'Monster Quest 3', desc: 'Defeat 5 Piranhax near Agora Shore.', missable: false },
        { name: 'Monster Quest 4', desc: 'Defeat 5 Flamii near the Ether Light.', missable: false },
        { name: 'Monster Quest 5', desc: 'Defeat 5 Brogs near the Tephra Cave entrance.', missable: false },
        { name: 'Material Quest 1', desc: 'Collect 3 Blue Chains from ether deposits.', missable: false },
        { name: 'Material Quest 2', desc: 'Collect 3 Gold Bugs from grassy areas.', missable: false },
        { name: 'The Research Project', desc: 'Collect 5 items for the researcher in the Commercial District.', missable: false },
        { name: 'The Gem Man\'s Challenge', desc: 'Find the Gem Man and complete his request.', missable: false },
        { name: 'The Road Home', desc: 'Help a lost citizen find their way back.', missable: true,
            by: 'Before leaving Colony 9' },
        { name: 'Colony 9 Defense', desc: 'Defeat the monsters threatening the colony perimeter.', missable: true,
            by: 'Before leaving Colony 9' },
        { name: 'Fiora\'s Request', desc: 'Collect a specific item for Fiora (triggers early).', missable: true,
            by: 'Before the attack on Colony 9' }
    ]
}, {
    area: 'Tephra Cave',
    quests: [
        { name: 'Cave Exploration', desc: 'Explore all areas of Tephra Cave.', missable: false },
        { name: 'Spider Extermination', desc: 'Defeat 10 Arachnos in the cave.', missable: false },
        { name: 'Crystal Collection', desc: 'Collect 5 Blue Crystals from ether deposits.', missable: false },
        { name: 'Fossil Hunter', desc: 'Collect 3 Fossilized Bones from the Fossil Chamber.', missable: false },
        { name: 'The Hidden Stairway', desc: 'Discover the Secret Area in Tephra Cave.', missable: false }
    ]
}, {
    area: 'Bionis\' Leg (Refugee Camp)',
    quests: [
        { name: 'Refugee Camp Supplies', desc: 'Collect food and materials for the refugees.', missable: true,
            by: 'Before moving the camp to Colony 6' },
        { name: 'Protect the Refugees', desc: 'Defeat the monsters attacking the camp.', missable: true,
            by: 'Before moving the camp to Colony 6' },
        { name: 'Missing Person', desc: 'Find a lost refugee in the Leg area.', missable: true,
            by: 'Before moving the camp to Colony 6' },
        { name: 'Monster Repellent', desc: 'Collect herbs to repel monsters from the camp.', missable: true,
            by: 'Before moving the camp to Colony 6' },
        { name: 'Medic\'s Request', desc: 'Bring medicine to the camp doctor.', missable: true,
            by: 'Before moving the camp to Colony 6' },
        { name: 'Juju\'s Errand', desc: 'Help Juju with a delivery (story-related).', missable: true,
            by: 'Before moving the camp to Colony 6' },
        { name: 'Otharon\'s Request', desc: 'Collect materials for Otharon\'s project.', missable: true,
            by: 'Before moving the camp to Colony 6' }
    ]
}, {
    area: 'Colony 6',
    quests: [
        { name: 'Colony 6 Reconstruction', desc: 'Begin rebuilding the colony (ongoing).', missable: false },
        { name: 'Residential District Cleanup', desc: 'Clear monsters from the residential area.', missable: false },
        { name: 'Commercial District Revival', desc: 'Gather materials to reopen shops.', missable: false },
        { name: 'The Missing Children', desc: 'Find the children lost in the ruins.', missable: true,
            by: 'Before the end of Mechonis Field' },
        { name: 'The Ghost of Colony 6', desc: 'Investigate the mysterious sightings.', missable: true,
            by: 'Before the end of Mechonis Field' },
        { name: 'Colony 6 Defense Force', desc: 'Recruit and train new guards for the colony.', missable: true,
            by: 'Before the end of Mechonis Field' },
        { name: 'Ether Supply', desc: 'Collect Ether Cylinders for the colony\'s power.', missable: false }
    ]
}, {
    area: 'Ether Mine',
    quests: [
        { name: 'Mine Investigation', desc: 'Explore the depths of the Ether Mine.', missable: false },
        { name: 'Ether Crystal Harvest', desc: 'Collect 10 Ether Crystals from the mine.', missable: false },
        { name: 'Machine Maintenance', desc: 'Repair the mining equipment.', missable: false },
        { name: 'The Hidden Machine Room', desc: 'Discover the Secret Area in the Ether Mine.', missable: false },
        { name: 'Mine Safety', desc: 'Defeat the monsters endangering the miners.', missable: true,
            by: 'Before the Ether Mine boss' }
    ]
}, {
    area: 'Satorl Marsh',
    quests: [
        { name: 'Marsh Expedition', desc: 'Explore all areas of Satorl Marsh.', missable: false },
        { name: 'Swamp Monster Hunt', desc: 'Defeat 5 Hodes in the marsh.', missable: false },
        { name: 'Rare Herb Collection', desc: 'Collect 5 Glowing Mosses from the marsh.', missable: false },
        { name: 'The Altar Ritual', desc: 'Investigate the ceremony at the Altar.', missable: true,
            by: 'Before leaving Satorl Marsh' },
        { name: 'Sororal Statues Mystery', desc: 'Solve the puzzle of the twin statues.', missable: true,
            by: 'Before leaving Satorl Marsh' },
        { name: 'Starlight Rock', desc: 'Discover the Secret Area on the cliff.', missable: false }
    ]
}, {
    area: 'Makna Forest',
    quests: [
        { name: 'Forest Exploration', desc: 'Explore all areas of Makna Forest.', missable: false },
        { name: 'Dinosaur Extermination', desc: 'Defeat 5 Dinobeasts in the forest.', missable: false },
        { name: 'Fruit Gathering', desc: 'Collect 5 Golden Fruits from the forest.', missable: false },
        { name: 'The King Tree', desc: 'Discover the Secret Area at the King Tree.', missable: false },
        { name: 'Lovers\' Lookout', desc: 'Visit the romantic viewpoint.', missable: false },
        { name: 'The Great Falls', desc: 'Find the entrance behind the waterfall.', missable: true,
            by: 'Before leaving Makna Forest' }
    ]
}, {
    area: 'Frontier Village',
    quests: [
        { name: 'Nopon Community', desc: 'Complete tasks for the Nopon villagers.', missable: false },
        { name: 'The Chief\'s Request', desc: 'Collect items for the Nopon Chief.', missable: false },
        { name: 'Nopon Trading', desc: 'Trade with the Nopon merchants.', missable: false },
        { name: 'Heropon Riki', desc: 'Help Riki with his hero duties.', missable: true,
            by: 'Before leaving Frontier Village' },
        { name: 'Nopon Festival', desc: 'Gather materials for the village festival.', missable: true,
            by: 'Before leaving Frontier Village' }
    ]
}, {
    area: 'Eryth Sea',
    quests: [
        { name: 'Sea Exploration', desc: 'Explore all islands in Eryth Sea.', missable: false },
        { name: 'Reef Investigation', desc: 'Examine the Hovering Reefs.', missable: false },
        { name: 'Lighthouse Duty', desc: 'Deliver supplies to the Eryth Lighthouse.', missable: true,
            by: 'Before leaving Eryth Sea' },
        { name: 'Sealed Island', desc: 'Investigate the sealed island.', missable: true,
            by: 'Before leaving Eryth Sea' },
        { name: 'Underwater Treasure', desc: 'Dive for treasure in the sea.', missable: false }
    ]
}, {
    area: 'Alcamoth',
    quests: [
        { name: 'High Entia Affairs', desc: 'Complete tasks for the High Entia citizens.', missable: false },
        { name: 'Imperial Palace', desc: 'Deliver a message to the palace.', missable: true,
            by: 'Before leaving Alcamoth' },
        { name: 'Park Cleanup', desc: 'Clear monsters from the park.', missable: true,
            by: 'Before leaving Alcamoth' },
        { name: 'The Conspiracy', desc: 'Investigate the rumours in Alcamoth.', missable: true,
            by: 'Before leaving Alcamoth' },
        { name: 'High Entia Festival', desc: 'Gather items for the festival.', missable: true,
            by: 'Before leaving Alcamoth' },
        { name: 'Melia\'s Request', desc: 'Help Melia with a personal task.', missable: true,
            by: 'Before leaving Alcamoth' }
    ]
}, {
    area: 'High Entia Tomb',
    quests: [
        { name: 'Tomb Exploration', desc: 'Explore all areas of the High Entia Tomb.', missable: false },
        { name: 'Ancient Artifacts', desc: 'Collect 5 Ancient Coins from the tomb.', missable: false },
        { name: 'The Sealed Room', desc: 'Discover the Secret Area in the tomb.', missable: false },
        { name: 'Tomb Guardian', desc: 'Defeat the guardian of the tomb.', missable: false }
    ]
}, {
    area: 'Valak Mountain',
    quests: [
        { name: 'Mountain Expedition', desc: 'Explore all areas of Valak Mountain.', missable: false },
        { name: 'Snow Monster Hunt', desc: 'Defeat 5 Rhoguls on the mountain.', missable: false },
        { name: 'Ice Crystal Collection', desc: 'Collect 5 Ice Crystals from ether deposits.', missable: false },
        { name: 'The Secret Hot Spring', desc: 'Discover the Secret Area on Valak Mountain.', missable: false },
        { name: 'Zaktus Camp', desc: 'Help the Nopon merchants at Zaktus.', missable: false },
        { name: 'Frozen Falls', desc: 'Investigate the frozen waterfall.', missable: false }
    ]
}, {
    area: 'Sword Valley',
    quests: [
        { name: 'Battlefield Investigation', desc: 'Explore all areas of Sword Valley.', missable: true,
            by: 'Before the end of Mechonis Field' },
        { name: 'Mechon Extermination', desc: 'Defeat 10 Mechon in Sword Valley.', missable: true,
            by: 'Before the end of Mechonis Field' },
        { name: 'Mechon Factory', desc: 'Discover the Secret Area in Sword Valley.', missable: true,
            by: 'Before the end of Mechonis Field' },
        { name: 'Dunban\'s Request', desc: 'Help Dunban with a personal mission.', missable: true,
            by: 'Before the end of Mechonis Field' },
        { name: 'Valley Supplies', desc: 'Collect supplies for the army camp.', missable: true,
            by: 'Before the end of Mechonis Field' },
        { name: 'The Faced Mechon', desc: 'Investigate the Faced Mechon sightings.', missable: true,
            by: 'Before the end of Mechonis Field' }
    ]
}, {
    area: 'Galahad Fortress',
    quests: [
        { name: 'Fortress Infiltration', desc: 'Explore all areas of Galahad Fortress.', missable: true,
            by: 'Before the end of Mechonis Field' },
        { name: 'Mechon Commander', desc: 'Defeat the Mechon commanders in the fortress.', missable: true,
            by: 'Before the end of Mechonis Field' },
        { name: 'Fortress Secrets', desc: 'Discover the hidden passages in the fortress.', missable: true,
            by: 'Before the end of Mechonis Field' },
        { name: 'The Command Room', desc: 'Reach the command room at the heart of the fortress.', missable: true,
            by: 'Before the end of Mechonis Field' }
    ]
}, {
    area: 'Fallen Arm',
    quests: [
        { name: 'Machina Refuge', desc: 'Explore the hidden Machina village.', missable: false },
        { name: 'Machina Help', desc: 'Complete tasks for the Machina refugees.', missable: false },
        { name: 'The Secluded Island', desc: 'Discover the Secret Area on the Fallen Arm.', missable: false },
        { name: 'Disturbed Waters', desc: 'Investigate the mysterious disturbances in the water.', missable: false },
        { name: 'Daedala Hunt', desc: 'Defeat the Ancient Daedala (Superboss).', missable: false }
    ]
}, {
    area: 'Mechonis Field',
    quests: [
        { name: 'Field Exploration', desc: 'Explore all areas of Mechonis Field.', missable: true,
            by: 'Before the Agniratha lockout' },
        { name: 'Mechon Patrol', desc: 'Defeat the Mechon patrolling the field.', missable: true,
            by: 'Before the Agniratha lockout' },
        { name: 'Hidden Control Room', desc: 'Discover the Secret Area in Mechonis Field.', missable: true,
            by: 'Before the Agniratha lockout' },
        { name: 'Lift Repair', desc: 'Fix the main lift in the field.', missable: true,
            by: 'Before the Agniratha lockout' },
        { name: 'Observation Platform', desc: 'Reach the highest point of the field.', missable: true,
            by: 'Before the Agniratha lockout' }
    ]
}, {
    area: 'Central Factory',
    quests: [
        { name: 'Factory Investigation', desc: 'Explore all areas of the Central Factory.', missable: true,
            by: 'Before the Agniratha lockout' },
        { name: 'Production Line', desc: 'Inspect the assembly line and report back.', missable: true,
            by: 'Before the Agniratha lockout' },
        { name: 'Core Control', desc: 'Reach the core of the factory.', missable: true,
            by: 'Before the Agniratha lockout' },
        { name: 'Factory Sabotage', desc: 'Sabotage the Mechon production.', missable: true,
            by: 'Before the Agniratha lockout' }
    ]
}, {
    area: 'Agniratha',
    quests: [
        { name: 'City Exploration', desc: 'Explore all areas of Agniratha.', missable: true,
            by: 'Before the Agniratha lockout' },
        { name: 'Imperial Investigation', desc: 'Investigate the Imperial Tower.', missable: true,
            by: 'Before the Agniratha lockout' },
        { name: 'Agniratha Citizens', desc: 'Help the remaining citizens of Agniratha.', missable: true,
            by: 'Before the Agniratha lockout' },
        { name: 'The Emperor\'s Throne', desc: 'Reach the throne room in the tower.', missable: true,
            by: 'Before the Agniratha lockout' }
    ]
}, {
    area: 'Bionis\' Interior',
    quests: [
        { name: 'Inner Passage', desc: 'Explore the passage inside the Bionis.', missable: false },
        { name: 'Heart of the Bionis', desc: 'Reach the very core of the titan.', missable: false },
        { name: 'The Disciple', desc: 'Defeat the Disciple at the end of the interior.', missable: false }
    ]
}, {
    area: 'Prison Island',
    quests: [
        { name: 'Prison Exploration', desc: 'Explore all areas of Prison Island.', missable: false },
        { name: 'Central Prison', desc: 'Investigate the central holding area.', missable: false },
        { name: 'The Observatory', desc: 'Reach the highest point of Prison Island.', missable: false },
        { name: 'Final Confrontation', desc: 'Defeat the final boss of Prison Island.', missable: false }
    ]
}];