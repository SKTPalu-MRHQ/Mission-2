
// This function calculates the Stat Modifier for the 6 basic stats
const calculateStatMod = function (statScore) {
    return Math.floor((statScore-10)/2);
}


// This function returns the proficiency bonus
const proficiency = function (level) {
    if (level < 5) {
        return 2;
    } else if (level < 9) {
        return 3;
    } else if (level < 13) {
        return 4;
    } else if (level < 17) {
        return 5;
    } else {
        return 6;
    }
}


// This function calculates skill proficiency score
// switch cases:
// 0 = not proficient, not passive perception
// 1 = proficient, not passive perception
// 10 = not proficient, passive perception
// default (> 10) = proficient, passive perception
// profBool is either 1 or 0


const calculateSkillProf = function (statScore, proficiency, perception, profBool) {
    switch (perception + profBool) {
        case 0:
            return statScore;
        case 1:
            return statScore + proficiency;
        case 10:
            return statScore + perception;
        default:
            return statScore + proficiency + perception;
    }
}

// --- Testing ---

const strength = 14;
const dexterity = 6;
const constitution = 10;
const wisdom = 15;
const intelligence = 3;
const charisma = 9;
const level = 10;

const prof = proficiency(level);

// console.log(calculateStatMod(strength));
// console.log(calculateStatMod(dexterity));
// console.log(calculateStatMod(constitution));
// console.log(calculateStatMod(wisdom));
// console.log(calculateStatMod(intelligence));
// console.log(calculateStatMod(charisma));

// console.log(proficiency(1));
// console.log(proficiency(2));
// console.log(proficiency(3));
// console.log(proficiency(4));
// console.log(proficiency(5));
// console.log(proficiency(6));
// console.log(proficiency(7));
// console.log(proficiency(8));
// console.log(proficiency(9));
// console.log(proficiency(10));
// console.log(proficiency(11));
// console.log(proficiency(12));
// console.log(proficiency(13));
// console.log(proficiency(14));
// console.log(proficiency(15));
// console.log(proficiency(16));
// console.log(proficiency(17));
// console.log(proficiency(18));
// console.log(proficiency(19));
// console.log(proficiency(20));
