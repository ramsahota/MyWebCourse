let hobbiesArray = ['travel', 'read', 'volunteer'];
let hobbies;
function printHobbies(passedArray) {
        hobbies = passedArray.map(function(hobby) {
        return "I like " + hobby;
    });
}
console.log('I like 3 things: ');
printHobbies(hobbiesArray);
console.log(hobbies);

let hobbiesArray = ['travel' , 'read', 'volunteer'];

function printHobbiesSolution(passedArray) {
    console.log(`I like ${passedArray.length} things:`);
    for (let index = 0; index < passedArray.length; index++) {
        let element = passedArray[index];
        console.log('I like ' + element);
    }
}

printHobbiesSolution(hobbiesArray);