function displayName(name) {
    console.log('Hello, ' + name);
}

displayName('Ram Sahota');

function convertClesiusToFahrenheit(tempInCelsius) {
    return ((tempInCelsius + 40) * 1.8) - 40;
}

const tempInFahrenheit = convertClesiusToFahrenheit(60);

console.log(tempInFahrenheit);

function convertFahrenheitToCelsius(tempInFahrenheit) {
    return ((tempInFahrenheit + 40) / 1.8) - 40;
}

const tempInCelsius = convertFahrenheitToCelsius(212);

console.log(tempInCelsius);