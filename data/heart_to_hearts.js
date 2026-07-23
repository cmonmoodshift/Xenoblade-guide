// ==============================================================
//  HEART-TO-HEART DATA
// ==============================================================
const heartData = [{
    area: 'Colony 9',
    hearts: [
        { name: 'A New Beginning', desc: 'Residential District, near the fountain. Shulk & Fiora.', affinity: '❤️ 2★ between Shulk & Fiora', missable: true,
            by: 'Before the attack on Colony 9' },
        { name: 'The Meaning of Friendship', desc: 'Military District, near the training ground. Shulk & Reyn.', affinity: '❤️ 1★ between Shulk & Reyn',
            missable: false },
        { name: 'A Quiet Moment', desc: 'Outlook Park. Reyn & Fiora.', affinity: '❤️ 2★ between Reyn & Fiora',
            missable: true, by: 'Before the attack on Colony 9' },
        { name: 'Future Dreams', desc: 'Residential District, at the lookout. Shulk & Fiora.', affinity: '❤️ 3★ between Shulk & Fiora',
            missable: true, by: 'Before the attack on Colony 9' }
    ]
}, {
    area: 'Tephra Cave',
    hearts: [
        { name: 'Fossil Secrets', desc: 'Fossil Chamber. Shulk & Sharla.', affinity: '❤️ 2★ between Shulk & Sharla',
            missable: false },
        { name: 'Cave Memories', desc: 'Glowing Cave. Reyn & Sharla.', affinity: '❤️ 2★ between Reyn & Sharla',
            missable: false }
    ]
}, {
    area: 'Bionis\' Leg',
    hearts: [
        { name: 'The View from Above', desc: 'Viliera Hill. Shulk & Dunban.', affinity: '❤️ 3★ between Shulk & Dunban',
            missable: false },
        { name: 'Campfire Stories', desc: 'Near the Refugee Camp. Reyn & Dunban.', affinity: '❤️ 2★ between Reyn & Dunban',
            missable: true, by: 'Before the Refugee Camp moves' }
    ]
}, {
    area: 'Colony 6',
    hearts: [
        { name: 'Rebuilding Hope', desc: 'Colony 6 Central Plaza. Shulk & Melia.', affinity: '❤️ 2★ between Shulk & Melia',
            missable: false },
        { name: 'New Home', desc: 'Colony 6 Residential District. Reyn & Sharla.', affinity: '❤️ 3★ between Reyn & Sharla',
            missable: false },
        { name: 'The Future of Colony 6', desc: 'Colony 6 Commercial District. Dunban & Seven.', affinity: '❤️ 3★ between Dunban & Seven',
            missable: false }
    ]
}, {
    area: 'Ether Mine',
    hearts: [
        { name: 'Mine Mystery', desc: 'Near the Excavation Site. Sharla & Dunban.', affinity: '❤️ 2★ between Sharla & Dunban',
            missable: false }
    ]
}, {
    area: 'Satorl Marsh',
    hearts: [
        { name: 'Swamp Romance', desc: 'Near the Altar. Sharla & Melia.', affinity: '❤️ 2★ between Sharla & Melia',
            missable: false },
        { name: 'Marsh Lights', desc: 'Shimmering Swamp. Riki & Dunban.', affinity: '❤️ 2★ between Riki & Dunban',
            missable: false }
    ]
}, {
    area: 'Makna Forest',
    hearts: [
        { name: 'Forest for the Trees', desc: 'Great Makna Falls. Shulk & Riki.', affinity: '❤️ 2★ between Shulk & Riki',
            missable: false },
        { name: 'Heropon\'s Advice', desc: 'Near the Ether Plant. Riki & Melia.', affinity: '❤️ 2★ between Riki & Melia',
            missable: false }
    ]
}, {
    area: 'Frontier Village',
    hearts: [
        { name: 'Nopon Wisdom', desc: 'Central Bazaar. Shulk & Riki.', affinity: '❤️ 3★ between Shulk & Riki',
            missable: false },
        { name: 'Riki\'s Family', desc: 'Residential Area. Riki & Sharla.', affinity: '❤️ 2★ between Riki & Sharla',
            missable: false }
    ]
}, {
    area: 'Eryth Sea',
    hearts: [
        { name: 'Sea of Stars', desc: 'Sealed Island. Shulk & Melia.', affinity: '❤️ 3★ between Shulk & Melia',
            missable: true, by: 'Before leaving Eryth Sea' },
        { name: 'Island Secrets', desc: 'Hovering Reefs. Dunban & Melia.', affinity: '❤️ 2★ between Dunban & Melia',
            missable: false }
    ]
}, {
    area: 'Alcamoth',
    hearts: [
        { name: 'Royal Duty', desc: 'Imperial Palace. Melia & Sharla.', affinity: '❤️ 3★ between Melia & Sharla',
            missable: true, by: 'Before leaving Alcamoth' },
        { name: 'High Entia Tea', desc: 'Park. Melia & Dunban.', affinity: '❤️ 2★ between Melia & Dunban',
            missable: true, by: 'Before leaving Alcamoth' }
    ]
}, {
    area: 'High Entia Tomb',
    hearts: [
        { name: 'Tomb of the Ancients', desc: 'Tomb Entrance. Shulk & Melia.', affinity: '❤️ 3★ between Shulk & Melia',
            missable: false },
        { name: 'Echoes of the Past', desc: 'Ether Chamber. Reyn & Melia.', affinity: '❤️ 2★ between Reyn & Melia',
            missable: false }
    ]
}, {
    area: 'Valak Mountain',
    hearts: [
        { name: 'Cold Hearts', desc: 'Ice Cave. Shulk & Sharla.', affinity: '❤️ 3★ between Shulk & Sharla',
            missable: false },
        { name: 'Mountain Warmth', desc: 'Zaktus camp. Reyn & Sharla.', affinity: '❤️ 2★ between Reyn & Sharla',
            missable: false }
    ]
}, {
    area: 'Sword Valley',
    hearts: [
        { name: 'Battlefield Memories', desc: 'Dunban\'s Camp. Dunban & Seven.', affinity: '❤️ 3★ between Dunban & Seven',
            missable: true, by: 'Before the end of Mechonis Field' },
        { name: 'Mechon Scars', desc: 'Central Valley. Shulk & Seven.', affinity: '❤️ 2★ between Shulk & Seven',
            missable: true, by: 'Before the end of Mechonis Field' }
    ]
}, {
    area: 'Fallen Arm',
    hearts: [
        { name: 'Machina Trust', desc: 'Machina Refuge. Shulk & Seven.', affinity: '❤️ 3★ between Shulk & Seven',
            missable: false },
        { name: 'Fallen Hope', desc: 'Disturbed Waters. Dunban & Seven.', affinity: '❤️ 2★ between Dunban & Seven',
            missable: false }
    ]
}, {
    area: 'Mechonis Field',
    hearts: [
        { name: 'Field of Machines', desc: 'Observation Platform. Reyn & Seven.', affinity: '❤️ 3★ between Reyn & Seven',
            missable: true, by: 'Before the Agniratha lockout' },
        { name: 'Mechanical Heart', desc: 'Main Lift. Shulk & Reyn.', affinity: '❤️ 2★ between Shulk & Reyn',
            missable: false }
    ]
}, {
    area: 'Central Factory',
    hearts: [
        { name: 'Factory Core', desc: 'Core Control. Shulk & Dunban.', affinity: '❤️ 3★ between Shulk & Dunban',
            missable: true, by: 'Before the Agniratha lockout' }
    ]
}, {
    area: 'Agniratha',
    hearts: [
        { name: 'City of the Ancients', desc: 'Central Plaza. Melia & Seven.', affinity: '❤️ 3★ between Melia & Seven',
            missable: true, by: 'Before the Agniratha lockout' }
    ]
}, {
    area: 'Bionis\' Interior',
    hearts: [
        { name: 'Heart of the Bionis', desc: 'Inner Passage. Shulk & Melia.', affinity: '❤️ 4★ between Shulk & Melia',
            missable: false },
        { name: 'Final Words', desc: 'Heart of the Bionis. Shulk & Seven (Fiora).', affinity: '❤️ 4★ between Shulk & Seven',
            missable: false }
    ]
}, {
    area: 'Prison Island (second visit)',
    hearts: [
        { name: 'Prison Break', desc: 'Central Prison. Reyn & Dunban.', affinity: '❤️ 3★ between Reyn & Dunban',
            missable: false },
        { name: 'Last Stand', desc: 'Observatory. Shulk & Dunban.', affinity: '❤️ 4★ between Shulk & Dunban',
            missable: false }
    ]
}];