// Store the user's age in years.
let myAge = 26;

// Calculate the equivalent age in dog years for the first two years.
let earlyYears = 2;
earlyYears *= 10.5;  // Multiply by 10.5 to convert the first two years to dog years.

// Calculate the equivalent age in dog years for the remaining years.
let laterYears = myAge - 2;  // Subtract the first two years from the user's age.
laterYears *= 4;  // Multiply the remaining years by 4 to convert them to dog years.

// Log the calculated early and later years in dog years for debugging purposes.
console.log(earlyYears);
console.log(laterYears);

// Calculate the total age in dog years by adding the early and later years.
let myAgeInDogYears = earlyYears + laterYears;

// Convert the user's name to lowercase for consistent formatting.
let myName = 'Tia'.toLowerCase();

// Log a final message with the user's name, age in human years, and age in dog years.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
