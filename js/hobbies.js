const hobbiesArray = [
    {name: 'Travel', lengthInYearsAtHobby: 2},
    {name: 'Read', lengthInYearsAtHobby: 4},
    {name: 'Volunteer', lengthInYearsAtHobby: 6}
];

function printHobby(hobby) {
    console.log(`${hobby.name} enjoyed for ${hobby.lengthInYearsAtHobby}`);
}

for (let index = 0; index < hobbiesArray.length; index++) {
    printHobby(hobbiesArray[index]);
}

for (let hobby of hobbiesArray) {
    printHobby(hobby);
}