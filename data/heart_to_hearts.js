// ==============================================================
//  HEART-TO-HEART DATA — COMPLETE (All 63 Heart-to-Hearts)
//  Source: RPGsite, GameFAQs, Game8, TheGamer
//  Total: 63 Heart-to-Hearts
// ==============================================================
const heartData = [{
    area: 'Colony 9',
    hearts: [
        { name: 'Enduring Friendship', desc: 'Tephra Cave Entrance. Shulk & Reyn.', affinity: '❤️ Green between Shulk & Reyn', missable: false },
        { name: 'Sunrise in the Park', desc: 'Outlook Park. Shulk & Fiora.', affinity: '❤️ Yellow between Shulk & Fiora', missable: true, by: 'Before the attack on Colony 9' },
        { name: 'Fiora\'s Cooking', desc: 'Dunban\'s House. Reyn & Fiora.', affinity: '❤️ Green between Reyn & Fiora', missable: true, by: 'Before the attack on Colony 9' },
        { name: 'Watching Over Them', desc: 'Tranquil Square (night). Reyn & Dunban.', affinity: '❤️ Pink between Reyn & Dunban', missable: false },
        { name: 'Overlooking the Colony', desc: 'Agora Shore. Reyn & Sharla.', affinity: '❤️ Purple between Reyn & Sharla', missable: false },
        { name: 'Ancient Wreckage', desc: 'Cylinder Hangar. Reyn & Melia.', affinity: '❤️ Purple between Reyn & Melia', missable: false },
        { name: 'A Heropon\'s Perspective', desc: 'Mechon Wreckage Site. Sharla & Riki.', affinity: '❤️ Purple between Sharla & Riki', missable: false }
    ]
}, {
    area: 'Tephra Cave',
    hearts: [
        { name: 'The Legend of the Spider', desc: 'Bone Corridor. Shulk & Reyn.', affinity: '❤️ Purple between Shulk & Reyn', missable: false },
        { name: 'A Scene Revisited', desc: 'Kneecap Hill. Reyn & Fiora.', affinity: '❤️ Pink between Reyn & Fiora', missable: true, by: 'Before the attack on Colony 9' },
        { name: 'Glowing in the Night', desc: 'Spring of Grief (night). Dunban & Riki.', affinity: '❤️ Purple between Dunban & Riki', missable: false }
    ]
}, {
    area: 'Bionis\' Leg',
    hearts: [
        { name: 'Geography Lesson', desc: 'Believer\'s Paradise. Shulk & Dunban.', affinity: '❤️ Purple between Shulk & Dunban', missable: false },
        { name: 'What Visions May Bring', desc: 'Raguel Bridge - North. Shulk & Sharla.', affinity: '❤️ Green between Shulk & Sharla', missable: false },
        { name: 'Heir to the Monado', desc: 'Refugee Camp (outside). Reyn & Dunban.', affinity: '❤️ Green between Reyn & Dunban', missable: true, by: 'Before the Refugee Camp moves' },
        { name: 'What\'s on Reyn\'s Mind', desc: 'Refugee Camp (inside). Reyn & Sharla.', affinity: '❤️ Green between Reyn & Sharla', missable: true, by: 'Before the Refugee Camp moves' },
        { name: 'Revisiting the Past', desc: 'Rho Oasis. Dunban & Sharla.', affinity: '❤️ Pink between Dunban & Sharla', missable: false }
    ]
}, {
    area: 'Colony 6',
    hearts: [
        { name: 'Rebuilding Hope', desc: 'Freight Elevator. Shulk & Reyn.', affinity: '❤️ Pink between Shulk & Reyn', missable: false },
        { name: 'New Home', desc: 'Pod Depot. Reyn & Dunban.', affinity: '❤️ Purple between Reyn & Dunban', missable: false },
        { name: 'The Future of Colony 6', desc: 'Hope Farm. Fiora & Dunban.', affinity: '❤️ Purple between Fiora & Dunban', missable: false },
        { name: 'Mine Mystery', desc: 'Hope Farm. Dunban & Sharla.', affinity: '❤️ Purple between Dunban & Sharla', missable: false },
        { name: 'Memories of the Fallen', desc: 'Near Main Entrance. Shulk & Dunban.', affinity: '❤️ Pink between Shulk & Dunban', missable: false },
        { name: 'Fiora\'s New Life', desc: 'Park beside Armu Farm. Fiora & Riki.', affinity: '❤️ Purple between Fiora & Riki', missable: false },
        { name: 'A Promise to Keep', desc: 'Defense Forces rooftop. Shulk & Sharla.', affinity: '❤️ Pink between Shulk & Sharla', missable: false }
    ]
}, {
    area: 'Ether Mine',
    hearts: [
        { name: 'A Wistful Glow', desc: 'Mining Base. Shulk & Sharla.', affinity: '❤️ Purple between Shulk & Sharla', missable: false },
        { name: 'A Moment of Respite', desc: 'Central Terminal. Reyn & Sharla.', affinity: '❤️ Pink between Reyn & Sharla', missable: false }
    ]
}, {
    area: 'Satorl Marsh',
    hearts: [
        { name: 'The Shimmering Marsh', desc: 'Zaldania Waterfall (day). Shulk & Dunban.', affinity: '❤️ Green between Shulk & Dunban', missable: false },
        { name: 'High Entia History', desc: 'Sororal Statues. Dunban & Melia.', affinity: '❤️ Purple between Dunban & Melia', missable: false },
        { name: 'Atop the Crown Tree', desc: 'Crown Tree. Sharla & Riki.', affinity: '❤️ Pink between Sharla & Riki', missable: false }
    ]
}, {
    area: 'Makna Forest',
    hearts: [
        { name: 'Fallen Brethren', desc: 'Agni Tablet. Shulk & Melia.', affinity: '❤️ Green between Shulk & Melia', missable: false },
        { name: 'No Boys Allowed', desc: 'Sparkling Pool. Sharla & Melia.', affinity: '❤️ Green between Sharla & Melia', missable: false },
        { name: 'Riki\'s Crazy Crystal Plan', desc: 'NW of Twisted Tree Gate (Eks Watering Hole). Reyn & Riki.', affinity: '❤️ Purple between Reyn & Riki', missable: false }
    ]
}, {
    area: 'Frontier Village',
    hearts: [
        { name: 'At the Pollen Works', desc: '4F, Pollen Works. Shulk & Riki.', affinity: '❤️ Green between Shulk & Riki', missable: false },
        { name: 'True Natures', desc: '8F, Apex Lake / Contemplation Terrace. Dunban & Melia.', affinity: '❤️ Green between Dunban & Melia', missable: false },
        { name: 'A Mysterious Sanctuary', desc: '7F, Prophecy Hut. Riki & Melia.', affinity: '❤️ Green between Riki & Melia', missable: false },
        { name: 'Reawakened Memories', desc: '7F, west of Prophecy Hut. Fiora & Sharla.', affinity: '❤️ Purple between Fiora & Sharla', missable: false },
        { name: 'A Day Like Any Other', desc: 'GF, Nopon Tower. Fiora & Melia.', affinity: '❤️ Purple between Fiora & Melia', missable: false },
        { name: 'Life\'s Hard for a Heropon', desc: '4F, Riki\'s House. Dunban & Riki.', affinity: '❤️ Pink between Dunban & Riki', missable: false }
    ]
}, {
    area: 'Eryth Sea',
    hearts: [
        { name: 'Fish Fly! Fish Fly!', desc: 'Sleeping Dragon Isle. Reyn & Riki.', affinity: '❤️ Green between Reyn & Riki', missable: false },
        { name: 'A Gift for a Loved One', desc: 'Ether Plant. Dunban & Sharla.', affinity: '❤️ Green between Dunban & Sharla', missable: false },
        { name: 'Flowers of Eryth Sea', desc: 'Hovering Reef 2. Sharla & Riki.', affinity: '❤️ Green between Sharla & Riki', missable: false },
        { name: 'Riki Have Question', desc: 'Syrath Lighthouse. Fiora & Riki.', affinity: '❤️ Pink between Fiora & Riki', missable: false }
    ]
}, {
    area: 'Alcamoth',
    hearts: [
        { name: 'Brother and Sister', desc: 'GF, Fountain of Hope area. Fiora & Dunban.', affinity: '❤️ Green between Fiora & Dunban', missable: true, by: 'Before leaving Alcamoth' },
        { name: 'The Forefathers', desc: '1F, Ascension Hall / Great Hall. Fiora & Riki.', affinity: '❤️ Green between Fiora & Riki', missable: true, by: 'Before leaving Alcamoth' },
        { name: 'Melia\'s Imperial Villa', desc: '2F, Whitewing Villa. Fiora & Melia.', affinity: '❤️ Green between Fiora & Melia', missable: true, by: 'Before leaving Alcamoth' },
        { name: 'So Close, Yet So Far', desc: 'Audience Chamber. Shulk & Melia.', affinity: '❤️ Purple between Shulk & Melia', missable: true, by: 'Before leaving Alcamoth' },
        { name: 'Ancient Astrology', desc: '1F, west of Melfica Road (night). Sharla & Melia.', affinity: '❤️ Purple between Sharla & Melia', missable: true, by: 'Before leaving Alcamoth' },
        { name: 'A Breathtaking Sight', desc: 'Sky Terrace. Reyn & Melia.', affinity: '❤️ Pink between Reyn & Melia', missable: true, by: 'Before leaving Alcamoth' }
    ]
}, {
    area: 'High Entia Tomb',
    hearts: [
        { name: 'Echoes of Ancient Times', desc: 'B2F, Valley of Emperors (South Side). Reyn & Melia.', affinity: '❤️ Green between Reyn & Melia', missable: false },
        { name: 'Hopes and Plans', desc: 'Hall of Trials (west of Ceremony Hall). Shulk & Melia.', affinity: '❤️ Pink between Shulk & Melia', missable: false }
    ]
}, {
    area: 'Valak Mountain',
    hearts: [
        { name: 'In Ose Tower', desc: 'Harict Chapel. Riki & Dunban.', affinity: '❤️ Green between Riki & Dunban', missable: false },
        { name: 'First Sight of Snow', desc: 'La Luz Church (secret passage, night). Reyn & Fiora.', affinity: '❤️ Purple between Reyn & Fiora', missable: false },
        { name: 'A Snowy Hot Spring', desc: 'Jakt Geyser (west of Nopon Camp). Shulk & Riki.', affinity: '❤️ Purple between Shulk & Riki', missable: false }
    ]
}, {
    area: 'Fallen Arm',
    hearts: [
        { name: 'A Night-Time Chat', desc: 'Near Junks (night). Fiora & Sharla.', affinity: '❤️ Green between Fiora & Sharla', missable: false },
        { name: 'Just Like Old Times', desc: 'Wreckage Beach. Shulk & Fiora.', affinity: '❤️ Purple between Shulk & Fiora', missable: false },
        { name: 'Camping Spot', desc: 'Inlet Beach. Riki & Melia.', affinity: '❤️ Purple between Riki & Melia', missable: false },
        { name: 'Those Waiting For You', desc: 'Distant Fingertip. Shulk & Riki.', affinity: '❤️ Pink between Shulk & Riki', missable: false },
        { name: 'A Family of Two', desc: 'Junks, 2F. Fiora & Dunban.', affinity: '❤️ Pink between Fiora & Dunban', missable: false },
        { name: 'Overcoming the Pain', desc: 'Digit 1. Fiora & Melia.', affinity: '❤️ Pink between Fiora & Melia', missable: false },
        { name: 'Eternal Scars', desc: 'Digit 5 Beach / Black Wreckage. Dunban & Melia.', affinity: '❤️ Pink between Dunban & Melia', missable: false }
    ]
}, {
    area: 'Bionis\' Interior',
    hearts: [
        { name: 'Fiora\'s Body', desc: 'Spinal Nerve Tower (south). Fiora & Sharla.', affinity: '❤️ Pink between Fiora & Sharla', missable: false },
        { name: 'Kind Words', desc: 'Terminal Nerve Tower (north-west). Riki & Melia.', affinity: '❤️ Pink between Riki & Melia', missable: false }
    ]
}, {
    area: 'Prison Island (second visit)',
    hearts: [
        { name: 'Before the Final Battle', desc: 'Corridor of Silence. Shulk & Fiora.', affinity: '❤️ Pink between Shulk & Fiora', missable: false },
        { name: 'Journey\'s End', desc: 'Empty Throne. Reyn & Riki.', affinity: '❤️ Pink between Reyn & Riki', missable: false },
        { name: 'Untold Feelings', desc: 'Gravina Bridge (via Gondorl Cathedral warp). Sharla & Melia.', affinity: '❤️ Pink between Sharla & Melia', missable: false }
    ]
}];
