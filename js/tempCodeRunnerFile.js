function convertFahrenheitToCelsius(tempInFahrenheit) {
    return ((tempInFahrenheit + 40) / 1.8) - 40;
}

const tempInCelsius = convertFahrenheitToCelsius(212);

console.log(tempInCelsius);