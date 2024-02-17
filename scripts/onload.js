Hooks.once("init", () => {
    /// Override ability references
    CONFIG.DND5E.abilities.str = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
    },
    CONFIG.DND5E.abilities.dex = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
    },
    CONFIG.DND5E.abilities.con = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
    },
    CONFIG.DND5E.abilities.int = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
    },
    CONFIG.DND5E.abilities.wis = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
    },
    CONFIG.DND5E.abilities.cha = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
    },
    CONFIG.DND5E.abilities.hon = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
    },
    CONFIG.DND5E.abilities.san = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
    },

    /// Add new skills
    CONFIG.DND5E.skills.eng = {
        label: "Backflip",
        ability: "int",
        fullKey: "engineering", // Full key used in enrichers
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    },    
    CONFIG.DND5E.skills.clt = {
        label: "culture",
        ability: "int",
        fullKey: "culture", // Full key used in enrichers
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    },

    /// Override skill references
    CONFIG.DND5E.skills.acr = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    },
    CONFIG.DND5E.skills.ani = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    },
    CONFIG.DND5E.skills.arc = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    },
    CONFIG.DND5E.skills.ath = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    },
    CONFIG.DND5E.skills.dec = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    },
    CONFIG.DND5E.skills.his = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    },
    CONFIG.DND5E.skills.ins = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    },
    CONFIG.DND5E.skills.itm = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    },
    CONFIG.DND5E.skills.inv = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    },
    CONFIG.DND5E.skills.med = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    },
    CONFIG.DND5E.skills.nat = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    },
    CONFIG.DND5E.skills.prc = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    },
    CONFIG.DND5E.skills.prf = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    },
    CONFIG.DND5E.skills.per = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    },
    CONFIG.DND5E.skills.rel = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    },
    CONFIG.DND5E.skills.slt = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    },
    CONFIG.DND5E.skills.ste = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    },
    CONFIG.DND5E.skills.sur = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    },

    /// Adds new alignment options
    CONFIG.DND5E.alignments.sg = "Social Good",
    CONFIG.DND5E.alignments.rg = "Rebel Good",
    CONFIG.DND5E.alignments.lm = "Lawful Moral",
    CONFIG.DND5E.alignments.sm = "Social Moral",
    CONFIG.DND5E.alignments.nm = "Neutral Moral",
    CONFIG.DND5E.alignments.rm = "Rebel Moral",
    CONFIG.DND5E.alignments.cm = "Chaotic Moral",
    CONFIG.DND5E.alignments.sn = "Social Neutral",
    CONFIG.DND5E.alignments.rb = "Rebel Neutral",
    CONFIG.DND5E.alignments.li = "Lawful Impure",
    CONFIG.DND5E.alignments.si = "Social Impure",
    CONFIG.DND5E.alignments.ni = "Neutral Impure",
    CONFIG.DND5E.alignments.ri = "Rebel Impure",
    CONFIG.DND5E.alignments.ci = "Chaotic Impure",
    CONFIG.DND5E.alignments.se = "Social Evil",
    CONFIG.DND5E.alignments.re = "Rebel Evil",

    /// Add expert weapon proficiency
    CONFIG.DND5E.weaponProficiencies.exp = "Expert",
    CONFIG.DND5E.weaponProficienciesMap.expertM = "exp",
    CONFIG.DND5E.weaponProficienciesMap.expertR = "exp",
    CONFIG.DND5E.weaponTypes.expertM = "Expert Martial"
    CONFIG.DND5E.weaponTypes.expertR = "Expert Ranged"

    /// Override weapon references
    CONFIG.DND5E.weaponIds.battleaxe = "",
    CONFIG.DND5E.weaponIds.blowgun = "",
    CONFIG.DND5E.weaponIds.club = "",
    CONFIG.DND5E.weaponIds.dagger = "",
    CONFIG.DND5E.weaponIds.dart = "",
    CONFIG.DND5E.weaponIds.flail = "",
    CONFIG.DND5E.weaponIds.glaive = "",
    CONFIG.DND5E.weaponIds.greataxe = "",
    CONFIG.DND5E.weaponIds.greatclub = "",
    CONFIG.DND5E.weaponIds.greatsword = "",
    CONFIG.DND5E.weaponIds.halberd = "",
    CONFIG.DND5E.weaponIds.handaxe = "",
    CONFIG.DND5E.weaponIds.handcrossbow = "",
    CONFIG.DND5E.weaponIds.heavycrossbow = "",
    CONFIG.DND5E.weaponIds.javelin = "",
    CONFIG.DND5E.weaponIds.lance = "",
    CONFIG.DND5E.weaponIds.lightcrossbow = "",
    CONFIG.DND5E.weaponIds.lighthammer = "",
    CONFIG.DND5E.weaponIds.longbow = "",
    CONFIG.DND5E.weaponIds.longsword = "",
    CONFIG.DND5E.weaponIds.mace = "",
    CONFIG.DND5E.weaponIds.maul = "",
    CONFIG.DND5E.weaponIds.morningstar = "",
    CONFIG.DND5E.weaponIds.net = "",
    CONFIG.DND5E.weaponIds.pike = "",
    CONFIG.DND5E.weaponIds.quarterstaff = "",
    CONFIG.DND5E.weaponIds.rapier = "",
    CONFIG.DND5E.weaponIds.scimitar = "",
    CONFIG.DND5E.weaponIds.shortsword = "",
    CONFIG.DND5E.weaponIds.sickle = "",
    CONFIG.DND5E.weaponIds.spear = "",
    CONFIG.DND5E.weaponIds.shortbow = "",
    CONFIG.DND5E.weaponIds.sling = "",
    CONFIG.DND5E.weaponIds.trident = "",
    CONFIG.DND5E.weaponIds.warpick = "",
    CONFIG.DND5E.weaponIds.warhammer = "",
    CONFIG.DND5E.weaponIds.whip = "",

    /// Override ammo references
    CONFIG.DND5E.ammoIds.arrow = "",
    CONFIG.DND5E.ammoIds.blowgunNeedle = "",
    CONFIG.DND5E.ammoIds.crossbowBolt = "",
    CONFIG.DND5E.ammoIds.slingBullet = "",

    /// Override tool references
    CONFIG.DND5E.toolIds.alchemist = "",
    CONFIG.DND5E.toolIds.bagpipes = "",
    CONFIG.DND5E.toolIds.brewer = "",
    CONFIG.DND5E.toolIds.calligrapher = "",
    CONFIG.DND5E.toolIds.card = "",
    CONFIG.DND5E.toolIds.carpenter = "",
    CONFIG.DND5E.toolIds.cartographer = "",
    CONFIG.DND5E.toolIds.chess = "",
    CONFIG.DND5E.toolIds.cobbler = "",
    CONFIG.DND5E.toolIds.cook = "",
    CONFIG.DND5E.toolIds.dice = "",
    CONFIG.DND5E.toolIds.disg = "",
    CONFIG.DND5E.toolIds.drum = "",
    CONFIG.DND5E.toolIds.dulcimer = "",
    CONFIG.DND5E.toolIds.flute = "",
    CONFIG.DND5E.toolIds.forg = "",
    CONFIG.DND5E.toolIds.glassblower = "",
    CONFIG.DND5E.toolIds.herb = "",
    CONFIG.DND5E.toolIds.horn = "",
    CONFIG.DND5E.toolIds.jeweler = "",
    CONFIG.DND5E.toolIds.leatherworker = "",
    CONFIG.DND5E.toolIds.lute = "",
    CONFIG.DND5E.toolIds.lyre = "",
    CONFIG.DND5E.toolIds.mason = "",
    CONFIG.DND5E.toolIds.navg = "",
    CONFIG.DND5E.toolIds.painter = "",
    CONFIG.DND5E.toolIds.panflute = "",
    CONFIG.DND5E.toolIds.pois = "",
    CONFIG.DND5E.toolIds.potter = "",
    CONFIG.DND5E.toolIds.shawm = "",
    CONFIG.DND5E.toolIds.smith = "",
    CONFIG.DND5E.toolIds.thief = "",
    CONFIG.DND5E.toolIds.tinker = "",
    CONFIG.DND5E.toolIds.viol = "",
    CONFIG.DND5E.toolIds.weaver = "",
    CONFIG.DND5E.toolIds.woodcarver = "",

    /// Override creature type references
    CONFIG.DND5E.creatureTypes.aberration = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    },
    CONFIG.DND5E.creatureTypes.beast = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    },
    CONFIG.DND5E.creatureTypes.celestial = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    },
    CONFIG.DND5E.creatureTypes.construct = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    },
    CONFIG.DND5E.creatureTypes.dragon = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    },
    CONFIG.DND5E.creatureTypes.elemental = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    },
    CONFIG.DND5E.creatureTypes.fey = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    },
    CONFIG.DND5E.creatureTypes.fiend = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    },
    CONFIG.DND5E.creatureTypes.giant = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    },
    CONFIG.DND5E.creatureTypes.humanoid = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    },
    CONFIG.DND5E.creatureTypes.monstrosity = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    },
    CONFIG.DND5E.creatureTypes.ooze = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    },
    CONFIG.DND5E.creatureTypes.plant = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    },
    CONFIG.DND5E.creatureTypes.undead = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    },

    // Add heavy shields
    CONFIG.DND5E.armorTypes.shieldH = "Heavy Shield",
    CONFIG.DND5E.armorProficiencies.shlH = "Heavy Shields",
    CONFIG.DND5E.armorProficienciesMap.shieldH = "shlH",

    // Override armor references
    CONFIG.DND5E.armorIds.breastplate = "",
    CONFIG.DND5E.armorIds.chainmail = "",
    CONFIG.DND5E.armorIds.chainshirt = "",
    CONFIG.DND5E.armorIds.halfplate = "",
    CONFIG.DND5E.armorIds.hide = "",
    CONFIG.DND5E.armorIds.leather = "",
    CONFIG.DND5E.armorIds.padded = "",
    CONFIG.DND5E.armorIds.plate = "",
    CONFIG.DND5E.armorIds.ringmail = "",
    CONFIG.DND5E.armorIds.scalemail = "",
    CONFIG.DND5E.armorIds.splint = "",
    CONFIG.DND5E.armorIds.studded = "",
    
    // Override shield references
    CONFIG.DND5E.shieldIds.shield = "",

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
    },
    CONFIG.DND5E.featureTypes.arcaneshot = {
        label: "Arcane Shot"
    },
    CONFIG.DND5E.featureTypes.artificerInfusion = {
        label: "Artificer Infusion",
        subtypes: {
            first: "1st-Degree",
            second: "2nd-Degree",
            third: "3rd-Degree",
            fourth: "4th-Degree",
            fifth: "5th-Degree"
        }
    },
    CONFIG.DND5E.featureTypes.channelDivinity = {
        label: "Channel Divinity"
    },
    CONFIG.DND5E.featureTypes.defensiveTactic = {
        label: "Defensive Tactic"
    },
    CONFIG.DND5E.featureTypes.eldritchInvocation = {
        label: "Eldritch Invocation",
        subtypes: {
            first: "1st-Degree",
            second: "2nd-Degree",
            third: "3rd-Degree",
            fourth: "4th-Degree",
            fifth: "5th-Degree"
        }
    },
    CONFIG.DND5E.featureTypes.elementalDiscipline = {
        label: "Elemental Discipline"
    },
    CONFIG.DND5E.featureTypes.fightingStyle = {
        label: "Fighting Style"
    },
    CONFIG.DND5E.featureTypes.huntersPrey = {
        label: "Hunter's Prey"
    },
    CONFIG.DND5E.featureTypes.ki = {
        label: "Ki Power"
    },
    CONFIG.DND5E.featureTypes.maneuver = {
        label: "Battle Maneuver"
    },
    CONFIG.DND5E.featureTypes.metamagic = {
        label: "Metamagic"
    },
    CONFIG.DND5E.featureTypes.pact = {
        label: "Warlock Pact"
    },
    CONFIG.DND5E.featureTypes.psionicPower = {
        label: "Psionic Power"
    },
    CONFIG.DND5E.featureTypes.rune = {
        label: "Rune"
    },
    CONFIG.DND5E.featureTypes.superiorHuntersDefense = {
        label: "Battle Maneuver"
    };
});
