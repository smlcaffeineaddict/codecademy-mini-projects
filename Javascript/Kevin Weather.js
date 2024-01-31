// Store the given temperature in Kelvin as a variable.
let kelvin = 293;

// Convert Kelvin to Celsius by subtracting 273.
let celsius = kelvin - 273;

// Calculate Fahrenheit temperature using the formula and round down to the nearest integer.
let fahrenheit = Math.floor(celsius * (9 / 5) + 32);

// Log the calculated Fahrenheit temperature to the console.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Calculate Newton temperature using the formula and round down to the nearest integer.
let newton = Math.floor(celsius * (33 / 100));

// Log the calculated Newton temperature to the console.
console.log(`The temperature is ${newton} degrees Newton.`);
