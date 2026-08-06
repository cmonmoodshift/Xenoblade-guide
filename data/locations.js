// ==============================================================
//  LOCATION DATA — COMPLETE (Landmarks & Locations)
//  Source: GameFAQs, StrategyWiki, Xenoblade Wiki
//  Total: All discoverable locations in the game
// ==============================================================
const locationData = [{
    area: 'Colony 9',
    locations: [
        // === LANDMARKS (★) — can fast-travel ===
        { name: 'Mechon Wreckage Site', desc: '★ Landmark — Remains of a fallen Mechon.', type: 'Landmark' },
        { name: 'Main Entrance', desc: '★ Landmark — The main gate of Colony 9.', type: 'Landmark' },
        { name: 'Ether Light', desc: '★ Landmark — Glowing ether deposit near the residential area.', type: 'Landmark' },
        { name: 'Gem Man\'s Stall', desc: '★ Landmark — Shop run by the Gem Man.', type: 'Landmark' },
        { name: 'Central Plaza', desc: '★ Landmark — The heart of Colony 9.', type: 'Landmark' },
        { name: 'Fortress Entrance', desc: '★ Landmark — Entrance to the military fortress.', type: 'Landmark' },
        { name: 'Tranquil Square', desc: '★ Landmark — Quiet square in the residential area.', type: 'Landmark' },
        { name: 'Outlook Park', desc: '★ Landmark — Hill overlooking the colony.', type: 'Landmark' },
        { name: 'Tephra Cave Entrance', desc: '★ Landmark — The path leading into Tephra Cave.', type: 'Landmark' },
        { name: 'Cylinder Hangar', desc: '★ Landmark — Hangar containing Ether Cylinders.', type: 'Landmark' },
        // === LOCATIONS (●) — cannot fast-travel ===
        { name: 'Military District', desc: '● Location — Training grounds and Defence Force HQ.', type: 'Location' },
        { name: 'Anti-Air Battery 1', desc: '● Location — South of the colony, past the bridge.', type: 'Location' },
        { name: 'Anti-Air Battery 2', desc: '● Location — Behind the waterfall in the southeast (Secret Area).', type: 'Location' },
        { name: 'Anti-Air Battery 3', desc: '● Location — Near the northeast edge of the colony.', type: 'Location' },
        { name: 'Weapon Dev. Lab', desc: '● Location — Laboratory for weapon development.', type: 'Location' },
        { name: 'Dunban\'s House', desc: '● Location — Dunban\'s residence in the Residential District.', type: 'Location' },
        { name: 'Commercial District', desc: '● Location — Market square with shops and stalls.', type: 'Location' },
        { name: 'Agora Shore', desc: '● Location — Beach area east of the colony.', type: 'Location' },
        { name: 'Residential District', desc: '● Location — Where Shulk and Fiora live.', type: 'Location' },
        { name: 'Tephra Hill', desc: '● Location — Hill near the Tephra Cave entrance.', type: 'Location' },
        { name: 'Cliff Lake', desc: '● Location — Small lake near the eastern cliffs.', type: 'Location' },
        { name: 'Hazzai Cape', desc: '● Location — Cape on the southeastern coast.', type: 'Location' }
    ]
}, {
    area: 'Tephra Cave',
    locations: [
        // === LANDMARKS (★) ===
        { name: 'Tephra Path', desc: '★ Landmark — Main path through the cave.', type: 'Landmark' },
        { name: 'Mag Mell Ruins', desc: '★ Landmark — Ancient ruins inside the cave.', type: 'Landmark' },
        { name: 'Rear Entrance', desc: '★ Landmark — Exit to the Bionis\' Leg.', type: 'Landmark' },
        { name: 'Spring of Grief', desc: '★ Landmark — A sorrowful-looking spring.', type: 'Landmark' },
        { name: 'Villa Lake', desc: '★ Landmark (1F) — Underground lake.', type: 'Landmark' },
        { name: 'Bafalgar Tomb', desc: '★ Landmark (1F) — Ancient burial chamber.', type: 'Landmark' },
        { name: 'Heavenly Window', desc: '★ Landmark (2F) — Opening in the cave ceiling.', type: 'Landmark' },
        { name: 'Leg Pass', desc: '★ Landmark (3F) — Passage to the Bionis\' Leg.', type: 'Landmark' },
        // === LOCATIONS (●) ===
        { name: 'Caterpile Nest', desc: '● Location — Nest of Caterpiles.', type: 'Location' },
        { name: 'Escape Pod Bay', desc: '● Location — Area with escape pods.', type: 'Location' },
        { name: 'Warehouse 2', desc: '● Location — Second storage warehouse.', type: 'Location' },
        { name: 'Tephra Cavern', desc: '● Location — Large cavern chamber.', type: 'Location' },
        { name: 'Hidden Warehouse', desc: '● Location — Secret storage area.', type: 'Location' },
        { name: 'Forgotten Cave', desc: '● Location — Obscure cave passage.', type: 'Location' },
        { name: 'Emergency Warehouse', desc: '● Location (1F) — Emergency supply storage.', type: 'Location' },
        { name: 'Soothsayer\'s Crypt', desc: '● Location (1F) — Crypt of a soothsayer.', type: 'Location' },
        { name: 'Prayer Room', desc: '● Location (1F) — Room used for ancient rituals.', type: 'Location' },
        { name: 'Bone Corridor', desc: '● Location (1F) — Corridor lined with bones.', type: 'Location' },
        { name: 'Trader\'s Stopper', desc: '● Location (2F) — Rest stop for traders.', type: 'Location' },
        { name: 'Arachno Feeding Lair', desc: '● Location (2F) — Lair where Arachnos feed.', type: 'Location' },
        { name: 'Arachno Queen\'s Nest', desc: '● Location (2F) — Nest of the Arachno Queen.', type: 'Location' },
        { name: 'Kneecap Hill', desc: '● Location (2F) — Hill shaped like a kneecap.', type: 'Location' },
        { name: 'Path of Absolution', desc: '● Location (2F) — Path of purification.', type: 'Location' }
    ]
}, {
    area: 'Bionis\' Leg',
    locations: [
        // === LANDMARKS (★) — Lower Level ===
        { name: 'Ragrinar Canyon Path', desc: '★ Landmark — Canyon path on the Leg.', type: 'Landmark' },
        { name: 'Jabos Rock Rest Area', desc: '★ Landmark — Rest area near Jabos Rock.', type: 'Landmark' },
        { name: 'Kamos Guidepost', desc: '★ Landmark — Path marker near the lake.', type: 'Landmark' },
        { name: 'Refugee Camp', desc: '★ Landmark — Camp for displaced people.', type: 'Landmark' },
        { name: 'South Raguel Bridge', desc: '★ Landmark — Southern bridge over Raguel Lake.', type: 'Landmark' },
        { name: 'North Raguel Bridge', desc: '★ Landmark — Northern bridge over Raguel Lake.', type: 'Landmark' },
        // === LANDMARKS (★) — Upper Level ===
        { name: 'Spiral Valley', desc: '★ Landmark — Winding valley with multiple levels.', type: 'Landmark' },
        { name: 'Zax Guidepost', desc: '★ Landmark — Path marker near Zax.', type: 'Landmark' },
        { name: 'Bask Cave Passage', desc: '★ Landmark — Passage to Bask Cave.', type: 'Landmark' },
        { name: 'Observation Platform', desc: '★ Landmark — High platform with a view.', type: 'Landmark' },
        { name: 'Believer\'s Paradise', desc: '★ Landmark — Scenic viewpoint for believers.', type: 'Landmark' },
        // === LOCATIONS (●) — Lower Level ===
        { name: 'Volff Lair', desc: '● Location — Den of Volffs.', type: 'Location' },
        { name: 'Tranquil Grotto', desc: '● Location — Peaceful grotto.', type: 'Location' },
        { name: 'Kisk Cave', desc: '● Location — Cave near Kisk.', type: 'Location' },
        { name: 'Windy Cave', desc: '● Location — Wind-swept cave.', type: 'Location' },
        { name: 'Maguel Road', desc: '● Location — Road to Maguel.', type: 'Location' },
        { name: 'Raguel Lake', desc: '● Location — Large lake in the centre of the Leg.', type: 'Location' },
        { name: 'Viliera Hill', desc: '● Location — Hilltop with a view of the lake.', type: 'Location' },
        { name: 'Rho Oasis', desc: '● Location — Oasis in the desert area.', type: 'Location' },
        { name: 'Gaur Plain', desc: '● Location — Open plains area.', type: 'Location' },
        { name: 'Tirkin Headquarters', desc: '● Location — Base of the Tirkins.', type: 'Location' },
        { name: 'Sky Stage', desc: '● Location — Open-air stage.', type: 'Location' },
        { name: 'Daksha Shrine', desc: '● Location — Shrine to Daksha.', type: 'Location' },
        { name: 'Crevasse Waterfall', desc: '● Location — Waterfall in a crevasse.', type: 'Location' },
        // === LOCATIONS (●) — Upper Level ===
        { name: 'Traveller\'s Rest', desc: '● Location — Rest stop for travellers.', type: 'Location' },
        { name: 'Kasharpa Falls', desc: '● Location — Waterfall on the upper Leg.', type: 'Location' }
    ]
}, {
    area: 'Colony 6',
    locations: [
        // === LANDMARKS (★) ===
        { name: 'Reconstruction HQ', desc: '★ Landmark — Headquarters for rebuilding.', type: 'Landmark' },
        { name: 'Supply Road', desc: '★ Landmark — Road used for supplies.', type: 'Landmark' },
        { name: 'Watchpoint Junction', desc: '★ Landmark — Junction with a view.', type: 'Landmark' },
        { name: 'Drainage Outlet', desc: '★ Landmark — Water drainage outlet.', type: 'Landmark' },
        { name: 'Freight Road', desc: '★ Landmark — Road for freight transport.', type: 'Landmark' },
        { name: 'Misty Path', desc: '★ Landmark — Path shrouded in mist.', type: 'Landmark' },
        { name: 'Main Entrance', desc: '★ Landmark — Main gate of Colony 6.', type: 'Landmark' },
        // === LOCATIONS (●) ===
        { name: 'Splintered Path', desc: '● Location — Broken path through the ruins.', type: 'Location' },
        { name: 'Hope Farm', desc: '● Location — Farm area under reconstruction.', type: 'Location' },
        { name: 'Freight Elevator', desc: '● Location — Elevator for freight.', type: 'Location' },
        { name: 'Pod Depot', desc: '● Location — Depot for pods.', type: 'Location' }
    ]
}, {
    area: 'Ether Mine',
    locations: [
        // === LANDMARKS (★) — Ground Floor ===
        { name: 'Drainage Tunnel', desc: '★ Landmark — Tunnel for water drainage.', type: 'Landmark' },
        { name: 'Drainage Control Room', desc: '★ Landmark — Controls for the drainage system.', type: 'Landmark' },
        { name: 'Mining Base', desc: '★ Landmark — Main mining operations base.', type: 'Landmark' },
        { name: 'Central Pit - Entrance', desc: '★ Landmark — Entrance to the central pit.', type: 'Landmark' },
        { name: 'Personnel Lift 2', desc: '★ Landmark — Lift for personnel (Level 2).', type: 'Landmark' },
        { name: 'Freight Elevator', desc: '★ Landmark — Elevator for freight transport.', type: 'Landmark' },
        { name: 'Glowmoss Lake', desc: '★ Landmark — Lake lit by glowing moss.', type: 'Landmark' },
        // === LANDMARKS (★) — B1F ===
        { name: 'Regulation Piston', desc: '★ Landmark (B1F) — Piston regulating pressure.', type: 'Landmark' },
        // === LANDMARKS (★) — B3F ===
        { name: 'Personnel Lift 3', desc: '★ Landmark (B3F) — Lift for personnel (Level 3).', type: 'Landmark' },
        // === LANDMARKS (★) — B4F ===
        { name: 'Central Pit - Base Level', desc: '★ Landmark (B4F) — Bottom of the central pit.', type: 'Landmark' },
        // === LOCATIONS (●) — Ground Floor ===
        { name: 'Test Pit 1', desc: '● Location — First test excavation pit.', type: 'Location' },
        { name: 'Test Pit 2', desc: '● Location — Second test excavation pit.', type: 'Location' },
        { name: 'Test Pit 3', desc: '● Location — Third test excavation pit.', type: 'Location' },
        { name: 'Storage Depot', desc: '● Location — Storage area for mined materials.', type: 'Location' },
        { name: 'Central Terminal', desc: '● Location — Main terminal in the mine.', type: 'Location' },
        { name: 'Test Pit 4', desc: '● Location — Fourth test excavation pit.', type: 'Location' },
        { name: 'Observation Point', desc: '● Location — Viewing point over the mine.', type: 'Location' },
        { name: 'Central Pit - Level 1', desc: '● Location — First level of the central pit.', type: 'Location' },
        // === LOCATIONS (●) — B1F ===
        { name: 'Central Pit - Level 2', desc: '● Location (B1F) — Second level of the central pit.', type: 'Location' },
        // === LOCATIONS (●) — B2F ===
        { name: 'Central Pit - Level 3', desc: '● Location (B2F) — Third level of the central pit.', type: 'Location' },
        // === LOCATIONS (●) — B3F ===
        { name: 'Freight Elevator', desc: '● Location (B3F) — Freight elevator at this level.', type: 'Location' }
    ]
}, {
    area: 'Satorl Marsh',
    locations: [
        // === LANDMARKS (★) ===
        { name: 'Kelsher Wetland', desc: '★ Landmark — Wetland area of the marsh.', type: 'Landmark' },
        { name: 'Nopon Merchant Camp', desc: '★ Landmark — Camp of Nopon merchants.', type: 'Landmark' },
        { name: 'Crown Tree', desc: '★ Landmark — Large tree in the marsh.', type: 'Landmark' },
        { name: 'Silent Obelisk', desc: '★ Landmark — Silent standing stone.', type: 'Landmark' },
        { name: 'Glowing Obelisk', desc: '★ Landmark — Glowing standing stone.', type: 'Landmark' },
        { name: 'Sororal Statues', desc: '★ Landmark — Twin statues in the northern part.', type: 'Landmark' },
        { name: 'Statue Summit', desc: '★ Landmark — Peak with statues.', type: 'Landmark' },
        { name: 'Shining Pond', desc: '★ Landmark — Pond that shines at night.', type: 'Landmark' },
        // === LOCATIONS (●) ===
        { name: 'Lacus Swamp', desc: '● Location — Lake area in the swamp.', type: 'Location' },
        { name: 'Zaldania Waterfall', desc: '● Location — Waterfall in the marsh.', type: 'Location' },
        { name: 'Poison Swamp', desc: '● Location — Toxic swamp area.', type: 'Location' },
        { name: 'Altar of Fate', desc: '● Location — Ceremonial altar.', type: 'Location' },
        { name: 'Barren Moor', desc: '● Location — Desolate moorland.', type: 'Location' },
        { name: 'Basin Cave', desc: '● Location — Cave in a basin.', type: 'Location' },
        { name: 'Nopon Refuge', desc: '● Location — Refuge for Nopon.', type: 'Location' },
        { name: 'Exile Fortress', desc: '● Location — Fortress of exiles.', type: 'Location' },
        { name: 'Mauk Floodgate', desc: '● Location — Floodgate controlling water flow.', type: 'Location' },
        { name: 'Oath Sanctuary', desc: '● Location — Sanctuary for oaths.', type: 'Location' },
        { name: 'Place of Judgement', desc: '● Location — Site of judgement.', type: 'Location' },
        { name: 'Dark Swamp', desc: '● Location — Dark, murky swamp.', type: 'Location' },
        { name: 'Soter Ruins', desc: '● Location — Ruins of Soter.', type: 'Location' },
        { name: 'Igna Territory', desc: '● Location — Territory of the Ignas.', type: 'Location' }
    ]
}, {
    area: 'Makna Forest',
    locations: [
        // === LANDMARKS (★) ===
        { name: 'Makna Path', desc: '★ Landmark — The main trail through the forest.', type: 'Landmark' },
        { name: 'Agni Tablet', desc: '★ Landmark — Ancient tablet in the forest.', type: 'Landmark' },
        { name: 'Waypoint Beacon', desc: '★ Landmark — A guiding beacon along the path.', type: 'Landmark' },
        { name: 'Lakeside', desc: '★ Landmark — Area by the lake in the eastern forest.', type: 'Landmark' },
        { name: 'Nopon Arch', desc: '★ Landmark — An arch-shaped rock formation.', type: 'Landmark' },
        { name: 'Twisted Tree Gate', desc: '★ Landmark — Gate formed by twisted trees.', type: 'Landmark' },
        { name: 'Village Entrance', desc: '★ Landmark — The entrance to Frontier Village.', type: 'Landmark' },
        { name: 'Windmill Pavilion', desc: '★ Landmark — A pavilion with a windmill.', type: 'Landmark' },
        { name: 'Glowmoss Trihenge', desc: '★ Landmark — Three standing stones covered in glowing moss.', type: 'Landmark' },
        { name: 'Pod Landing Site', desc: '★ Landmark — Where the High Entia ship landed.', type: 'Landmark' },
        { name: 'Valak Pass', desc: '★ Landmark — The passage to Valak Mountain.', type: 'Landmark' },
        { name: 'Divine Sanctuary', desc: '★ Landmark — Sacred sanctuary in the northwest.', type: 'Landmark' },
        { name: 'Seahorse Islet', desc: '★ Landmark — Secret Area — accessible by swimming.', type: 'Landmark' },
        { name: 'Sparkling Pool', desc: '★ Landmark — A pool of sparkling water.', type: 'Landmark' },
        { name: 'King Agni\'s Tomb', desc: '★ Landmark — Unlocked via Lupa\'s quest chain in Frontier Village.', type: 'Landmark' },
        // === LOCATIONS (●) ===
        { name: 'Eks Watering Hole', desc: '● Location — A watering hole for Eks.', type: 'Location' },
        { name: 'Repaired Bridge Four', desc: '● Location — Bridge connecting to Valak Mountain.', type: 'Location' },
        { name: 'Contaminated Area', desc: '● Location — A polluted area in the forest.', type: 'Location' },
        { name: 'Bridge Three', desc: '● Location — One of the forest bridges.', type: 'Location' },
        { name: 'Sap Cave', desc: '● Location — A cave filled with sap.', type: 'Location' },
        { name: 'Bridge Two', desc: '● Location — Another forest bridge.', type: 'Location' },
        { name: 'Bridge One', desc: '● Location — The first bridge in the forest.', type: 'Location' },
        { name: 'Clear Waterfall', desc: '● Location — A clear, pristine waterfall.', type: 'Location' },
        { name: 'Yellow Flower Grove', desc: '● Location — A grove of yellow flowers.', type: 'Location' },
        { name: 'Decayed Forest', desc: '● Location — A decaying part of the forest.', type: 'Location' },
        { name: 'Abyss Basin', desc: '● Location — A bottomless valley with a spiraling path.', type: 'Location' },
        { name: 'Precipice Bridge', desc: '● Location — A bridge over a deep chasm.', type: 'Location' },
        { name: 'Hode Lair', desc: '● Location — Home to a series of Hode quests.', type: 'Location' },
        { name: 'Great Makna Falls', desc: '● Location — The massive waterfall in the centre of the forest.', type: 'Location' }
    ]
}, {
    area: 'Frontier Village',
    locations: [
        // === LANDMARKS (★) ===
        { name: 'Entry Bridge', desc: '★ Landmark (B1F) — The bridge at the entrance to Frontier Village.', type: 'Landmark' },
        { name: 'Nopon Tower', desc: '★ Landmark (GF) — Large wooden tower outside the main village.', type: 'Landmark' },
        { name: 'Sacred Altar', desc: '★ Landmark (GF) — Central landmark with a pool and island.', type: 'Landmark' },
        { name: 'Pollen Works', desc: '★ Landmark (4F) — The main pollen production facility.', type: 'Landmark' },
        { name: 'Riki\'s House', desc: '★ Landmark (4F) — The Heropon\'s home.', type: 'Landmark' },
        { name: 'Chief\'s Residence', desc: '★ Landmark (6F) — Home of Chief Dunga.', type: 'Landmark' },
        { name: 'Prophecy Hut', desc: '★ Landmark (7F) — A hut for prophecies.', type: 'Landmark' },
        { name: 'Contemplation Terrace', desc: '★ Landmark (8F) — The highest viewpoint.', type: 'Landmark' },
        // === LOCATIONS (●) ===
        { name: 'Nopon Kitchen', desc: '● Location (B1F) — Kitchen area on the basement floor.', type: 'Location' },
        { name: 'Underground Store', desc: '● Location (B1F) — Shop in the basement.', type: 'Location' },
        { name: 'Reservoir', desc: '● Location (B1F) — Water reservoir.', type: 'Location' },
        { name: 'Central Plaza', desc: '● Location (GF) — Main gathering area on the ground floor.', type: 'Location' },
        { name: 'Kyn Shopping Street', desc: '● Location (1F) — Shopping district.', type: 'Location' },
        { name: 'Pollen Orb Storehouse', desc: '● Location (2F) — Storage for pollen orbs.', type: 'Location' },
        { name: 'Orb Storage Level', desc: '● Location (2F) — Additional orb storage.', type: 'Location' },
        { name: 'Middle Housing Level', desc: '● Location (3F) — Residential area.', type: 'Location' },
        { name: 'Pollen Works Level', desc: '● Location (4F) — The level where pollen is processed.', type: 'Location' },
        { name: 'Archaeology Level', desc: '● Location (5F) — Archaeology research area.', type: 'Location' },
        { name: 'Archaeology Centre', desc: '● Location (5F) — Centre for archaeology.', type: 'Location' },
        { name: 'Top Housing Level', desc: '● Location (6F) — Upper residential area.', type: 'Location' },
        { name: 'Mysterious Sanctuary', desc: '● Location (7F) — A mysterious sanctuary.', type: 'Location' },
        { name: 'Apex Lake', desc: '● Location (8F) — Lake at the very top.', type: 'Location' }
    ]
}, {
    area: 'Eryth Sea',
    locations: [
        // === LANDMARKS (★) ===
        { name: 'Latael Shore', desc: '★ Landmark — Shore of Eryth Sea.', type: 'Landmark' },
        { name: 'Center Gate', desc: '★ Landmark — Central gate on the sea.', type: 'Landmark' },
        { name: 'High Entia Tomb', desc: '★ Landmark — Tomb of the High Entia.', type: 'Landmark' },
        { name: 'Syrath Lighthouse', desc: '★ Landmark — Lighthouse on Syrath Island.', type: 'Landmark' },
        { name: 'Central Seal Island', desc: '★ Landmark — Island with the High Entia seal.', type: 'Landmark' },
        { name: 'Soltnar Seal Island', desc: '★ Landmark — Island with a seal.', type: 'Landmark' },
        { name: 'Khatorl Seal Island', desc: '★ Landmark — Island with a seal.', type: 'Landmark' },
        { name: 'Ether Plant', desc: '★ Landmark — Ether plant on the sea.', type: 'Landmark' },
        { name: 'Faras Cave', desc: '★ Landmark — Cave on the sea.', type: 'Landmark' },
        { name: 'Hovering Reef 1', desc: '★ Landmark — Floating reef formation #1.', type: 'Landmark' },
        { name: 'Hovering Reef 5', desc: '★ Landmark — Floating reef formation #5.', type: 'Landmark' },
        { name: 'Hovering Reef 9', desc: '★ Landmark — Floating reef formation #9.', type: 'Landmark' },
        // === LOCATIONS (●) ===
        { name: 'Anu Shore', desc: '● Location — Shore on the sea.', type: 'Location' },
        { name: 'Bionis\' Occipital', desc: '● Location — Part of the Bionis\' head.', type: 'Location' },
        { name: 'Ether Crystal Deposit', desc: '● Location — Deposit of ether crystals.', type: 'Location' },
        { name: 'Hode Refuge', desc: '● Location — Refuge of the Hodes.', type: 'Location' },
        { name: 'Kromar Coast', desc: '● Location — Coastline on the sea.', type: 'Location' },
        { name: 'Secluded Island', desc: '● Location — Remote island.', type: 'Location' },
        { name: 'Showdown Cliff', desc: '● Location — Cliff for confrontations.', type: 'Location' },
        { name: 'Sleeping Dragon Isle', desc: '● Location — Island shaped like a sleeping dragon.', type: 'Location' },
        { name: 'Hovering Reef 2', desc: '● Location — Floating reef formation #2.', type: 'Location' },
        { name: 'Hovering Reef 3', desc: '● Location — Floating reef formation #3.', type: 'Location' },
        { name: 'Hovering Reef 4', desc: '● Location — Floating reef formation #4.', type: 'Location' },
        { name: 'Hovering Reef 6', desc: '● Location — Floating reef formation #6.', type: 'Location' },
        { name: 'Hovering Reef 7', desc: '● Location — Floating reef formation #7.', type: 'Location' },
        { name: 'Hovering Reef 8', desc: '● Location — Floating reef formation #8.', type: 'Location' },
        { name: 'Hovering Reef 10', desc: '● Location — Floating reef formation #10.', type: 'Location' }
    ]
}, {
    area: 'Alcamoth',
    locations: [
        // === LANDMARKS (★) ===
        { name: 'Imperial Palace', desc: '★ Landmark — The seat of the High Entia Emperor.', type: 'Landmark' },
        { name: 'Main Plaza', desc: '★ Landmark — The central square of the capital.', type: 'Landmark' },
        { name: 'Park', desc: '★ Landmark — Garden area near the palace.', type: 'Landmark' },
        { name: 'Market', desc: '★ Landmark — Marketplace in Alcamoth.', type: 'Landmark' },
        // === LOCATIONS (●) ===
        { name: 'Residential Area', desc: '● Location — Housing for High Entia citizens.', type: 'Location' },
        { name: 'Imperial Guard Post', desc: '● Location — Guard post of the Imperial Guard.', type: 'Location' },
        { name: 'Observatory', desc: '● Location — Observatory for the stars.', type: 'Location' },
        { name: 'Archives', desc: '● Location — Archive of High Entia history.', type: 'Location' }
    ]
}, {
    area: 'High Entia Tomb',
    locations: [
        // === LANDMARKS (★) ===
        { name: 'Tomb Entrance', desc: '★ Landmark — The entry to the sacred burial ground.', type: 'Landmark' },
        { name: 'Ether Chamber', desc: '★ Landmark — Room filled with ancient ether technology.', type: 'Landmark' },
        { name: 'Sealed Room', desc: '★ Landmark — Secret Area — behind a hidden door.', type: 'Landmark' },
        // === LOCATIONS (●) ===
        { name: 'Corridor of Silence', desc: '● Location — Silent corridor in the tomb.', type: 'Location' },
        { name: 'Chamber of Offerings', desc: '● Location — Chamber for offerings.', type: 'Location' },
        { name: 'Tomb of Kings', desc: '● Location — Tomb of High Entia kings.', type: 'Location' },
        { name: 'Crypt of the Ancients', desc: '● Location — Crypt of ancient High Entia.', type: 'Location' }
    ]
}, {
    area: 'Prison Island',
    locations: [
        // === LANDMARKS (★) ===
        { name: 'Prison Entrance', desc: '★ Landmark — The gate to the island prison.', type: 'Landmark' },
        { name: 'Central Prison', desc: '★ Landmark — The main holding area.', type: 'Landmark' },
        { name: 'Observatory', desc: '★ Landmark — Highest point with a view of the Bionis.', type: 'Landmark' },
        // === LOCATIONS (●) ===
        { name: 'Prison Courtyard', desc: '● Location — Courtyard of the prison.', type: 'Location' },
        { name: 'Guard Quarters', desc: '● Location — Quarters for prison guards.', type: 'Location' },
        { name: 'Solitary Cells', desc: '● Location — Solitary confinement cells.', type: 'Location' }
    ]
}, {
    area: 'Valak Mountain',
    locations: [
        // === LANDMARKS (★) ===
        { name: 'Zokhed Pass', desc: '★ Landmark — Pass through the mountain.', type: 'Landmark' },
        { name: 'Mechonis Wound', desc: '★ Landmark — Wound left by the Mechonis.', type: 'Landmark' },
        { name: 'Hollow Bone', desc: '★ Landmark — Large hollow bone.', type: 'Landmark' },
        { name: 'Bafalgar Pedestal', desc: '★ Landmark — Secret Area — Pedestal of Bafalgar.', type: 'Landmark' },
        { name: 'Three Sage Summit', desc: '★ Landmark — Secret Area — Summit of three sages.', type: 'Landmark' },
        { name: 'Nopon Camp', desc: '★ Landmark — Camp of the Nopon travelling merchants.', type: 'Landmark' },
        { name: 'Harict Chapel', desc: '★ Landmark — Chapel on the mountain.', type: 'Landmark' },
        // === LOCATIONS (●) ===
        { name: 'Serik Waterfall', desc: '● Location — Waterfall on the mountain.', type: 'Location' },
        { name: 'Ice Cave', desc: '● Location — Cave system with frozen enemies.', type: 'Location' },
        { name: 'Frozen Falls', desc: '● Location — Waterfall frozen solid.', type: 'Location' },
        { name: 'Secret Hot Spring', desc: '● Location — Secret Area — hidden geothermal pool.', type: 'Location' },
        { name: 'Mountain Path', desc: '● Location — Path up the mountain.', type: 'Location' },
        { name: 'Crystal Cave', desc: '● Location — Cave with ice crystals.', type: 'Location' }
    ]
}, {
    area: 'Sword Valley',
    locations: [
        // === LANDMARKS (★) ===
        { name: 'Sword Valley Entrance', desc: '★ Landmark — The start of the Mechon battlefield.', type: 'Landmark' },
        { name: 'Dunban\'s Camp', desc: '★ Landmark — The camp where Dunban prepares.', type: 'Landmark' },
        { name: 'Central Valley', desc: '★ Landmark — The main battlefield area.', type: 'Landmark' },
        { name: 'Mechon Factory', desc: '★ Landmark — Secret Area — hidden factory entrance.', type: 'Landmark' },
        // === LOCATIONS (●) ===
        { name: 'Valley Overlook', desc: '● Location — Overlook of the valley.', type: 'Location' },
        { name: 'Mechon Wreckage', desc: '● Location — Wreckage of fallen Mechon.', type: 'Location' },
        { name: 'Fortress Approach', desc: '● Location — Approach to Galahad Fortress.', type: 'Location' }
    ]
}, {
    area: 'Galahad Fortress',
    locations: [
        // === LANDMARKS (★) ===
        { name: 'Fortress Entrance', desc: '★ Landmark — The main gate of the Mechon fortress.', type: 'Landmark' },
        { name: 'Central Corridor', desc: '★ Landmark — The main internal passage.', type: 'Landmark' },
        { name: 'Command Room', desc: '★ Landmark — The heart of the fortress.', type: 'Landmark' },
        // === LOCATIONS (●) ===
        { name: 'Defense Tower', desc: '● Location — Defensive tower of the fortress.', type: 'Location' },
        { name: 'Mechon Hangar', desc: '● Location — Hangar for Mechon.', type: 'Location' },
        { name: 'Fortress Ramparts', desc: '● Location — Ramparts of the fortress.', type: 'Location' }
    ]
}, {
    area: 'Fallen Arm',
    locations: [
        // === LANDMARKS (★) ===
        { name: 'Machina Refuge', desc: '★ Landmark — The hidden Machina village.', type: 'Landmark' },
        { name: 'Disturbed Waters', desc: '★ Landmark — Coastal area with debris.', type: 'Landmark' },
        { name: 'Secluded Island', desc: '★ Landmark — Secret Area — island reachable by swimming.', type: 'Landmark' },
        // === LOCATIONS (●) ===
        { name: 'Refuge Beach', desc: '● Location — Beach near the Machina Refuge.', type: 'Location' },
        { name: 'Ruined City', desc: '● Location — Ruins of a city on the arm.', type: 'Location' },
        { name: 'Arm Overlook', desc: '● Location — Overlook of the Fallen Arm.', type: 'Location' },
        { name: 'Hidden Cave', desc: '● Location — Cave on the Fallen Arm.', type: 'Location' }
    ]
}, {
    area: 'Mechonis Field',
    locations: [
        // === LANDMARKS (★) ===
        { name: 'Field Entrance', desc: '★ Landmark — Entry point from the Fallen Arm.', type: 'Landmark' },
        { name: 'Main Lift', desc: '★ Landmark — Central elevator shaft.', type: 'Landmark' },
        { name: 'Observation Platform', desc: '★ Landmark — Platform with a view of the field.', type: 'Landmark' },
        { name: 'Hidden Control Room', desc: '★ Landmark — Secret Area — behind a locked door.', type: 'Landmark' },
        // === LOCATIONS (●) ===
        { name: 'Field Path', desc: '● Location — Path through Mechonis Field.', type: 'Location' },
        { name: 'Gear Chamber', desc: '● Location — Chamber with massive gears.', type: 'Location' },
        { name: 'Piston Passage', desc: '● Location — Passage with pistons.', type: 'Location' },
        { name: 'Mechonis Core Access', desc: '● Location — Access point to the core.', type: 'Location' }
    ]
}, {
    area: 'Central Factory',
    locations: [
        // === LANDMARKS (★) ===
        { name: 'Factory Entrance', desc: '★ Landmark — The gateway to the factory.', type: 'Landmark' },
        { name: 'Assembly Line', desc: '★ Landmark — Main production floor.', type: 'Landmark' },
        { name: 'Core Control', desc: '★ Landmark — The centre of the factory.', type: 'Landmark' },
        // === LOCATIONS (●) ===
        { name: 'Factory Floor', desc: '● Location — Main factory floor.', type: 'Location' },
        { name: 'Conveyor Path', desc: '● Location — Path along conveyors.', type: 'Location' },
        { name: 'Control Room', desc: '● Location — Room for controlling the factory.', type: 'Location' }
    ]
}, {
    area: 'Agniratha',
    locations: [
        // === LANDMARKS (★) ===
        { name: 'Agniratha Gate', desc: '★ Landmark — The grand entrance to the Mechonis capital.', type: 'Landmark' },
        { name: 'Central Plaza', desc: '★ Landmark — The main square of the city.', type: 'Landmark' },
        { name: 'Imperial Tower', desc: '★ Landmark — Egil\'s seat of power.', type: 'Landmark' },
        // === LOCATIONS (●) ===
        { name: 'Residential District', desc: '● Location — Housing area of Agniratha.', type: 'Location' },
        { name: 'Mechon Workshop', desc: '● Location — Workshop for Mechon.', type: 'Location' },
        { name: 'Palace Gardens', desc: '● Location — Gardens of the Imperial Tower.', type: 'Location' }
    ]
}, {
    area: 'Bionis\' Interior',
    locations: [
        // === LANDMARKS (★) ===
        { name: 'Inner Passage', desc: '★ Landmark — The path inside the Bionis.', type: 'Landmark' },
        { name: 'Heart of the Bionis', desc: '★ Landmark — The very core of the titan.', type: 'Landmark' },
        // === LOCATIONS (●) ===
        { name: 'Flesh Corridor', desc: '● Location — Corridor of flesh.', type: 'Location' },
        { name: 'Bone Bridge', desc: '● Location — Bridge made of bone.', type: 'Location' },
        { name: 'Core Chamber', desc: '● Location — Chamber of the Bionis\' core.', type: 'Location' }
    ]
}];
