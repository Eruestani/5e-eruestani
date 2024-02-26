Hooks.once("init", () => {
    /*
    /// Override ability references
    CONFIG.DND5E.abilities.str = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
    };
    CONFIG.DND5E.abilities.dex = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
    };
    CONFIG.DND5E.abilities.con = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
    };
    CONFIG.DND5E.abilities.int = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
    };
    CONFIG.DND5E.abilities.wis = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
    };
    CONFIG.DND5E.abilities.cha = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
    };
    CONFIG.DND5E.abilities.hon = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
    };
    CONFIG.DND5E.abilities.san = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
    };

    /// Override skill references
    CONFIG.DND5E.skills.acr = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.skills.ani = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.skills.arc = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.skills.ath = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.skills.dec = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.skills.his = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.skills.ins = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.skills.itm = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.skills.inv = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.skills.med = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.skills.nat = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.skills.prc = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.skills.prf = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.skills.per = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.skills.rel = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.skills.slt = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.skills.ste = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.skills.sur = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    };

    /// Override creature type references
    CONFIG.DND5E.creatureTypes.aberration = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.creatureTypes.beast = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.creatureTypes.celestial = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.creatureTypes.construct = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.creatureTypes.dragon = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.creatureTypes.elemental = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.creatureTypes.fey = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.creatureTypes.fiend = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.creatureTypes.giant = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.creatureTypes.humanoid = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.creatureTypes.monstrosity = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.creatureTypes.ooze = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.creatureTypes.plant = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    };
    CONFIG.DND5E.creatureTypes.undead = {
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    };

    /// Override weapon references
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

    /// Override ammo references
    CONFIG.DND5E.ammoIds.arrow = ""; // UUID of item for rich sublists
    CONFIG.DND5E.ammoIds.blowgunNeedle = ""; // UUID of item for rich sublists
    CONFIG.DND5E.ammoIds.crossbowBolt = ""; // UUID of item for rich sublists
    CONFIG.DND5E.ammoIds.slingBullet = ""; // UUID of item for rich sublists

    /// Override tool references
    CONFIG.DND5E.toolIds.alchemist = ""; // UUID of item for rich sublists
    CONFIG.DND5E.toolIds.bagpipes = ""; // UUID of item for rich sublists
    CONFIG.DND5E.toolIds.brewer = ""; // UUID of item for rich sublists
    CONFIG.DND5E.toolIds.calligrapher = ""; // UUID of item for rich sublists
    CONFIG.DND5E.toolIds.card = ""; // UUID of item for rich sublists
    CONFIG.DND5E.toolIds.carpenter = ""; // UUID of item for rich sublists
    CONFIG.DND5E.toolIds.cartographer = ""; // UUID of item for rich sublists
    CONFIG.DND5E.toolIds.chess = ""; // UUID of item for rich sublists
    CONFIG.DND5E.toolIds.cobbler = ""; // UUID of item for rich sublists
    CONFIG.DND5E.toolIds.cook = ""; // UUID of item for rich sublists
    CONFIG.DND5E.toolIds.dice = ""; // UUID of item for rich sublists
    CONFIG.DND5E.toolIds.disg = ""; // UUID of item for rich sublists
    CONFIG.DND5E.toolIds.drum = ""; // UUID of item for rich sublists
    CONFIG.DND5E.toolIds.dulcimer = ""; // UUID of item for rich sublists
    CONFIG.DND5E.toolIds.flute = ""; // UUID of item for rich sublists
    CONFIG.DND5E.toolIds.forg = ""; // UUID of item for rich sublists
    CONFIG.DND5E.toolIds.glassblower = ""; // UUID of item for rich sublists
    CONFIG.DND5E.toolIds.herb = ""; // UUID of item for rich sublists
    CONFIG.DND5E.toolIds.horn = ""; // UUID of item for rich sublists
    CONFIG.DND5E.toolIds.jeweler = ""; // UUID of item for rich sublists
    CONFIG.DND5E.toolIds.leatherworker = ""; // UUID of item for rich sublists
    CONFIG.DND5E.toolIds.lute = ""; // UUID of item for rich sublists
    CONFIG.DND5E.toolIds.lyre = ""; // UUID of item for rich sublists
    CONFIG.DND5E.toolIds.mason = ""; // UUID of item for rich sublists
    CONFIG.DND5E.toolIds.navg = ""; // UUID of item for rich sublists
    CONFIG.DND5E.toolIds.painter = ""; // UUID of item for rich sublists
    CONFIG.DND5E.toolIds.panflute = ""; // UUID of item for rich sublists
    CONFIG.DND5E.toolIds.pois = ""; // UUID of item for rich sublists
    CONFIG.DND5E.toolIds.potter = ""; // UUID of item for rich sublists
    CONFIG.DND5E.toolIds.shawm = ""; // UUID of item for rich sublists
    CONFIG.DND5E.toolIds.smith = ""; // UUID of item for rich sublists
    CONFIG.DND5E.toolIds.thief = ""; // UUID of item for rich sublists
    CONFIG.DND5E.toolIds.tinker = ""; // UUID of item for rich sublists
    CONFIG.DND5E.toolIds.viol = ""; // UUID of item for rich sublists
    CONFIG.DND5E.toolIds.weaver = ""; // UUID of item for rich sublists
    CONFIG.DND5E.toolIds.woodcarver = ""; // UUID of item for rich sublists

    /// Override armor references
    CONFIG.DND5E.armorIds.breastplate = ""; // UUID of item for rich sublists
    CONFIG.DND5E.armorIds.chainmail = ""; // UUID of item for rich sublists
    CONFIG.DND5E.armorIds.chainshirt = ""; // UUID of item for rich sublists
    CONFIG.DND5E.armorIds.halfplate = ""; // UUID of item for rich sublists
    CONFIG.DND5E.armorIds.hide = ""; // UUID of item for rich sublists
    CONFIG.DND5E.armorIds.leather = ""; // UUID of item for rich sublists
    CONFIG.DND5E.armorIds.padded = ""; // UUID of item for rich sublists
    CONFIG.DND5E.armorIds.plate = ""; // UUID of item for rich sublists
    CONFIG.DND5E.armorIds.ringmail = ""; // UUID of item for rich sublists
    CONFIG.DND5E.armorIds.scalemail = ""; // UUID of item for rich sublists
    CONFIG.DND5E.armorIds.splint = ""; // UUID of item for rich sublists
    CONFIG.DND5E.armorIds.studded = ""; // UUID of item for rich sublists
    
    /// Override shield references
    CONFIG.DND5E.shieldIds.shield = ""; // UUID of item for rich sublists

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
    }
    */

    /// Add new skills
    CONFIG.DND5E.skills.eng = {
        label: "Engineering",
        ability: "int",
        fullKey: "engineering", // Full key used in enrichers
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    };
    
    CONFIG.DND5E.skills.clt = {
        label: "Culture",
        ability: "int",
        fullKey: "culture", // Full key used in enrichers
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
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

    /// Add expert weapon proficiency
    CONFIG.DND5E.weaponProficiencies.exp = "Expert";
    CONFIG.DND5E.weaponProficienciesMap.expertM = "exp";
    CONFIG.DND5E.weaponProficienciesMap.expertR = "exp";
    CONFIG.DND5E.weaponTypes.expertM = "Expert Martial";
    CONFIG.DND5E.weaponTypes.expertR = "Expert Ranged";

    /// Add heavy shields
    CONFIG.DND5E.armorTypes.shieldH = "Heavy Shield";
    CONFIG.DND5E.armorProficiencies.shlH = "Heavy Shields";
    CONFIG.DND5E.armorProficienciesMap.shieldH = "shlH";

    /// Add new weapon properties
    CONFIG.DND5E.itemProperties.accurate = {
        label: "Accurate"
    };
    CONFIG.DND5E.validProperties.weapon.add("accurate");

    CONFIG.DND5E.itemProperties.aerodynamic = {
        label: "Aerodynamic"
    };
    CONFIG.DND5E.validProperties.weapon.add("aerodynamic");

    CONFIG.DND5E.itemProperties.alternateB = {
        label: "Alternate (B)",
        isPhysical: "true"
    };
    CONFIG.DND5E.validProperties.weapon.add("alternateB");

    CONFIG.DND5E.itemProperties.alternateP = {
        label: "Alternate (P)"
    };
    CONFIG.DND5E.validProperties.weapon.add("alternateP");

    CONFIG.DND5E.itemProperties.alternateS = {
        label: "Alternate (S)"
    };
    CONFIG.DND5E.validProperties.weapon.add("alternateS");

    CONFIG.DND5E.itemProperties.ballistic = {
        label: "ballistic"
    };
    CONFIG.DND5E.validProperties.weapon.add("ballistic");

    CONFIG.DND5E.itemProperties.blast = {
        label: "Blast"
    };
    CONFIG.DND5E.validProperties.weapon.add("blast");

    CONFIG.DND5E.itemProperties.breach = {
        label: "Breach",
        isPhysical: "true"
    };
    CONFIG.DND5E.validProperties.weapon.add("breach");

    CONFIG.DND5E.itemProperties.cruel = {
        label: "Cruel"
    };
    CONFIG.DND5E.validProperties.weapon.add("cruel");

    CONFIG.DND5E.itemProperties.deadly = {
        label: "Deadly"
    };
    CONFIG.DND5E.validProperties.weapon.add("deadly");

    CONFIG.DND5E.itemProperties.defensive = {
        label: "Defensive"
    };
    CONFIG.DND5E.validProperties.weapon.add("defensive");

    CONFIG.DND5E.itemProperties.disarming = {
        label: "Disarming"
    };
    CONFIG.DND5E.validProperties.weapon.add("disarming");

    CONFIG.DND5E.itemProperties.ersatz = {
        label: "Ersatz"
    };
    CONFIG.DND5E.validProperties.weapon.add("ersatz");

    CONFIG.DND5E.itemProperties.fine = {
        label: "fine"
    };
    CONFIG.DND5E.validProperties.weapon.add("fine");

    CONFIG.DND5E.itemProperties.gargantuan = {
        label: "Gargantuan"
    };
    CONFIG.DND5E.validProperties.weapon.add("gargantuan");

    CONFIG.DND5E.itemProperties.handgun = {
        label: "Handgun"
    };
    CONFIG.DND5E.validProperties.weapon.add("handgun");

    CONFIG.DND5E.itemProperties.highcritical = {
        label: "High Critical"
    };
    CONFIG.DND5E.validProperties.weapon.add("highcritical");

    CONFIG.DND5E.itemProperties.huge = {
        label: "Huge"
    };
    CONFIG.DND5E.validProperties.weapon.add("huge");

    CONFIG.DND5E.itemProperties.large = {
        label: "Large"
    };
    CONFIG.DND5E.validProperties.weapon.add("large");

    CONFIG.DND5E.itemProperties.magazine = {
        label: "Magazine"
    };
    CONFIG.DND5E.validProperties.weapon.add("magazine");

    CONFIG.DND5E.itemProperties.masterwork = {
        label: "Masterwork"
    };
    CONFIG.DND5E.validProperties.weapon.add("masterwork");

    CONFIG.DND5E.itemProperties.misfire = {
        label: "Misfire"
    };
    CONFIG.DND5E.validProperties.weapon.add("misfire");

    CONFIG.DND5E.itemProperties.natatorial = {
        label: "Natatorial"
    };
    CONFIG.DND5E.validProperties.weapon.add("natatorial");

    CONFIG.DND5E.itemProperties.tiny = {
        label: "Tiny"
    };
    CONFIG.DND5E.validProperties.weapon.add("tiny");

    CONFIG.DND5E.itemProperties.tripping = {
        label: "Tripping"
    };
    CONFIG.DND5E.validProperties.weapon.add("tripping");

    CONFIG.DND5E.itemProperties.unarmedB = {
        label: "Unarmed (B)"
    };
    CONFIG.DND5E.validProperties.weapon.add("unarmedB");

    CONFIG.DND5E.itemProperties.unarmedP = {
        label: "Unarmed (P)"
    };
    CONFIG.DND5E.validProperties.weapon.add("unarmedP");

    CONFIG.DND5E.itemProperties.unarmedS = {
        label: "Unarmed (S)"
    };
    CONFIG.DND5E.validProperties.weapon.add("unarmedS");

    CONFIG.DND5E.itemProperties.Wounding = {
        label: "Wounding"
    };
    CONFIG.DND5E.validProperties.weapon.add("Wounding");

    /// Add new material properties
    CONFIG.DND5E.itemProperties.abysium = {
        label: "Abysium",
        isPhysical: "true"
    };
    CONFIG.DND5E.validProperties.weapon.add("abysium");
    
    CONFIG.DND5E.itemProperties.bone = {
        label: "Bone",
        isPhysical: "true"
    };
    CONFIG.DND5E.validProperties.weapon.add("bone");
    
    CONFIG.DND5E.itemProperties.byeshk = {
        label: "Byeshk",
        isPhysical: "true"
    };
    CONFIG.DND5E.validProperties.weapon.add("byeshk");
    
    CONFIG.DND5E.itemProperties.bronze = {
        label: "Bronze",
        isPhysical: "true"
    };
    CONFIG.DND5E.validProperties.weapon.add("bronze");
    
    CONFIG.DND5E.itemProperties.coldiron = {
        label: "Cold Iron",
        isPhysical: "true"
    };
    CONFIG.DND5E.validProperties.weapon.add("coldiron");
    
    CONFIG.DND5E.itemProperties.darkwood = {
        label: "Darkwood",
        isPhysical: "true"
    };
    CONFIG.DND5E.validProperties.weapon.add("darkwood");
    
    CONFIG.DND5E.itemProperties.djezet = {
        label: "Djezit",
        isPhysical: "true"
    };
    CONFIG.DND5E.validProperties.weapon.add("djezet");
    
    CONFIG.DND5E.itemProperties.dragonhide = {
        label: "Dragonhide",
        isPhysical: "true"
    };
    CONFIG.DND5E.validProperties.weapon.add("dragonhide");
    
    CONFIG.DND5E.itemProperties.grisantianhide = {
        label: "Grisantian Hide",
        isPhysical: "true"
    };
    CONFIG.DND5E.validProperties.weapon.add("grisantianhide");
    
    CONFIG.DND5E.itemProperties.inubrix = {
        label: "Inubrix",
        isPhysical: "true"
    };
    CONFIG.DND5E.validProperties.weapon.add("inubrix");
    
    CONFIG.DND5E.itemProperties.keepstone = {
        label: "Keep Stone",
        isPhysical: "true"
    };
    CONFIG.DND5E.validProperties.weapon.add("keepstone");
    
    CONFIG.DND5E.itemProperties.mithral = {
        label: "Mithral",
        isPhysical: "true"
    };
    CONFIG.DND5E.validProperties.weapon.add("mithral");
    
    CONFIG.DND5E.itemProperties.noqual = {
        label: "Noqual",
        isPhysical: "true"
    };
    CONFIG.DND5E.validProperties.weapon.add("noqual");
    
    CONFIG.DND5E.itemProperties.orichalcum = {
        label: "Orichalcum",
        isPhysical: "true"
    };
    CONFIG.DND5E.validProperties.weapon.add("orichalcum");
    
    CONFIG.DND5E.itemProperties.peachwood = {
        label: "Peachwood",
        isPhysical: "true"
    };
    CONFIG.DND5E.validProperties.weapon.add("peachwood");
    
    CONFIG.DND5E.itemProperties.siccatite = {
        label: "Siccatite",
        isPhysical: "true"
    };
    CONFIG.DND5E.validProperties.weapon.add("siccatite");
    
    CONFIG.DND5E.itemProperties.sisterstone = {
        label: "Sisterstone",
        isPhysical: "true"
    };
    
    CONFIG.DND5E.validProperties.weapon.add("sisterstone");
    CONFIG.DND5E.itemProperties.sovereignsteel = {
        label: "Sovereign Steel",
        isPhysical: "true"
    };
    
    CONFIG.DND5E.validProperties.weapon.add("sovereignsteel");
    
    CONFIG.DND5E.itemProperties.warpglass = {
        label: "Warpglass",
        isPhysical: "true"
    };
    CONFIG.DND5E.validProperties.weapon.add("warpglass")
});
