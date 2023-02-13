
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


const calculateSkillProf = function (statScore, proficiency, profBool = 0, perception = 0) {
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

//these functions are for calculating stats

const calculateMods = function (strength, dexterity, constitution, intelligence, wisdom, charisma) {
    const strmod = calculateStatMod(strength);
    const dexmod = calculateStatMod(dexterity);
    const conmod = calculateStatMod(constitution);
    const intmod = calculateStatMod(intelligence);
    const wismod = calculateStatMod(wisdom);
    const chamod = calculateStatMod(charisma);
    return [strmod, dexmod, conmod, intmod, wismod, chamod];
}

const calculateSavingThrows = function (strmod, dexmod, conmod, intmod, wismod, chamod, prof, strSavThrowProf, dexSavThrowProf, conSavThrowProf, intSavThrowProf, wisSavThrowProf, chaSavThrowProf) {
    const strSavThrow = calculateSkillProf(strmod,prof,strSavThrowProf);
    const dexSavThrow = calculateSkillProf(dexmod,prof,dexSavThrowProf);
    const conSavThrow = calculateSkillProf(conmod,prof,conSavThrowProf);
    const intSavThrow = calculateSkillProf(intmod,prof,intSavThrowProf);
    const wisSavThrow = calculateSkillProf(wismod,prof,wisSavThrowProf);
    const chaSavThrow = calculateSkillProf(chamod,prof,chaSavThrowProf);
    return [strSavThrow, dexSavThrow, conSavThrow, intSavThrow, wisSavThrow, chaSavThrow];
}

const calculateSkillsProfs = function (strmod, dexmod, intmod, wismod, chamod, prof, acrobaticsProf, animalHandlingProf, arcanaProf, athleticsProf, deceptionProf, historyProf, insightProf, intimidationProf, investigationProf, medicineProf, natureProf, perceptionProf, performanceProf,persuasionProf, religionProf, sleightOfHandProf, stealthProf, survivalProf) {
    const acrobatics = calculateSkillProf(dexmod,prof,acrobaticsProf);
    const animalHandling = calculateSkillProf(wismod,prof,animalHandlingProf);
    const arcana = calculateSkillProf(intmod,prof,arcanaProf);
    const athletics = calculateSkillProf(strmod,prof,athleticsProf);
    const deception = calculateSkillProf(chamod,prof,deceptionProf);
    const history = calculateSkillProf(intmod,prof,historyProf);
    const insight = calculateSkillProf(wismod,prof,insightProf);
    const intimidation = calculateSkillProf(chamod,prof,intimidationProf);
    const investigation = calculateSkillProf(intmod,prof,investigationProf);
    const medicine = calculateSkillProf(wismod,prof,medicineProf);
    const nature = calculateSkillProf(intmod,prof,natureProf);
    const perception = calculateSkillProf(widmod,prof,perceptionProf);
    const performance = calculateSkillProf(chamod,prof,performanceProf);
    const persuasion = calculateSkillProf(chamod,prof,persuasionProf);
    const religion = calculateSkillProf(intmod,prof,religionProf);
    const sleightOfHand = calculateSkillProf(dexmod,prof,sleightOfHandProf);
    const stealth = calculateSkillProf(dexmod,prof,stealthProf);
    const survival = calculateSkillProf(wismod,prof,survivalProf);

    const passivePerception = calculateSkillProf(wismod,prof,perceptionProf,10);
}

// This function updates the calculated stats on the webpage

const updateStats = function () {

}

// --- Testing ---

// const strength = 14;
// const dexterity = 6;
// const constitution = 10;
// const wisdom = 15;
// const intelligence = 3;
// const charisma = 9;
// const level = 10;

// const strmod = calculateStatMod(strength);
// const dexmod = calculateStatMod(dexterity);
// const conmod = calculateStatMod(constitution);
// const intmod = calculateStatMod(intelligence);
// const wismod = calculateStatMod(wisdom);
// const chamod = calculateStatMod(charisma);

// const prof = proficiency(level);

// // console.log(calculateStatMod(strength));
// // console.log(calculateStatMod(dexterity));
// // console.log(calculateStatMod(constitution));
// // console.log(calculateStatMod(wisdom));
// // console.log(calculateStatMod(intelligence));
// // console.log(calculateStatMod(charisma));

// // console.log(proficiency(1));
// // console.log(proficiency(2));
// // console.log(proficiency(3));
// // console.log(proficiency(4));
// // console.log(proficiency(5));
// // console.log(proficiency(6));
// // console.log(proficiency(7));
// // console.log(proficiency(8));
// // console.log(proficiency(9));
// // console.log(proficiency(10));
// // console.log(proficiency(11));
// // console.log(proficiency(12));
// // console.log(proficiency(13));
// // console.log(proficiency(14));
// // console.log(proficiency(15));
// // console.log(proficiency(16));
// // console.log(proficiency(17));
// // console.log(proficiency(18));
// // console.log(proficiency(19));
// // console.log(proficiency(20));

// console.log(calculateSkillProf(strmod,prof));
// console.log(calculateSkillProf(dexmod,prof,1));
// console.log(calculateSkillProf(wismod,prof,0,10));
// console.log(calculateSkillProf(wismod,prof,1,10));