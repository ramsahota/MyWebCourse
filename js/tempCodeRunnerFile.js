let hobbiesArray = ['travel' , 'read', 'volunteer'];

function printHobbiesSolution(passedArray) {
    console.log(`I like ${passedArray.length} things`);
    for (let index = 0; index < passedArray.length; index++) {
        let element = passedArray[index];
        console.log('I like ' + element);
    }
}

printHobbiesSolution(hobbiesArray);