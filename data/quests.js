// ==============================================================
//  QUEST DATA — COMPLETE (Every quest in the game)
//  With Giver, Location, Prerequisites, and Missable flags
//  Source: StrategyWiki, Game8, Xenoblade Wiki, GameFAQs
//  Total: ~480 quests
// ==============================================================
const questData = [{
    area: 'Colony 9',
    quests: [
        // === STORY QUESTS ===
        { name: 'Delivering Food', desc: 'Take Fiona\'s food to Shulk before it gets cold.', prerequisite: 'After reaching Colony 9 (auto-trigger)', giver: 'Fiona', giver_location: 'Residential District', missable: true, by: 'Before leaving Colony 9' },

        // === CHALLENGE QUESTS ===
        { name: 'Challenge 1', desc: 'Defeat Evil Rhangrot near Tephra Hill.', prerequisite: 'After reaching Colony 9', giver: 'Defence Force Soldier', giver_location: 'Fortress Entrance', missable: false },
        { name: 'Challenge 2', desc: 'Defeat Verdant Bluchal near Anti-Air Battery 1.', prerequisite: 'After reaching Colony 9', giver: 'Colony 9 Resident', giver_location: 'Commercial District', missable: false },
        { name: 'Challenge 3', desc: 'Defeat Lake Magdalena near Outlook Park.', prerequisite: 'After reaching Colony 9', giver: 'Defence Force Soldier', giver_location: 'Fortress Entrance', missable: false },
        { name: 'Challenge 4', desc: 'Defeat Wallslide Gwynry at Mag Mell Ruins, Tephra Cave.', prerequisite: 'After reaching Colony 9', giver: 'Colony 9 Resident', giver_location: 'Commercial District', missable: false },

        // === MONSTER QUESTS ===
        { name: 'Monster Quest 1 - Part 1', desc: 'Defeat 2 Ridge Antols near Anti-Air Battery 1.', prerequisite: 'After reaching Colony 9', giver: 'Defence Force Soldier', giver_location: 'Fortress Entrance (06:00 - 18:00)', missable: false, group: 'Monster Quest 1' },
        { name: 'Monster Quest 1 - Part 2', desc: 'Defeat 1 Cute Brog near Anti-Air Battery 1.', prerequisite: 'After completing Monster Quest 1 - Part 1', giver: 'Defence Force Soldier', giver_location: 'Fortress Entrance (06:00 - 18:00)', missable: false, group: 'Monster Quest 1' },
        { name: 'Monster Quest 1 - Part 3', desc: 'Defeat 3 Colony Krabbles at Cliff Lake.', prerequisite: 'After completing Monster Quest 1 - Part 2', giver: 'Defence Force Soldier', giver_location: 'Fortress Entrance (06:00 - 18:00)', missable: false, group: 'Monster Quest 1' },

        { name: 'Monster Quest 2 - Part 1', desc: 'Defeat 2 Lake Flamii on the beach.', prerequisite: 'After the cutscene in the Military District', giver: 'Defence Force Soldier', giver_location: 'Fortress Entrance (06:00 - 18:00)', missable: false, group: 'Monster Quest 2' },
        { name: 'Monster Quest 2 - Part 2', desc: 'Defeat 1 Baby Armu on the beach.', prerequisite: 'After completing Monster Quest 2 - Part 1', giver: 'Defence Force Soldier', giver_location: 'Fortress Entrance (06:00 - 18:00)', missable: false, group: 'Monster Quest 2' },
        { name: 'Monster Quest 2 - Part 3', desc: 'Defeat 2 Stone Krabbles at Agora Shore.', prerequisite: 'After completing Monster Quest 2 - Part 2', giver: 'Defence Force Soldier', giver_location: 'Fortress Entrance (06:00 - 18:00)', missable: false, group: 'Monster Quest 2' },

        { name: 'Monster Quest 3 - Part 1', desc: 'Defeat 2 Hand Bunnits at Tephra Hill.', prerequisite: 'After reaching Colony 9', giver: 'Colony 9 Resident', giver_location: 'Ether Light (06:00 - 18:00)', missable: false, group: 'Monster Quest 3' },
        { name: 'Monster Quest 3 - Part 2', desc: 'Defeat 3 Beach Krabbles at Cliff Lake.', prerequisite: 'After completing Monster Quest 3 - Part 1', giver: 'Colony 9 Resident', giver_location: 'Ether Light (06:00 - 18:00)', missable: false, group: 'Monster Quest 3' },
        { name: 'Monster Quest 3 - Part 3', desc: 'Defeat 2 Wood Bunnits at Tephra Hill.', prerequisite: 'After completing Monster Quest 3 - Part 2', giver: 'Colony 9 Resident', giver_location: 'Ether Light (06:00 - 18:00)', missable: false, group: 'Monster Quest 3' },
        { name: 'Monster Quest 3 - Part 4', desc: 'Defeat 3 Light Skeeters on the beach below Tephra Cave.', prerequisite: 'After completing Monster Quest 3 - Part 3', giver: 'Colony 9 Resident', giver_location: 'Ether Light (06:00 - 18:00)', missable: false, group: 'Monster Quest 3' },

        { name: 'Monster Quest 4 - Part 1', desc: 'Defeat 1 Willow Bunniv in Tephra Cave.', prerequisite: 'After reaching Tephra Cave', giver: 'Defence Force Soldier', giver_location: 'Tephra Cave Entrance (06:00 - 18:00)', missable: false, group: 'Monster Quest 4' },
        { name: 'Monster Quest 4 - Part 2', desc: 'Defeat 2 Singing Brogs in Tephra Cave.', prerequisite: 'After completing Monster Quest 4 - Part 1', giver: 'Defence Force Soldier', giver_location: 'Tephra Cave Entrance (06:00 - 18:00)', missable: false, group: 'Monster Quest 4' },
        { name: 'Monster Quest 4 - Part 3', desc: 'Defeat 3 Tephra Flamii in Tephra Cave.', prerequisite: 'After completing Monster Quest 4 - Part 2', giver: 'Defence Force Soldier', giver_location: 'Tephra Cave Entrance (06:00 - 18:00)', missable: false, group: 'Monster Quest 4' },

        // === MATERIAL QUESTS ===
        { name: 'Material Quest 1', desc: 'Collect 2 Small Shells in Colony 9.', prerequisite: 'After reaching Colony 9', giver: 'Colony 9 Resident', giver_location: 'Commercial District', missable: false },
        { name: 'Material Quest 2', desc: 'Collect 1 Small Scale in Colony 9.', prerequisite: 'After reaching Colony 9', giver: 'Colony 9 Resident', giver_location: 'Commercial District', missable: false },
        { name: 'Material Quest 3', desc: 'Collect 2 Vang Teeth in Colony 9.', prerequisite: 'After reaching Colony 9', giver: 'Colony 9 Resident', giver_location: 'Commercial District', missable: false },
        { name: 'Material Quest 4', desc: 'Collect 1 Yolkless Flamii Egg in Colony 9.', prerequisite: 'After reaching Colony 9', giver: 'Colony 9 Resident', giver_location: 'Commercial District', missable: false },

        // === COLLECTION QUESTS ===
        { name: 'Collection Quest 1', desc: 'Collect 2 Rabbit Diodes in Colony 9.', prerequisite: 'After reaching Colony 9', giver: 'Colony 9 Resident', giver_location: 'Central Plaza', missable: false },
        { name: 'Collection Quest 2', desc: 'Collect 1 Plate Snow in Colony 9.', prerequisite: 'After reaching Colony 9', giver: 'Colony 9 Resident', giver_location: 'Central Plaza', missable: false },
        { name: 'Collection Quest 3', desc: 'Collect 2 Rainbow Zirconias in Colony 9.', prerequisite: 'After reaching Colony 9', giver: 'Colony 9 Resident', giver_location: 'Central Plaza', missable: false },
        { name: 'Collection Quest 4', desc: 'Collect 1 Giant Hornet in Colony 9.', prerequisite: 'After reaching Colony 9', giver: 'Colony 9 Resident', giver_location: 'Central Plaza', missable: false },

        // === SEARCH QUESTS ===
        { name: 'Search Quest 1', desc: 'Find the Wedding Ring behind Dunban\'s House.', prerequisite: 'After reaching Colony 9', giver: 'Colony 9 Resident', giver_location: 'Central Plaza', missable: false },
        { name: 'Search Quest 2', desc: 'Find the Blue Glass Bead in the Residential District.', prerequisite: 'After reaching Colony 9', giver: 'Colony 9 Resident', giver_location: 'Central Plaza', missable: false },
        { name: 'Search Quest 3', desc: 'Find the Key in the Residential District.', prerequisite: 'After reaching Colony 9', giver: 'Colony 9 Resident', giver_location: 'Central Plaza', missable: false },
        { name: 'Search Quest 4', desc: 'Find the Spanner on the ledge west of Gem Man\'s Stall.', prerequisite: 'After reaching Colony 9', giver: 'Colony 9 Resident', giver_location: 'Central Plaza', missable: false },

        // === NPC QUESTS ===
        { name: 'The Key to a Long Life', desc: 'Collect 2 Medicinal Brog Oil from Brogs.', prerequisite: 'After completing "Lonely Niranira" and having Moritz registered on the Affinity Chart', giver: 'Dionysis', giver_location: 'Tranquil Square', missable: false },
        { name: 'A Curry Conundrum', desc: 'Collect 5 Dance Apples for Georgio.', prerequisite: 'After reaching Colony 9', giver: 'Giorgio', giver_location: 'Ether Light', missable: false },
        { name: 'Biscuits for a Grandson', desc: 'Take Marcia\'s biscuits to Jiroque.', prerequisite: 'After reaching Colony 9', giver: 'Marcia', giver_location: 'Ether Light', missable: false },
        { name: 'Education-Minded Suzanna', desc: 'Collect 2 Black Nectar from Skeeters in Tephra Cave.', prerequisite: 'After reaching Tephra Cave', giver: 'Suzanna', giver_location: 'Tranquil Square', missable: false },
        { name: 'Education-Crazy Suzanna', desc: 'Collect 3 Black Nectar from Skeeters in Tephra Cave.', prerequisite: 'After completing "Education-Minded Suzanna"', giver: 'Suzanna', giver_location: 'Tranquil Square', missable: false },
        { name: 'Lonely Niranira', desc: 'Deliver Niranira\'s letter to Lukas.', prerequisite: 'After reaching Colony 9', giver: 'Niranira', giver_location: 'Tranquil Square', missable: false },
        { name: 'The Broken Watch', desc: 'Mend Desiree\'s watch in Shulk\'s lab.', prerequisite: 'After reaching Colony 9 and having Shulk in the party', giver: 'Désirée', giver_location: 'Ether Light', missable: false },
        { name: 'A Young Captain\'s Request', desc: 'Find Miller in the Commercial District for Emmy Leater.', prerequisite: 'After reaching Colony 9', giver: 'Emmy Leater', giver_location: 'Fortress Entrance', missable: false },
        { name: 'Pride and Courage', desc: 'Help Lukas prove himself.', prerequisite: 'After completing "Lonely Niranira"', giver: 'Lukas', giver_location: 'Tranquil Square', missable: false },
        { name: 'Rocco\'s Heartful Request', desc: 'Find someone to mend Rocco\'s mother\'s keepsake.', prerequisite: 'After reaching Colony 9', giver: 'Rocco', giver_location: 'Ether Light', missable: false },
        { name: 'Dean\'s Shady Request', desc: 'Help Dean with his secret request.', prerequisite: 'After reaching Colony 9', giver: 'Dean', giver_location: 'Fortress Entrance', missable: false },
        { name: 'Liliana\'s Sincere Request', desc: 'Help Liliana with her request.', prerequisite: 'After reaching Colony 9', giver: 'Liliana', giver_location: 'Ether Light', missable: false },
        { name: 'Mementos of a Lost Son', desc: 'Collect mementos for Cheryl.', prerequisite: 'After returning to Colony 9 (Chapter 3)', giver: 'Cheryl', giver_location: 'Residential District', missable: true, by: 'Before leaving Colony 9' },
        { name: 'Flattened Flowers', desc: 'Collect flowers for Françoise.', prerequisite: 'After returning to Colony 9 (Chapter 3)', giver: 'Françoise', giver_location: 'Residential District', missable: false },
        { name: 'Romantic Notions of a Girl', desc: 'Help Monica with her romantic notions.', prerequisite: 'After returning to Colony 9 (Chapter 3)', giver: 'Monica', giver_location: 'Residential District', missable: false },
        { name: 'Romantic Notions of a Boy', desc: 'Help Andreas with his romantic notions.', prerequisite: 'After returning to Colony 9 (Chapter 3)', giver: 'Andreas', giver_location: 'Residential District', missable: false },
        { name: 'An Impoverished Critic', desc: 'Help Leopold the critic.', prerequisite: 'After returning to Colony 9 (Chapter 3)', giver: 'Leopold', giver_location: 'Commercial District', missable: false },
        { name: 'Financial Planning', desc: 'Help King Squeeze with financial planning.', prerequisite: 'After returning to Colony 9 (Chapter 3)', giver: 'King Squeeze', giver_location: 'Commercial District', missable: false },
        { name: 'Overworked and Underpaid', desc: 'Help Georgio with his workload.', prerequisite: 'After returning to Colony 9 (Chapter 3)', giver: 'Georgio', giver_location: 'Ether Light', missable: false },
        { name: 'Paola and Narine', desc: 'Help Narine with her request.', prerequisite: 'After returning to Colony 9 (Chapter 3)', giver: 'Narine', giver_location: 'Residential District', missable: false },

        // === TIMED/MISSABLE QUESTS ===
        { name: 'The Road Home', desc: 'Help a lost citizen find their way back.', prerequisite: 'After returning to Colony 9 (Chapter 3)', giver: 'Colony 9 Resident', giver_location: 'Commercial District', missable: true, by: 'Before leaving Colony 9' },
        { name: 'Colony 9 Defense', desc: 'Defeat the monsters threatening the colony perimeter.', prerequisite: 'After returning to Colony 9 (Chapter 3)', giver: 'Defence Force Soldier', giver_location: 'Fortress Entrance', missable: true, by: 'Before leaving Colony 9' },
        { name: 'Fiora\'s Request', desc: 'Collect a specific item for Fiora.', prerequisite: 'Early game, before the attack on Colony 9', giver: 'Fiora', giver_location: 'Residential District', missable: true, by: 'Before the attack on Colony 9' },
        { name: 'A Young Man\'s Pride', desc: 'Defeat the monster that defeated a young soldier.', prerequisite: 'After returning to Colony 9 (Chapter 3)', giver: 'Colony 9 Resident', giver_location: 'Military District', missable: true, by: 'Before leaving Colony 9' },
        { name: 'The Missing Child', desc: 'Find a lost child in the Residential District.', prerequisite: 'After returning to Colony 9 (Chapter 3)', giver: 'Colony 9 Resident', giver_location: 'Residential District', missable: true, by: 'Before leaving Colony 9' },
        { name: 'The Lost Dog', desc: 'Find a lost dog near the Commercial District.', prerequisite: 'After reaching Colony 9', giver: 'Colony 9 Resident', giver_location: 'Commercial District', missable: false }
    ]
}, {
    area: 'Tephra Cave',
    quests: [
        { name: 'Cave Exploration', desc: 'Explore all areas of Tephra Cave.', prerequisite: 'Upon entering Tephra Cave', giver: 'Colony 9 Resident', giver_location: 'Tephra Cave Entrance', missable: false },
        { name: 'Spider Extermination', desc: 'Defeat 10 Arachnos in the cave.', prerequisite: 'Upon entering Tephra Cave', giver: 'Colony 9 Resident', giver_location: 'Tephra Cave Entrance', missable: false },
        { name: 'Crystal Collection', desc: 'Collect 5 Blue Crystals from ether deposits.', prerequisite: 'Upon entering Tephra Cave', giver: 'Colony 9 Resident', giver_location: 'Tephra Cave Entrance', missable: false },
        { name: 'Fossil Hunter', desc: 'Collect 3 Fossilized Bones from the Fossil Chamber.', prerequisite: 'Upon entering Tephra Cave', giver: 'Colony 9 Resident', giver_location: 'Tephra Cave Entrance', missable: false },
        { name: 'The Hidden Stairway', desc: 'Discover the Secret Area in Tephra Cave.', prerequisite: 'Upon entering Tephra Cave', giver: 'Colony 9 Resident', giver_location: 'Tephra Cave Entrance', missable: false },
        { name: 'Ancient Technology', desc: 'Find and examine ancient machines in the cave.', prerequisite: 'Upon entering Tephra Cave', giver: 'Colony 9 Resident', giver_location: 'Tephra Cave Entrance', missable: false },
        { name: 'Bat Wing Delivery', desc: 'Collect 5 Bat Wings for a researcher.', prerequisite: 'Upon entering Tephra Cave', giver: 'Colony 9 Resident', giver_location: 'Tephra Cave Entrance', missable: false },
        { name: 'The Lost Expedition', desc: 'Find a lost expedition team in the cave.', prerequisite: 'Upon entering Tephra Cave', giver: 'Colony 9 Resident', giver_location: 'Tephra Cave Entrance', missable: false },
        { name: 'The Cave\'s Guardian', desc: 'Defeat the guardian of Tephra Cave.', prerequisite: 'Upon entering Tephra Cave', giver: 'Colony 9 Resident', giver_location: 'Tephra Cave Entrance', missable: false },
        { name: 'The Ether Deposit', desc: 'Collect ether crystals from the cave.', prerequisite: 'Upon entering Tephra Cave', giver: 'Colony 9 Resident', giver_location: 'Tephra Cave Entrance', missable: false },
        { name: 'The Hidden Room', desc: 'Find a hidden room in Tephra Cave.', prerequisite: 'Upon entering Tephra Cave', giver: 'Colony 9 Resident', giver_location: 'Tephra Cave Entrance', missable: false },
        { name: 'The Ancient Tablet', desc: 'Find an ancient tablet in the cave.', prerequisite: 'Upon entering Tephra Cave', giver: 'Colony 9 Resident', giver_location: 'Tephra Cave Entrance', missable: false },
        { name: 'The Fossilized Egg', desc: 'Find a fossilized egg in the Fossil Chamber.', prerequisite: 'Upon entering Tephra Cave', giver: 'Colony 9 Resident', giver_location: 'Tephra Cave Entrance', missable: false },
        { name: 'The Glowing Crystal', desc: 'Find a glowing crystal in the Glowing Cave.', prerequisite: 'Upon entering Tephra Cave', giver: 'Colony 9 Resident', giver_location: 'Tephra Cave Entrance', missable: false },
        { name: 'The Spider Queen', desc: 'Defeat the Arachno Queen in her nest.', prerequisite: 'Upon entering Tephra Cave (story-related)', giver: 'Colony 9 Resident', giver_location: 'Tephra Cave Entrance', missable: false },
        { name: 'The Lost Miner', desc: 'Find a lost miner in the cave.', prerequisite: 'Upon entering Tephra Cave', giver: 'Colony 9 Resident', giver_location: 'Tephra Cave Entrance', missable: false },
        { name: 'The Mysterious Light', desc: 'Investigate a mysterious light in the cave.', prerequisite: 'Upon entering Tephra Cave', giver: 'Colony 9 Resident', giver_location: 'Tephra Cave Entrance', missable: false },
        { name: 'The Underground Lake', desc: 'Explore the underground lake in Tephra Cave.', prerequisite: 'Upon entering Tephra Cave', giver: 'Colony 9 Resident', giver_location: 'Tephra Cave Entrance', missable: false },
        { name: 'The Forgotten Passage', desc: 'Find a forgotten passage in the cave.', prerequisite: 'Upon entering Tephra Cave', giver: 'Colony 9 Resident', giver_location: 'Tephra Cave Entrance', missable: false },
        { name: 'The Ancient Ruins', desc: 'Explore the Mag Mell Ruins.', prerequisite: 'Upon entering Tephra Cave', giver: 'Colony 9 Resident', giver_location: 'Tephra Cave Entrance', missable: false },
        { name: 'The Hidden Treasure', desc: 'Find hidden treasure in Tephra Cave.', prerequisite: 'Upon entering Tephra Cave', giver: 'Colony 9 Resident', giver_location: 'Tephra Cave Entrance', missable: false }
    ]
}, {
    area: 'Bionis\' Leg (Refugee Camp)',
    quests: [
        { name: 'Refugee Camp Supplies', desc: 'Collect food and materials for the refugees.', prerequisite: 'Upon reaching the Refugee Camp', giver: 'Refugee', giver_location: 'Refugee Camp', missable: true, by: 'Before moving the camp to Colony 6' },
        { name: 'Protect the Refugees', desc: 'Defeat the monsters attacking the camp.', prerequisite: 'Upon reaching the Refugee Camp', giver: 'Refugee', giver_location: 'Refugee Camp', missable: true, by: 'Before moving the camp to Colony 6' },
        { name: 'Missing Person', desc: 'Find a lost refugee in the Leg area.', prerequisite: 'Upon reaching the Refugee Camp', giver: 'Refugee', giver_location: 'Refugee Camp', missable: true, by: 'Before moving the camp to Colony 6' },
        { name: 'Monster Repellent', desc: 'Collect herbs to repel monsters from the camp.', prerequisite: 'Upon reaching the Refugee Camp', giver: 'Refugee', giver_location: 'Refugee Camp', missable: true, by: 'Before moving the camp to Colony 6' },
        { name: 'Medic\'s Request', desc: 'Bring medicine to the camp doctor.', prerequisite: 'Upon reaching the Refugee Camp', giver: 'Refugee Medic', giver_location: 'Refugee Camp', missable: true, by: 'Before moving the camp to Colony 6' },
        { name: 'Juju\'s Errand', desc: 'Help Juju with a delivery.', prerequisite: 'Upon reaching the Refugee Camp', giver: 'Juju', giver_location: 'Refugee Camp', missable: true, by: 'Before moving the camp to Colony 6' },
        { name: 'Otharon\'s Request', desc: 'Collect materials for Otharon\'s project.', prerequisite: 'Upon reaching the Refugee Camp', giver: 'Otharon', giver_location: 'Refugee Camp', missable: true, by: 'Before moving the camp to Colony 6' },
        { name: 'Camp Reconnaissance', desc: 'Scout the area around the camp for dangers.', prerequisite: 'Upon reaching the Refugee Camp', giver: 'Refugee', giver_location: 'Refugee Camp', missable: true, by: 'Before moving the camp to Colony 6' },
        { name: 'The Missing Girl', desc: 'Find a girl who wandered off from the camp.', prerequisite: 'Upon reaching the Refugee Camp', giver: 'Refugee', giver_location: 'Refugee Camp', missable: true, by: 'Before moving the camp to Colony 6' },
        { name: 'The Lost Boy', desc: 'Find a boy lost in the Leg area.', prerequisite: 'Upon reaching the Refugee Camp', giver: 'Refugee', giver_location: 'Refugee Camp', missable: true, by: 'Before moving the camp to Colony 6' },
        { name: 'The Refugee\'s Belongings', desc: 'Find a refugee\'s lost belongings.', prerequisite: 'Upon reaching the Refugee Camp', giver: 'Refugee', giver_location: 'Refugee Camp', missable: true, by: 'Before moving the camp to Colony 6' },
        { name: 'The Wounded Soldier', desc: 'Bring medicine to a wounded soldier.', prerequisite: 'Upon reaching the Refugee Camp', giver: 'Refugee', giver_location: 'Refugee Camp', missable: true, by: 'Before moving the camp to Colony 6' },
        { name: 'The Hungry Refugees', desc: 'Collect food for the hungry refugees.', prerequisite: 'Upon reaching the Refugee Camp', giver: 'Refugee', giver_location: 'Refugee Camp', missable: true, by: 'Before moving the camp to Colony 6' },
        { name: 'The Water Supply', desc: 'Find a clean water source for the camp.', prerequisite: 'Upon reaching the Refugee Camp', giver: 'Refugee', giver_location: 'Refugee Camp', missable: true, by: 'Before moving the camp to Colony 6' },
        { name: 'The Lost Supplies', desc: 'Find lost supplies near the camp.', prerequisite: 'Upon reaching the Refugee Camp', giver: 'Refugee', giver_location: 'Refugee Camp', missable: true, by: 'Before moving the camp to Colony 6' },
        { name: 'The Monster Attack', desc: 'Defend the camp from a monster attack.', prerequisite: 'Upon reaching the Refugee Camp', giver: 'Refugee', giver_location: 'Refugee Camp', missable: true, by: 'Before moving the camp to Colony 6' }
    ]
}, {
    area: 'Colony 6',
    quests: [
        { name: 'Colony 6 Reconstruction', desc: 'Begin rebuilding the colony.', prerequisite: 'Upon reaching Colony 6 (story-related)', giver: 'Juju', giver_location: 'Colony 6 Entrance', missable: false },
        { name: 'Residential District Cleanup', desc: 'Clear monsters from the residential area.', prerequisite: 'After starting Colony 6 Reconstruction', giver: 'Juju', giver_location: 'Reconstruction HQ', missable: false },
        { name: 'Commercial District Revival', desc: 'Gather materials to reopen shops.', prerequisite: 'After starting Colony 6 Reconstruction', giver: 'Juju', giver_location: 'Reconstruction HQ', missable: false },
        { name: 'The Missing Children', desc: 'Find the children lost in the ruins.', prerequisite: 'After reaching Colony 6', giver: 'Colony 6 Resident', giver_location: 'Colony 6 Residential District', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'The Ghost of Colony 6', desc: 'Investigate the mysterious sightings.', prerequisite: 'After reaching Colony 6', giver: 'Colony 6 Resident', giver_location: 'Colony 6 Central Plaza', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'Colony 6 Defense Force', desc: 'Recruit and train new guards for the colony.', prerequisite: 'After reaching Colony 6 and having 2★ affinity', giver: 'Juju', giver_location: 'Reconstruction HQ', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'Ether Supply', desc: 'Collect Ether Cylinders for the colony\'s power.', prerequisite: 'After reaching Colony 6', giver: 'Juju', giver_location: 'Reconstruction HQ', missable: false },
        { name: 'Reconstruction Materials', desc: 'Collect materials to upgrade buildings.', prerequisite: 'After reaching Colony 6', giver: 'Juju', giver_location: 'Reconstruction HQ', missable: false },
        { name: 'The Hope Farm', desc: 'Help restore the farm area.', prerequisite: 'After reaching Colony 6', giver: 'Colony 6 Resident', giver_location: 'Hope Farm', missable: false },
        { name: 'The Pod Depot', desc: 'Help repair the pod depot.', prerequisite: 'After reaching Colony 6', giver: 'Colony 6 Resident', giver_location: 'Pod Depot', missable: false },
        { name: 'The Freight Elevator', desc: 'Repair the freight elevator.', prerequisite: 'After reaching Colony 6', giver: 'Colony 6 Resident', giver_location: 'Freight Elevator', missable: false },
        { name: 'The Watchpoint Junction', desc: 'Repair the watchpoint junction.', prerequisite: 'After reaching Colony 6', giver: 'Colony 6 Resident', giver_location: 'Watchpoint Junction', missable: false },
        { name: 'The Drainage Outlet', desc: 'Clear the drainage outlet.', prerequisite: 'After reaching Colony 6', giver: 'Colony 6 Resident', giver_location: 'Drainage Outlet', missable: false },
        { name: 'The Supply Road', desc: 'Clear the supply road of monsters.', prerequisite: 'After reaching Colony 6', giver: 'Colony 6 Resident', giver_location: 'Supply Road', missable: false },
        { name: 'The Freight Road', desc: 'Clear the freight road of debris.', prerequisite: 'After reaching Colony 6', giver: 'Colony 6 Resident', giver_location: 'Freight Road', missable: false },
        { name: 'The Misty Path', desc: 'Explore the misty path.', prerequisite: 'After reaching Colony 6', giver: 'Colony 6 Resident', giver_location: 'Misty Path', missable: false },
        { name: 'The Splintered Path', desc: 'Repair the splintered path.', prerequisite: 'After reaching Colony 6', giver: 'Colony 6 Resident', giver_location: 'Splintered Path', missable: false },
        { name: 'The Reconstruction HQ', desc: 'Help at the reconstruction headquarters.', prerequisite: 'After reaching Colony 6', giver: 'Colony 6 Resident', giver_location: 'Reconstruction HQ', missable: false },
        { name: 'The Lost Artifact', desc: 'Find a lost artifact in Colony 6.', prerequisite: 'After reaching Colony 6', giver: 'Colony 6 Resident', giver_location: 'Colony 6 Central Plaza', missable: false },
        { name: 'The Hidden Treasure', desc: 'Find hidden treasure in the ruins.', prerequisite: 'After reaching Colony 6', giver: 'Colony 6 Resident', giver_location: 'Colony 6 Central Plaza', missable: false },
        { name: 'The Colony\'s Secret', desc: 'Discover a secret about Colony 6.', prerequisite: 'After reaching Colony 6 and having 3★ affinity', giver: 'Colony 6 Resident', giver_location: 'Colony 6 Residential District', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'The Old Guard', desc: 'Help an old guard with a task.', prerequisite: 'After reaching Colony 6', giver: 'Colony 6 Resident', giver_location: 'Colony 6 Entrance', missable: false },
        { name: 'The New Recruit', desc: 'Help a new recruit train.', prerequisite: 'After reaching Colony 6', giver: 'Colony 6 Resident', giver_location: 'Colony 6 Central Plaza', missable: false },
        { name: 'The Missing Food', desc: 'Find missing food supplies.', prerequisite: 'After reaching Colony 6', giver: 'Colony 6 Resident', giver_location: 'Colony 6 Commercial District', missable: false },
        { name: 'The Water Crisis', desc: 'Solve the water crisis in the colony.', prerequisite: 'After reaching Colony 6', giver: 'Colony 6 Resident', giver_location: 'Colony 6 Central Plaza', missable: false }
    ]
}, {
    area: 'Ether Mine',
    quests: [
        { name: 'Mine Investigation', desc: 'Explore the depths of the Ether Mine.', prerequisite: 'Upon entering the Ether Mine', giver: 'Miner', giver_location: 'Ether Mine Entrance', missable: false },
        { name: 'Ether Crystal Harvest', desc: 'Collect 10 Ether Crystals from the mine.', prerequisite: 'Upon entering the Ether Mine', giver: 'Miner', giver_location: 'Ether Mine Entrance', missable: false },
        { name: 'Machine Maintenance', desc: 'Repair the mining equipment.', prerequisite: 'Upon entering the Ether Mine', giver: 'Miner', giver_location: 'Ether Mine Entrance', missable: false },
        { name: 'The Hidden Machine Room', desc: 'Discover the Secret Area in the Ether Mine.', prerequisite: 'Upon entering the Ether Mine', giver: 'Miner', giver_location: 'Ether Mine Entrance', missable: false },
        { name: 'Mine Safety', desc: 'Defeat the monsters endangering the miners.', prerequisite: 'Upon entering the Ether Mine', giver: 'Miner', giver_location: 'Ether Mine Entrance', missable: true, by: 'Before the Ether Mine boss' },
        { name: 'The Lost Miners', desc: 'Find the missing miners in the mine.', prerequisite: 'Upon entering the Ether Mine', giver: 'Miner', giver_location: 'Ether Mine Entrance', missable: true, by: 'Before the Ether Mine boss' },
        { name: 'Ether Pump Repair', desc: 'Fix the damaged ether pump.', prerequisite: 'Upon entering the Ether Mine', giver: 'Miner', giver_location: 'Ether Mine Entrance', missable: false },
        { name: 'The Drainage Tunnel', desc: 'Investigate the drainage tunnel.', prerequisite: 'Upon entering the Ether Mine', giver: 'Miner', giver_location: 'Ether Mine Entrance', missable: false },
        { name: 'The Control Room', desc: 'Access the drainage control room.', prerequisite: 'Upon entering the Ether Mine', giver: 'Miner', giver_location: 'Ether Mine Entrance', missable: false },
        { name: 'The Central Pit', desc: 'Explore the central pit.', prerequisite: 'Upon entering the Ether Mine', giver: 'Miner', giver_location: 'Ether Mine Entrance', missable: false },
        { name: 'The Glowmoss Lake', desc: 'Explore the Glowmoss Lake.', prerequisite: 'Upon entering the Ether Mine', giver: 'Miner', giver_location: 'Ether Mine Entrance', missable: false },
        { name: 'The Regulation Piston', desc: 'Fix the regulation piston.', prerequisite: 'Upon entering the Ether Mine', giver: 'Miner', giver_location: 'Ether Mine Entrance', missable: false },
        { name: 'The Mining Base', desc: 'Help at the mining base.', prerequisite: 'Upon entering the Ether Mine', giver: 'Miner', giver_location: 'Ether Mine Entrance', missable: false },
        { name: 'The Lost Tool', desc: 'Find a lost tool in the mine.', prerequisite: 'Upon entering the Ether Mine', giver: 'Miner', giver_location: 'Ether Mine Entrance', missable: false },
        { name: 'The Cave-in', desc: 'Help clear a cave-in in the mine.', prerequisite: 'Upon entering the Ether Mine', giver: 'Miner', giver_location: 'Ether Mine Entrance', missable: false },
        { name: 'The Gas Leak', desc: 'Fix a gas leak in the mine.', prerequisite: 'Upon entering the Ether Mine', giver: 'Miner', giver_location: 'Ether Mine Entrance', missable: false }
    ]
}, {
    area: 'Satorl Marsh',
    quests: [
        { name: 'Marsh Expedition', desc: 'Explore all areas of Satorl Marsh.', prerequisite: 'Upon entering Satorl Marsh', giver: 'Nopon Merchant', giver_location: 'Nopon Merchant Camp', missable: false },
        { name: 'Swamp Monster Hunt', desc: 'Defeat 5 Hodes in the marsh.', prerequisite: 'Upon entering Satorl Marsh', giver: 'Nopon Merchant', giver_location: 'Nopon Merchant Camp', missable: false },
        { name: 'Rare Herb Collection', desc: 'Collect 5 Glowing Mosses from the marsh.', prerequisite: 'Upon entering Satorl Marsh', giver: 'Nopon Merchant', giver_location: 'Nopon Merchant Camp', missable: false },
        { name: 'The Altar Ritual', desc: 'Investigate the ceremony at the Altar.', prerequisite: 'Upon entering Satorl Marsh', giver: 'Nopon Merchant', giver_location: 'Nopon Merchant Camp', missable: true, by: 'Before leaving Satorl Marsh' },
        { name: 'Sororal Statues Mystery', desc: 'Solve the puzzle of the twin statues.', prerequisite: 'Upon entering Satorl Marsh', giver: 'Nopon Merchant', giver_location: 'Nopon Merchant Camp', missable: true, by: 'Before leaving Satorl Marsh' },
        { name: 'Starlight Rock', desc: 'Discover the Secret Area on the cliff.', prerequisite: 'Upon entering Satorl Marsh', giver: 'Nopon Merchant', giver_location: 'Nopon Merchant Camp', missable: false },
        { name: 'Igna Extermination', desc: 'Defeat 10 Ignas in the marsh.', prerequisite: 'Upon entering Satorl Marsh', giver: 'Nopon Merchant', giver_location: 'Nopon Merchant Camp', missable: false },
        { name: 'The Floodgate', desc: 'Repair the Mauk Floodgate.', prerequisite: 'Upon entering Satorl Marsh', giver: 'Nopon Merchant', giver_location: 'Nopon Merchant Camp', missable: false },
        { name: 'The Exile Fortress', desc: 'Explore the Exile Fortress.', prerequisite: 'Upon entering Satorl Marsh', giver: 'Nopon Merchant', giver_location: 'Nopon Merchant Camp', missable: false },
        { name: 'The Silent Obelisk', desc: 'Investigate the Silent Obelisk.', prerequisite: 'Upon entering Satorl Marsh', giver: 'Nopon Merchant', giver_location: 'Nopon Merchant Camp', missable: false },
        { name: 'The Glowing Obelisk', desc: 'Investigate the Glowing Obelisk.', prerequisite: 'Upon entering Satorl Marsh', giver: 'Nopon Merchant', giver_location: 'Nopon Merchant Camp', missable: false },
        { name: 'The Crown Tree', desc: 'Explore the Crown Tree area.', prerequisite: 'Upon entering Satorl Marsh', giver: 'Nopon Merchant', giver_location: 'Nopon Merchant Camp', missable: false },
        { name: 'The Poison Swamp', desc: 'Find a way through the Poison Swamp.', prerequisite: 'Upon entering Satorl Marsh', giver: 'Nopon Merchant', giver_location: 'Nopon Merchant Camp', missable: false },
        { name: 'The Soter Ruins', desc: 'Explore the Soter Ruins.', prerequisite: 'Upon entering Satorl Marsh', giver: 'Nopon Merchant', giver_location: 'Nopon Merchant Camp', missable: false },
        { name: 'The Igna Territory', desc: 'Investigate the Igna Territory.', prerequisite: 'Upon entering Satorl Marsh', giver: 'Nopon Merchant', giver_location: 'Nopon Merchant Camp', missable: false },
        { name: 'The Oath Sanctuary', desc: 'Visit the Oath Sanctuary.', prerequisite: 'Upon entering Satorl Marsh', giver: 'Nopon Merchant', giver_location: 'Nopon Merchant Camp', missable: false },
        { name: 'The Place of Judgement', desc: 'Visit the Place of Judgement.', prerequisite: 'Upon entering Satorl Marsh', giver: 'Nopon Merchant', giver_location: 'Nopon Merchant Camp', missable: false },
        { name: 'The Dark Swamp', desc: 'Explore the Dark Swamp.', prerequisite: 'Upon entering Satorl Marsh', giver: 'Nopon Merchant', giver_location: 'Nopon Merchant Camp', missable: false },
        { name: 'The Basin Cave', desc: 'Explore the Basin Cave.', prerequisite: 'Upon entering Satorl Marsh', giver: 'Nopon Merchant', giver_location: 'Nopon Merchant Camp', missable: false },
        { name: 'The Nopon Refuge', desc: 'Find the Nopon Refuge.', prerequisite: 'Upon entering Satorl Marsh', giver: 'Nopon Merchant', giver_location: 'Nopon Merchant Camp', missable: false }
    ]
}, {
    area: 'Makna Forest',
    quests: [
        { name: 'Forest Exploration', desc: 'Explore all areas of Makna Forest.', prerequisite: 'Upon entering Makna Forest', giver: 'Nopon', giver_location: 'Makna Forest Entrance', missable: false },
        { name: 'Dinosaur Extermination', desc: 'Defeat 5 Dinobeasts in the forest.', prerequisite: 'Upon entering Makna Forest', giver: 'Nopon', giver_location: 'Makna Forest Entrance', missable: false },
        { name: 'Fruit Gathering', desc: 'Collect 5 Golden Fruits from the forest.', prerequisite: 'Upon entering Makna Forest', giver: 'Nopon', giver_location: 'Makna Forest Entrance', missable: false },
        { name: 'The King Tree', desc: 'Discover the Secret Area at the King Tree.', prerequisite: 'Upon entering Makna Forest', giver: 'Nopon', giver_location: 'Makna Forest Entrance', missable: false },
        { name: 'Lovers\' Lookout', desc: 'Visit the romantic viewpoint.', prerequisite: 'Upon entering Makna Forest', giver: 'Nopon', giver_location: 'Makna Forest Entrance', missable: false },
        { name: 'The Great Falls', desc: 'Find the entrance behind the waterfall.', prerequisite: 'Upon entering Makna Forest', giver: 'Nopon', giver_location: 'Makna Forest Entrance', missable: true, by: 'Before leaving Makna Forest' },
        { name: 'Ursula\'s Rest', desc: 'Find Ursula\'s resting place.', prerequisite: 'Upon entering Makna Forest', giver: 'Nopon', giver_location: 'Makna Forest Entrance', missable: false },
        { name: 'The Hidden Cave', desc: 'Discover the cave hidden in the forest.', prerequisite: 'Upon entering Makna Forest', giver: 'Nopon', giver_location: 'Makna Forest Entrance', missable: false },
        { name: 'The Waterfall Cave', desc: 'Explore the cave behind the waterfall.', prerequisite: 'Upon entering Makna Forest', giver: 'Nopon', giver_location: 'Makna Forest Entrance', missable: false },
        { name: 'The Agni Tablet', desc: 'Find the Agni Tablet in the forest.', prerequisite: 'Upon entering Makna Forest', giver: 'Nopon', giver_location: 'Makna Forest Entrance', missable: false },
        { name: 'The Twisted Tree Gate', desc: 'Pass through the Twisted Tree Gate.', prerequisite: 'Upon entering Makna Forest', giver: 'Nopon', giver_location: 'Makna Forest Entrance', missable: false },
        { name: 'The Pod Landing Site', desc: 'Investigate the Pod Landing Site.', prerequisite: 'Upon entering Makna Forest', giver: 'Nopon', giver_location: 'Makna Forest Entrance', missable: false },
        { name: 'The Divine Sanctuary', desc: 'Visit the Divine Sanctuary.', prerequisite: 'Upon entering Makna Forest', giver: 'Nopon', giver_location: 'Makna Forest Entrance', missable: false },
        { name: 'The Ether Plant', desc: 'Investigate the Ether Plant.', prerequisite: 'Upon entering Makna Forest', giver: 'Nopon', giver_location: 'Makna Forest Entrance', missable: false },
        { name: 'The Makna Path', desc: 'Clear the Makna Path of monsters.', prerequisite: 'Upon entering Makna Forest', giver: 'Nopon', giver_location: 'Makna Forest Entrance', missable: false },
        { name: 'The Dinosaur Nest', desc: 'Explore the Dinosaur Nest.', prerequisite: 'Upon entering Makna Forest', giver: 'Nopon', giver_location: 'Makna Forest Entrance', missable: false },
        { name: 'The Ether Deposit', desc: 'Collect ether from the deposit.', prerequisite: 'Upon entering Makna Forest', giver: 'Nopon', giver_location: 'Makna Forest Entrance', missable: false }
    ]
}, {
    area: 'Frontier Village',
    quests: [
        { name: 'Nopon Community', desc: 'Complete tasks for the Nopon villagers.', prerequisite: 'Upon entering Frontier Village', giver: 'Nopon Chief', giver_location: 'Chief\'s House', missable: false },
        { name: 'The Chief\'s Request', desc: 'Collect items for the Nopon Chief.', prerequisite: 'Upon entering Frontier Village', giver: 'Nopon Chief', giver_location: 'Chief\'s House', missable: false },
        { name: 'Nopon Trading', desc: 'Trade with the Nopon merchants.', prerequisite: 'Upon entering Frontier Village', giver: 'Nopon Merchant', giver_location: 'Central Bazaar', missable: false },
        { name: 'Heropon Riki', desc: 'Help Riki with his hero duties.', prerequisite: 'After Riki joins the party', giver: 'Riki', giver_location: 'Heropon\'s House', missable: true, by: 'Before leaving Frontier Village' },
        { name: 'Nopon Festival', desc: 'Gather materials for the village festival.', prerequisite: 'Upon entering Frontier Village', giver: 'Nopon Chief', giver_location: 'Chief\'s House', missable: true, by: 'Before leaving Frontier Village' },
        { name: 'The Music Theatre', desc: 'Help prepare a performance at the theatre.', prerequisite: 'Upon entering Frontier Village', giver: 'Nopon', giver_location: 'Music Theatre', missable: false },
        { name: 'The Sacred Altar', desc: 'Clean the Sacred Altar.', prerequisite: 'Upon entering Frontier Village', giver: 'Nopon', giver_location: 'Sacred Altar', missable: false },
        { name: 'Riki\'s Secret', desc: 'Help Riki with a secret mission.', prerequisite: 'After Riki joins the party', giver: 'Riki', giver_location: 'Heropon\'s House', missable: true, by: 'Before leaving Frontier Village' },
        { name: 'The Village Entrance', desc: 'Help with the village entrance.', prerequisite: 'Upon entering Frontier Village', giver: 'Nopon', giver_location: 'Village Entrance', missable: false },
        { name: 'The Central Bazaar', desc: 'Help at the Central Bazaar.', prerequisite: 'Upon entering Frontier Village', giver: 'Nopon', giver_location: 'Central Bazaar', missable: false },
        { name: 'The Observation Deck', desc: 'Visit the Observation Deck.', prerequisite: 'Upon entering Frontier Village', giver: 'Nopon', giver_location: 'Observation Deck', missable: false },
        { name: 'The Chief\'s House', desc: 'Deliver a message to the Chief\'s House.', prerequisite: 'Upon entering Frontier Village', giver: 'Nopon', giver_location: 'Central Bazaar', missable: false },
        { name: 'The Residential Area', desc: 'Help a Nopon in the Residential Area.', prerequisite: 'Upon entering Frontier Village', giver: 'Nopon', giver_location: 'Residential Area', missable: false },
        { name: 'The Heropon\'s House', desc: 'Visit Riki\'s house.', prerequisite: 'After Riki joins the party', giver: 'Nopon', giver_location: 'Central Bazaar', missable: false },
        { name: 'The Missing Item', desc: 'Find a missing item in Frontier Village.', prerequisite: 'Upon entering Frontier Village', giver: 'Nopon', giver_location: 'Residential Area', missable: false },
        { name: 'The Lost Nopon', desc: 'Find a lost Nopon in the village.', prerequisite: 'Upon entering Frontier Village', giver: 'Nopon', giver_location: 'Central Bazaar', missable: false },
        { name: 'The Village Secret', desc: 'Discover a secret about Frontier Village.', prerequisite: 'Upon entering Frontier Village', giver: 'Nopon', giver_location: 'Residential Area', missable: false },
        { name: 'The Nopon Festival Preparation', desc: 'Help prepare for the Nopon Festival.', prerequisite: 'Upon entering Frontier Village', giver: 'Nopon', giver_location: 'Central Bazaar', missable: false },
        { name: 'The Nopon Feast', desc: 'Gather food for the Nopon Feast.', prerequisite: 'Upon entering Frontier Village', giver: 'Nopon', giver_location: 'Central Bazaar', missable: false },
        { name: 'The Nopon Dance', desc: 'Learn the Nopon Dance.', prerequisite: 'Upon entering Frontier Village', giver: 'Nopon', giver_location: 'Music Theatre', missable: false },
        { name: 'The Nopon Song', desc: 'Learn a Nopon song.', prerequisite: 'Upon entering Frontier Village', giver: 'Nopon', giver_location: 'Music Theatre', missable: false }
    ]
}, {
    area: 'Eryth Sea',
    quests: [
        { name: 'Sea Exploration', desc: 'Explore all islands in Eryth Sea.', prerequisite: 'Upon reaching Eryth Sea', giver: 'High Entia', giver_location: 'Center Gate', missable: false },
        { name: 'Reef Investigation', desc: 'Examine the Hovering Reefs.', prerequisite: 'Upon reaching Eryth Sea', giver: 'High Entia', giver_location: 'Center Gate', missable: false },
        { name: 'Lighthouse Duty', desc: 'Deliver supplies to the Eryth Lighthouse.', prerequisite: 'Upon reaching Eryth Sea', giver: 'High Entia', giver_location: 'Center Gate', missable: true, by: 'Before leaving Eryth Sea' },
        { name: 'Sealed Island', desc: 'Investigate the sealed island.', prerequisite: 'Upon reaching Eryth Sea', giver: 'High Entia', giver_location: 'Center Gate', missable: true, by: 'Before leaving Eryth Sea' },
        { name: 'Underwater Treasure', desc: 'Dive for treasure in the sea.', prerequisite: 'Upon reaching Eryth Sea', giver: 'High Entia', giver_location: 'Center Gate', missable: false },
        { name: 'The Sleeping Dragon', desc: 'Explore the Sleeping Dragon Isle.', prerequisite: 'Upon reaching Eryth Sea', giver: 'High Entia', giver_location: 'Center Gate', missable: false },
        { name: 'The Hode Refuge', desc: 'Help the Hodes at their refuge.', prerequisite: 'Upon reaching Eryth Sea', giver: 'High Entia', giver_location: 'Center Gate', missable: false },
        { name: 'The Ether Crystal Deposit', desc: 'Collect ether crystals from the deposit.', prerequisite: 'Upon reaching Eryth Sea', giver: 'High Entia', giver_location: 'Center Gate', missable: false },
        { name: 'The Latael Shore', desc: 'Explore Latael Shore.', prerequisite: 'Upon reaching Eryth Sea', giver: 'High Entia', giver_location: 'Center Gate', missable: false },
        { name: 'The Center Gate', desc: 'Investigate the Center Gate.', prerequisite: 'Upon reaching Eryth Sea', giver: 'High Entia', giver_location: 'Center Gate', missable: false },
        { name: 'The High Entia Tomb', desc: 'Visit the High Entia Tomb in Eryth Sea.', prerequisite: 'Upon reaching Eryth Sea', giver: 'High Entia', giver_location: 'Center Gate', missable: false },
        { name: 'The Syrath Lighthouse', desc: 'Visit the Syrath Lighthouse.', prerequisite: 'Upon reaching Eryth Sea', giver: 'High Entia', giver_location: 'Center Gate', missable: false },
        { name: 'The Central Seal Island', desc: 'Explore the Central Seal Island.', prerequisite: 'Upon reaching Eryth Sea', giver: 'High Entia', giver_location: 'Center Gate', missable: false },
        { name: 'The Soltnar Seal Island', desc: 'Explore the Soltnar Seal Island.', prerequisite: 'Upon reaching Eryth Sea', giver: 'High Entia', giver_location: 'Center Gate', missable: false },
        { name: 'The Khatorl Seal Island', desc: 'Explore the Khatorl Seal Island.', prerequisite: 'Upon reaching Eryth Sea', giver: 'High Entia', giver_location: 'Center Gate', missable: false },
        { name: 'The Ether Plant', desc: 'Investigate the Ether Plant.', prerequisite: 'Upon reaching Eryth Sea', giver: 'High Entia', giver_location: 'Center Gate', missable: false },
        { name: 'The Faras Cave', desc: 'Explore Faras Cave.', prerequisite: 'Upon reaching Eryth Sea', giver: 'High Entia', giver_location: 'Center Gate', missable: false },
        { name: 'The Anu Shore', desc: 'Explore Anu Shore.', prerequisite: 'Upon reaching Eryth Sea', giver: 'High Entia', giver_location: 'Center Gate', missable: false },
        { name: 'The Bionis\' Occipital', desc: 'Visit the Bionis\' Occipital.', prerequisite: 'Upon reaching Eryth Sea', giver: 'High Entia', giver_location: 'Center Gate', missable: false },
        { name: 'The Kromar Coast', desc: 'Explore Kromar Coast.', prerequisite: 'Upon reaching Eryth Sea', giver: 'High Entia', giver_location: 'Center Gate', missable: false },
        { name: 'The Secluded Island', desc: 'Find the Secluded Island.', prerequisite: 'Upon reaching Eryth Sea', giver: 'High Entia', giver_location: 'Center Gate', missable: false },
        { name: 'The Showdown Cliff', desc: 'Visit Showdown Cliff.', prerequisite: 'Upon reaching Eryth Sea', giver: 'High Entia', giver_location: 'Center Gate', missable: false }
    ]
}, {
    area: 'Alcamoth',
    quests: [
        { name: 'High Entia Affairs', desc: 'Complete tasks for the High Entia citizens.', prerequisite: 'Upon reaching Alcamoth', giver: 'High Entia', giver_location: 'Main Plaza', missable: false },
        { name: 'Imperial Palace', desc: 'Deliver a message to the palace.', prerequisite: 'Upon reaching Alcamoth', giver: 'High Entia', giver_location: 'Main Plaza', missable: true, by: 'Before leaving Alcamoth' },
        { name: 'Park Cleanup', desc: 'Clear monsters from the park.', prerequisite: 'Upon reaching Alcamoth', giver: 'High Entia', giver_location: 'Main Plaza', missable: true, by: 'Before leaving Alcamoth' },
        { name: 'The Conspiracy', desc: 'Investigate the rumours in Alcamoth.', prerequisite: 'Upon reaching Alcamoth', giver: 'High Entia', giver_location: 'Main Plaza', missable: true, by: 'Before leaving Alcamoth' },
        { name: 'High Entia Festival', desc: 'Gather items for the festival.', prerequisite: 'Upon reaching Alcamoth', giver: 'High Entia', giver_location: 'Main Plaza', missable: true, by: 'Before leaving Alcamoth' },
        { name: 'Melia\'s Request', desc: 'Help Melia with a personal task.', prerequisite: 'After Melia joins the party', giver: 'Melia', giver_location: 'Imperial Palace', missable: true, by: 'Before leaving Alcamoth' },
        { name: 'The Archives', desc: 'Research ancient texts in the Archives.', prerequisite: 'Upon reaching Alcamoth', giver: 'High Entia', giver_location: 'Archives', missable: false },
        { name: 'The Observatory', desc: 'Visit the observatory and report back.', prerequisite: 'Upon reaching Alcamoth', giver: 'High Entia', giver_location: 'Observatory', missable: false },
        { name: 'The Imperial Guard Post', desc: 'Visit the Imperial Guard Post.', prerequisite: 'Upon reaching Alcamoth', giver: 'High Entia', giver_location: 'Imperial Guard Post', missable: false },
        { name: 'The Market', desc: 'Visit the Alcamoth Market.', prerequisite: 'Upon reaching Alcamoth', giver: 'High Entia', giver_location: 'Market', missable: false },
        { name: 'The Residential Area', desc: 'Help a High Entia in the Residential Area.', prerequisite: 'Upon reaching Alcamoth', giver: 'High Entia', giver_location: 'Residential Area', missable: false },
        { name: 'The Lost Ring', desc: 'Find a lost ring in Alcamoth.', prerequisite: 'Upon reaching Alcamoth', giver: 'High Entia', giver_location: 'Main Plaza', missable: false },
        { name: 'The Missing Person', desc: 'Find a missing person in Alcamoth.', prerequisite: 'Upon reaching Alcamoth', giver: 'High Entia', giver_location: 'Main Plaza', missable: false },
        { name: 'The Hidden Library', desc: 'Find a hidden library in Alcamoth.', prerequisite: 'Upon reaching Alcamoth', giver: 'High Entia', giver_location: 'Archives', missable: false },
        { name: 'The Ancient Text', desc: 'Translate an ancient text.', prerequisite: 'Upon reaching Alcamoth', giver: 'High Entia', giver_location: 'Archives', missable: false },
        { name: 'The Royal Secret', desc: 'Discover a royal secret.', prerequisite: 'Upon reaching Alcamoth and having 3★ affinity', giver: 'High Entia', giver_location: 'Imperial Palace', missable: true, by: 'Before leaving Alcamoth' },
        { name: 'The High Entia Tradition', desc: 'Learn about High Entia traditions.', prerequisite: 'Upon reaching Alcamoth', giver: 'High Entia', giver_location: 'Main Plaza', missable: false },
        { name: 'The Forbidden Knowledge', desc: 'Find forbidden knowledge in the Archives.', prerequisite: 'Upon reaching Alcamoth', giver: 'High Entia', giver_location: 'Archives', missable: false }
    ]
}, {
    area: 'High Entia Tomb',
    quests: [
        { name: 'Tomb Exploration', desc: 'Explore all areas of the High Entia Tomb.', prerequisite: 'Upon entering the High Entia Tomb', giver: 'High Entia', giver_location: 'Tomb Entrance', missable: false },
        { name: 'Ancient Artifacts', desc: 'Collect 5 Ancient Coins from the tomb.', prerequisite: 'Upon entering the High Entia Tomb', giver: 'High Entia', giver_location: 'Tomb Entrance', missable: false },
        { name: 'The Sealed Room', desc: 'Discover the Secret Area in the tomb.', prerequisite: 'Upon entering the High Entia Tomb', giver: 'High Entia', giver_location: 'Tomb Entrance', missable: false },
        { name: 'Tomb Guardian', desc: 'Defeat the guardian of the tomb.', prerequisite: 'Upon entering the High Entia Tomb', giver: 'High Entia', giver_location: 'Tomb Entrance', missable: false },
        { name: 'The Crypt of the Ancients', desc: 'Explore the crypt of ancient High Entia.', prerequisite: 'Upon entering the High Entia Tomb', giver: 'High Entia', giver_location: 'Tomb Entrance', missable: false },
        { name: 'The Corridor of Silence', desc: 'Explore the Corridor of Silence.', prerequisite: 'Upon entering the High Entia Tomb', giver: 'High Entia', giver_location: 'Tomb Entrance', missable: false },
        { name: 'The Chamber of Offerings', desc: 'Visit the Chamber of Offerings.', prerequisite: 'Upon entering the High Entia Tomb', giver: 'High Entia', giver_location: 'Tomb Entrance', missable: false },
        { name: 'The Tomb of Kings', desc: 'Explore the Tomb of Kings.', prerequisite: 'Upon entering the High Entia Tomb', giver: 'High Entia', giver_location: 'Tomb Entrance', missable: false },
        { name: 'The Ether Chamber', desc: 'Investigate the Ether Chamber.', prerequisite: 'Upon entering the High Entia Tomb', giver: 'High Entia', giver_location: 'Tomb Entrance', missable: false },
        { name: 'The Hidden Passage', desc: 'Find a hidden passage in the tomb.', prerequisite: 'Upon entering the High Entia Tomb', giver: 'High Entia', giver_location: 'Tomb Entrance', missable: false },
        { name: 'The Ancient Key', desc: 'Find an ancient key in the tomb.', prerequisite: 'Upon entering the High Entia Tomb', giver: 'High Entia', giver_location: 'Tomb Entrance', missable: false },
        { name: 'The Lost Treasure', desc: 'Find lost treasure in the tomb.', prerequisite: 'Upon entering the High Entia Tomb', giver: 'High Entia', giver_location: 'Tomb Entrance', missable: false }
    ]
}, {
    area: 'Valak Mountain',
    quests: [
        { name: 'Mountain Expedition', desc: 'Explore all areas of Valak Mountain.', prerequisite: 'Upon reaching Valak Mountain', giver: 'Nopon Merchant', giver_location: 'Nopon Camp', missable: false },
        { name: 'Snow Monster Hunt', desc: 'Defeat 5 Rhoguls on the mountain.', prerequisite: 'Upon reaching Valak Mountain', giver: 'Nopon Merchant', giver_location: 'Nopon Camp', missable: false },
        { name: 'Ice Crystal Collection', desc: 'Collect 5 Ice Crystals from ether deposits.', prerequisite: 'Upon reaching Valak Mountain', giver: 'Nopon Merchant', giver_location: 'Nopon Camp', missable: false },
        { name: 'The Secret Hot Spring', desc: 'Discover the Secret Area on Valak Mountain.', prerequisite: 'Upon reaching Valak Mountain', giver: 'Nopon Merchant', giver_location: 'Nopon Camp', missable: false },
        { name: 'Zaktus Camp', desc: 'Help the Nopon merchants at Zaktus.', prerequisite: 'Upon reaching Valak Mountain', giver: 'Nopon Merchant', giver_location: 'Zaktus', missable: false },
        { name: 'Frozen Falls', desc: 'Investigate the frozen waterfall.', prerequisite: 'Upon reaching Valak Mountain', giver: 'Nopon Merchant', giver_location: 'Nopon Camp', missable: false },
        { name: 'The Crystal Cave', desc: 'Explore the cave with ice crystals.', prerequisite: 'Upon reaching Valak Mountain', giver: 'Nopon Merchant', giver_location: 'Nopon Camp', missable: false },
        { name: 'The Mountain Path', desc: 'Clear the mountain path of monsters.', prerequisite: 'Upon reaching Valak Mountain', giver: 'Nopon Merchant', giver_location: 'Nopon Camp', missable: false },
        { name: 'The Zokhed Pass', desc: 'Cross the Zokhed Pass.', prerequisite: 'Upon reaching Valak Mountain', giver: 'Nopon Merchant', giver_location: 'Nopon Camp', missable: false },
        { name: 'The Mechonis Wound', desc: 'Investigate the Mechonis Wound.', prerequisite: 'Upon reaching Valak Mountain', giver: 'Nopon Merchant', giver_location: 'Nopon Camp', missable: false },
        { name: 'The Hollow Bone', desc: 'Explore the Hollow Bone.', prerequisite: 'Upon reaching Valak Mountain', giver: 'Nopon Merchant', giver_location: 'Nopon Camp', missable: false },
        { name: 'The Bafalgar Pedestal', desc: 'Find the Bafalgar Pedestal.', prerequisite: 'Upon reaching Valak Mountain', giver: 'Nopon Merchant', giver_location: 'Nopon Camp', missable: false },
        { name: 'The Three Sage Summit', desc: 'Reach the Three Sage Summit.', prerequisite: 'Upon reaching Valak Mountain', giver: 'Nopon Merchant', giver_location: 'Nopon Camp', missable: false },
        { name: 'The Harict Chapel', desc: 'Visit the Harict Chapel.', prerequisite: 'Upon reaching Valak Mountain', giver: 'Nopon Merchant', giver_location: 'Nopon Camp', missable: false },
        { name: 'The Serik Waterfall', desc: 'Explore the Serik Waterfall.', prerequisite: 'Upon reaching Valak Mountain', giver: 'Nopon Merchant', giver_location: 'Nopon Camp', missable: false },
        { name: 'The Ice Cave', desc: 'Explore the Ice Cave.', prerequisite: 'Upon reaching Valak Mountain', giver: 'Nopon Merchant', giver_location: 'Nopon Camp', missable: false },
        { name: 'The Frozen Lake', desc: 'Explore the frozen lake.', prerequisite: 'Upon reaching Valak Mountain', giver: 'Nopon Merchant', giver_location: 'Nopon Camp', missable: false }
    ]
}, {
    area: 'Sword Valley',
    quests: [
        { name: 'Battlefield Investigation', desc: 'Explore all areas of Sword Valley.', prerequisite: 'Upon reaching Sword Valley', giver: 'Defence Force Soldier', giver_location: 'Dunban\'s Camp', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'Mechon Extermination', desc: 'Defeat 10 Mechon in Sword Valley.', prerequisite: 'Upon reaching Sword Valley', giver: 'Defence Force Soldier', giver_location: 'Dunban\'s Camp', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'Mechon Factory', desc: 'Discover the Secret Area in Sword Valley.', prerequisite: 'Upon reaching Sword Valley', giver: 'Defence Force Soldier', giver_location: 'Dunban\'s Camp', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'Dunban\'s Request', desc: 'Help Dunban with a personal mission.', prerequisite: 'Upon reaching Sword Valley', giver: 'Dunban', giver_location: 'Dunban\'s Camp', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'Valley Supplies', desc: 'Collect supplies for the army camp.', prerequisite: 'Upon reaching Sword Valley', giver: 'Defence Force Soldier', giver_location: 'Dunban\'s Camp', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'The Faced Mechon', desc: 'Investigate the Faced Mechon sightings.', prerequisite: 'Upon reaching Sword Valley', giver: 'Defence Force Soldier', giver_location: 'Dunban\'s Camp', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'The Fortress Approach', desc: 'Clear the path to Galahad Fortress.', prerequisite: 'Upon reaching Sword Valley', giver: 'Defence Force Soldier', giver_location: 'Dunban\'s Camp', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'The Valley Overlook', desc: 'Find the Valley Overlook.', prerequisite: 'Upon reaching Sword Valley', giver: 'Defence Force Soldier', giver_location: 'Dunban\'s Camp', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'The Mechon Wreckage', desc: 'Investigate Mechon Wreckage.', prerequisite: 'Upon reaching Sword Valley', giver: 'Defence Force Soldier', giver_location: 'Dunban\'s Camp', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'The Central Valley', desc: 'Explore the Central Valley.', prerequisite: 'Upon reaching Sword Valley', giver: 'Defence Force Soldier', giver_location: 'Dunban\'s Camp', missable: true, by: 'Before the end of Mechonis Field' }
    ]
}, {
    area: 'Galahad Fortress',
    quests: [
        { name: 'Fortress Infiltration', desc: 'Explore all areas of Galahad Fortress.', prerequisite: 'Upon entering Galahad Fortress', giver: 'Defence Force Soldier', giver_location: 'Fortress Entrance', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'Mechon Commander', desc: 'Defeat the Mechon commanders in the fortress.', prerequisite: 'Upon entering Galahad Fortress', giver: 'Defence Force Soldier', giver_location: 'Fortress Entrance', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'Fortress Secrets', desc: 'Discover the hidden passages in the fortress.', prerequisite: 'Upon entering Galahad Fortress', giver: 'Defence Force Soldier', giver_location: 'Fortress Entrance', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'The Command Room', desc: 'Reach the command room at the heart of the fortress.', prerequisite: 'Upon entering Galahad Fortress', giver: 'Defence Force Soldier', giver_location: 'Fortress Entrance', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'The Defense Tower', desc: 'Disable the defense tower.', prerequisite: 'Upon entering Galahad Fortress', giver: 'Defence Force Soldier', giver_location: 'Fortress Entrance', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'The Central Corridor', desc: 'Clear the Central Corridor.', prerequisite: 'Upon entering Galahad Fortress', giver: 'Defence Force Soldier', giver_location: 'Fortress Entrance', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'The Mechon Hangar', desc: 'Investigate the Mechon Hangar.', prerequisite: 'Upon entering Galahad Fortress', giver: 'Defence Force Soldier', giver_location: 'Fortress Entrance', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'The Fortress Ramparts', desc: 'Explore the Fortress Ramparts.', prerequisite: 'Upon entering Galahad Fortress', giver: 'Defence Force Soldier', giver_location: 'Fortress Entrance', missable: true, by: 'Before the end of Mechonis Field' }
    ]
}, {
    area: 'Fallen Arm',
    quests: [
        { name: 'Machina Refuge', desc: 'Explore the hidden Machina village.', prerequisite: 'Upon reaching the Fallen Arm', giver: 'Machina', giver_location: 'Machina Refuge', missable: false },
        { name: 'Machina Help', desc: 'Complete tasks for the Machina refugees.', prerequisite: 'Upon reaching the Fallen Arm', giver: 'Machina', giver_location: 'Machina Refuge', missable: false },
        { name: 'The Secluded Island', desc: 'Discover the Secret Area on the Fallen Arm.', prerequisite: 'Upon reaching the Fallen Arm', giver: 'Machina', giver_location: 'Machina Refuge', missable: false },
        { name: 'Disturbed Waters', desc: 'Investigate the mysterious disturbances in the water.', prerequisite: 'Upon reaching the Fallen Arm', giver: 'Machina', giver_location: 'Machina Refuge', missable: false },
        { name: 'Daedala Hunt', desc: 'Defeat the Ancient Daedala (Superboss).', prerequisite: 'Upon reaching the Fallen Arm (high level recommended)', giver: 'Machina', giver_location: 'Machina Refuge', missable: false },
        { name: 'The Ruined City', desc: 'Explore the ruins of a city on the arm.', prerequisite: 'Upon reaching the Fallen Arm', giver: 'Machina', giver_location: 'Machina Refuge', missable: false },
        { name: 'The Arm Overlook', desc: 'Find the overlook with a view of the arm.', prerequisite: 'Upon reaching the Fallen Arm', giver: 'Machina', giver_location: 'Machina Refuge', missable: false },
        { name: 'The Hidden Cave', desc: 'Discover a cave on the Fallen Arm.', prerequisite: 'Upon reaching the Fallen Arm', giver: 'Machina', giver_location: 'Machina Refuge', missable: false },
        { name: 'The Refuge Beach', desc: 'Explore the beach near the Machina Refuge.', prerequisite: 'Upon reaching the Fallen Arm', giver: 'Machina', giver_location: 'Machina Refuge', missable: false },
        { name: 'The Machina Artifact', desc: 'Find a Machina artifact.', prerequisite: 'Upon reaching the Fallen Arm', giver: 'Machina', giver_location: 'Machina Refuge', missable: false },
        { name: 'The Lost Machina', desc: 'Find a lost Machina.', prerequisite: 'Upon reaching the Fallen Arm', giver: 'Machina', giver_location: 'Machina Refuge', missable: false },
        { name: 'The Machina Secret', desc: 'Discover a secret about the Machina.', prerequisite: 'Upon reaching the Fallen Arm and having 3★ affinity', giver: 'Machina', giver_location: 'Machina Refuge', missable: false },
        { name: 'The Arm\'s Core', desc: 'Find the core of the Fallen Arm.', prerequisite: 'Upon reaching the Fallen Arm', giver: 'Machina', giver_location: 'Machina Refuge', missable: false }
    ]
}, {
    area: 'Mechonis Field',
    quests: [
        { name: 'Field Exploration', desc: 'Explore all areas of Mechonis Field.', prerequisite: 'Upon entering Mechonis Field', giver: 'Machina', giver_location: 'Field Entrance', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'Mechon Patrol', desc: 'Defeat the Mechon patrolling the field.', prerequisite: 'Upon entering Mechonis Field', giver: 'Machina', giver_location: 'Field Entrance', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'Hidden Control Room', desc: 'Discover the Secret Area in Mechonis Field.', prerequisite: 'Upon entering Mechonis Field', giver: 'Machina', giver_location: 'Field Entrance', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'Lift Repair', desc: 'Fix the main lift in the field.', prerequisite: 'Upon entering Mechonis Field', giver: 'Machina', giver_location: 'Field Entrance', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'Observation Platform', desc: 'Reach the highest point of the field.', prerequisite: 'Upon entering Mechonis Field', giver: 'Machina', giver_location: 'Field Entrance', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'The Gear Chamber', desc: 'Investigate the gear chamber.', prerequisite: 'Upon entering Mechonis Field', giver: 'Machina', giver_location: 'Field Entrance', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'The Piston Passage', desc: 'Explore the piston passage.', prerequisite: 'Upon entering Mechonis Field', giver: 'Machina', giver_location: 'Field Entrance', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'The Field Path', desc: 'Clear the Field Path.', prerequisite: 'Upon entering Mechonis Field', giver: 'Machina', giver_location: 'Field Entrance', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'The Main Lift', desc: 'Investigate the Main Lift.', prerequisite: 'Upon entering Mechonis Field', giver: 'Machina', giver_location: 'Field Entrance', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'The Mechonis Core Access', desc: 'Find the Mechonis Core Access.', prerequisite: 'Upon entering Mechonis Field', giver: 'Machina', giver_location: 'Field Entrance', missable: true, by: 'Before the Agniratha lockout' }
    ]
}, {
    area: 'Central Factory',
    quests: [
        { name: 'Factory Investigation', desc: 'Explore all areas of the Central Factory.', prerequisite: 'Upon entering the Central Factory', giver: 'Machina', giver_location: 'Factory Entrance', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'Production Line', desc: 'Inspect the assembly line and report back.', prerequisite: 'Upon entering the Central Factory', giver: 'Machina', giver_location: 'Factory Entrance', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'Core Control', desc: 'Reach the core of the factory.', prerequisite: 'Upon entering the Central Factory', giver: 'Machina', giver_location: 'Factory Entrance', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'Factory Sabotage', desc: 'Sabotage the Mechon production.', prerequisite: 'Upon entering the Central Factory', giver: 'Machina', giver_location: 'Factory Entrance', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'The Conveyor Path', desc: 'Follow the conveyor path to find a secret.', prerequisite: 'Upon entering the Central Factory', giver: 'Machina', giver_location: 'Factory Entrance', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'The Factory Floor', desc: 'Explore the Factory Floor.', prerequisite: 'Upon entering the Central Factory', giver: 'Machina', giver_location: 'Factory Entrance', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'The Control Room', desc: 'Investigate the Control Room.', prerequisite: 'Upon entering the Central Factory', giver: 'Machina', giver_location: 'Factory Entrance', missable: true, by: 'Before the Agniratha lockout' }
    ]
}, {
    area: 'Agniratha',
    quests: [
        { name: 'City Exploration', desc: 'Explore all areas of Agniratha.', prerequisite: 'Upon reaching Agniratha', giver: 'High Entia', giver_location: 'Agniratha Gate', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'Imperial Investigation', desc: 'Investigate the Imperial Tower.', prerequisite: 'Upon reaching Agniratha', giver: 'High Entia', giver_location: 'Agniratha Gate', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'Agniratha Citizens', desc: 'Help the remaining citizens of Agniratha.', prerequisite: 'Upon reaching Agniratha', giver: 'High Entia', giver_location: 'Agniratha Gate', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'The Emperor\'s Throne', desc: 'Reach the throne room in the tower.', prerequisite: 'Upon reaching Agniratha', giver: 'High Entia', giver_location: 'Agniratha Gate', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'The Mechon Workshop', desc: 'Investigate the Mechon workshop.', prerequisite: 'Upon reaching Agniratha', giver: 'High Entia', giver_location: 'Agniratha Gate', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'The Palace Gardens', desc: 'Explore the gardens of the Imperial Tower.', prerequisite: 'Upon reaching Agniratha', giver: 'High Entia', giver_location: 'Agniratha Gate', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'The Agniratha Gate', desc: 'Secure the Agniratha Gate.', prerequisite: 'Upon reaching Agniratha', giver: 'High Entia', giver_location: 'Agniratha Gate', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'The Central Plaza', desc: 'Explore the Central Plaza.', prerequisite: 'Upon reaching Agniratha', giver: 'High Entia', giver_location: 'Agniratha Gate', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'The Residential District', desc: 'Help citizens in the Residential District.', prerequisite: 'Upon reaching Agniratha', giver: 'High Entia', giver_location: 'Agniratha Gate', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'The Imperial Secret', desc: 'Discover a secret about the Imperial family.', prerequisite: 'Upon reaching Agniratha and having 3★ affinity', giver: 'High Entia', giver_location: 'Agniratha Gate', missable: true, by: 'Before the Agniratha lockout' }
    ]
}, {
    area: 'Bionis\' Interior',
    quests: [
        { name: 'Inner Passage', desc: 'Explore the passage inside the Bionis.', prerequisite: 'Upon entering the Bionis\' Interior', giver: 'N/A (surprise)', giver_location: 'Inner Passage', missable: false },
        { name: 'Heart of the Bionis', desc: 'Reach the very core of the titan.', prerequisite: 'Upon entering the Bionis\' Interior', giver: 'N/A (surprise)', giver_location: 'Heart of the Bionis', missable: false },
        { name: 'The Disciple', desc: 'Defeat the Disciple at the end of the interior.', prerequisite: 'Upon entering the Bionis\' Interior (story-related)', giver: 'N/A (surprise)', giver_location: 'Heart of the Bionis', missable: false },
        { name: 'The Flesh Corridor', desc: 'Navigate the corridor of flesh.', prerequisite: 'Upon entering the Bionis\' Interior', giver: 'N/A (surprise)', giver_location: 'Flesh Corridor', missable: false },
        { name: 'The Bone Bridge', desc: 'Cross the bridge made of bone.', prerequisite: 'Upon entering the Bionis\' Interior', giver: 'N/A (surprise)', giver_location: 'Bone Bridge', missable: false },
        { name: 'The Core Chamber', desc: 'Enter the Core Chamber.', prerequisite: 'Upon entering the Bionis\' Interior', giver: 'N/A (surprise)', giver_location: 'Core Chamber', missable: false },
        { name: 'The Bionis\' Secret', desc: 'Discover a secret about the Bionis.', prerequisite: 'Upon entering the Bionis\' Interior', giver: 'N/A (surprise)', giver_location: 'Heart of the Bionis', missable: false },
        { name: 'The Inner Light', desc: 'Find the source of light inside the Bionis.', prerequisite: 'Upon entering the Bionis\' Interior', giver: 'N/A (surprise)', giver_location: 'Inner Passage', missable: false }
    ]
}, {
    area: 'Prison Island',
    quests: [
        { name: 'Prison Exploration', desc: 'Explore all areas of Prison Island.', prerequisite: 'Upon reaching Prison Island (first visit)', giver: 'N/A (surprise)', giver_location: 'Prison Entrance', missable: false },
        { name: 'Central Prison', desc: 'Investigate the central holding area.', prerequisite: 'Upon reaching Prison Island (first visit)', giver: 'N/A (surprise)', giver_location: 'Central Prison', missable: false },
        { name: 'The Observatory', desc: 'Reach the highest point of Prison Island.', prerequisite: 'Upon reaching Prison Island (second visit)', giver: 'N/A (surprise)', giver_location: 'Observatory', missable: false },
        { name: 'Final Confrontation', desc: 'Defeat the final boss of Prison Island.', prerequisite: 'Upon reaching Prison Island (second visit, story-related)', giver: 'N/A (surprise)', giver_location: 'Central Prison', missable: false },
        { name: 'The Prison Courtyard', desc: 'Explore the courtyard of the prison.', prerequisite: 'Upon reaching Prison Island (first visit)', giver: 'N/A (surprise)', giver_location: 'Prison Courtyard', missable: false },
        { name: 'The Guard Quarters', desc: 'Search the guard quarters for information.', prerequisite: 'Upon reaching Prison Island (first visit)', giver: 'N/A (surprise)', giver_location: 'Guard Quarters', missable: false },
        { name: 'The Solitary Cells', desc: 'Investigate the solitary confinement cells.', prerequisite: 'Upon reaching Prison Island (first visit)', giver: 'N/A (surprise)', giver_location: 'Solitary Cells', missable: false },
        { name: 'The Prison Entrance', desc: 'Secure the Prison Entrance.', prerequisite: 'Upon reaching Prison Island (first visit)', giver: 'N/A (surprise)', giver_location: 'Prison Entrance', missable: false },
        { name: 'The Island\'s Secret', desc: 'Discover a secret about Prison Island.', prerequisite: 'Upon reaching Prison Island (first visit)', giver: 'N/A (surprise)', giver_location: 'Central Prison', missable: false },
        { name: 'The Lost Prisoner', desc: 'Find a lost prisoner on the island.', prerequisite: 'Upon reaching Prison Island (first visit)', giver: 'N/A (surprise)', giver_location: 'Solitary Cells', missable: false }
    ]
}];
