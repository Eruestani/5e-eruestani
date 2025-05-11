Hooks.once("init", () => {
    /// Override ability references
    CONFIG.DND5E.abilities.str = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.nUPv6C66Ur64BIUH", // UUID of journal entry page for rich tooltips
    };
    CONFIG.DND5E.abilities.dex = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.ER8CKDUWLsFXuARJ", // UUID of journal entry page for rich tooltips
    };
    CONFIG.DND5E.abilities.con = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.MpA4jnwD17Q0RPg7", // UUID of journal entry page for rich tooltips
    };
    CONFIG.DND5E.abilities.int = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.WzWWcTIppki35YvF", // UUID of journal entry page for rich tooltips
    };
    CONFIG.DND5E.abilities.wis = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.v3IPyTtqvXqN934s", // UUID of journal entry page for rich tooltips
    };
    CONFIG.DND5E.abilities.cha = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.9FyghudYFV5QJOuG", // UUID of journal entry page for rich tooltips
    };
    /*
    CONFIG.DND5E.abilities.hon = {
        reference: "", // UUID of journal entry page for rich tooltips
    };
    CONFIG.DND5E.abilities.san = {
        reference: "", // UUID of journal entry page for rich tooltips
    };
    */

    /// Add new skills
    CONFIG.DND5E.skills.clt = {
        label: "Culture",
        ability: "int",
        fullKey: "culture", // Full key used in enrichers
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.MlO8L4tix1kde6W2", // UUID of journal entry page for rich tooltips
        icon: "", // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.skills.eng = {
        label: "Engineering",
        ability: "int",
        fullKey: "engineering", // Full key used in enrichers
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.HPZRA9QUiBm8DaCr", // UUID of journal entry page for rich tooltips
        icon: "", // Icon used in favorites on new character sheet
    };

    /// Override skill references
    CONFIG.DND5E.skills.acr = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.AvvBLEHNl7kuwPkN", // UUID of journal entry page for rich tooltips
        icon: "", // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.skills.ani = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.xb3MCjUvopOU4viE", // UUID of journal entry page for rich tooltips
        icon: "", // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.skills.arc = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.h3bYSPge8IOqne1N", // UUID of journal entry page for rich tooltips
        icon: "", // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.skills.ath = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.rIR7ttYDUpH3tMzv", // UUID of journal entry page for rich tooltips
        icon: "", // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.skills.dec = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.mqVZ2fz0L7a9VeKJ", // UUID of journal entry page for rich tooltips
        icon: "", // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.skills.his = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.kRBZbdWMGW9K3wdY", // UUID of journal entry page for rich tooltips
        icon: "", // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.skills.ins = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.8R5SMbAGbECNgO8z", // UUID of journal entry page for rich tooltips
        icon: "", // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.skills.itm = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.4VHHI2gJ1jEsppfg", // UUID of journal entry page for rich tooltips
        icon: "", // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.skills.inv = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.Y7nmbQAruWOs7WRM", // UUID of journal entry page for rich tooltips
        icon: "", // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.skills.med = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.GeYmM7BVfSCAga4o", // UUID of journal entry page for rich tooltips
        icon: "", // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.skills.nat = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.ueMx3uF2PQlcye31", // UUID of journal entry page for rich tooltips
        icon: "", // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.skills.prc = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.zjEeHCUqfuprfzhY", // UUID of journal entry page for rich tooltips
        icon: "", // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.skills.prf = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.hYT7Z06yDNBcMtGe", // UUID of journal entry page for rich tooltips
        icon: "", // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.skills.per = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.4R5H8iIsdFQTsj3X", // UUID of journal entry page for rich tooltips
        icon: "", // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.skills.rel = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.CXVzERHdP4qLhJXM", // UUID of journal entry page for rich tooltips
        icon: "", // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.skills.slt = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.yg6SRpGNVz9nDW0A", // UUID of journal entry page for rich tooltips
        icon: "", // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.skills.ste = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.4MfrpERNiQXmvgCI", // UUID of journal entry page for rich tooltips
        icon: "", // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.skills.sur = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.t3EzDU5b9BVAIEVi", // UUID of journal entry page for rich tooltips
        icon: "", // Icon used in favorites on new character sheet
    };

    /// Override creature type references
    CONFIG.DND5E.creatureTypes.aberration = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.yy50qVC1JhPHt4LC", // UUID of journal entry page for rich tooltips
        icon: "", // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.creatureTypes.beast = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.6bTHn7pZek9YX2tv", // UUID of journal entry page for rich tooltips
        icon: "", // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.creatureTypes.celestial = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.T5CJwxjhBbi6oqaM", // UUID of journal entry page for rich tooltips
        icon: "", // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.creatureTypes.construct = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.jQGAJZBZTqDFod8d", // UUID of journal entry page for rich tooltips
        icon: "", // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.creatureTypes.dragon = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.k2IRXZwGk9W0PM2S", // UUID of journal entry page for rich tooltips
        icon: "", // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.creatureTypes.elemental = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.7z1LXGGkXpHuzkFh", // UUID of journal entry page for rich tooltips
        icon: "", // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.creatureTypes.fey = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.OFsRUt3pWljgm8VC", // UUID of journal entry page for rich tooltips
        icon: "", // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.creatureTypes.fiend = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.ElHKBJeiJPC7gj6k", // UUID of journal entry page for rich tooltips
        icon: "", // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.creatureTypes.giant = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.AOXn3Mv5vPZwo0Uf", // UUID of journal entry page for rich tooltips
        icon: "", // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.creatureTypes.humanoid = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.iFzQs4AenN8ALRvw", // UUID of journal entry page for rich tooltips
        icon: "", // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.creatureTypes.monstrosity = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.TX0yPEFTn79AMZ8P", // UUID of journal entry page for rich tooltips
        icon: "", // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.creatureTypes.ooze = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.cgzIC1ecG03D97Fg", // UUID of journal entry page for rich tooltips
        icon: "", // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.creatureTypes.plant = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.1oT7t6tHE4kZuSN1", // UUID of journal entry page for rich tooltips
        icon: "", // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.creatureTypes.undead = {
        reference:
            "Compendium.world.rules.JournalEntry.O0EPv7iRlMzmarzW.JournalEntryPage.D2BdqS1GeD5rcZ6q", // UUID of journal entry page for rich tooltips
        icon: "", // Icon used in favorites on new character sheet
    };

    /// Add weapon-like weapon proficiency
    CONFIG.DND5E.weaponProficiencies.weaponlike = "Weapon-Like";
    CONFIG.DND5E.weaponProficienciesMap.weaponliketM = "weaponlike";
    CONFIG.DND5E.weaponProficienciesMap.weaponlikeR = "weaponlike";
    CONFIG.DND5E.weaponTypes.weaponlikeM = "Weapon-Like Melee";
    CONFIG.DND5E.weaponTypes.weaponlikeR = "Weapon-Like Ranged";

    /// Add expert weapon proficiency
    CONFIG.DND5E.weaponProficiencies.exp = "Expert";
    CONFIG.DND5E.weaponProficienciesMap.expertM = "exp";
    CONFIG.DND5E.weaponProficienciesMap.expertR = "exp";
    CONFIG.DND5E.weaponTypes.expertM = "Expert Melee";
    CONFIG.DND5E.weaponTypes.expertR = "Expert Ranged";

    /// Override existing weapon references
    /*
    CONFIG.DND5E.weaponIds.battleaxe = ""; // UUID of item for rich sublists
    CONFIG.DND5E.weaponIds.blowgun = ""; // UUID of item for rich sublists
    CONFIG.DND5E.weaponIds.club = ""; // UUID of item for rich sublists
    CONFIG.DND5E.weaponIds.dagger = ""; // UUID of item for rich sublists
    CONFIG.DND5E.weaponIds.dart = ""; // UUID of item for rich sublists
    CONFIG.DND5E.weaponIds.flail = ""; // UUID of item for rich sublists
    CONFIG.DND5E.weaponIds.glaive = ""; // UUID of item for rich sublists
    CONFIG.DND5E.weaponIds.greataxe = ""; // UUID of item for rich sublists
    CONFIG.DND5E.weaponIds.greatclub = ""; // UUID of item for rich sublists
    CONFIG.DND5E.weaponIds.greatsword = ""; // UUID of item for rich sublists
    CONFIG.DND5E.weaponIds.halberd = ""; // UUID of item for rich sublists
    CONFIG.DND5E.weaponIds.handaxe = ""; // UUID of item for rich sublists
    CONFIG.DND5E.weaponIds.handcrossbow = ""; // UUID of item for rich sublists
    CONFIG.DND5E.weaponIds.heavycrossbow = ""; // UUID of item for rich sublists
    CONFIG.DND5E.weaponIds.javelin = ""; // UUID of item for rich sublists
    CONFIG.DND5E.weaponIds.lance = ""; // UUID of item for rich sublists
    CONFIG.DND5E.weaponIds.lightcrossbow = ""; // UUID of item for rich sublists
    CONFIG.DND5E.weaponIds.lighthammer = ""; // UUID of item for rich sublists
    CONFIG.DND5E.weaponIds.longbow = ""; // UUID of item for rich sublists
    CONFIG.DND5E.weaponIds.longsword = ""; // UUID of item for rich sublists
    CONFIG.DND5E.weaponIds.mace = ""; // UUID of item for rich sublists
    CONFIG.DND5E.weaponIds.maul = ""; // UUID of item for rich sublists
    CONFIG.DND5E.weaponIds.morningstar = ""; // UUID of item for rich sublists
    CONFIG.DND5E.weaponIds.net = ""; // UUID of item for rich sublists
    CONFIG.DND5E.weaponIds.pike = ""; // UUID of item for rich sublists
    CONFIG.DND5E.weaponIds.quarterstaff = ""; // UUID of item for rich sublists
    CONFIG.DND5E.weaponIds.rapier = ""; // UUID of item for rich sublists
    CONFIG.DND5E.weaponIds.scimitar = ""; // UUID of item for rich sublists
    CONFIG.DND5E.weaponIds.shortsword = ""; // UUID of item for rich sublists
    CONFIG.DND5E.weaponIds.sickle = ""; // UUID of item for rich sublists
    CONFIG.DND5E.weaponIds.spear = ""; // UUID of item for rich sublists
    CONFIG.DND5E.weaponIds.shortbow = ""; // UUID of item for rich sublists
    CONFIG.DND5E.weaponIds.sling = ""; // UUID of item for rich sublists
    CONFIG.DND5E.weaponIds.trident = ""; // UUID of item for rich sublists
    CONFIG.DND5E.weaponIds.warpick = ""; // UUID of item for rich sublists
    CONFIG.DND5E.weaponIds.warhammer = ""; // UUID of item for rich sublists
    CONFIG.DND5E.weaponIds.whip = ""; // UUID of item for rich sublists
    */

    /// Override weapon mastery references
    /*
    CONFIG.DND5E.weaponMasteries = {
        cleave: {
            label: "Cleave",
            reference: "",
        },
        graze: {
            label: "Graze",
            reference: "",
        },
        nick: {
            label: "Nick",
            reference: "",
        },
        push: {
            label: "Push",
            reference: "",
        },
        sap: {
            label: "Sap",
            reference: "",
        },
        slow: {
            label: "Slow",
            reference: "",
        },
        topple: {
            label: "Topple",
            reference: "",
        },
        vex: {
            label: "Vex",
            reference: "",
        },
    };
    */

    /// Add new armors
    CONFIG.DND5E.armorIds.leatherscale =
        "Compendium.world.armors.Item.5a3pOSbZ0cK1PC7T"; // UUID of item for rich sublists
    CONFIG.DND5E.armorIds.layeredfur =
        "Compendium.world.armors.Item.SshLrR67PlQu5LxX"; // UUID of item for rich sublists
    CONFIG.DND5E.armorIds.brigandine =
        "Compendium.world.armors.Item.C7vNtpUlSLv1JWjC"; // UUID of item for rich sublists
    CONFIG.DND5E.armorIds.coinarmor =
        "Compendium.world.armors.Item.qxVvmphhioDPjMo7"; // UUID of item for rich sublists
    CONFIG.DND5E.armorIds.layeredhide =
        "Compendium.world.armors.Item.XNIPdFTFOI65BTdd"; // UUID of item for rich sublists
    CONFIG.DND5E.armorIds.bandedmail =
        "Compendium.world.armors.Item.qwxcyz7PAuOD5g6m"; // UUID of item for rich sublists

    /// Override existing armor references
    CONFIG.DND5E.armorIds.breastplate =
        "Compendium.world.armors.Item.4gBtppT9976u0wjD"; // UUID of item for rich sublists
    CONFIG.DND5E.armorIds.chainmail =
        "Compendium.world.armors.Item.xqPYMPS46r3ReJ0w"; // UUID of item for rich sublists
    CONFIG.DND5E.armorIds.chainshirt =
        "Compendium.world.armors.Item.E5HKMLXmkDRHWQKh"; // UUID of item for rich sublists
    CONFIG.DND5E.armorIds.halfplate =
        "Compendium.world.armors.Item.SrGojUwZiMPkro79"; // UUID of item for rich sublists
    CONFIG.DND5E.armorIds.hide =
        "Compendium.world.armors.Item.4pEWzudGiZkCbnOu"; // UUID of item for rich sublists
    CONFIG.DND5E.armorIds.leather =
        "Compendium.world.armors.Item.AZ16OmMT2tBRidZ1"; // UUID of item for rich sublists
    CONFIG.DND5E.armorIds.padded =
        "Compendium.world.armors.Item.Brs3RWod7asy2D5s"; // UUID of item for rich sublists
    CONFIG.DND5E.armorIds.plate =
        "Compendium.world.armors.Item.saJXXgOM4kbHqnmz"; // UUID of item for rich sublists
    CONFIG.DND5E.armorIds.ringmail =
        "Compendium.world.armors.Item.wnIercqQYUCRtveh"; // UUID of item for rich sublists
    CONFIG.DND5E.armorIds.scalemail =
        "Compendium.world.armors.Item.NPoB0t8YWdbs4ibe"; // UUID of item for rich sublists
    CONFIG.DND5E.armorIds.splint =
        "Compendium.world.armors.Item.3LY1ZfQBwC0J9OPq"; // UUID of item for rich sublists
    CONFIG.DND5E.armorIds.studded =
        "Compendium.world.armors.Item.azDEdZOeMQatmWoe"; // UUID of item for rich sublists

    /// Add new shields
    CONFIG.DND5E.shieldIds.buckler =
        "Compendium.world.armors.Item.2cZxFnvqVqIwcFds"; // UUID of item for rich sublists

    CONFIG.DND5E.shieldIds.pavise =
        "Compendium.world.armors.Item.PKKzXdhrghfrZud5"; // UUID of item for rich sublists

    CONFIG.DND5E.shieldIds.towersheild =
        "Compendium.world.armors.Item.TS7XbgF7kDyuWkn3"; // UUID of item for rich sublists

    /// Override existing shield references
    CONFIG.DND5E.shieldIds.shield =
        "Compendium.world.armors.Item.WX3i3YPSopWvIM36"; // UUID of item for rich sublists

    /// Add heavy shields
    /* This does not work as intended, but is left here for reference
    CONFIG.DND5E.armorTypes.shieldH = "Heavy Shield";
    CONFIG.DND5E.armorProficiencies.shlH = "Heavy Shields";
    CONFIG.DND5E.armorProficienciesMap.shieldH = "shlH";
    */

    /// Override ammo references
    CONFIG.DND5E.ammoIds.arrow = ""; // UUID of item for rich sublists
    CONFIG.DND5E.ammoIds.blowgunNeedle = ""; // UUID of item for rich sublists
    CONFIG.DND5E.ammoIds.crossbowBolt = ""; // UUID of item for rich sublists
    CONFIG.DND5E.ammoIds.slingBullet = ""; // UUID of item for rich sublists

    // Add new tools
    CONFIG.DND5E.tools.appr = {
        ability: "int", // Ability used for tool checks
        id: "Compendium.world.equipment-tools.Item.S6GTrayArdJ9S9tg", // UUID of item for rich sublists
    };
    CONFIG.DND5E.toolIds.appr =
        "Compendium.world.equipment-tools.Item.S6GTrayArdJ9S9tg"; // UUID of item for rich sublists

    CONFIG.DND5E.tools.birdpipes = {
        ability: "int", // Ability used for tool checks
        id: "Compendium.world.equipment-tools.Item.rGKj9vdp3pVD8Dus", // UUID of item for rich sublists
    };
    CONFIG.DND5E.toolIds.birdpipes =
        "Compendium.world.equipment-tools.Item.rGKj9vdp3pVD8Dus"; // UUID of item for rich sublists

    CONFIG.DND5E.tools.dartboard = {
        ability: "int", // Ability used for tool checks
        id: "Compendium.world.equipment-tools.Item.p0o7oQTunkUuWZsC", // UUID of item for rich sublists
    };
    CONFIG.DND5E.toolIds.dartboard =
        "Compendium.world.equipment-tools.Item.p0o7oQTunkUuWZsC"; // UUID of item for rich sublists

    CONFIG.DND5E.tools.glaur = {
        ability: "int", // Ability used for tool checks
        id: "Compendium.world.equipment-tools.Item.rW5fL7t408FxteDo", // UUID of item for rich sublists
    };
    CONFIG.DND5E.toolIds.glaur =
        "Compendium.world.equipment-tools.Item.rW5fL7t408FxteDo"; // UUID of item for rich sublists

    CONFIG.DND5E.tools.handdrum = {
        ability: "int", // Ability used for tool checks
        id: "Compendium.world.equipment-tools.Item.CpNf1kg2DaUlft7t", // UUID of item for rich sublists
    };
    CONFIG.DND5E.toolIds.handdrum =
        "Compendium.world.equipment-tools.Item.CpNf1kg2DaUlft7t"; // UUID of item for rich sublists

    CONFIG.DND5E.tools.harp = {
        ability: "int", // Ability used for tool checks
        id: "Compendium.world.equipment-tools.Item.4IjQ1gW7SAMUq4vU", // UUID of item for rich sublists
    };
    CONFIG.DND5E.toolIds.harp =
        "Compendium.world.equipment-tools.Item.4IjQ1gW7SAMUq4vU"; // UUID of item for rich sublists

    CONFIG.DND5E.tools.hnefatafl = {
        ability: "int", // Ability used for tool checks
        id: "Compendium.world.equipment-tools.Item.7sQXJP2Jzm59NXUy", // UUID of item for rich sublists
    };
    CONFIG.DND5E.toolIds.hnefatafl =
        "Compendium.world.equipment-tools.Item.7sQXJP2Jzm59NXUy"; // UUID of item for rich sublists

    CONFIG.DND5E.tools.kubb = {
        ability: "int", // Ability used for tool checks
        id: "Compendium.world.equipment-tools.Item.olmRJngU1Bdn4EWI", // UUID of item for rich sublists
    };
    CONFIG.DND5E.toolIds.kubb =
        "Compendium.world.equipment-tools.Item.olmRJngU1Bdn4EWI"; // UUID of item for rich sublists

    CONFIG.DND5E.tools.longhorn = {
        ability: "int", // Ability used for tool checks
        id: "Compendium.world.equipment-tools.Item.S7lWlujDdmypB4H2", // UUID of item for rich sublists
    };
    CONFIG.DND5E.toolIds.longhorn =
        "Compendium.world.equipment-tools.Item.S7lWlujDdmypB4H2"; // UUID of item for rich sublists

    CONFIG.DND5E.tools.ninemen = {
        ability: "int", // Ability used for tool checks
        id: "Compendium.world.equipment-tools.Item.dqjL3RlCaKUvxcCm", // UUID of item for rich sublists
    };
    CONFIG.DND5E.toolIds.ninemen =
        "Compendium.world.equipment-tools.Item.dqjL3RlCaKUvxcCm"; // UUID of item for rich sublists

    CONFIG.DND5E.tools.ringtoss = {
        ability: "int", // Ability used for tool checks
        id: "Compendium.world.equipment-tools.Item.6lsX476Oy8pL16Eo", // UUID of item for rich sublists
    };
    CONFIG.DND5E.toolIds.ringtoss =
        "Compendium.world.equipment-tools.Item.6lsX476Oy8pL16Eo"; // UUID of item for rich sublists

    CONFIG.DND5E.tools.sculpter = {
        ability: "int", // Ability used for tool checks
        id: "Compendium.world.equipment-tools.Item.WTPtlnhvKpArIPTB", // UUID of item for rich sublists
    };
    CONFIG.DND5E.toolIds.sculpter =
        "Compendium.world.equipment-tools.Item.WTPtlnhvKpArIPTB"; // UUID of item for rich sublists

    CONFIG.DND5E.tools.songhorn = {
        ability: "int", // Ability used for tool checks
        id: "Compendium.world.equipment-tools.Item.EbyA1cleMOXCAIlp", // UUID of item for rich sublists
    };
    CONFIG.DND5E.toolIds.songhorn =
        "Compendium.world.equipment-tools.Item.EbyA1cleMOXCAIlp"; // UUID of item for rich sublists

    CONFIG.DND5E.tools.surg = {
        ability: "int", // Ability used for tool checks
        id: "Compendium.world.equipment-tools.Item.tFqZN1WwHTO12L7k", // UUID of item for rich sublists
    };
    CONFIG.DND5E.toolIds.surg =
        "Compendium.world.equipment-tools.Item.tFqZN1WwHTO12L7k"; // UUID of item for rich sublists

    CONFIG.DND5E.tools.tantan = {
        ability: "int", // Ability used for tool checks
        id: "Compendium.world.equipment-tools.Item.ZNewSFtF2CHU6K4C", // UUID of item for rich sublists
    };
    CONFIG.DND5E.toolIds.tantan =
        "Compendium.world.equipment-tools.Item.ZNewSFtF2CHU6K4C"; // UUID of item for rich sublists

    CONFIG.DND5E.tools.tattooartist = {
        ability: "int", // Ability used for tool checks
        id: "Compendium.world.equipment-tools.Item.voV6fRbWrXO2F9A8", // UUID of item for rich sublists
    };
    CONFIG.DND5E.toolIds.tattooartist =
        "Compendium.world.equipment-tools.Item.voV6fRbWrXO2F9A8"; // UUID of item for rich sublists

    CONFIG.DND5E.tools.tarokka = {
        ability: "int", // Ability used for tool checks
        id: "Compendium.world.equipment-tools.Item.a8O6ghE5lygNkihT", // UUID of item for rich sublists
    };
    CONFIG.DND5E.toolIds.tarokka =
        "Compendium.world.equipment-tools.Item.a8O6ghE5lygNkihT"; // UUID of item for rich sublists

    CONFIG.DND5E.tools.thelarr = {
        ability: "int", // Ability used for tool checks
        id: "Compendium.world.equipment-tools.Item.4VtMgRjJ7mWYIx1S", // UUID of item for rich sublists
    };
    CONFIG.DND5E.toolIds.thelarr =
        "Compendium.world.equipment-tools.Item.4VtMgRjJ7mWYIx1S"; // UUID of item for rich sublists

    CONFIG.DND5E.tools.threedragon = {
        ability: "int", // Ability used for tool checks
        id: "Compendium.world.equipment-tools.Item.K4SqJx3os7Krmygl", // UUID of item for rich sublists
    };
    CONFIG.DND5E.toolIds.threedragon =
        "Compendium.world.equipment-tools.Item.K4SqJx3os7Krmygl"; // UUID of item for rich sublists

    CONFIG.DND5E.tools.tocken = {
        ability: "int", // Ability used for tool checks
        id: "Compendium.world.equipment-tools.Item.wUV4hce9A2Zke0E3", // UUID of item for rich sublists
    };
    CONFIG.DND5E.toolIds.tocken =
        "Compendium.world.equipment-tools.Item.wUV4hce9A2Zke0E3"; // UUID of item for rich sublists

    CONFIG.DND5E.tools.trictrac = {
        ability: "int", // Ability used for tool checks
        id: "Compendium.world.equipment-tools.Item.ZBDXsMMwck50f8MM", // UUID of item for rich sublists
    };
    CONFIG.DND5E.toolIds.trictrac =
        "Compendium.world.equipment-tools.Item.ZBDXsMMwck50f8MM"; // UUID of item for rich sublists

    CONFIG.DND5E.tools.wargong = {
        ability: "int", // Ability used for tool checks
        id: "Compendium.world.equipment-tools.Item.C2l7QyR7DpWwLECW", // UUID of item for rich sublists
    };
    CONFIG.DND5E.toolIds.wargong =
        "Compendium.world.equipment-tools.Item.C2l7QyR7DpWwLECW"; // UUID of item for rich sublists

    CONFIG.DND5E.tools.yarting = {
        ability: "int", // Ability used for tool checks
        id: "Compendium.world.equipment-tools.Item.sLwuYWRBKfMeRL49", // UUID of item for rich sublists
    };
    CONFIG.DND5E.toolIds.yarting =
        "Compendium.world.equipment-tools.Item.sLwuYWRBKfMeRL49"; // UUID of item for rich sublists

    CONFIG.DND5E.tools.zulkoon = {
        ability: "int", // Ability used for tool checks
        id: "Compendium.world.equipment-tools.Item.ljoiJUNecYOU2Jg8", // UUID of item for rich sublists
    };
    CONFIG.DND5E.toolIds.zulkoon =
        "Compendium.world.equipment-tools.Item.ljoiJUNecYOU2Jg8"; // UUID of item for rich sublists

    /// Override tool references
    CONFIG.DND5E.toolIds.alchemist =
        "Compendium.world.equipment-tools.Item.83wDMTlZ2QFGHqHK"; // UUID of item for rich sublists
    CONFIG.DND5E.tools.alchemist.id =
        "Compendium.world.equipment-tools.Item.83wDMTlZ2QFGHqHK"; // UUID of item for rich sublists

    CONFIG.DND5E.toolIds.bagpipes =
        "Compendium.world.equipment-tools.Item.h3b9HeQVKFynnwC5"; // UUID of item for rich sublists
    CONFIG.DND5E.tools.bagpipes.id =
        "Compendium.world.equipment-tools.Item.h3b9HeQVKFynnwC5"; // UUID of item for rich sublists

    CONFIG.DND5E.toolIds.brewer =
        "Compendium.world.equipment-tools.Item.tlsJ0DINCKWWo3uB"; // UUID of item for rich sublists
    CONFIG.DND5E.tools.brewer.id =
        "Compendium.world.equipment-tools.Item.tlsJ0DINCKWWo3uB"; // UUID of item for rich sublists

    CONFIG.DND5E.toolIds.calligrapher =
        "Compendium.world.equipment-tools.Item.lNAT3IDbFQGb6lyP"; // UUID of item for rich sublists
    CONFIG.DND5E.tools.calligrapher.id =
        "Compendium.world.equipment-tools.Item.lNAT3IDbFQGb6lyP"; // UUID of item for rich sublists

    CONFIG.DND5E.toolIds.card =
        "Compendium.world.equipment-tools.Item.kg8fuacsrI8q5saW"; // UUID of item for rich sublists
    CONFIG.DND5E.tools.card.id =
        "Compendium.world.equipment-tools.Item.kg8fuacsrI8q5saW"; // UUID of item for rich sublists

    CONFIG.DND5E.toolIds.carpenter =
        "Compendium.world.equipment-tools.Item.PVez6ryjmoRy3pR6"; // UUID of item for rich sublists
    CONFIG.DND5E.tools.carpenter.id =
        "Compendium.world.equipment-tools.Item.PVez6ryjmoRy3pR6"; // UUID of item for rich sublists

    CONFIG.DND5E.toolIds.cartographer =
        "Compendium.world.equipment-tools.Item.XMbICW1fH8Fvo0fm"; // UUID of item for rich sublists
    CONFIG.DND5E.tools.cartographer.id =
        "Compendium.world.equipment-tools.Item.XMbICW1fH8Fvo0fm"; // UUID of item for rich sublists

    CONFIG.DND5E.toolIds.chess =
        "Compendium.world.equipment-tools.Item.rhmCQX53uqle8Zj9"; // UUID of item for rich sublists
    CONFIG.DND5E.tools.chess.id =
        "Compendium.world.equipment-tools.Item.rhmCQX53uqle8Zj9"; // UUID of item for rich sublists

    CONFIG.DND5E.toolIds.cobbler =
        "Compendium.world.equipment-tools.Item.mt6xvPiFvPHlXvPc"; // UUID of item for rich sublists
    CONFIG.DND5E.tools.cobbler.id =
        "Compendium.world.equipment-tools.Item.mt6xvPiFvPHlXvPc"; // UUID of item for rich sublists

    CONFIG.DND5E.toolIds.cook =
        "Compendium.world.equipment-tools.Item.gPBt9xh80xeay7FF"; // UUID of item for rich sublists
    CONFIG.DND5E.tools.cook.id =
        "Compendium.world.equipment-tools.Item.gPBt9xh80xeay7FF"; // UUID of item for rich sublists

    CONFIG.DND5E.toolIds.dice =
        "Compendium.world.equipment-tools.Item.sqkh9Uw2v5tJtM1g"; // UUID of item for rich sublists
    CONFIG.DND5E.tools.dice.id =
        "Compendium.world.equipment-tools.Item.sqkh9Uw2v5tJtM1g"; // UUID of item for rich sublists

    CONFIG.DND5E.toolIds.disg =
        "Compendium.world.equipment-tools.Item.3wCYe8gHzvnHzdta"; // UUID of item for rich sublists
    CONFIG.DND5E.tools.disg.id =
        "Compendium.world.equipment-tools.Item.3wCYe8gHzvnHzdta"; // UUID of item for rich sublists

    CONFIG.DND5E.toolIds.drum =
        "Compendium.world.equipment-tools.Item.FPSsSO6Ko8I528GK"; // UUID of item for rich sublists
    CONFIG.DND5E.tools.drum.id =
        "Compendium.world.equipment-tools.Item.FPSsSO6Ko8I528GK"; // UUID of item for rich sublists

    CONFIG.DND5E.toolIds.dulcimer =
        "Compendium.world.equipment-tools.Item.C16e74Omdx8BHpl9"; // UUID of item for rich sublists
    CONFIG.DND5E.tools.dulcimer.id =
        "Compendium.world.equipment-tools.Item.C16e74Omdx8BHpl9"; // UUID of item for rich sublists

    CONFIG.DND5E.toolIds.flute =
        "Compendium.world.equipment-tools.Item.eaQJ97Eu5d9Nxq2V"; // UUID of item for rich sublists
    CONFIG.DND5E.tools.flute.id =
        "Compendium.world.equipment-tools.Item.eaQJ97Eu5d9Nxq2V"; // UUID of item for rich sublists

    CONFIG.DND5E.toolIds.forg =
        "Compendium.world.equipment-tools.Item.fYPuRDaoCsiFLYr2"; // UUID of item for rich sublists
    CONFIG.DND5E.tools.forg.id =
        "Compendium.world.equipment-tools.Item.fYPuRDaoCsiFLYr2"; // UUID of item for rich sublists

    CONFIG.DND5E.toolIds.glassblower =
        "Compendium.world.equipment-tools.Item.Y8Qd8lNCQWidzH85"; // UUID of item for rich sublists
    CONFIG.DND5E.tools.glassblower.id =
        "Compendium.world.equipment-tools.Item.Y8Qd8lNCQWidzH85"; // UUID of item for rich sublists

    CONFIG.DND5E.toolIds.herb =
        "Compendium.world.equipment-tools.Item.0uImA0a6hIqlvSRZ"; // UUID of item for rich sublists
    CONFIG.DND5E.tools.herb.id =
        "Compendium.world.equipment-tools.Item.0uImA0a6hIqlvSRZ"; // UUID of item for rich sublists

    CONFIG.DND5E.toolIds.horn =
        "Compendium.world.equipment-tools.Item.I0HDwyo5TwJ4QjYh"; // UUID of item for rich sublists
    CONFIG.DND5E.tools.horn.id =
        "Compendium.world.equipment-tools.Item.I0HDwyo5TwJ4QjYh"; // UUID of item for rich sublists

    CONFIG.DND5E.toolIds.jeweler =
        "Compendium.world.equipment-tools.Item.AmmUERLMacP4VCoX"; // UUID of item for rich sublists
    CONFIG.DND5E.tools.jeweler.id =
        "Compendium.world.equipment-tools.Item.AmmUERLMacP4VCoX"; // UUID of item for rich sublists

    CONFIG.DND5E.toolIds.leatherworker =
        "Compendium.world.equipment-tools.Item.MYvvbh4KvYURXZ2y"; // UUID of item for rich sublists
    CONFIG.DND5E.tools.leatherworker.id =
        "Compendium.world.equipment-tools.Item.MYvvbh4KvYURXZ2y"; // UUID of item for rich sublists

    CONFIG.DND5E.toolIds.lute =
        "Compendium.world.equipment-tools.Item.8GmI5BQzmoyyeaWH"; // UUID of item for rich sublists
    CONFIG.DND5E.tools.lute.id =
        "Compendium.world.equipment-tools.Item.8GmI5BQzmoyyeaWH"; // UUID of item for rich sublists

    CONFIG.DND5E.toolIds.lyre =
        "Compendium.world.equipment-tools.Item.InRaLGzqtEAii0rU"; // UUID of item for rich sublists
    CONFIG.DND5E.tools.lyre.id =
        "Compendium.world.equipment-tools.Item.InRaLGzqtEAii0rU"; // UUID of item for rich sublists

    CONFIG.DND5E.toolIds.mason =
        "Compendium.world.equipment-tools.Item.DaqfHwBji0ALHT3J"; // UUID of item for rich sublists
    CONFIG.DND5E.tools.mason.id =
        "Compendium.world.equipment-tools.Item.DaqfHwBji0ALHT3J"; // UUID of item for rich sublists

    CONFIG.DND5E.toolIds.navg =
        "Compendium.world.equipment-tools.Item.XWxy6oLq09TU9FFY"; // UUID of item for rich sublists
    CONFIG.DND5E.tools.navg.id =
        "Compendium.world.equipment-tools.Item.XWxy6oLq09TU9FFY"; // UUID of item for rich sublists

    CONFIG.DND5E.toolIds.painter =
        "Compendium.world.equipment-tools.Item.LEcS6aav9vkXRMhj"; // UUID of item for rich sublists
    CONFIG.DND5E.tools.painter.id =
        "Compendium.world.equipment-tools.Item.LEcS6aav9vkXRMhj"; // UUID of item for rich sublists

    CONFIG.DND5E.toolIds.panflute =
        "Compendium.world.equipment-tools.Item.gv3fZfpRVgItlmmY"; // UUID of item for rich sublists
    CONFIG.DND5E.tools.panflute.id =
        "Compendium.world.equipment-tools.Item.gv3fZfpRVgItlmmY"; // UUID of item for rich sublists

    CONFIG.DND5E.toolIds.pois =
        "Compendium.world.equipment-tools.Item.byJfvPGexI6wxWWl"; // UUID of item for rich sublists
    CONFIG.DND5E.tools.pois.id =
        "Compendium.world.equipment-tools.Item.byJfvPGexI6wxWWl"; // UUID of item for rich sublists

    CONFIG.DND5E.toolIds.potter =
        "Compendium.world.equipment-tools.Item.Qvldm2yV631DuLd1"; // UUID of item for rich sublists
    CONFIG.DND5E.tools.potter.id =
        "Compendium.world.equipment-tools.Item.Qvldm2yV631DuLd1"; // UUID of item for rich sublists

    CONFIG.DND5E.toolIds.shawm =
        "Compendium.world.equipment-tools.Item.c4oxpQBmaZr6Ivyw"; // UUID of item for rich sublists
    CONFIG.DND5E.tools.shawm.id =
        "Compendium.world.equipment-tools.Item.c4oxpQBmaZr6Ivyw"; // UUID of item for rich sublists

    CONFIG.DND5E.toolIds.smith =
        "Compendium.world.equipment-tools.Item.axNK8fBb9lYzKQpu"; // UUID of item for rich sublists
    CONFIG.DND5E.tools.smith.id =
        "Compendium.world.equipment-tools.Item.axNK8fBb9lYzKQpu"; // UUID of item for rich sublists

    CONFIG.DND5E.toolIds.tinker =
        "Compendium.world.equipment-tools.Item.LJn71QPuHLg6rXYj"; // UUID of item for rich sublists
    CONFIG.DND5E.tools.tinker.id =
        "Compendium.world.equipment-tools.Item.LJn71QPuHLg6rXYj"; // UUID of item for rich sublists

    CONFIG.DND5E.toolIds.thief =
        "Compendium.world.equipment-tools.Item.4tjwsnHhD4MZvSrz"; // UUID of item for rich sublists
    CONFIG.DND5E.tools.thief.id =
        "Compendium.world.equipment-tools.Item.4tjwsnHhD4MZvSrz"; // UUID of item for rich sublists

    CONFIG.DND5E.toolIds.viol =
        "Compendium.world.equipment-tools.Item.jymMtKZlB1m8d5mH"; // UUID of item for rich sublists
    CONFIG.DND5E.tools.viol.id =
        "Compendium.world.equipment-tools.Item.jymMtKZlB1m8d5mH"; // UUID of item for rich sublists

    CONFIG.DND5E.toolIds.weaver =
        "Compendium.world.equipment-tools.Item.6gHt5bed3dRmJnnz"; // UUID of item for rich sublists
    CONFIG.DND5E.tools.weaver.id =
        "Compendium.world.equipment-tools.Item.6gHt5bed3dRmJnnz"; // UUID of item for rich sublists

    CONFIG.DND5E.toolIds.woodcarver =
        "Compendium.world.equipment-tools.Item.eyTmmxEx96fgwWxn"; // UUID of item for rich sublists
    CONFIG.DND5E.tools.woodcarver.id =
        "Compendium.world.equipment-tools.Item.eyTmmxEx96fgwWxn"; // UUID of item for rich sublists

    /// Add dunamancy spell school
    CONFIG.DND5E.spellSchools.dun = {
        label: "Dunamancy",
        icon: "",
        fullKey: "dunamancy", // Full key used in enrichers
        reference: "", // UUID of journal entry page for rich tooltips
    };

    /*

    /// Override class features
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

    /// Adds new alignment options
    CONFIG.DND5E.alignments.sg = "Social Good";
    CONFIG.DND5E.alignments.rg = "Rebel Good";
    CONFIG.DND5E.alignments.lm = "Lawful Moral";
    CONFIG.DND5E.alignments.sm = "Social Moral";
    CONFIG.DND5E.alignments.nm = "Neutral Moral";
    CONFIG.DND5E.alignments.rm = "Rebel Moral";
    CONFIG.DND5E.alignments.cm = "Chaotic Moral";
    CONFIG.DND5E.alignments.sn = "Social Neutral";
    CONFIG.DND5E.alignments.rb = "Rebel Neutral";
    CONFIG.DND5E.alignments.li = "Lawful Impure";
    CONFIG.DND5E.alignments.si = "Social Impure";
    CONFIG.DND5E.alignments.ni = "Neutral Impure";
    CONFIG.DND5E.alignments.ri = "Rebel Impure";
    CONFIG.DND5E.alignments.ci = "Chaotic Impure";
    CONFIG.DND5E.alignments.se = "Social Evil";
    CONFIG.DND5E.alignments.re = "Rebel Evil";
    */

    /// Add new weapon properties
    CONFIG.DND5E.itemProperties.accurate = {
        label: "Accurate",
    };
    CONFIG.DND5E.validProperties.weapon.add("accurate");

    CONFIG.DND5E.itemProperties.aerodynamic = {
        label: "Aerodynamic",
    };
    CONFIG.DND5E.validProperties.weapon.add("aerodynamic");

    CONFIG.DND5E.itemProperties.alternateB = {
        label: "Alternate (B)",
    };
    CONFIG.DND5E.validProperties.weapon.add("alternateB");

    CONFIG.DND5E.itemProperties.alternateP = {
        label: "Alternate (P)",
    };
    CONFIG.DND5E.validProperties.weapon.add("alternateP");

    CONFIG.DND5E.itemProperties.alternateS = {
        label: "Alternate (S)",
    };
    CONFIG.DND5E.validProperties.weapon.add("alternateS");

    CONFIG.DND5E.itemProperties.ballistic = {
        label: "ballistic",
    };
    CONFIG.DND5E.validProperties.weapon.add("ballistic");

    CONFIG.DND5E.itemProperties.blast = {
        label: "Blast",
    };
    CONFIG.DND5E.validProperties.weapon.add("blast");

    CONFIG.DND5E.itemProperties.breach = {
        label: "Breach",
    };
    CONFIG.DND5E.validProperties.weapon.add("breach");

    CONFIG.DND5E.itemProperties.cruel = {
        label: "Cruel",
    };
    CONFIG.DND5E.validProperties.weapon.add("cruel");

    CONFIG.DND5E.itemProperties.deadly = {
        label: "Deadly",
    };
    CONFIG.DND5E.validProperties.weapon.add("deadly");

    CONFIG.DND5E.itemProperties.defensive = {
        label: "Defensive",
    };
    CONFIG.DND5E.validProperties.weapon.add("defensive");

    CONFIG.DND5E.itemProperties.disarming = {
        label: "Disarming",
    };
    CONFIG.DND5E.validProperties.weapon.add("disarming");

    CONFIG.DND5E.itemProperties.ersatz = {
        label: "Ersatz",
    };
    CONFIG.DND5E.validProperties.weapon.add("ersatz");

    CONFIG.DND5E.itemProperties.fine = {
        label: "fine",
    };
    CONFIG.DND5E.validProperties.weapon.add("fine");

    CONFIG.DND5E.itemProperties.gargantuan = {
        label: "Gargantuan",
    };
    CONFIG.DND5E.validProperties.weapon.add("gargantuan");

    CONFIG.DND5E.itemProperties.handgun = {
        label: "Handgun",
    };
    CONFIG.DND5E.validProperties.weapon.add("handgun");

    CONFIG.DND5E.itemProperties.highcritical = {
        label: "High Critical",
    };
    CONFIG.DND5E.validProperties.weapon.add("highcritical");

    CONFIG.DND5E.itemProperties.huge = {
        label: "Huge",
    };
    CONFIG.DND5E.validProperties.weapon.add("huge");

    CONFIG.DND5E.itemProperties.large = {
        label: "Large",
    };
    CONFIG.DND5E.validProperties.weapon.add("large");

    CONFIG.DND5E.itemProperties.magazine = {
        label: "Magazine",
    };
    CONFIG.DND5E.validProperties.weapon.add("magazine");

    CONFIG.DND5E.itemProperties.masterwork = {
        label: "Masterwork",
    };
    CONFIG.DND5E.validProperties.weapon.add("masterwork");

    CONFIG.DND5E.itemProperties.misfire = {
        label: "Misfire",
    };
    CONFIG.DND5E.validProperties.weapon.add("misfire");

    CONFIG.DND5E.itemProperties.natatorial = {
        label: "Natatorial",
    };
    CONFIG.DND5E.validProperties.weapon.add("natatorial");

    CONFIG.DND5E.itemProperties.tiny = {
        label: "Tiny",
    };
    CONFIG.DND5E.validProperties.weapon.add("tiny");

    CONFIG.DND5E.itemProperties.tripping = {
        label: "Tripping",
    };
    CONFIG.DND5E.validProperties.weapon.add("tripping");

    CONFIG.DND5E.itemProperties.unarmedB = {
        label: "Unarmed (B)",
    };
    CONFIG.DND5E.validProperties.weapon.add("unarmedB");

    CONFIG.DND5E.itemProperties.unarmedP = {
        label: "Unarmed (P)",
    };
    CONFIG.DND5E.validProperties.weapon.add("unarmedP");

    CONFIG.DND5E.itemProperties.unarmedS = {
        label: "Unarmed (S)",
    };
    CONFIG.DND5E.validProperties.weapon.add("unarmedS");

    CONFIG.DND5E.itemProperties.Wounding = {
        label: "Wounding",
    };
    CONFIG.DND5E.validProperties.weapon.add("Wounding");

    /// Add new material properties
    CONFIG.DND5E.itemProperties.abysium = {
        label: "Abysium",
        isPhysical: "true",
    };
    CONFIG.DND5E.validProperties.weapon.add("abysium");

    CONFIG.DND5E.itemProperties.bone = {
        label: "Bone",
        isPhysical: "true",
    };
    CONFIG.DND5E.validProperties.weapon.add("bone");

    CONFIG.DND5E.itemProperties.byeshk = {
        label: "Byeshk",
        isPhysical: "true",
    };
    CONFIG.DND5E.validProperties.weapon.add("byeshk");

    CONFIG.DND5E.itemProperties.bronze = {
        label: "Bronze",
        isPhysical: "true",
    };
    CONFIG.DND5E.validProperties.weapon.add("bronze");

    CONFIG.DND5E.itemProperties.coldiron = {
        label: "Cold Iron",
        isPhysical: "true",
    };
    CONFIG.DND5E.validProperties.weapon.add("coldiron");

    CONFIG.DND5E.itemProperties.darkwood = {
        label: "Darkwood",
        isPhysical: "true",
    };
    CONFIG.DND5E.validProperties.weapon.add("darkwood");

    CONFIG.DND5E.itemProperties.djezet = {
        label: "Djezit",
        isPhysical: "true",
    };
    CONFIG.DND5E.validProperties.weapon.add("djezet");

    CONFIG.DND5E.itemProperties.dragonhide = {
        label: "Dragonhide",
        isPhysical: "true",
    };
    CONFIG.DND5E.validProperties.weapon.add("dragonhide");

    CONFIG.DND5E.itemProperties.grisantianhide = {
        label: "Grisantian Hide",
        isPhysical: "true",
    };
    CONFIG.DND5E.validProperties.weapon.add("grisantianhide");

    CONFIG.DND5E.itemProperties.inubrix = {
        label: "Inubrix",
        isPhysical: "true",
    };
    CONFIG.DND5E.validProperties.weapon.add("inubrix");

    CONFIG.DND5E.itemProperties.keepstone = {
        label: "Keep Stone",
        isPhysical: "true",
    };
    CONFIG.DND5E.validProperties.weapon.add("keepstone");

    CONFIG.DND5E.itemProperties.mithral = {
        label: "Mithral",
        isPhysical: "true",
    };
    CONFIG.DND5E.validProperties.weapon.add("mithral");

    CONFIG.DND5E.itemProperties.noqual = {
        label: "Noqual",
        isPhysical: "true",
    };
    CONFIG.DND5E.validProperties.weapon.add("noqual");

    CONFIG.DND5E.itemProperties.orichalcum = {
        label: "Orichalcum",
        isPhysical: "true",
    };
    CONFIG.DND5E.validProperties.weapon.add("orichalcum");

    CONFIG.DND5E.itemProperties.peachwood = {
        label: "Peachwood",
        isPhysical: "true",
    };
    CONFIG.DND5E.validProperties.weapon.add("peachwood");

    CONFIG.DND5E.itemProperties.siccatite = {
        label: "Siccatite",
        isPhysical: "true",
    };
    CONFIG.DND5E.validProperties.weapon.add("siccatite");

    CONFIG.DND5E.itemProperties.sisterstone = {
        label: "Sisterstone",
        isPhysical: "true",
    };
    CONFIG.DND5E.validProperties.weapon.add("sisterstone");

    CONFIG.DND5E.itemProperties.sovereignsteel = {
        label: "Sovereign Steel",
        isPhysical: "true",
    };
    CONFIG.DND5E.validProperties.weapon.add("sovereignsteel");

    CONFIG.DND5E.itemProperties.warpglass = {
        label: "Warpglass",
        isPhysical: "true",
    };
    CONFIG.DND5E.validProperties.weapon.add("warpglass");

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

    // Modify experience thresholds & levels
    CONFIG.DND5E.maxLevel = 30;
    CONFIG.DND5E.CHARACTER_EXP_LEVELS = [
        0, 750, 2250, 4500, 7500, 12500, 18500, 25500, 33500, 44750, 57250,
        71000, 86000, 105500, 126500, 149000, 173000, 202750, 234250, 267500,
        302500, 344500, 388500, 434500, 482500, 538750, 597250, 658000, 721000,
        793500,
    ];
    CONFIG.DND5E.CR_EXP_LEVELS = [
        0, 10, 30, 70, 145, 295, 520, 820, 1320, 1920, 2620, 3420, 4545, 5795,
        7170, 8670, 10620, 12720, 14970, 17370, 20345, 23495, 26820, 30320,
        34520, 38920, 43520, 48320, 53945, 59795, 65870, 72170, 79420, 86920,
    ];
});
