Hooks.once('init', () => {
	console.log('ERUE D&D5E | Initializing ERUE D&D5E modifications');

	// Overhaul of abilities
	CONFIG.DND5E.abilities = {
		str: {
			label: 'Strength',
			abbreviation: 'str',
			type: 'physical',
			fullKey: 'strength',
			reference:
				'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.journalentry-2-rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.nUPv6C66Ur64BIUH',
			icon: 'systems/dnd5e/icons/svg/abilities/strength.svg',
		},
		dex: {
			label: 'Dexterity',
			abbreviation: 'dex',
			type: 'physical',
			fullKey: 'dexterity',
			reference:
				'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.journalentry-2-rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.ER8CKDUWLsFXuARJ',
			icon: 'systems/dnd5e/icons/svg/abilities/dexterity.svg',
		},
		con: {
			label: 'Constitution',
			abbreviation: 'con',
			type: 'physical',
			fullKey: 'constitution',
			reference:
				'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.journalentry-2-rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.MpA4jnwD17Q0RPg7',
			icon: 'systems/dnd5e/icons/svg/abilities/constitution.svg',
		},
		int: {
			label: 'Intelligence',
			abbreviation: 'int',
			type: 'mental',
			fullKey: 'intelligence',
			reference:
				'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.journalentry-2-rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.WzWWcTIppki35YvF',
			icon: 'systems/dnd5e/icons/svg/abilities/intelligence.svg',
			defaults: {
				vehicle: 0,
			},
		},
		wis: {
			label: 'Wisdom',
			abbreviation: 'wis',
			type: 'mental',
			fullKey: 'wisdom',
			reference:
				'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.journalentry-2-rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.v3IPyTtqvXqN934s',
			icon: 'systems/dnd5e/icons/svg/abilities/wisdom.svg',
			defaults: {
				vehicle: 0,
			},
		},
		cha: {
			label: 'Charisma',
			abbreviation: 'cha',
			type: 'mental',
			fullKey: 'charisma',
			reference:
				'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.journalentry-2-rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.9FyghudYFV5QJOuG',
			icon: 'systems/dnd5e/icons/svg/abilities/charisma.svg',
			defaults: {
				vehicle: 0,
			},
		},
		hon: {
			label: 'Honor',
			abbreviation: 'hon',
			type: 'mental',
			fullKey: 'honor',
			defaults: { npc: 'cha', vehicle: 0 },
			improvement: false,
		},
		san: {
			label: 'Sannity',
			abbreviation: 'san',
			type: 'mental',
			fullKey: 'sanity',
			defaults: { npc: 'wis', vehicle: 0 },
			improvement: false,
		},
	};

	console.log('ERUE D&D5E | Overhaul of abilities');

	// Override skill references
	CONFIG.DND5E.skills = {
		acr: {
			label: 'Acrobatics',
			ability: 'dex',
			fullKey: 'acrobatics',
			reference: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.AvvBLEHNl7kuwPkN',
			icon: 'icons/equipment/feet/shoes-simple-leaf-green.webp',
		},
		ani: {
			label: 'Animal Handling',
			ability: 'wis',
			fullKey: 'animalHandling',
			reference: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.xb3MCjUvopOU4viE',
			icon: 'icons/environment/creatures/horse-brown.webp',
		},
		arc: {
			label: 'Arcana',
			ability: 'int',
			fullKey: 'arcana',
			reference: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.h3bYSPge8IOqne1N',
			icon: 'icons/sundries/books/book-embossed-jewel-silver-green.webp',
		},
		ath: {
			label: 'Athletics',
			ability: 'str',
			fullKey: 'athletics',
			reference: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.rIR7ttYDUpH3tMzv',
			icon: 'icons/magic/control/buff-strength-muscle-damage-orange.webp',
		},
		clt: {
			label: 'Culture',
			ability: 'int',
			fullKey: 'culture',
			reference:
				'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.journalentry-2-rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.MlO8L4tix1kde6W2',
			icon: 'systems/dnd5e/icons/svg/items/feature.svg',
		},
		dec: {
			label: 'Deception',
			ability: 'cha',
			fullKey: 'deception',
			reference: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.mqVZ2fz0L7a9VeKJ',
			icon: 'icons/magic/control/mouth-smile-deception-purple.webp',
		},
		eng: {
			label: 'Engineering',
			ability: 'int',
			fullKey: 'engineering',
			reference:
				'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.journalentry-2-rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.HPZRA9QUiBm8DaCr',
			icon: 'systems/dnd5e/icons/svg/items/feature.svg',
		},
		his: {
			label: 'History',
			ability: 'int',
			fullKey: 'history',
			reference: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.kRBZbdWMGW9K3wdY',
			icon: 'icons/sundries/books/book-embossed-bound-brown.webp',
		},
		ins: {
			label: 'Insight',
			ability: 'wis',
			fullKey: 'insight',
			reference: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.8R5SMbAGbECNgO8z',
			icon: 'icons/magic/perception/orb-crystal-ball-scrying-blue.webp',
		},
		itm: {
			label: 'Intimidation',
			ability: 'cha',
			fullKey: 'intimidation',
			reference: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.4VHHI2gJ1jEsppfg',
			icon: 'icons/skills/social/intimidation-impressing.webp',
		},
		inv: {
			label: 'Investigation',
			ability: 'int',
			fullKey: 'investigation',
			reference: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.Y7nmbQAruWOs7WRM',
			icon: 'icons/tools/scribal/magnifying-glass.webp',
		},
		med: {
			label: 'Medicine',
			ability: 'wis',
			fullKey: 'medicine',
			reference: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.GeYmM7BVfSCAga4o',
			icon: 'icons/tools/cooking/mortar-herbs-yellow.webp',
		},
		nat: {
			label: 'Nature',
			ability: 'int',
			fullKey: 'nature',
			reference: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.ueMx3uF2PQlcye31',
			icon: 'icons/magic/nature/plant-sprout-snow-green.webp',
		},
		prc: {
			label: 'Perception',
			ability: 'wis',
			fullKey: 'perception',
			reference: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.zjEeHCUqfuprfzhY',
			icon: 'icons/magic/perception/eye-ringed-green.webp',
			pace: {
				advantage: {},
				disadvantage: {},
			},
		},
		prf: {
			label: 'Performance',
			ability: 'cha',
			fullKey: 'performance',
			reference: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.hYT7Z06yDNBcMtGe',
			icon: 'icons/tools/instruments/lute-gold-brown.webp',
		},
		per: {
			label: 'Persuasion',
			ability: 'cha',
			fullKey: 'persuasion',
			reference: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.4R5H8iIsdFQTsj3X',
			icon: 'icons/skills/social/diplomacy-handshake.webp',
		},
		rel: {
			label: 'Religion',
			ability: 'int',
			fullKey: 'religion',
			reference: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.CXVzERHdP4qLhJXM',
			icon: 'icons/magic/holy/saint-glass-portrait-halo.webp',
		},
		slt: {
			label: 'Sleight of Hand',
			ability: 'dex',
			fullKey: 'sleightOfHand',
			reference: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.yg6SRpGNVz9nDW0A',
			icon: 'icons/sundries/gaming/playing-cards.webp',
		},
		ste: {
			label: 'Stealth',
			ability: 'dex',
			fullKey: 'stealth',
			reference: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.4MfrpERNiQXmvgCI',
			icon: 'icons/magic/perception/shadow-stealth-eyes-purple.webp',
			pace: {
				disadvantage: {},
			},
		},
		sur: {
			label: 'Survival',
			ability: 'wis',
			fullKey: 'survival',
			reference: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.t3EzDU5b9BVAIEVi',
			icon: 'icons/magic/fire/flame-burning-campfire-yellow-blue.webp',
			pace: {
				advantage: {},
				disadvantage: {},
			},
		},
	};

	console.log('ERUE D&D5E | Overhaul of skills');

	// Overhaul of creatureTypes
	CONFIG.DND5E.creatureTypes = {
		aberration: {
			label: 'Aberration',
			plural: 'Aberrations',
			icon: 'icons/creatures/tentacles/tentacle-eyes-yellow-pink.webp',
			reference:
				'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.journalentry-2-rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.yy50qVC1JhPHt4LC',
			detectAlignment: true,
		},
		beast: {
			label: 'Beast',
			plural: 'Beasts',
			icon: 'icons/creatures/claws/claw-bear-paw-swipe-red.webp',
			reference:
				'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.journalentry-2-rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.6bTHn7pZek9YX2tv',
		},
		celestial: {
			label: 'Celestial',
			plural: 'Celestials',
			icon: 'icons/creatures/abilities/wings-birdlike-blue.webp',
			reference:
				'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.journalentry-2-rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.T5CJwxjhBbi6oqaM',
			detectAlignment: true,
		},
		construct: {
			label: 'Construct',
			plural: 'Constructs',
			icon: 'icons/creatures/magical/construct-stone-earth-gray.webp',
			reference:
				'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.journalentry-2-rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.jQGAJZBZTqDFod8d',
		},
		dragon: {
			label: 'Dragon',
			plural: 'Dragons',
			icon: 'icons/creatures/abilities/dragon-fire-breath-orange.webp',
			reference:
				'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.journalentry-2-rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.k2IRXZwGk9W0PM2S',
		},
		elemental: {
			label: 'Elemental',
			plural: 'Elementals',
			icon: 'icons/creatures/magical/spirit-fire-orange.webp',
			reference:
				'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.journalentry-2-rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.7z1LXGGkXpHuzkFh',
			detectAlignment: true,
		},
		fey: {
			label: 'Fey',
			plural: 'Fey',
			icon: 'icons/creatures/magical/fae-fairy-winged-glowing-green.webp',
			reference:
				'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.journalentry-2-rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.OFsRUt3pWljgm8VC',
			detectAlignment: true,
		},
		fiend: {
			label: 'Fiend',
			plural: 'Fiends',
			icon: 'icons/magic/death/skull-horned-goat-pentagram-red.webp',
			reference:
				'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.journalentry-2-rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.ElHKBJeiJPC7gj6k',
			detectAlignment: true,
		},
		giant: {
			label: 'Giant',
			plural: 'Giants',
			icon: 'icons/creatures/magical/humanoid-giant-forest-blue.webp',
			reference:
				'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.journalentry-2-rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.AOXn3Mv5vPZwo0Uf',
		},
		humanoid: {
			label: 'Humanoid',
			plural: 'Humanoids',
			icon: 'icons/environment/people/group.webp',
			reference:
				'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.journalentry-2-rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.iFzQs4AenN8ALRvw',
		},
		monstrosity: {
			label: 'Monstrosity',
			plural: 'Monstrosities',
			icon: 'icons/creatures/abilities/mouth-teeth-rows-red.webp',
			reference:
				'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.journalentry-2-rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.TX0yPEFTn79AMZ8P',
		},
		ooze: {
			label: 'Ooze',
			plural: 'Oozes',
			icon: 'icons/creatures/slimes/slime-movement-pseudopods-green.webp',
			reference:
				'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.journalentry-2-rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.cgzIC1ecG03D97Fg',
		},
		plant: {
			label: 'Plant',
			plural: 'Plants',
			icon: 'icons/magic/nature/tree-animated-strike.webp',
			reference:
				'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.journalentry-2-rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.1oT7t6tHE4kZuSN1',
		},
		undead: {
			label: 'Undead',
			plural: 'Undead',
			icon: 'icons/magic/death/skull-horned-worn-fire-blue.webp',
			reference:
				'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.journalentry-2-rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.D2BdqS1GeD5rcZ6q',
			detectAlignment: true,
		},
	};

	console.log('ERUE D&D5E | Overhaul of creatureTypes');

	// Overhaul of weaponTypes, weaponProficiencies & weaponProficienciesMap
	CONFIG.DND5E.weaponTypes = {
		simpleM: 'Simple Melee',
		simpleR: 'Simple Ranged',
		martialM: 'Martial Melee',
		martialR: 'Martial Ranged',
		expertM: 'Expert Melee',
		expertR: 'Expert Ranged',
		weaponlikeM: 'Weapon-Like Melee',
		weaponlikeR: 'Weapon-Like Ranged',
		natural: 'Natural',
		improv: 'Improvised',
		siege: 'Siege Weapon',
	};
	CONFIG.DND5E.weaponProficiencies = {
		sim: 'Simple',
		mar: 'Martial',
		exp: 'Expert',
		wea: 'Weapon-Like',
	};
	CONFIG.DND5E.weaponProficienciesMap = {
		simpleM: 'sim',
		simpleR: 'sim',
		martialM: 'mar',
		martialR: 'mar',
		expertM: 'exp',
		expertR: 'exp',
		weaponlikeM: 'wea',
		weaponlikeR: 'wea',
	};

	console.log('ERUE D&D5E | Overhaul of weaponProficiencies and weaponTypes');

	// Override weapon mastery references
	CONFIG.DND5E.weaponMasteries = {
		cleave: {
			label: 'Cleave',
			reference: '',
		},
		graze: {
			label: 'Graze',
			reference: '',
		},
		nick: {
			label: 'Nick',
			reference: '',
		},
		push: {
			label: 'Push',
			reference: '',
		},
		sap: {
			label: 'Sap',
			reference: '',
		},
		slow: {
			label: 'Slow',
			reference: '',
		},
		topple: {
			label: 'Topple',
			reference: '',
		},
		vex: {
			label: 'Vex',
			reference: '',
		},
	};

	console.log('ERUE D&D5E | Overridden existing weapon mastery references');

	/*

    // Add Heavy Shields armor type and proficiency, with mapping
    // This does not work as intended, but is left here for reference
    CONFIG.DND5E.armorTypes.shieldH = "Heavy Shield";
    CONFIG.DND5E.armorProficiencies.shlH = "Heavy Shields";
    CONFIG.DND5E.armorProficienciesMap.shieldH = "shlH";
    CONFIG.DND5E.equipmentTypes.shieldH = "shlH" =

    console.log("ERUE D&D5E | Added Heavy Shields armor type and proficiency, with mapping");

    */

	// Overhaul of weaponIds for Comprehensive Equipment Manual
	CONFIG.DND5E.weaponIds = {
		ahlspiess: '',
		aklys: '',
		ankus: '',
		atlatl: '',
		axeBattle: '',
		axeDouble: '',
		axeHand: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-18-gear-weapons.Item.Pb4unYtD9VgED3Pt',
		axeGreat: '',
		axeMaul: '',
		axePole: '',
		axeWar: '',
		bardiche: '',
		bhuj: '',
		bill: '',
		bladeHidden: '',
		blowgun: '',
		blowgunGreater: '',
		boardingGaff: '',
		bolas: '',
		boomerang: '',
		bowLong: '',
		bowLongComposite: '',
		bowShort: '',
		bowShortComposite: '',
		bowShortPellet: '',
		brandistock: '',
		cestus: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-18-gear-weapons.Item.tagzD9iJGrVgulMJ',
		chatkcha: '',
		claymore: '',
		club: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-18-gear-weapons.Item.KjJj2QzJbhXfXWIv',
		clubGreat: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-18-gear-weapons.Item.OPxQGREFGpDsunjx',
		crossbowBladeDriver: '',
		crossbowHand: '',
		crossbowHandRepeating: '',
		crossbowHeavy: '',
		crossbowHeavyDouble: '',
		crossbowHeavyRepeating: '',
		crossbowLight: '',
		crossbowLightDouble: '',
		crossbowLightRepeating: '',
		crossbowLightPellet: '',
		crossbowPolybolos: '',
		crook: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-18-gear-weapons.Item.cfe1bbYsgVMOazn9',
		cutlass: '',
		dagger: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-18-gear-weapons.Item.zAyacNtrMru8lS8A',
		daggerReservoir:
			'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-18-gear-weapons.Item.UYBZFRcvI8JyUyro',
		daggerParrying: '',
		daggerPunching:
			'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-18-gear-weapons.Item.EebeQj5mrfWcVul8',
		daggerThrowing:
			'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-18-gear-weapons.Item.L6DeD80tRNWQXUOl',
		dart: '',
		demilune: '',
		earspoon: '',
		epee: '',
		estoc: '',
		falcata: '',
		falcataDire: '',
		falchion: '',
		fauchard: '',
		fingerSpikes:
			'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-18-gear-weapons.Item.h3lQueZFd5nbbZrK',
		flail: '',
		flailDire: '',
		flailStaff: '',
		flailTwin: '',
		flamberge: '',
		fustibalus: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-18-gear-weapons.Item.CWBfEnSBrOOJtb0J',
		garrote: '',
		gauntletArmor:
			'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-18-gear-weapons.Item.bLeFWtt3IhhIfHGv',
		gauntletClawed:
			'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-18-gear-weapons.Item.HhtmLlK7gEciFkIE',
		gauntletSpikedArmor:
			'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-18-gear-weapons.Item.B9jtmoJPKpuw5vXY',
		gladius: '',
		glaive: '',
		guisarme: '',
		gyrspike: '',
		gythka: '',
		halberd: '',
		hammerDouble: '',
		hammerGreat: '',
		hammerHooked: '',
		hammerLight:
			'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-18-gear-weapons.Item.prpqqlfL1rtWWzeX',
		hammerLucern: '',
		hammerWar: '',
		harpoon: '',
		hatchet: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-18-gear-weapons.Item.hy53JJHnByjCZh36',
		hook: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-18-gear-weapons.Item.L9IefCWycTybnlLa',
		hoopak: '',
		javelin: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-18-gear-weapons.Item.M7V5loiy3WB2BykB',
		khopesh: '',
		knobkerrie: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-18-gear-weapons.Item.dsdhklbMq1gE1U65',
		kpinga: '',
		kukri: '',
		lance: '',
		lanceGreat: '',
		lanceJousting: '',
		lanceJoustingLight: '',
		lanceLight: '',
		lasso: '',
		macuahuitl: '',
		mace: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-18-gear-weapons.Item.yTYGTyCYti88eo8F',
		maceHeavy: '',
		maceLiturgical:
			'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-18-gear-weapons.Item.6PALGHpx3h0a6e9P',
		mancatcher: '',
		maul: '',
		militaryFork: '',
		morningstar: '',
		net: '',
		oxTongue: '',
		partisan: '',
		pike: '',
		quadrens: '',
		ranseur: '',
		rapier: '',
		razorHand: '',
		razorUtility: '',
		ritiik: '',
		saber: '',
		sap: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-18-gear-weapons.Item.I4KAmDqNWwchxiHP',
		scimitar: '',
		scimitarDouble: '',
		scissor: '',
		scissorExtended: '',
		scourge: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-18-gear-weapons.Item.YUbchNO6eoHOsghC',
		scythe: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-18-gear-weapons.Item.eAnwm6Ae3Rg2GuCK',
		scytheWar: '',
		shotel: '',
		sickle: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-18-gear-weapons.Item.sAC9oJqBXcPG9CnF',
		sling: '',
		slungshot: '',
		sovnya: '',
		spear: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-18-gear-weapons.Item.lNvz2elKWfF0vvpi',
		spearBoar: '',
		spearDouble: '',
		spearLong: '',
		spearShort: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-18-gear-weapons.Item.zMfSptEL8geAFQFs',
		spearShortHooked: '',
		spearWeighted: '',
		spetum: '',
		spikedChain: '',
		spontoon: '',
		staffPincer: '',
		staffQuarter:
			'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-18-gear-weapons.Item.GUcwhhSpvUDy2nol',
		stakeWooden:
			'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-18-gear-weapons.Item.ogOj9W3nihSmWBxJ',
		stiletto: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-18-gear-weapons.Item.ogOj9W3nihSmWBxJ',
		swallow: '',
		swordBastard: '',
		swordCane: '',
		swordDouble: '',
		swordGreat: '',
		swordLong: '',
		swordShort: '',
		tailSpikes: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-18-gear-weapons.Item.K8nzvm6Ybhi41gpB',
		talwar: '',
		tegha: '',
		tongi: '',
		trident: '',
		tridentGreat: '',
		trombash: '',
		pickkWar: '',
		pickWarFootmans: '',
		pickWarLight:
			'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-18-gear-weapons.Item.jKrsfrT7llXoeDhW',
		urgrosh: '',
		voulge: '',
		weightedKnuckles:
			'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-18-gear-weapons.Item.SLTBJ4yak9XbKti7',
		whip: '',
		whipBasic: '',
		yklwa: '',
	};

	console.log('ERUE D&D5E | Overhaul of weaponIds for Comprehensive Equipment Manual');

	// Overhaul of armorIds for Comprehensive Equipment Manual
	CONFIG.DND5E.armorIds = {
		bandedmail: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-19-gear-armors.Item.qwxcyz7PAuOD5g6m',
		breastplate: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-19-gear-armors.Item.4gBtppT9976u0wjD',
		chainmail: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-19-gear-armors.Item.xqPYMPS46r3ReJ0w',
		chainshirt: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-19-gear-armors.Item.E5HKMLXmkDRHWQKh',
		coinarmor: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-19-gear-armors.Item.qxVvmphhioDPjMo7',
		halfplate: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-19-gear-armors.Item.SrGojUwZiMPkro79',
		hide: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-19-gear-armors.Item.4pEWzudGiZkCbnOu',
		leather: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-19-gear-armors.Item.AZ16OmMT2tBRidZ1',
		leatherscale:
			'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-19-gear-armors.Item.5a3pOSbZ0cK1PC7T',
		layeredfur: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-19-gear-armors.Item.SshLrR67PlQu5LxX',
		layeredhide: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-19-gear-armors.Item.XNIPdFTFOI65BTdd',
		brigandine: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-19-gear-armors.Item.C7vNtpUlSLv1JWjC',
		padded: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-19-gear-armors.Item.Brs3RWod7asy2D5s',
		plate: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-19-gear-armors.Item.saJXXgOM4kbHqnmz',
		ringmail: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-19-gear-armors.Item.wnIercqQYUCRtveh',
		scalemail: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-19-gear-armors.Item.NPoB0t8YWdbs4ibe',
		splint: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-19-gear-armors.Item.3LY1ZfQBwC0J9OPq',
		studded: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-19-gear-armors.Item.azDEdZOeMQatmWoe',
	};

	console.log('ERUE D&D5E | Overhaul of armorIds for Comprehensive Equipment Manual');

	// Overhaul of shieldIds for Comprehensive Equipment Manual
	CONFIG.DND5E.shieldIds = {
		buckler: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-19-gear-armors.Item.2cZxFnvqVqIwcFds',
		pavise: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-19-gear-armors.Item.PKKzXdhrghfrZud5',
		shield: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-19-gear-armors.Item.WX3i3YPSopWvIM36',
		towersheild: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-19-gear-armors.Item.TS7XbgF7kDyuWkn3',
	};

	console.log('ERUE D&D5E | Overhaul of shieldIds for Comprehensive Equipment Manual');

	// Overhaul of ammoIds for Comprehensive Equipment Manual
	CONFIG.DND5E.ammoIds = {
		arrowAlchemical: '',
		arrowBarbed: '',
		arrowFire: '',
		arrowFlight: '',
		arrowFrogCrotch: '',
		arrowGrappling: '',
		arrowSheaf: '',
		arrowScreaming: '',
		arrowSmoke: '',
		blowgunHooked: '',
		blowgunSteel: '',
		crossbowBoltBroadTip: '',
		crossbowBoltDisk: '',
		crossbowBoltNotchTip: '',
		crossbowBoltGrappling: '',
		crossbowBoltInking: '',
		crossbowBoltStabilized: '',
		firearms1LoadsBall: '',
		firearms1LoadsShot: '',
		firearms1LoadsSlug: '',
		firearms2CartridgeBall: '',
		firearms2CartridgeShot: '',
		firearms2CartridgeSlug: '',
		firearms3CartridgeCarbine: '',
		firearms3CartridgeHighPower: '',
		firearms3CartridgeMagnum: '',
		firearms3CartridgeRifle: '',
		firearms3CartridgeShot: '',
		firearms3CartridgeSlug: '',
		firearms3CartridgeSmallCaliber: '',
		firearms3CartridgeStandard: '',
		firearms4EnergyCell: '',
		slingBulletAlchemical: '',
		slingBulletDimpled: '',
		slingBulletLeaden: '',
		slingBulletRazorGlass: '',
		slingBulletStone: '',
	};

	console.log('ERUE D&D5E | Overhaul of ammoIds for Comprehensive Equipment Manual');

	// Overhaul of tools and toolIds for Comprehensive Equipment Manual
	CONFIG.DND5E.tools = {
		appr: {
			ability: 'wis',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.S6GTrayArdJ9S9tg',
		},
		birdpipes: {
			ability: 'cha',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.rGKj9vdp3pVD8Dus',
		},
		dartboard: {
			ability: 'wis',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.p0o7oQTunkUuWZsC',
		},
		glaur: {
			ability: 'cha',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.rW5fL7t408FxteDo',
		},
		handdrum: {
			ability: 'cha',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.CpNf1kg2DaUlft7t',
		},
		harp: {
			ability: 'cha',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.4IjQ1gW7SAMUq4vU',
		},
		hnefatafl: {
			ability: 'wis',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.7sQXJP2Jzm59NXUy',
		},
		kubb: {
			ability: 'wis',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.olmRJngU1Bdn4EWI',
		},
		longhorn: {
			ability: 'cha',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.S7lWlujDdmypB4H2',
		},
		ninemen: {
			ability: 'wis',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.dqjL3RlCaKUvxcCm',
		},
		ringtoss: {
			ability: 'wis',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.6lsX476Oy8pL16Eo',
		},
		sculpter: {
			ability: 'str',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.WTPtlnhvKpArIPTB',
		},
		songhorn: {
			ability: 'cha',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.EbyA1cleMOXCAIlp',
		},
		surg: {
			ability: 'int',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.tFqZN1WwHTO12L7k',
		},
		tantan: {
			ability: 'cha',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.ZNewSFtF2CHU6K4C',
		},
		tattooartist: {
			ability: 'dex',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.voV6fRbWrXO2F9A8',
		},
		tarokka: {
			ability: 'wis',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.a8O6ghE5lygNkihT',
		},
		thelarr: {
			ability: 'cha',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.4VtMgRjJ7mWYIx1S',
		},
		threedragon: {
			ability: 'wis',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.K4SqJx3os7Krmygl',
		},
		tocken: {
			ability: 'cha',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.wUV4hce9A2Zke0E3',
		},
		trictrac: {
			ability: 'wis',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.ZBDXsMMwck50f8MM',
		},
		wargong: {
			ability: 'cha',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.C2l7QyR7DpWwLECW',
		},
		yarting: {
			ability: 'cha',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.sLwuYWRBKfMeRL49',
		},
		zulkoon: {
			ability: 'cha',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.ljoiJUNecYOU2Jg8',
		},
		alchemist: {
			ability: 'int',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.83wDMTlZ2QFGHqHK',
		},
		bagpipes: {
			ability: 'cha',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.h3b9HeQVKFynnwC5',
		},
		brewer: {
			ability: 'cha',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.tlsJ0DINCKWWo3uB',
		},
		calligrapher: {
			ability: 'dex',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.lNAT3IDbFQGb6lyP',
		},
		card: {
			ability: 'wis',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.kg8fuacsrI8q5saW',
		},
		carpenter: {
			ability: 'str',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.PVez6ryjmoRy3pR6',
		},
		cartographer: {
			ability: 'int',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.XMbICW1fH8Fvo0fm',
		},
		chess: {
			ability: 'int',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.rhmCQX53uqle8Zj9',
		},
		cobbler: {
			ability: 'dex',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.mt6xvPiFvPHlXvPc',
		},
		cook: {
			ability: 'wis',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.gPBt9xh80xeay7FF',
		},
		dice: {
			ability: 'dex',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.sqkh9Uw2v5tJtM1g',
		},
		disg: {
			ability: 'cha',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.3wCYe8gHzvnHzdta',
		},
		drum: {
			ability: 'cha',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.FPSsSO6Ko8I528GK',
		},
		dulcimer: {
			ability: 'cha',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.C16e74Omdx8BHpl9',
		},
		flute: {
			ability: 'cha',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.eaQJ97Eu5d9Nxq2V',
		},
		forg: {
			ability: 'dex',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.fYPuRDaoCsiFLYr2',
		},
		glassblower: {
			ability: 'dex',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.Y8Qd8lNCQWidzH85',
		},
		herb: {
			ability: 'wis',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.0uImA0a6hIqlvSRZ',
		},
		horn: {
			ability: 'cha',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.I0HDwyo5TwJ4QjYh',
		},
		jeweler: {
			ability: 'dex',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.AmmUERLMacP4VCoX',
		},
		leatherworker: {
			ability: 'dex',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.MYvvbh4KvYURXZ2y',
		},
		lute: {
			ability: 'cha',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.8GmI5BQzmoyyeaWH',
		},
		lyre: {
			ability: 'cha',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.InRaLGzqtEAii0rU',
		},
		mason: {
			ability: 'str',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.DaqfHwBji0ALHT3J',
		},
		navg: {
			ability: 'int',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.XWxy6oLq09TU9FFY',
		},
		painter: {
			ability: 'dex',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.LEcS6aav9vkXRMhj',
		},
		panflute: {
			ability: 'cha',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.gv3fZfpRVgItlmmY',
		},
		pois: {
			ability: 'int',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.byJfvPGexI6wxWWl',
		},
		potter: {
			ability: 'dex',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.Qvldm2yV631DuLd1',
		},
		shawm: {
			ability: 'cha',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.c4oxpQBmaZr6Ivyw',
		},
		smith: {
			ability: 'str',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.axNK8fBb9lYzKQpu',
		},
		tinker: {
			ability: 'int',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.LJn71QPuHLg6rXYj',
		},
		thief: {
			ability: 'dex',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.4tjwsnHhD4MZvSrz',
		},
		viol: {
			ability: 'cha',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.jymMtKZlB1m8d5mH',
		},
		weaver: {
			ability: 'dex',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.6gHt5bed3dRmJnnz',
		},
		woodcarver: {
			ability: 'dex',
			id: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.eyTmmxEx96fgwWxn',
		},
	};
	CONFIG.DND5E.toolIds = {
		alchemist: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.83wDMTlZ2QFGHqHK',
		appr: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.S6GTrayArdJ9S9tg',
		bagpipes: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.h3b9HeQVKFynnwC5',
		birdpipes: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.rGKj9vdp3pVD8Dus',
		brewer: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.tlsJ0DINCKWWo3uB',
		calligrapher: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.lNAT3IDbFQGb6lyP',
		card: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.kg8fuacsrI8q5saW',
		carpenter: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.PVez6ryjmoRy3pR6',
		cartographer: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.XMbICW1fH8Fvo0fm',
		chess: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.rhmCQX53uqle8Zj9',
		cobbler: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.mt6xvPiFvPHlXvPc',
		cook: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.gPBt9xh80xeay7FF',
		dartboard: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.p0o7oQTunkUuWZsC',
		dice: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.sqkh9Uw2v5tJtM1g',
		disg: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.3wCYe8gHzvnHzdta',
		drum: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.FPSsSO6Ko8I528GK',
		dulcimer: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.C16e74Omdx8BHpl9',
		flute: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.eaQJ97Eu5d9Nxq2V',
		forg: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.fYPuRDaoCsiFLYr2',
		glassblower: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.Y8Qd8lNCQWidzH85',
		glaur: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.rW5fL7t408FxteDo',
		handdrum: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.CpNf1kg2DaUlft7t',
		harp: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.4IjQ1gW7SAMUq4vU',
		herb: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.0uImA0a6hIqlvSRZ',
		hnefatafl: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.7sQXJP2Jzm59NXUy',
		horn: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.I0HDwyo5TwJ4QjYh',
		jeweler: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.AmmUERLMacP4VCoX',
		kubb: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.olmRJngU1Bdn4EWI',
		leatherworker:
			'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.MYvvbh4KvYURXZ2y',
		longhorn: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.S7lWlujDdmypB4H2',
		lute: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.8GmI5BQzmoyyeaWH',
		lyre: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.InRaLGzqtEAii0rU',
		mason: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.DaqfHwBji0ALHT3J',
		navg: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.XWxy6oLq09TU9FFY',
		ninemen: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.dqjL3RlCaKUvxcCm',
		panflute: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.gv3fZfpRVgItlmmY',
		painter: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.LEcS6aav9vkXRMhj',
		pois: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.byJfvPGexI6wxWWl',
		potter: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.Qvldm2yV631DuLd1',
		ringtoss: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.6lsX476Oy8pL16Eo',
		sculpter: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.WTPtlnhvKpArIPTB',
		shawm: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.c4oxpQBmaZr6Ivyw',
		smith: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.axNK8fBb9lYzKQpu',
		songhorn: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.EbyA1cleMOXCAIlp',
		surg: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.tFqZN1WwHTO12L7k',
		tantan: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.ZNewSFtF2CHU6K4C',
		tarokka: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.a8O6ghE5lygNkihT',
		tattooartist: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.voV6fRbWrXO2F9A8',
		thelarr: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.4VtMgRjJ7mWYIx1S',
		thief: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.4tjwsnHhD4MZvSrz',
		threedragon: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.K4SqJx3os7Krmygl',
		tinker: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.LJn71QPuHLg6rXYj',
		tocken: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.wUV4hce9A2Zke0E3',
		trictrac: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.ZBDXsMMwck50f8MM',
		viol: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.jymMtKZlB1m8d5mH',
		wargong: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.C2l7QyR7DpWwLECW',
		weaver: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.6gHt5bed3dRmJnnz',
		woodcarver: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.eyTmmxEx96fgwWxn',
		yarting: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.sLwuYWRBKfMeRL49',
		zulkoon: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-17-gear-tools.Item.ljoiJUNecYOU2Jg8',
	};

	console.log('ERUE D&D5E | Overhaul of tools and toolIds for Comprehensive Equipment Manual');

	// Overhaul of containerTypes for Comprehensive Equipment Manual
	CONFIG.DND5E.containerTypes = {
		backpack:
			'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-10-gear-containers.Item.krLHFroJOTD2ZiIh',
		bandolierItem:
			'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-10-gear-containers.Item.XSHfp4hez58ydS7B',
		bandolierPotion:
			'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-10-gear-containers.Item.DMPlHu151Qs2Q0eS',
		barrel: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-10-gear-containers.Item.yD8flEHT95mchukr',
		barrelDry:
			'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-10-gear-containers.Item.2Vu1Ekz0dJDI2WzS',
		basket: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-10-gear-containers.Item.pwPfz3jpDeZTvmGs',
		boltcase:
			'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-10-gear-containers.Item.gaZPKIs4yVk5DTGp',
		bottle: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-10-gear-containers.Item.e9q4WvuHroflqWp3',
		box: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-10-gear-containers.Item.8g3u8NjB0j4BHx5a',
		boxScroll:
			'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-10-gear-containers.Item.f5YcSV0ZFZZ7BOxL',
		bucket: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-10-gear-containers.Item.JIPsKZMMgkvPR3ji',
		cask: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-10-gear-containers.Item.dZG1629G6ZMKdS2v',
		case: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-10-gear-containers.Item.3lFNgZKQpB79511C',
		chest: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-10-gear-containers.Item.kfYQaxxH9PuAiTac',
		compartment:
			'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-10-gear-containers.Item.NoX8QR1xNS96vA9m',
		crate: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-10-gear-containers.Item.oIkvDIEuLW1zHRb2',
		flask: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-10-gear-containers.Item.KaqUtM8qSKjrOIVO',
		haversack:
			'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-10-gear-containers.Item.OA2l9Wa2GbMBUdE3',
		jug: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-10-gear-containers.Item.kQuOf3BBXgFjRmug',
		keg: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-10-gear-containers.Item.c3PUrOxzQV2qVMCI',
		ketch: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-10-gear-containers.Item.agZgHMrFwU9pmy9k',
		lockbox: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-10-gear-containers.Item.XoRSNKxCRgOpz9Bs',
		pitcher: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-10-gear-containers.Item.43dCcx3Xzmb1ZAMk',
		pot: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-10-gear-containers.Item.tiWy2PdmeVX26brH',
		pouch: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-10-gear-containers.Item.FAj1CjxkMOU4XgjL',
		quiver: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-10-gear-containers.Item.EAie6KgWyNVCO3hV',
		rucksack:
			'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-10-gear-containers.Item.3OWlZKEs3pZPXPaR',
		sack: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-10-gear-containers.Item.lBXVMf1wGUyswcPR',
		sackLarge:
			'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-10-gear-containers.Item.zXzmannRavel5W4U',
		saddlebags:
			'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-10-gear-containers.Item.BWOXbnggziUvVPU6',
		satchel: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-10-gear-containers.Item.Aq8xwUtSYj8m3Ll9',
		satchelWaterproof:
			'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-10-gear-containers.Item.jT8UblmS4YG2vlZi',
		tankard: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-10-gear-containers.Item.eDMnB91tAzpnJAfx',
		vial: 'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-10-gear-containers.Item.B8E7jsMW4VWC2DPe',
		waterskin:
			'Compendium.forge-vtt-shared-compendiums-erue-d-and-d5e.item-10-gear-containers.Item.0N2ucoivTaMtqgak',
	};

	console.log('ERUE D&D5E | Overhaul of containerTypes for Comprehensive Equipment Manual');

	// Add dunamancy spell school
	CONFIG.DND5E.spellSchools.dun = {
		label: 'Dunamancy',
		icon: '',
		fullKey: 'dunamancy', // Full key used in enrichers
		reference: '', // UUID of journal entry page for rich tooltips
	};

	console.log('ERUE D&D5E | Added dunamancy spell school');

	/*

    // Override class features
    CONFIG.DND5E.featureTypes.class = {
        label: "Class Features",
        subtypes: {
            level01: "1st-Level",
            level02: "2nd-Level",
            level03: "3rd-Level",
            level04: "4th-Level",
            level05: "5th-Level",
            level06: "6th-Level",
            level07: "7th-Level",
            level08: "8th-Level",
            level09: "9th-Level",
            level10: "10th-Level",
            level11: "11th-Level",
            level12: "12th-Level",
            level13: "13th-Level",
            level14: "14th-Level",
            level15: "15th-Level",
            level16: "16th-Level",
            level17: "17th-Level",
            level18: "18th-Level",
            level19: "19th-Level",
            level20: "20th-Level"
        }
    };
    CONFIG.DND5E.featureTypes.arcaneshot = {
        label: "Arcane Shot"
    };
    CONFIG.DND5E.featureTypes.artificerInfusion = {
        label: "Artificer Infusion",
        subtypes: {
            first: "1st-Degree",
            second: "2nd-Degree",
            third: "3rd-Degree",
            fourth: "4th-Degree",
            fifth: "5th-Degree"
        }
    };
    CONFIG.DND5E.featureTypes.channelDivinity = {
        label: "Channel Divinity"
    };
    CONFIG.DND5E.featureTypes.defensiveTactic = {
        label: "Defensive Tactic"
    };
    CONFIG.DND5E.featureTypes.eldritchInvocation = {
        label: "Eldritch Invocation",
        subtypes: {
            first: "1st-Degree",
            second: "2nd-Degree",
            third: "3rd-Degree",
            fourth: "4th-Degree",
            fifth: "5th-Degree"
        }
    };
    CONFIG.DND5E.featureTypes.elementalDiscipline = {
        label: "Elemental Discipline"
    };
    CONFIG.DND5E.featureTypes.fightingStyle = {
        label: "Fighting Style"
    };
    CONFIG.DND5E.featureTypes.huntersPrey = {
        label: "Hunter's Prey"
    };
    CONFIG.DND5E.featureTypes.ki = {
        label: "Ki Power"
    };
    CONFIG.DND5E.featureTypes.maneuver = {
        label: "Battle Maneuver"
    };
    CONFIG.DND5E.featureTypes.metamagic = {
        label: "Metamagic"
    };
    CONFIG.DND5E.featureTypes.pact = {
        label: "Warlock Pact"
    };
    CONFIG.DND5E.featureTypes.psionicPower = {
        label: "Psionic Power"
    };
    CONFIG.DND5E.featureTypes.rune = {
        label: "Rune"
    };
    CONFIG.DND5E.featureTypes.superiorHuntersDefense = {
        label: "Battle Maneuver"
    };

    console.log("ERUE D&D5E | Overridden class features for better categorization");

    */

	// Adds new alignment options
	CONFIG.DND5E.alignments.sg = 'Social Good';
	CONFIG.DND5E.alignments.rg = 'Rebel Good';
	CONFIG.DND5E.alignments.lm = 'Lawful Moral';
	CONFIG.DND5E.alignments.sm = 'Social Moral';
	CONFIG.DND5E.alignments.nm = 'Neutral Moral';
	CONFIG.DND5E.alignments.rm = 'Rebel Moral';
	CONFIG.DND5E.alignments.cm = 'Chaotic Moral';
	CONFIG.DND5E.alignments.sn = 'Social Neutral';
	CONFIG.DND5E.alignments.rb = 'Rebel Neutral';
	CONFIG.DND5E.alignments.li = 'Lawful Impure';
	CONFIG.DND5E.alignments.si = 'Social Impure';
	CONFIG.DND5E.alignments.ni = 'Neutral Impure';
	CONFIG.DND5E.alignments.ri = 'Rebel Impure';
	CONFIG.DND5E.alignments.ci = 'Chaotic Impure';
	CONFIG.DND5E.alignments.se = 'Social Evil';
	CONFIG.DND5E.alignments.re = 'Rebel Evil';

	console.log('ERUE D&D5E | Added new alignments');

	// Add new weapon properties
	CONFIG.DND5E.itemProperties.accurate = {
		label: 'Accurate',
	};
	CONFIG.DND5E.validProperties.weapon.add('accurate');

	CONFIG.DND5E.itemProperties.aerodynamic = {
		label: 'Aerodynamic',
	};
	CONFIG.DND5E.validProperties.weapon.add('aerodynamic');

	CONFIG.DND5E.itemProperties.alternateB = {
		label: 'Alternate (B)',
	};
	CONFIG.DND5E.validProperties.weapon.add('alternateB');

	CONFIG.DND5E.itemProperties.alternateP = {
		label: 'Alternate (P)',
	};
	CONFIG.DND5E.validProperties.weapon.add('alternateP');

	CONFIG.DND5E.itemProperties.alternateS = {
		label: 'Alternate (S)',
	};
	CONFIG.DND5E.validProperties.weapon.add('alternateS');

	CONFIG.DND5E.itemProperties.ballistic = {
		label: 'ballistic',
	};
	CONFIG.DND5E.validProperties.weapon.add('ballistic');

	CONFIG.DND5E.itemProperties.blast = {
		label: 'Blast',
	};
	CONFIG.DND5E.validProperties.weapon.add('blast');

	CONFIG.DND5E.itemProperties.breach = {
		label: 'Breach',
	};
	CONFIG.DND5E.validProperties.weapon.add('breach');

	CONFIG.DND5E.itemProperties.cruel = {
		label: 'Cruel',
	};
	CONFIG.DND5E.validProperties.weapon.add('cruel');

	CONFIG.DND5E.itemProperties.deadly = {
		label: 'Deadly',
	};
	CONFIG.DND5E.validProperties.weapon.add('deadly');

	CONFIG.DND5E.itemProperties.defensive = {
		label: 'Defensive',
	};
	CONFIG.DND5E.validProperties.weapon.add('defensive');

	CONFIG.DND5E.itemProperties.disarming = {
		label: 'Disarming',
	};
	CONFIG.DND5E.validProperties.weapon.add('disarming');

	CONFIG.DND5E.itemProperties.ersatz = {
		label: 'Ersatz',
	};
	CONFIG.DND5E.validProperties.weapon.add('ersatz');

	CONFIG.DND5E.itemProperties.fine = {
		label: 'fine',
	};
	CONFIG.DND5E.validProperties.weapon.add('fine');

	CONFIG.DND5E.itemProperties.gargantuan = {
		label: 'Gargantuan',
	};
	CONFIG.DND5E.validProperties.weapon.add('gargantuan');

	CONFIG.DND5E.itemProperties.handgun = {
		label: 'Handgun',
	};
	CONFIG.DND5E.validProperties.weapon.add('handgun');

	CONFIG.DND5E.itemProperties.highcritical = {
		label: 'High Critical',
	};
	CONFIG.DND5E.validProperties.weapon.add('highcritical');

	CONFIG.DND5E.itemProperties.huge = {
		label: 'Huge',
	};
	CONFIG.DND5E.validProperties.weapon.add('huge');

	CONFIG.DND5E.itemProperties.large = {
		label: 'Large',
	};
	CONFIG.DND5E.validProperties.weapon.add('large');

	CONFIG.DND5E.itemProperties.magazine = {
		label: 'Magazine',
	};
	CONFIG.DND5E.validProperties.weapon.add('magazine');

	CONFIG.DND5E.itemProperties.masterwork = {
		label: 'Masterwork',
	};
	CONFIG.DND5E.validProperties.weapon.add('masterwork');

	CONFIG.DND5E.itemProperties.misfire = {
		label: 'Misfire',
	};
	CONFIG.DND5E.validProperties.weapon.add('misfire');

	CONFIG.DND5E.itemProperties.natatorial = {
		label: 'Natatorial',
	};
	CONFIG.DND5E.validProperties.weapon.add('natatorial');

	CONFIG.DND5E.itemProperties.tiny = {
		label: 'Tiny',
	};
	CONFIG.DND5E.validProperties.weapon.add('tiny');

	CONFIG.DND5E.itemProperties.tripping = {
		label: 'Tripping',
	};
	CONFIG.DND5E.validProperties.weapon.add('tripping');

	CONFIG.DND5E.itemProperties.unarmedB = {
		label: 'Unarmed (B)',
	};
	CONFIG.DND5E.validProperties.weapon.add('unarmedB');

	CONFIG.DND5E.itemProperties.unarmedP = {
		label: 'Unarmed (P)',
	};
	CONFIG.DND5E.validProperties.weapon.add('unarmedP');

	CONFIG.DND5E.itemProperties.unarmedS = {
		label: 'Unarmed (S)',
	};
	CONFIG.DND5E.validProperties.weapon.add('unarmedS');

	CONFIG.DND5E.itemProperties.Wounding = {
		label: 'Wounding',
	};
	CONFIG.DND5E.validProperties.weapon.add('Wounding');

	console.log('ERUE D&D5E | Added new weapon properties');

	// Add new material properties
	CONFIG.DND5E.itemProperties.abysium = {
		label: 'Abysium',
		isPhysical: 'true',
	};
	CONFIG.DND5E.validProperties.weapon.add('abysium');

	CONFIG.DND5E.itemProperties.bone = {
		label: 'Bone',
		isPhysical: 'true',
	};
	CONFIG.DND5E.validProperties.weapon.add('bone');

	CONFIG.DND5E.itemProperties.byeshk = {
		label: 'Byeshk',
		isPhysical: 'true',
	};
	CONFIG.DND5E.validProperties.weapon.add('byeshk');

	CONFIG.DND5E.itemProperties.bronze = {
		label: 'Bronze',
		isPhysical: 'true',
	};
	CONFIG.DND5E.validProperties.weapon.add('bronze');

	CONFIG.DND5E.itemProperties.coldiron = {
		label: 'Cold Iron',
		isPhysical: 'true',
	};
	CONFIG.DND5E.validProperties.weapon.add('coldiron');

	CONFIG.DND5E.itemProperties.darkwood = {
		label: 'Darkwood',
		isPhysical: 'true',
	};
	CONFIG.DND5E.validProperties.weapon.add('darkwood');

	CONFIG.DND5E.itemProperties.djezet = {
		label: 'Djezit',
		isPhysical: 'true',
	};
	CONFIG.DND5E.validProperties.weapon.add('djezet');

	CONFIG.DND5E.itemProperties.dragonhide = {
		label: 'Dragonhide',
		isPhysical: 'true',
	};
	CONFIG.DND5E.validProperties.weapon.add('dragonhide');

	CONFIG.DND5E.itemProperties.grisantianhide = {
		label: 'Grisantian Hide',
		isPhysical: 'true',
	};
	CONFIG.DND5E.validProperties.weapon.add('grisantianhide');

	CONFIG.DND5E.itemProperties.inubrix = {
		label: 'Inubrix',
		isPhysical: 'true',
	};
	CONFIG.DND5E.validProperties.weapon.add('inubrix');

	CONFIG.DND5E.itemProperties.keepstone = {
		label: 'Keep Stone',
		isPhysical: 'true',
	};
	CONFIG.DND5E.validProperties.weapon.add('keepstone');

	CONFIG.DND5E.itemProperties.mithral = {
		label: 'Mithral',
		isPhysical: 'true',
	};
	CONFIG.DND5E.validProperties.weapon.add('mithral');

	CONFIG.DND5E.itemProperties.noqual = {
		label: 'Noqual',
		isPhysical: 'true',
	};
	CONFIG.DND5E.validProperties.weapon.add('noqual');

	CONFIG.DND5E.itemProperties.orichalcum = {
		label: 'Orichalcum',
		isPhysical: 'true',
	};
	CONFIG.DND5E.validProperties.weapon.add('orichalcum');

	CONFIG.DND5E.itemProperties.peachwood = {
		label: 'Peachwood',
		isPhysical: 'true',
	};
	CONFIG.DND5E.validProperties.weapon.add('peachwood');

	CONFIG.DND5E.itemProperties.siccatite = {
		label: 'Siccatite',
		isPhysical: 'true',
	};
	CONFIG.DND5E.validProperties.weapon.add('siccatite');

	CONFIG.DND5E.itemProperties.sisterstone = {
		label: 'Sisterstone',
		isPhysical: 'true',
	};
	CONFIG.DND5E.validProperties.weapon.add('sisterstone');

	CONFIG.DND5E.itemProperties.sovereignsteel = {
		label: 'Sovereign Steel',
		isPhysical: 'true',
	};
	CONFIG.DND5E.validProperties.weapon.add('sovereignsteel');

	CONFIG.DND5E.itemProperties.warpglass = {
		label: 'Warpglass',
		isPhysical: 'true',
	};
	CONFIG.DND5E.validProperties.weapon.add('warpglass');

	console.log('ERUE D&D5E | Added new material properties');

	// Modify encumbrance thresholds
	CONFIG.DND5E.encumbrance.threshold.encumbered = {
		imperial: 15,
		metric: 6.8,
	};
	CONFIG.DND5E.encumbrance.threshold.heavilyEncumbered = {
		imperial: 30,
		metric: 13.6,
	};
	CONFIG.DND5E.encumbrance.threshold.maximum = {
		imperial: 45,
		metric: 20.4,
	};

	console.log('ERUE D&D5E | Overridden encumbrance thresholds');

	// Add Volume & Weight Units
	CONFIG.DND5E.volumeUnits.gallon = {
		abbreviation: 'gal',
		conversion: 6.2288354853706, // 1 cubic foot as imperial gallons is 6.2288354853706
		label: 'Gallon',
		type: 'imperial',
	};
	CONFIG.DND5E.volumeUnits.quart = {
		// 1/4 gallon
		abbreviation: 'qt',
		conversion: 1.5575862068966, // 1 cubic foot as imperial quart is 1.5575862068966
		label: 'Quart',
		type: 'imperial',
	};
	CONFIG.DND5E.volumeUnits.pint = {
		// 1/8 gallon
		abbreviation: 'pt',
		conversion: 0.3894269005848, // 1 cubic foot as imperial pint is 0.3894269005848
		label: 'Pint',
		type: 'imperial',
	};
	CONFIG.DND5E.volumeUnits.cup = {
		// 1/16 gallon
		abbreviation: 'cup',
		conversion: 0.098578947368421, // 1 cubic foot as imperial cup is 0.098578947368421
		label: 'Cup',
		type: 'imperial',
	};
	CONFIG.DND5E.volumeUnits.fluidOunce = {
		// 1/128 gallon
		abbreviation: 'fl oz',
		conversion: 0.029573529411765, // 1 cubic foot as imperial fluid ounce is 0.029573529411765
		label: 'Vial',
		type: 'imperial',
	};
	CONFIG.DND5E.weightUnits.st = {
		abbreviation: 'st',
		conversion: 14, // 1 stone is 14 pounds
		label: 'Stone',
		type: 'imperial',
	};
	CONFIG.DND5E.weightUnits.oz = {
		abbreviation: 'oz',
		conversion: 0.0625, // 1 ounce is 1/16 of a pound
		label: 'Ounce',
		type: 'imperial',
	};

	console.log('ERUE D&D5E | Added new volume and weight units');

	// Override existing weight units
	CONFIG.DND5E.weightUnits.tn = {
		abbreviation: 'tn',
		conversion: 2240, // 1 ton is 2240 pounds because long ton is used
		label: 'Ton',
		type: 'imperial',
	};

	console.log('ERUE D&D5E | Overridden existing weight units');

	// Implement silver standard
	CONFIG.DND5E.currencies.cp.conversion = 100;
	CONFIG.DND5E.currencies.sp.conversion = 1;
	CONFIG.DND5E.currencies.ep.conversion = 0.02;
	CONFIG.DND5E.currencies.gp.conversion = 0.01;
	CONFIG.DND5E.currencies.pp.conversion = 0.0001;

	console.log('ERUE D&D5E | Overriden currency exchange to implement silver standard');

	// Modify experience thresholds & levels
	CONFIG.DND5E.maxLevel = 30;
	CONFIG.DND5E.CHARACTER_EXP_LEVELS = [
		0, 750, 2250, 4500, 7500, 12500, 18500, 25500, 33500, 44750, 57250, 71000, 86000, 105500, 126500, 149000,
		173000, 202750, 234250, 267500, 302500, 344500, 388500, 434500, 482500, 538750, 597250, 658000, 721000, 793500,
	];
	CONFIG.DND5E.CR_EXP_LEVELS = [
		0, 10, 30, 70, 145, 295, 520, 820, 1320, 1920, 2620, 3420, 4545, 5795, 7170, 8670, 10620, 12720, 14970, 17370,
		20345, 23495, 26820, 30320, 34520, 38920, 43520, 48320, 53945, 59795, 65870, 72170, 79420, 86920,
	];

	console.log('ERUE D&D5E | Overridden experience thresholds and levels');

	CONFIG.DND5E.rules = {
		inspiration: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.nkEPI89CiQnOaLYh',
		carryingcapacity: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.1PnjDBKbQJIVyc2t',
		push: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.Hni8DjqLzoqsVjb6',
		lift: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.Hni8DjqLzoqsVjb6',
		drag: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.Hni8DjqLzoqsVjb6',
		encumbrance: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.JwqYf9qb6gJAWZKs',
		hiding: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.plHuoNdS0j3umPNS',
		passiveperception: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.988C2hQNyvqkdbND',
		time: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.eihqNjwpZ3HM4IqY',
		speed: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.HhqeIiSj8sE1v1qZ',
		travelpace: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.eFAISahBloR2X8MX',
		forcedmarch: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.uQWQpRKQ1kWhuvjZ',
		difficultterrainpace:
			'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.hFW5BR2yHHwwgurD',
		climbing: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.KxUXbMrUCIAhv4AF',
		swimming: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.KxUXbMrUCIAhv4AF',
		longjump: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.1U0myNrOvIVBUdJV',
		highjump: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.raPwIkqKSv60ELmy',
		falling: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.kREHL5pgNUOhay9f',
		suffocating: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.BIlnr0xYhqt4TGsi',
		vision: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.O6hamUbI9kVASN8b',
		light: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.O6hamUbI9kVASN8b',
		lightlyobscured: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.MAxtfJyvJV7EpzWN',
		heavilyobscured: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.wPFjfRruboxhtL4b',
		brightlight: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.RnMokVPyKGbbL8vi',
		dimlight: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.n1Ocpbyhr6HhgbCG',
		darkness: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.4dfREIDjG5N4fvxd',
		blindsight: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.sacjsfm9ZXnw4Tqc',
		darkvision: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.ldmA1PbnEGVkmE11',
		tremorsense: 'Compendium.dnd5e.rules.JournalEntry.eVtpEGXjA2tamEIJ.JournalEntryPage.8AIlZ95v54mL531X',
		truesight: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.kNa8rJFbtaTM3Rmk',
		food: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.jayo7XVgGnRCpTW0',
		water: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.iIEI87J7lr2sqtb5',
		resting: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.dpHJXYLigIdEseIb',
		shortrest: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.1s2swI3UsjUUgbt2',
		longrest: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.6cLtjbHn4KV2R7G9',
		surprise: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.YmOt8HderKveA19K',
		initiative: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.RcwElV4GAcVXKWxo',
		bonusaction: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.2fu2CXsDg8gQmGGw',
		reaction: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.2VqLyxMyMxgXe2wC',
		difficultterrain: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.6tqz947qO8vPyxvD',
		beingprone: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.bV8akkBdVUUG21CO',
		droppingprone: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.hwTLpAtSS5OqQsI1',
		standingup: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.hwTLpAtSS5OqQsI1',
		crawling: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.VWG9qe8PUNtS28Pw',
		movingaroundothercreatures:
			'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.9ZWCknaXCOdhyOrX',
		flying: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.0B1fxfmw0a48tPsc',
		size: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.HWHRQVBVG7K0RVVW',
		space: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.WIA5bs3P45PmO3OS',
		squeezing: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.wKtOwagDAiNfVoPS',
		attack: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixCRule.JournalEntryPage.f4fZHwBvpbpzRyn4',
		castaspell: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.GLwN36E4WXn3Cp4Z',
		dash: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixCRule.JournalEntryPage.6l6nBKip4LqB1sCU',
		disengage: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixCRule.JournalEntryPage.w1AGsemFERfjqWNx',
		dodge: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixCRule.JournalEntryPage.3YJIuyCMmuUrfmuX',
		help: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixCRule.JournalEntryPage.5S8i59qskkd9GGcJ',
		hide: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixCRule.JournalEntryPage.rqhOsUY4wWa1oHTy',
		ready: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixCRule.JournalEntryPage.nI9tN6Oq7fCV7hcA',
		search: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixCRule.JournalEntryPage.ySj4gYZ4ADZoia7R',
		useanobject: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.ljqhJx8Qxu2ivo69',
		attackrolls: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixCRule.JournalEntryPage.W8uJrd1D8NeOuawp',
		unseenattackers: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.5ZJNwEPlsGurecg5',
		unseentargets: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.5ZJNwEPlsGurecg5',
		rangedattacks: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.S9aclVOCbusLE3kC',
		range: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.HjKXuB8ndjcqOds7',
		rangedattacksinclosecombat:
			'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.qEZvxW0NM7ixSQP5',
		meleeattacks: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.GTk6emvzNxl8Oosl',
		reach: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.hgZ5ZN4B3y7tmFlt',
		unarmedstrike: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.xJjJ4lhymAYXAOvO',
		opportunityattacks:
			'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.zeU0NyCyP10lkLg3',
		twoweaponfighting: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.FQTS08uH74A6psL2',
		grappling: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixCRule.JournalEntryPage.YSLWJcQCP6kzsPql',
		escapingagrapple: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.2TZKy9YbMN3ZY3h8',
		movingagrappledcreature:
			'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.x5bUdhAD7u5Bt2rg',
		shoving: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.hrdqMF8hRXJdNzJx',
		cover: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.W7f7PcRubNUMIq2S',
		halfcover: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.hv0J61IAfofuhy3Q',
		threequarterscover:
			'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.zAMStUjUrPV10dFm',
		totalcover: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.BKUAxXuPEzxiEOeL',
		hitpoints: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.PFbzoMBviI2DD9QP',
		damagerolls: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.hd26AqKrCqtcQBWy',
		criticalhits: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.gFL1VhSEljL1zvje',
		damagetypes: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.jVOgf7DNEhkzYNIe',
		damageresistance: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.v0WE18nT5SJO8Ft7',
		damagevulnerability:
			'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.v0WE18nT5SJO8Ft7',
		healing: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.ICketFqbFslqKiX9',
		instantdeath: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.8BG05mA0mEzwmrHU',
		deathsavingthrows: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.JL8LePEJQYFdNuLL',
		deathsaves: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.JL8LePEJQYFdNuLL',
		stabilizing: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.r1CgZXLcqFop6Dlx',
		knockingacreatureout:
			'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.uEwjgKGuCRTNADYv',
		temporaryhitpoints:
			'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.AW6HpJZHqxfESXaq',
		temphp: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.AW6HpJZHqxfESXaq',
		mounting: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.MFpyvUIdcBpC9kIE',
		dismounting: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.MFpyvUIdcBpC9kIE',
		controllingamount: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.khmR2xFk1NxoQUgZ',
		underwatercombat: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.6zVOeLyq4iMnrQT4',
		spelllevel: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.A6k5fS0kFqPXTW3v',
		knownspells: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.oezg742GlxmEwT85',
		preparedspells: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.oezg742GlxmEwT85',
		spellslots: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.Su6wbb0O9UN4ZDIH',
		castingatahigherlevel:
			'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.4H9SLM95OCLfFizz',
		upcasting: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.4H9SLM95OCLfFizz',
		castinginarmor: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.z4A8vHSK2pb8YA9X',
		cantrips: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.jZD5mCTnMPJ9jW67',
		rituals: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.FjWqT5iyJ89kohdA',
		castingtime: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.zRVW8Tvyk6BECjZD',
		bonusactioncasting:
			'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.RP1WL9FXI3aknlxZ',
		reactioncasting: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.t62lCfinwU9H7Lji',
		longercastingtimes:
			'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.gOAIRFCyPUx42axn',
		spellrange: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.RBYPyE5z5hAZSbH6',
		components: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.xeHthAF9lxfn2tII',
		verbal: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.6UXTNWMCQ0nSlwwx',
		spellduration: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.9mp0SRsptjvJcq1e',
		instantaneous: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.kdlgZOpRMB6bGCod',
		concentrating: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.ow58p27ctAnr4VPH',
		spelltargets: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.G80AIQr04sxdVpw4',
		areaofeffect: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.wvtCeGHgnUmh0cuj',
		pointoforigin: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.8HxbRceQQUAhyWRt',
		spellsavingthrows: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.8DajfNll90eeKcmB',
		spellattackrolls: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.qAFzmGZKhVvAEUF3',
		combiningmagicaleffects:
			'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.TMIN963hG773yZzO',
		schoolsofmagic: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.TeF6CKMDRpYpsLd4',
		detectingtraps: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.DZ7AhdQ94xggG4bj',
		disablingtraps: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.DZ7AhdQ94xggG4bj',
		curingmadness: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.6Icem7G3CICdNOkM',
		damagethreshold: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.9LJZhqvCburpags3',
		poisontypes: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.I6OMMWUaYCWR9xip',
		contactpoison: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.kXnCEqqGUWRZeZDj',
		ingestedpoison: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.Y0vsJYSWeQcFpJ27',
		inhaledpoison: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.KUyN4eK1xTBzXsjP',
		injurypoison: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.LUL48OUq6SJeMGc7',
		attunement: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.UQ65OwIyGK65eiOK',
		wearingitems: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.iPB8mGKuQx3X0Z2J',
		wieldingitems: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.iPB8mGKuQx3X0Z2J',
		multipleitemsofthesamekind:
			'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.rLJdvz4Mde8GkEYQ',
		paireditems: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.rd9pCH8yFraSGN34',
		commandword: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.HiXixxLYesv6Ff3t',
		consumables: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.UEPAcZFzQ5x196zE',
		itemspells: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.DABoaeeF6w31UCsj',
		charges: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.NLRXcgrpRCfsA5mO',
		spellscroll: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.gi8IKhtOlBVhMJrN',
		creaturetags: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.9jV1fFF163dr68vd',
		telepathy: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.geTidcFIYWuUvD2L',
		legendaryactions: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.C1awOyZh78pq1xmY',
		lairactions: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.07PtjpMxiRIhkBEp',
		regionaleffects: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.uj8W27NKFyzygPUd',
		disease: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixDRule.JournalEntryPage.oNQWvyRZkTOJ8PBq',
		d20test: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixCRule.JournalEntryPage.nxPH59t3iNtWJxnU',
		advantage: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixCRule.JournalEntryPage.lvs9RRDi1UA1Lff8',
		disadvantage: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixCRule.JournalEntryPage.fFrHBgqKUMY0Nnco',
		difficultyclass: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixCRule.JournalEntryPage.afnB0KZZk2hKtjv4',
		armorclass: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixCRule.JournalEntryPage.IL73rq9BlQowdon7',
		abilitycheck: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixCRule.JournalEntryPage.XBQqXCoTbvp5Dika',
		savingthrow: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixCRule.JournalEntryPage.Vlri6Mp6grn9wt3g',
		challengerating: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixCRule.JournalEntryPage.BMoxmXB8pX6bOBus',
		expertise: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixCRule.JournalEntryPage.69nu4Sk3V5O15GFf',
		influence: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixCRule.JournalEntryPage.4V59Q1dlWjNhpJGo',
		magic: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixCRule.JournalEntryPage.iIIDUsmSOkL0xNzF',
		study: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixCRule.JournalEntryPage.Nuz0Wx4a4aAPcC34',
		utilize: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixCRule.JournalEntryPage.UDlogfdiT2uYEZz4',
		friendly: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixCRule.JournalEntryPage.RVcWSqblHIs7SUzn',
		indifferent: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixCRule.JournalEntryPage.eYX5eimGuYhHPoj4',
		hostile: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixCRule.JournalEntryPage.BNxLbtJofbNGzjsp',
		breakingobjects: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixCRule.JournalEntryPage.RXTLVpAwcGm1qtKf',
		hazards: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixCRule.JournalEntryPage.5hyEitPd1Kb27fP5',
		bloodied: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixCRule.JournalEntryPage.shZaSIlFPpHufPFn',
		jumping: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixCRule.JournalEntryPage.aaJOlRhI1H6vAxt9',
		resistance: 'Compendium.dnd5e.content24.JournalEntry.phbAppendixCRule.JournalEntryPage.Uk3xhCTvEfx8BN1O',
	};

	console.log('ERUE D&D5E | Overridden existing rule references');

	console.log('ERUE D&D5E | Initialization complete');
});
