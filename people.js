const getName = require("./names");
const getHobbies = require("./hobbies");


/* console.log(getName("Francesco", "Marra"));
console.log(getHobbies("Calcio", "Carte", "Videogiochi")); */


function createPerson() {
    const names = getName("Francesco", "Marra");
    const hobby = getHobbies("Calcio", "Carte", "Videogiochi")

    return {
        firstName: names.firstName,
        lastName: names.lastName,
        hobbies: hobby.hobbies
    }
}
console.log(createPerson());

