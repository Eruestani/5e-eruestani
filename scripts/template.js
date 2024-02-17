/// Add a new Ability
Hooks.once("init", () => {
    CONFIG.DND5E.abilities.grt = {
        label: "Grit",
        abbreviation: "grt",
        fullKey: "grit", // Full key used in enrichers
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        type: "mental", // mental or physical
        defaults: {vehicle: 0}, // Optional
        improvement: false // Explicitly set this to 'false' to prevent it showing up for ASIs.
    };
});

/// Add a new Skill
Hooks.once("init", () => {
    CONFIG.DND5E.skills.bfp = {
        label: "Backflip",
        ability: "dex",
        fullKey: "backflip", // Full key used in enrichers
        reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
        icon: "…" // Icon used in favorites on new character sheet
    };
});

/// Adds a new "plasma" damage type that will be selectable as a new type of damage for weapons and a new type of resistance for actors.
Hooks.once("init", () => {
    CONFIG.DND5E.damageTypes.plasma = {
        label: "Plasma",
        isPhysical: true
    };
});

/// Adds a new "Laser" Weapon Property and Physical Property for resistance bypass
Hooks.once("init", () => {
    CONFIG.DND5E.itemProperties.laser = {
        label: "Laser",
        isPhysical: "true"
    };
    CONFIG.DND5E.validProperties.weapon.add("laser");
});

/// Removes the Firearm Weapon Property
Hooks.once("init", () => {
    CONFIG.DND5E.validProperties.weapon.delete("fir");
});

/// Add a new Spell School that can be selected in Spell Items
Hooks.once("init", () => {
    CONFIG.DND5E.spellSchools.psi = {
        label: "Psionics",
        icon: "…",
        fullKey: "psionics", // Full key used in enrichers
        reference: "" // UUID of journal entry page for rich tooltips
    };
});

/// Adds a new "Blood Curse" class feature type
Hooks.once("init", () => {
    CONFIG.DND5E.featureTypes.class.subtypes.bloodCurse = "Blood Curse";
});

/// Adds in a new feature type, similar to "Class Feature" called "Martial Exploit", with 3 different subtypes for it.
Hooks.once("init", () => {
    CONFIG.DND5E.featureTypes.marexploit = {
        label: "Martial Exploit",
        subtypes: {
            first: "1st-Degree",
            second: "2nd-Degree",
            third: "3rd-Degree"
        }
    };
});

/// Add a new AC Calculation
Hooks.once("init", () => {
    CONFIG.DND5E.armorClasses.fortitude = {
        label: "Fortitude",
        formula: "13 + @abilities.con.mod"
    };
});

/// Increases the Maximum Level for a Player Actor to 30
Hooks.once("init", () => {
    CONFIG.DND5E.maxLevel = 30;
});

/// Add a new set of languages
Hooks.once("init", () => {
    CONFIG.DND5E.languages.coolspeech = "Cool Speech";
    CONFIG.DND5E.languages.standard.children.supercommon = "Super Common";
    CONFIG.DND5E.languages.exotic.children.uncommon = "Uncommon";
});

/// Add a language with children to the Standard or Exotic language families
Hooks.once("setup", () => {
    CONFIG.DND5E.languages.standard.children.gibberish = {
        label: "Gibberish",
        children: {
            gibberish: "Gibberish",
            highgibberish: "High Gibberish"
        }
    },
    CONFIG.DND5E.languages.exotic.children.nonsense = {
        label: "Nonsense",
        children: {
            oldnonsense: "Old Nonsense",
            newnonsense: "New Nonsense"
        }
    }
});

/// Delete a language
Hooks.once("init", () => {
    delete CONFIG.DND5E.languages.druidic;
    delete CONFIG.DND5E.languages.standard.children.dwarvish;
    delete CONFIG.DND5E.languages.exotic.children.aarakocra;
    delete CONFIG.DND5E.languages.exotic.children.primordial.children.aquan;
});

/// Adds in options to display in the Activation Cost dropdown
Hooks.once("init", () => {
    CONFIG.DND5E.abilityActivationTypes.crithit = "Critical Hit";
    CONFIG.DND5E.abilityActivationTypes.attack = "On Attack";
    CONFIG.DND5E.abilityActivationTypes.replaceattack = "Replaces Attack";
    CONFIG.DND5E.abilityActivationTypes.meleehit = "On Melee Hit";
    CONFIG.DND5E.abilityActivationTypes.rangedhit = "On Ranged Hit";
    CONFIG.DND5E.abilityActivationTypes.weaponhit = "On Weapon Hit";
});

/// Adds new Weapon types of Hand Cannon and Magnum
Hooks.once("init", () => {
    CONFIG.DND5E.weaponIds.handCannon = "module-scope.compendium-id.item-id";
    CONFIG.DND5E.weaponIds.magnum = "module-scope.compendium-id.item-id";
    // etc etc
});

/// Adds new Tool Proficiency for Hacking Tools
Hooks.once("init", () => {
    CONFIG.DND5E.toolIds.hacking = "module-scope.compendium-id.item-id";
});

// Modify encumbrance thresholds
Hooks.once("init", () => {
    CONFIG.DND5E.encumbrance.threshold.encumbered = {
        imperial: 8,
        metric: 4
    };
    CONFIG.DND5E.encumbrance.threshold.heavilyEncumbered = {
        imperial: 14,
        metric: 9
    };
    CONFIG.DND5E.encumbrance.threshold.maximum = {
        imperial: 20,
        metric: 10
    };
});
