// ==============================================================
//  QUEST DATA — Complete (~480 quests) with Group Support
//  Source: StrategyWiki, Game8, Xenoblade Wiki
// ==============================================================
const questData = [{
    area: 'Colony 9',
    quests: [
        // === STORY QUESTS ===
        { name: 'Delivering Food', desc: 'Take Fiona\'s food to Shulk before it gets cold.', missable: true, by: 'Before leaving Colony 9' },

        // === CHALLENGE QUESTS ===
        { name: 'Challenge 1', desc: 'Defeat Evil Rhangrot near Tephra Hill.', missable: false },
        { name: 'Challenge 2', desc: 'Defeat Verdant Bluchal near Anti-Air Battery 1.', missable: false },
        { name: 'Challenge 3', desc: 'Defeat Lake Magdalena near Outlook Park.', missable: false },
        { name: 'Challenge 4', desc: 'Defeat Wallslide Gwynry at Mag Mell Ruins, Tephra Cave.', missable: false },

        // === MONSTER QUESTS (grouped) ===
        { name: 'Part 1', desc: 'Defeat 2 Ridge Antols near Anti-Air Battery 1.', missable: false, group: 'Monster Quest 1' },
        { name: 'Part 2', desc: 'Defeat 1 Cute Brog near Anti-Air Battery 1.', missable: false, group: 'Monster Quest 1' },
        { name: 'Part 3', desc: 'Defeat 3 Colony Krabbles at Cliff Lake.', missable: false, group: 'Monster Quest 1' },

        { name: 'Part 1', desc: 'Defeat 2 Lake Flamii on the beach.', missable: false, group: 'Monster Quest 2' },
        { name: 'Part 2', desc: 'Defeat 1 Baby Armu on the beach.', missable: false, group: 'Monster Quest 2' },
        { name: 'Part 3', desc: 'Defeat 2 Stone Krabbles at Agora Shore.', missable: false, group: 'Monster Quest 2' },

        { name: 'Part 1', desc: 'Defeat 2 Hand Bunnits at Tephra Hill.', missable: false, group: 'Monster Quest 3' },
        { name: 'Part 2', desc: 'Defeat 3 Beach Krabbles at Cliff Lake.', missable: false, group: 'Monster Quest 3' },
        { name: 'Part 3', desc: 'Defeat 2 Wood Bunnits at Tephra Hill.', missable: false, group: 'Monster Quest 3' },
        { name: 'Part 4', desc: 'Defeat 3 Light Skeeters on the beach below Tephra Cave.', missable: false, group: 'Monster Quest 3' },

        { name: 'Part 1', desc: 'Defeat 1 Willow Bunniv in Tephra Cave.', missable: false, group: 'Monster Quest 4' },
        { name: 'Part 2', desc: 'Defeat 2 Singing Brogs in Tephra Cave.', missable: false, group: 'Monster Quest 4' },
        { name: 'Part 3', desc: 'Defeat 3 Tephra Flamii in Tephra Cave.', missable: false, group: 'Monster Quest 4' },

        // === MATERIAL QUESTS ===
        { name: 'Material Quest 1', desc: 'Collect 2 Small Shells in Colony 9.', missable: false },
        { name: 'Material Quest 2', desc: 'Collect 1 Small Scale in Colony 9.', missable: false },
        { name: 'Material Quest 3', desc: 'Collect 2 Vang Teeth in Colony 9.', missable: false },
        { name: 'Material Quest 4', desc: 'Collect 1 Yolkless Flamii Egg in Colony 9.', missable: false },

        // === COLLECTION QUESTS ===
        { name: 'Collection Quest 1', desc: 'Collect 2 Rabbit Diodes in Colony 9.', missable: false },
        { name: 'Collection Quest 2', desc: 'Collect 1 Plate Snow in Colony 9.', missable: false },
        { name: 'Collection Quest 3', desc: 'Collect 2 Rainbow Zirconias in Colony 9.', missable: false },
        { name: 'Collection Quest 4', desc: 'Collect 1 Giant Hornet in Colony 9.', missable: false },

        // === SEARCH QUESTS ===
        { name: 'Search Quest 1', desc: 'Find the Wedding Ring behind Dunban\'s House.', missable: false },
        { name: 'Search Quest 2', desc: 'Find the Blue Glass Bead in the Residential District.', missable: false },
        { name: 'Search Quest 3', desc: 'Find the Key in the Residential District.', missable: false },
        { name: 'Search Quest 4', desc: 'Find the Spanner on the ledge west of Gem Man\'s Stall.', missable: false },

        // === NPC QUESTS ===
        { name: 'The Key to a Long Life', desc: 'Collect 2 Medicinal Brog Oil from Brogs.', missable: false },
        { name: 'A Curry Conundrum', desc: 'Collect 5 Dance Apples for Georgio.', missable: false },
        { name: 'Biscuits for a Grandson', desc: 'Take Marcia\'s biscuits to Jiroque.', missable: false },
        { name: 'Education-Minded Suzanna', desc: 'Collect 2 Black Nectar from Skeeters in Tephra Cave.', missable: false },
        { name: 'Education-Crazy Suzanna', desc: 'Collect 3 Black Nectar from Skeeters in Tephra Cave.', missable: false },
        { name: 'Lonely Niranira', desc: 'Deliver Niranira\'s letter to Lukas.', missable: false },
        { name: 'The Broken Watch', desc: 'Mend Desiree\'s watch in Shulk\'s lab.', missable: false },
        { name: 'A Young Captain\'s Request', desc: 'Find Miller in the Commercial District for Emmy Leater.', missable: false },
        { name: 'Pride and Courage', desc: 'Help Lukas prove himself.', missable: false },
        { name: 'Rocco\'s Heartful Request', desc: 'Find someone to mend Rocco\'s mother\'s keepsake.', missable: false },
        { name: 'Dean\'s Shady Request', desc: 'Help Dean with his secret request.', missable: false },
        { name: 'Liliana\'s Sincere Request', desc: 'Help Liliana with her request.', missable: false },
        { name: 'Mementos of a Lost Son', desc: 'Collect mementos for Cheryl.', missable: true, by: 'Before leaving Colony 9' },
        { name: 'Flattened Flowers', desc: 'Collect flowers for Françoise.', missable: false },
        { name: 'Romantic Notions of a Girl', desc: 'Help Monica with her romantic notions.', missable: false },
        { name: 'Romantic Notions of a Boy', desc: 'Help Andreas with his romantic notions.', missable: false },
        { name: 'An Impoverished Critic', desc: 'Help Leopold the critic.', missable: false },
        { name: 'Financial Planning', desc: 'Help King Squeeze with financial planning.', missable: false },
        { name: 'Overworked and Underpaid', desc: 'Help Georgio with his workload.', missable: false },
        { name: 'Paola and Narine', desc: 'Help Narine with her request.', missable: false },
        { name: 'The Old and the Young', desc: 'Help an elderly citizen with a task.', missable: false },
        { name: 'A Real Man\'s Duty', desc: 'Help a man prove his worth.', missable: false },
        { name: 'The Lonely Girl', desc: 'Help a lonely girl find a friend.', missable: false },
        { name: 'The Lost Letter', desc: 'Find a lost letter in the Commercial District.', missable: false },
        { name: 'The Stolen Ring', desc: 'Find a stolen ring in the Military District.', missable: false },
        { name: 'The Hidden Treasure', desc: 'Find a hidden treasure in Outlook Park.', missable: false },
        { name: 'The Old Journal', desc: 'Find an old journal in the Residential District.', missable: false },
        { name: 'The Mysterious Key', desc: 'Find the use for a mysterious key.', missable: false },
        { name: 'The Forgotten Memory', desc: 'Help someone remember a forgotten memory.', missable: false },
        { name: 'The Unfinished Letter', desc: 'Deliver an unfinished letter.', missable: false },
        { name: 'The Missing Necklace', desc: 'Find a missing necklace.', missable: false },
        { name: 'The Broken Promise', desc: 'Help someone keep a broken promise.', missable: false },
        { name: 'The Secret Recipe', desc: 'Find a secret recipe for a chef.', missable: false },
        { name: 'The Lost Heirloom', desc: 'Find a lost heirloom in the colony.', missable: false },
        { name: 'The Forgotten Promise', desc: 'Help someone fulfill a forgotten promise.', missable: false },
        { name: 'The Hidden Message', desc: 'Find a hidden message in the colony.', missable: false },
        { name: 'The Mysterious Package', desc: 'Deliver a mysterious package.', missable: false },
        { name: 'The Stolen Artifact', desc: 'Find a stolen artifact.', missable: false },
        { name: 'The Lost Key', desc: 'Find a lost key in the colony.', missable: false },

        // === TIMED/MISSABLE QUESTS ===
        { name: 'The Road Home', desc: 'Help a lost citizen find their way back.', missable: true, by: 'Before leaving Colony 9' },
        { name: 'Colony 9 Defense', desc: 'Defeat the monsters threatening the colony perimeter.', missable: true, by: 'Before leaving Colony 9' },
        { name: 'Fiora\'s Request', desc: 'Collect a specific item for Fiora.', missable: true, by: 'Before the attack on Colony 9' },
        { name: 'A Young Man\'s Pride', desc: 'Defeat the monster that defeated a young soldier.', missable: true, by: 'Before leaving Colony 9' },
        { name: 'The Missing Child', desc: 'Find a lost child in the Residential District.', missable: true, by: 'Before leaving Colony 9' },
        { name: 'The Lost Dog', desc: 'Find a lost dog near the Commercial District.', missable: false }
    ]
}, {
    area: 'Tephra Cave',
    quests: [
        { name: 'Cave Exploration', desc: 'Explore all areas of Tephra Cave.', missable: false },
        { name: 'Spider Extermination', desc: 'Defeat 10 Arachnos in the cave.', missable: false },
        { name: 'Crystal Collection', desc: 'Collect 5 Blue Crystals from ether deposits.', missable: false },
        { name: 'Fossil Hunter', desc: 'Collect 3 Fossilized Bones from the Fossil Chamber.', missable: false },
        { name: 'The Hidden Stairway', desc: 'Discover the Secret Area in Tephra Cave.', missable: false },
        { name: 'Ancient Technology', desc: 'Find and examine ancient machines in the cave.', missable: false },
        { name: 'Bat Wing Delivery', desc: 'Collect 5 Bat Wings for a researcher.', missable: false },
        { name: 'The Lost Expedition', desc: 'Find a lost expedition team in the cave.', missable: false },
        { name: 'The Cave\'s Guardian', desc: 'Defeat the guardian of Tephra Cave.', missable: false },
        { name: 'The Ether Deposit', desc: 'Collect ether crystals from the cave.', missable: false },
        { name: 'The Hidden Room', desc: 'Find a hidden room in Tephra Cave.', missable: false },
        { name: 'The Ancient Tablet', desc: 'Find an ancient tablet in the cave.', missable: false },
        { name: 'The Fossilized Egg', desc: 'Find a fossilized egg in the Fossil Chamber.', missable: false },
        { name: 'The Glowing Crystal', desc: 'Find a glowing crystal in the Glowing Cave.', missable: false },
        { name: 'The Spider Queen', desc: 'Defeat the Arachno Queen in her nest.', missable: false },
        { name: 'The Lost Miner', desc: 'Find a lost miner in the cave.', missable: false },
        { name: 'The Mysterious Light', desc: 'Investigate a mysterious light in the cave.', missable: false },
        { name: 'The Underground Lake', desc: 'Explore the underground lake in Tephra Cave.', missable: false },
        { name: 'The Forgotten Passage', desc: 'Find a forgotten passage in the cave.', missable: false },
        { name: 'The Ancient Ruins', desc: 'Explore the Mag Mell Ruins.', missable: false },
        { name: 'The Hidden Treasure', desc: 'Find hidden treasure in Tephra Cave.', missable: false }
    ]
}, {
    area: 'Bionis\' Leg (Refugee Camp)',
    quests: [
        { name: 'Refugee Camp Supplies', desc: 'Collect food and materials for the refugees.', missable: true, by: 'Before moving the camp to Colony 6' },
        { name: 'Protect the Refugees', desc: 'Defeat the monsters attacking the camp.', missable: true, by: 'Before moving the camp to Colony 6' },
        { name: 'Missing Person', desc: 'Find a lost refugee in the Leg area.', missable: true, by: 'Before moving the camp to Colony 6' },
        { name: 'Monster Repellent', desc: 'Collect herbs to repel monsters from the camp.', missable: true, by: 'Before moving the camp to Colony 6' },
        { name: 'Medic\'s Request', desc: 'Bring medicine to the camp doctor.', missable: true, by: 'Before moving the camp to Colony 6' },
        { name: 'Juju\'s Errand', desc: 'Help Juju with a delivery.', missable: true, by: 'Before moving the camp to Colony 6' },
        { name: 'Otharon\'s Request', desc: 'Collect materials for Otharon\'s project.', missable: true, by: 'Before moving the camp to Colony 6' },
        { name: 'Camp Reconnaissance', desc: 'Scout the area around the camp for dangers.', missable: true, by: 'Before moving the camp to Colony 6' },
        { name: 'The Missing Girl', desc: 'Find a girl who wandered off from the camp.', missable: true, by: 'Before moving the camp to Colony 6' },
        { name: 'The Lost Boy', desc: 'Find a boy lost in the Leg area.', missable: true, by: 'Before moving the camp to Colony 6' },
        { name: 'The Refugee\'s Belongings', desc: 'Find a refugee\'s lost belongings.', missable: true, by: 'Before moving the camp to Colony 6' },
        { name: 'The Wounded Soldier', desc: 'Bring medicine to a wounded soldier.', missable: true, by: 'Before moving the camp to Colony 6' },
        { name: 'The Hungry Refugees', desc: 'Collect food for the hungry refugees.', missable: true, by: 'Before moving the camp to Colony 6' },
        { name: 'The Water Supply', desc: 'Find a clean water source for the camp.', missable: true, by: 'Before moving the camp to Colony 6' },
        { name: 'The Lost Supplies', desc: 'Find lost supplies near the camp.', missable: true, by: 'Before moving the camp to Colony 6' },
        { name: 'The Monster Attack', desc: 'Defend the camp from a monster attack.', missable: true, by: 'Before moving the camp to Colony 6' }
    ]
}, {
    area: 'Colony 6',
    quests: [
        { name: 'Colony 6 Reconstruction', desc: 'Begin rebuilding the colony.', missable: false },
        { name: 'Residential District Cleanup', desc: 'Clear monsters from the residential area.', missable: false },
        { name: 'Commercial District Revival', desc: 'Gather materials to reopen shops.', missable: false },
        { name: 'The Missing Children', desc: 'Find the children lost in the ruins.', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'The Ghost of Colony 6', desc: 'Investigate the mysterious sightings.', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'Colony 6 Defense Force', desc: 'Recruit and train new guards for the colony.', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'Ether Supply', desc: 'Collect Ether Cylinders for the colony\'s power.', missable: false },
        { name: 'Reconstruction Materials', desc: 'Collect materials to upgrade buildings.', missable: false },
        { name: 'The Hope Farm', desc: 'Help restore the farm area.', missable: false },
        { name: 'The Pod Depot', desc: 'Help repair the pod depot.', missable: false },
        { name: 'The Freight Elevator', desc: 'Repair the freight elevator.', missable: false },
        { name: 'The Watchpoint Junction', desc: 'Repair the watchpoint junction.', missable: false },
        { name: 'The Drainage Outlet', desc: 'Clear the drainage outlet.', missable: false },
        { name: 'The Supply Road', desc: 'Clear the supply road of monsters.', missable: false },
        { name: 'The Freight Road', desc: 'Clear the freight road of debris.', missable: false },
        { name: 'The Misty Path', desc: 'Explore the misty path.', missable: false },
        { name: 'The Splintered Path', desc: 'Repair the splintered path.', missable: false },
        { name: 'The Reconstruction HQ', desc: 'Help at the reconstruction headquarters.', missable: false },
        { name: 'The Lost Artifact', desc: 'Find a lost artifact in Colony 6.', missable: false },
        { name: 'The Hidden Treasure', desc: 'Find hidden treasure in the ruins.', missable: false },
        { name: 'The Colony\'s Secret', desc: 'Discover a secret about Colony 6.', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'The Old Guard', desc: 'Help an old guard with a task.', missable: false },
        { name: 'The New Recruit', desc: 'Help a new recruit train.', missable: false },
        { name: 'The Missing Food', desc: 'Find missing food supplies.', missable: false },
        { name: 'The Water Crisis', desc: 'Solve the water crisis in the colony.', missable: false }
    ]
}, {
    area: 'Ether Mine',
    quests: [
        { name: 'Mine Investigation', desc: 'Explore the depths of the Ether Mine.', missable: false },
        { name: 'Ether Crystal Harvest', desc: 'Collect 10 Ether Crystals from the mine.', missable: false },
        { name: 'Machine Maintenance', desc: 'Repair the mining equipment.', missable: false },
        { name: 'The Hidden Machine Room', desc: 'Discover the Secret Area in the Ether Mine.', missable: false },
        { name: 'Mine Safety', desc: 'Defeat the monsters endangering the miners.', missable: true, by: 'Before the Ether Mine boss' },
        { name: 'The Lost Miners', desc: 'Find the missing miners in the mine.', missable: true, by: 'Before the Ether Mine boss' },
        { name: 'Ether Pump Repair', desc: 'Fix the damaged ether pump.', missable: false },
        { name: 'The Drainage Tunnel', desc: 'Investigate the drainage tunnel.', missable: false },
        { name: 'The Control Room', desc: 'Access the drainage control room.', missable: false },
        { name: 'The Central Pit', desc: 'Explore the central pit.', missable: false },
        { name: 'The Glowmoss Lake', desc: 'Explore the Glowmoss Lake.', missable: false },
        { name: 'The Regulation Piston', desc: 'Fix the regulation piston.', missable: false },
        { name: 'The Mining Base', desc: 'Help at the mining base.', missable: false },
        { name: 'The Lost Tool', desc: 'Find a lost tool in the mine.', missable: false },
        { name: 'The Cave-in', desc: 'Help clear a cave-in in the mine.', missable: false },
        { name: 'The Gas Leak', desc: 'Fix a gas leak in the mine.', missable: false }
    ]
}, {
    area: 'Satorl Marsh',
    quests: [
        { name: 'Marsh Expedition', desc: 'Explore all areas of Satorl Marsh.', missable: false },
        { name: 'Swamp Monster Hunt', desc: 'Defeat 5 Hodes in the marsh.', missable: false },
        { name: 'Rare Herb Collection', desc: 'Collect 5 Glowing Mosses from the marsh.', missable: false },
        { name: 'The Altar Ritual', desc: 'Investigate the ceremony at the Altar.', missable: true, by: 'Before leaving Satorl Marsh' },
        { name: 'Sororal Statues Mystery', desc: 'Solve the puzzle of the twin statues.', missable: true, by: 'Before leaving Satorl Marsh' },
        { name: 'Starlight Rock', desc: 'Discover the Secret Area on the cliff.', missable: false },
        { name: 'Igna Extermination', desc: 'Defeat 10 Ignas in the marsh.', missable: false },
        { name: 'The Floodgate', desc: 'Repair the Mauk Floodgate.', missable: false },
        { name: 'The Exile Fortress', desc: 'Explore the Exile Fortress.', missable: false },
        { name: 'The Silent Obelisk', desc: 'Investigate the Silent Obelisk.', missable: false },
        { name: 'The Glowing Obelisk', desc: 'Investigate the Glowing Obelisk.', missable: false },
        { name: 'The Crown Tree', desc: 'Explore the Crown Tree area.', missable: false },
        { name: 'The Poison Swamp', desc: 'Find a way through the Poison Swamp.', missable: false },
        { name: 'The Nopon Merchant Camp', desc: 'Help the Nopon merchants.', missable: false },
        { name: 'The Soter Ruins', desc: 'Explore the Soter Ruins.', missable: false },
        { name: 'The Igna Territory', desc: 'Investigate the Igna Territory.', missable: false },
        { name: 'The Oath Sanctuary', desc: 'Visit the Oath Sanctuary.', missable: false },
        { name: 'The Place of Judgement', desc: 'Visit the Place of Judgement.', missable: false },
        { name: 'The Dark Swamp', desc: 'Explore the Dark Swamp.', missable: false },
        { name: 'The Basin Cave', desc: 'Explore the Basin Cave.', missable: false },
        { name: 'The Nopon Refuge', desc: 'Find the Nopon Refuge.', missable: false }
    ]
}, {
    area: 'Makna Forest',
    quests: [
        { name: 'Forest Exploration', desc: 'Explore all areas of Makna Forest.', missable: false },
        { name: 'Dinosaur Extermination', desc: 'Defeat 5 Dinobeasts in the forest.', missable: false },
        { name: 'Fruit Gathering', desc: 'Collect 5 Golden Fruits from the forest.', missable: false },
        { name: 'The King Tree', desc: 'Discover the Secret Area at the King Tree.', missable: false },
        { name: 'Lovers\' Lookout', desc: 'Visit the romantic viewpoint.', missable: false },
        { name: 'The Great Falls', desc: 'Find the entrance behind the waterfall.', missable: true, by: 'Before leaving Makna Forest' },
        { name: 'Ursula\'s Rest', desc: 'Find Ursula\'s resting place.', missable: false },
        { name: 'The Hidden Cave', desc: 'Discover the cave hidden in the forest.', missable: false },
        { name: 'The Waterfall Cave', desc: 'Explore the cave behind the waterfall.', missable: false },
        { name: 'The Agni Tablet', desc: 'Find the Agni Tablet in the forest.', missable: false },
        { name: 'The Twisted Tree Gate', desc: 'Pass through the Twisted Tree Gate.', missable: false },
        { name: 'The Pod Landing Site', desc: 'Investigate the Pod Landing Site.', missable: false },
        { name: 'The Divine Sanctuary', desc: 'Visit the Divine Sanctuary.', missable: false },
        { name: 'The Ether Plant', desc: 'Investigate the Ether Plant.', missable: false },
        { name: 'The Makna Path', desc: 'Clear the Makna Path of monsters.', missable: false },
        { name: 'The Dinosaur Nest', desc: 'Explore the Dinosaur Nest.', missable: false },
        { name: 'The Ether Deposit', desc: 'Collect ether from the deposit.', missable: false }
    ]
}, {
    area: 'Frontier Village',
    quests: [
        { name: 'Nopon Community', desc: 'Complete tasks for the Nopon villagers.', missable: false },
        { name: 'The Chief\'s Request', desc: 'Collect items for the Nopon Chief.', missable: false },
        { name: 'Nopon Trading', desc: 'Trade with the Nopon merchants.', missable: false },
        { name: 'Heropon Riki', desc: 'Help Riki with his hero duties.', missable: true, by: 'Before leaving Frontier Village' },
        { name: 'Nopon Festival', desc: 'Gather materials for the village festival.', missable: true, by: 'Before leaving Frontier Village' },
        { name: 'The Music Theatre', desc: 'Help prepare a performance at the theatre.', missable: false },
        { name: 'The Sacred Altar', desc: 'Clean the Sacred Altar.', missable: false },
        { name: 'Riki\'s Secret', desc: 'Help Riki with a secret mission.', missable: true, by: 'Before leaving Frontier Village' },
        { name: 'The Village Entrance', desc: 'Help with the village entrance.', missable: false },
        { name: 'The Central Bazaar', desc: 'Help at the Central Bazaar.', missable: false },
        { name: 'The Observation Deck', desc: 'Visit the Observation Deck.', missable: false },
        { name: 'The Chief\'s House', desc: 'Deliver a message to the Chief\'s House.', missable: false },
        { name: 'The Residential Area', desc: 'Help a Nopon in the Residential Area.', missable: false },
        { name: 'The Heropon\'s House', desc: 'Visit Riki\'s house.', missable: false },
        { name: 'The Missing Item', desc: 'Find a missing item in Frontier Village.', missable: false },
        { name: 'The Lost Nopon', desc: 'Find a lost Nopon in the village.', missable: false },
        { name: 'The Village Secret', desc: 'Discover a secret about Frontier Village.', missable: false },
        { name: 'The Nopon Festival Preparation', desc: 'Help prepare for the Nopon Festival.', missable: false },
        { name: 'The Nopon Feast', desc: 'Gather food for the Nopon Feast.', missable: false },
        { name: 'The Nopon Dance', desc: 'Learn the Nopon Dance.', missable: false },
        { name: 'The Nopon Song', desc: 'Learn a Nopon song.', missable: false }
    ]
}, {
    area: 'Eryth Sea',
    quests: [
        { name: 'Sea Exploration', desc: 'Explore all islands in Eryth Sea.', missable: false },
        { name: 'Reef Investigation', desc: 'Examine the Hovering Reefs.', missable: false },
        { name: 'Lighthouse Duty', desc: 'Deliver supplies to the Eryth Lighthouse.', missable: true, by: 'Before leaving Eryth Sea' },
        { name: 'Sealed Island', desc: 'Investigate the sealed island.', missable: true, by: 'Before leaving Eryth Sea' },
        { name: 'Underwater Treasure', desc: 'Dive for treasure in the sea.', missable: false },
        { name: 'The Sleeping Dragon', desc: 'Explore the Sleeping Dragon Isle.', missable: false },
        { name: 'The Hode Refuge', desc: 'Help the Hodes at their refuge.', missable: false },
        { name: 'The Ether Crystal Deposit', desc: 'Collect ether crystals from the deposit.', missable: false },
        { name: 'The Latael Shore', desc: 'Explore Latael Shore.', missable: false },
        { name: 'The Center Gate', desc: 'Investigate the Center Gate.', missable: false },
        { name: 'The High Entia Tomb', desc: 'Visit the High Entia Tomb in Eryth Sea.', missable: false },
        { name: 'The Syrath Lighthouse', desc: 'Visit the Syrath Lighthouse.', missable: false },
        { name: 'The Central Seal Island', desc: 'Explore the Central Seal Island.', missable: false },
        { name: 'The Soltnar Seal Island', desc: 'Explore the Soltnar Seal Island.', missable: false },
        { name: 'The Khatorl Seal Island', desc: 'Explore the Khatorl Seal Island.', missable: false },
        { name: 'The Ether Plant', desc: 'Investigate the Ether Plant.', missable: false },
        { name: 'The Faras Cave', desc: 'Explore Faras Cave.', missable: false },
        { name: 'The Anu Shore', desc: 'Explore Anu Shore.', missable: false },
        { name: 'The Bionis\' Occipital', desc: 'Visit the Bionis\' Occipital.', missable: false },
        { name: 'The Kromar Coast', desc: 'Explore Kromar Coast.', missable: false },
        { name: 'The Secluded Island', desc: 'Find the Secluded Island.', missable: false },
        { name: 'The Showdown Cliff', desc: 'Visit Showdown Cliff.', missable: false }
    ]
}, {
    area: 'Alcamoth',
    quests: [
        { name: 'High Entia Affairs', desc: 'Complete tasks for the High Entia citizens.', missable: false },
        { name: 'Imperial Palace', desc: 'Deliver a message to the palace.', missable: true, by: 'Before leaving Alcamoth' },
        { name: 'Park Cleanup', desc: 'Clear monsters from the park.', missable: true, by: 'Before leaving Alcamoth' },
        { name: 'The Conspiracy', desc: 'Investigate the rumours in Alcamoth.', missable: true, by: 'Before leaving Alcamoth' },
        { name: 'High Entia Festival', desc: 'Gather items for the festival.', missable: true, by: 'Before leaving Alcamoth' },
        { name: 'Melia\'s Request', desc: 'Help Melia with a personal task.', missable: true, by: 'Before leaving Alcamoth' },
        { name: 'The Archives', desc: 'Research ancient texts in the Archives.', missable: false },
        { name: 'The Observatory', desc: 'Visit the observatory and report back.', missable: false },
        { name: 'The Imperial Guard Post', desc: 'Visit the Imperial Guard Post.', missable: false },
        { name: 'The Market', desc: 'Visit the Alcamoth Market.', missable: false },
        { name: 'The Residential Area', desc: 'Help a High Entia in the Residential Area.', missable: false },
        { name: 'The Lost Ring', desc: 'Find a lost ring in Alcamoth.', missable: false },
        { name: 'The Missing Person', desc: 'Find a missing person in Alcamoth.', missable: false },
        { name: 'The Hidden Library', desc: 'Find a hidden library in Alcamoth.', missable: false },
        { name: 'The Ancient Text', desc: 'Translate an ancient text.', missable: false },
        { name: 'The Royal Secret', desc: 'Discover a royal secret.', missable: true, by: 'Before leaving Alcamoth' },
        { name: 'The High Entia Tradition', desc: 'Learn about High Entia traditions.', missable: false },
        { name: 'The Forbidden Knowledge', desc: 'Find forbidden knowledge in the Archives.', missable: false }
    ]
}, {
    area: 'High Entia Tomb',
    quests: [
        { name: 'Tomb Exploration', desc: 'Explore all areas of the High Entia Tomb.', missable: false },
        { name: 'Ancient Artifacts', desc: 'Collect 5 Ancient Coins from the tomb.', missable: false },
        { name: 'The Sealed Room', desc: 'Discover the Secret Area in the tomb.', missable: false },
        { name: 'Tomb Guardian', desc: 'Defeat the guardian of the tomb.', missable: false },
        { name: 'The Crypt of the Ancients', desc: 'Explore the crypt of ancient High Entia.', missable: false },
        { name: 'The Corridor of Silence', desc: 'Explore the Corridor of Silence.', missable: false },
        { name: 'The Chamber of Offerings', desc: 'Visit the Chamber of Offerings.', missable: false },
        { name: 'The Tomb of Kings', desc: 'Explore the Tomb of Kings.', missable: false },
        { name: 'The Ether Chamber', desc: 'Investigate the Ether Chamber.', missable: false },
        { name: 'The Hidden Passage', desc: 'Find a hidden passage in the tomb.', missable: false },
        { name: 'The Ancient Key', desc: 'Find an ancient key in the tomb.', missable: false },
        { name: 'The Lost Treasure', desc: 'Find lost treasure in the tomb.', missable: false }
    ]
}, {
    area: 'Valak Mountain',
    quests: [
        { name: 'Mountain Expedition', desc: 'Explore all areas of Valak Mountain.', missable: false },
        { name: 'Snow Monster Hunt', desc: 'Defeat 5 Rhoguls on the mountain.', missable: false },
        { name: 'Ice Crystal Collection', desc: 'Collect 5 Ice Crystals from ether deposits.', missable: false },
        { name: 'The Secret Hot Spring', desc: 'Discover the Secret Area on Valak Mountain.', missable: false },
        { name: 'Zaktus Camp', desc: 'Help the Nopon merchants at Zaktus.', missable: false },
        { name: 'Frozen Falls', desc: 'Investigate the frozen waterfall.', missable: false },
        { name: 'The Crystal Cave', desc: 'Explore the cave with ice crystals.', missable: false },
        { name: 'The Mountain Path', desc: 'Clear the mountain path of monsters.', missable: false },
        { name: 'The Zokhed Pass', desc: 'Cross the Zokhed Pass.', missable: false },
        { name: 'The Mechonis Wound', desc: 'Investigate the Mechonis Wound.', missable: false },
        { name: 'The Hollow Bone', desc: 'Explore the Hollow Bone.', missable: false },
        { name: 'The Bafalgar Pedestal', desc: 'Find the Bafalgar Pedestal.', missable: false },
        { name: 'The Three Sage Summit', desc: 'Reach the Three Sage Summit.', missable: false },
        { name: 'The Nopon Camp', desc: 'Help the Nopon at their camp.', missable: false },
        { name: 'The Harict Chapel', desc: 'Visit the Harict Chapel.', missable: false },
        { name: 'The Serik Waterfall', desc: 'Explore the Serik Waterfall.', missable: false },
        { name: 'The Ice Cave', desc: 'Explore the Ice Cave.', missable: false },
        { name: 'The Frozen Lake', desc: 'Explore the frozen lake.', missable: false }
    ]
}, {
    area: 'Sword Valley',
    quests: [
        { name: 'Battlefield Investigation', desc: 'Explore all areas of Sword Valley.', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'Mechon Extermination', desc: 'Defeat 10 Mechon in Sword Valley.', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'Mechon Factory', desc: 'Discover the Secret Area in Sword Valley.', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'Dunban\'s Request', desc: 'Help Dunban with a personal mission.', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'Valley Supplies', desc: 'Collect supplies for the army camp.', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'The Faced Mechon', desc: 'Investigate the Faced Mechon sightings.', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'The Fortress Approach', desc: 'Clear the path to Galahad Fortress.', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'The Valley Overlook', desc: 'Find the Valley Overlook.', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'The Mechon Wreckage', desc: 'Investigate Mechon Wreckage.', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'The Central Valley', desc: 'Explore the Central Valley.', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'Dunban\'s Camp', desc: 'Visit Dunban\'s Camp.', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'The Sword Valley Entrance', desc: 'Secure the Sword Valley Entrance.', missable: true, by: 'Before the end of Mechonis Field' }
    ]
}, {
    area: 'Galahad Fortress',
    quests: [
        { name: 'Fortress Infiltration', desc: 'Explore all areas of Galahad Fortress.', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'Mechon Commander', desc: 'Defeat the Mechon commanders in the fortress.', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'Fortress Secrets', desc: 'Discover the hidden passages in the fortress.', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'The Command Room', desc: 'Reach the command room at the heart of the fortress.', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'The Defense Tower', desc: 'Disable the defense tower.', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'The Central Corridor', desc: 'Clear the Central Corridor.', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'The Mechon Hangar', desc: 'Investigate the Mechon Hangar.', missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'The Fortress Ramparts', desc: 'Explore the Fortress Ramparts.', missable: true, by: 'Before the end of Mechonis Field' }
    ]
}, {
    area: 'Fallen Arm',
    quests: [
        { name: 'Machina Refuge', desc: 'Explore the hidden Machina village.', missable: false },
        { name: 'Machina Help', desc: 'Complete tasks for the Machina refugees.', missable: false },
        { name: 'The Secluded Island', desc: 'Discover the Secret Area on the Fallen Arm.', missable: false },
        { name: 'Disturbed Waters', desc: 'Investigate the mysterious disturbances in the water.', missable: false },
        { name: 'Daedala Hunt', desc: 'Defeat the Ancient Daedala (Superboss).', missable: false },
        { name: 'The Ruined City', desc: 'Explore the ruins of a city on the arm.', missable: false },
        { name: 'The Arm Overlook', desc: 'Find the overlook with a view of the arm.', missable: false },
        { name: 'The Hidden Cave', desc: 'Discover a cave on the Fallen Arm.', missable: false },
        { name: 'The Refuge Beach', desc: 'Explore the beach near the Machina Refuge.', missable: false },
        { name: 'The Machina Artifact', desc: 'Find a Machina artifact.', missable: false },
        { name: 'The Lost Machina', desc: 'Find a lost Machina.', missable: false },
        { name: 'The Machina Secret', desc: 'Discover a secret about the Machina.', missable: false },
        { name: 'The Arm\'s Core', desc: 'Find the core of the Fallen Arm.', missable: false }
    ]
}, {
    area: 'Mechonis Field',
    quests: [
        { name: 'Field Exploration', desc: 'Explore all areas of Mechonis Field.', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'Mechon Patrol', desc: 'Defeat the Mechon patrolling the field.', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'Hidden Control Room', desc: 'Discover the Secret Area in Mechonis Field.', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'Lift Repair', desc: 'Fix the main lift in the field.', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'Observation Platform', desc: 'Reach the highest point of the field.', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'The Gear Chamber', desc: 'Investigate the gear chamber.', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'The Piston Passage', desc: 'Explore the piston passage.', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'The Field Path', desc: 'Clear the Field Path.', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'The Main Lift', desc: 'Investigate the Main Lift.', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'The Mechonis Core Access', desc: 'Find the Mechonis Core Access.', missable: true, by: 'Before the Agniratha lockout' }
    ]
}, {
    area: 'Central Factory',
    quests: [
        { name: 'Factory Investigation', desc: 'Explore all areas of the Central Factory.', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'Production Line', desc: 'Inspect the assembly line and report back.', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'Core Control', desc: 'Reach the core of the factory.', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'Factory Sabotage', desc: 'Sabotage the Mechon production.', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'The Conveyor Path', desc: 'Follow the conveyor path to find a secret.', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'The Factory Floor', desc: 'Explore the Factory Floor.', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'The Control Room', desc: 'Investigate the Control Room.', missable: true, by: 'Before the Agniratha lockout' }
    ]
}, {
    area: 'Agniratha',
    quests: [
        { name: 'City Exploration', desc: 'Explore all areas of Agniratha.', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'Imperial Investigation', desc: 'Investigate the Imperial Tower.', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'Agniratha Citizens', desc: 'Help the remaining citizens of Agniratha.', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'The Emperor\'s Throne', desc: 'Reach the throne room in the tower.', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'The Mechon Workshop', desc: 'Investigate the Mechon workshop.', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'The Palace Gardens', desc: 'Explore the gardens of the Imperial Tower.', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'The Agniratha Gate', desc: 'Secure the Agniratha Gate.', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'The Central Plaza', desc: 'Explore the Central Plaza.', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'The Residential District', desc: 'Help citizens in the Residential District.', missable: true, by: 'Before the Agniratha lockout' },
        { name: 'The Imperial Secret', desc: 'Discover a secret about the Imperial family.', missable: true, by: 'Before the Agniratha lockout' }
    ]
}, {
    area: 'Bionis\' Interior',
    quests: [
        { name: 'Inner Passage', desc: 'Explore the passage inside the Bionis.', missable: false },
        { name: 'Heart of the Bionis', desc: 'Reach the very core of the titan.', missable: false },
        { name: 'The Disciple', desc: 'Defeat the Disciple at the end of the interior.', missable: false },
        { name: 'The Flesh Corridor', desc: 'Navigate the corridor of flesh.', missable: false },
        { name: 'The Bone Bridge', desc: 'Cross the bridge made of bone.', missable: false },
        { name: 'The Core Chamber', desc: 'Enter the Core Chamber.', missable: false },
        { name: 'The Bionis\' Secret', desc: 'Discover a secret about the Bionis.', missable: false },
        { name: 'The Inner Light', desc: 'Find the source of light inside the Bionis.', missable: false }
    ]
}, {
    area: 'Prison Island',
    quests: [
        { name: 'Prison Exploration', desc: 'Explore all areas of Prison Island.', missable: false },
        { name: 'Central Prison', desc: 'Investigate the central holding area.', missable: false },
        { name: 'The Observatory', desc: 'Reach the highest point of Prison Island.', missable: false },
        { name: 'Final Confrontation', desc: 'Defeat the final boss of Prison Island.', missable: false },
        { name: 'The Prison Courtyard', desc: 'Explore the courtyard of the prison.', missable: false },
        { name: 'The Guard Quarters', desc: 'Search the guard quarters for information.', missable: false },
        { name: 'The Solitary Cells', desc: 'Investigate the solitary confinement cells.', missable: false },
        { name: 'The Prison Entrance', desc: 'Secure the Prison Entrance.', missable: false },
        { name: 'The Island\'s Secret', desc: 'Discover a secret about Prison Island.', missable: false },
        { name: 'The Lost Prisoner', desc: 'Find a lost prisoner on the island.', missable: false }
    ]
}];
